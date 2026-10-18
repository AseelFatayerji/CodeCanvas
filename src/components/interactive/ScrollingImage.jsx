"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const smootherstep = (t) => t * t * t * (t * (t * 6 - 15) + 10);

const FADE_STEPS = Array.from({ length: 9 }, (_, i) => i / 8);

const FADE_MASK = `linear-gradient(to right, ${[
  ...FADE_STEPS.map(
    (t) =>
      `rgba(0, 0, 0, ${smootherstep(t).toFixed(3)}) ${(t * 12).toFixed(1)}%`,
  ),
  ...FADE_STEPS.map(
    (t) =>
      `rgba(0, 0, 0, ${smootherstep(1 - t).toFixed(3)}) ${(88 + t * 12).toFixed(1)}%`,
  ),
].join(", ")})`;

function wrap(min, max, v) {
  const range = max - min;
  const mod = (((v - min) % range) + range) % range;
  return mod + min;
}

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof ResizeObserver === "undefined") {
      const updateWidth = () => setWidth(element.offsetWidth);
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }

    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return width;
}

function RowItem({ item, size }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center"
      style={{ height: size, minWidth: size }}
    >
      {item.img ? (
        <img
          src={item.img}
          alt={item.alt ?? ""}
          draggable={false}
          className="pointer-events-none h-full w-auto select-none object-contain"
        />
      ) : (
        <FontAwesomeIcon
          icon={item.icon}
          style={{ color: item.color, fontSize: size }}
        />
      )}
    </span>
  );
}

function VelocityRow({
  items,
  baseVelocity,
  scrollContainerRef,
  className = "",
  damping,
  stiffness,
  numCopies,
  velocityMapping,
  parallaxClassName,
  scrollerClassName,
  parallaxStyle,
  scrollerStyle,
  pauseOnHover,
  hoveredRef,
  skewWithVelocity,
  scaleWithVelocity,
  gap,
  itemSize,
  draggable,
}) {
  const baseX = useMotionValue(0);
  const skewX = useMotionValue(0);
  const scaleY = useMotionValue(1);
  const scrollOptions = scrollContainerRef
    ? { container: scrollContainerRef }
    : {};
  const { scrollY } = useScroll(scrollOptions);
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(
    smoothVelocity,
    velocityMapping?.input || [0, 1000],
    velocityMapping?.output || [0, 5],
    { clamp: false },
  );
  const reduceMotion = useReducedMotion();

  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(1);
  const pace = useRef(1);
  const fling = useRef(0);
  const drag = useRef({
    active: false,
    pointerId: -1,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    travel: 0,
  });

  useAnimationFrame((t, delta) => {
    if (reduceMotion) return;

    const grab = drag.current;
    const seconds = Math.min(delta, 64) / 1000;
    const targetPace =
      grab.active || (pauseOnHover && hoveredRef.current) ? 0 : 1;
    pace.current += (targetPace - pace.current) * (1 - Math.exp(-delta / 150));

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    let travel = moveBy * pace.current;

    if (!grab.active && fling.current !== 0) {
      travel += fling.current * seconds;
      fling.current *= Math.exp(-delta / 420);
      if (Math.abs(fling.current) < 4) fling.current = 0;
    }

    baseX.set(baseX.get() + travel);

    if (
      !skewWithVelocity &&
      !scaleWithVelocity &&
      skewX.get() === 0 &&
      scaleY.get() === 1
    )
      return;

    const thrown = grab.active ? grab.velocity : fling.current;
    const scrollSurge =
      Math.tanh(Math.abs(smoothVelocity.get()) / 1600) * pace.current;
    const throwSurge = Math.tanh(Math.abs(thrown) / 2000);
    const surge = Math.max(scrollSurge, throwSurge);
    const heading =
      throwSurge > scrollSurge
        ? Math.sign(thrown)
        : Math.sign(travel) ||
          directionFactor.current * Math.sign(baseVelocity);
    const ease = 1 - Math.exp(-delta / 110);
    const nextSkew =
      skewX.get() + (-heading * skewWithVelocity * surge - skewX.get()) * ease;
    const nextScale =
      scaleY.get() + (1 + scaleWithVelocity * surge - scaleY.get()) * ease;
    skewX.set(Math.abs(nextSkew) < 0.01 && !skewWithVelocity ? 0 : nextSkew);
    scaleY.set(
      Math.abs(nextScale - 1) < 0.0005 && !scaleWithVelocity ? 1 : nextScale,
    );
  });

  const handlePointerDown = (event) => {
    if (!draggable || (event.pointerType === "mouse" && event.button !== 0))
      return;
    const grab = drag.current;
    grab.active = true;
    grab.pointerId = event.pointerId;
    grab.lastX = event.clientX;
    grab.lastTime = event.timeStamp;
    grab.velocity = 0;
    grab.travel = 0;
    fling.current = 0;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    event.currentTarget.style.cursor = "grabbing";
  };

  const handlePointerMove = (event) => {
    const grab = drag.current;
    if (!grab.active || event.pointerId !== grab.pointerId) return;
    const dx = event.clientX - grab.lastX;
    const dt = Math.max(event.timeStamp - grab.lastTime, 1);
    grab.lastX = event.clientX;
    grab.lastTime = event.timeStamp;
    grab.travel += Math.abs(dx);
    baseX.set(baseX.get() + dx);
    grab.velocity +=
      ((dx / dt) * 1000 - grab.velocity) * (1 - Math.exp(-dt / 50));
  };

  const handlePointerUp = (event) => {
    const grab = drag.current;
    if (!grab.active || event.pointerId !== grab.pointerId) return;
    grab.active = false;
    const resting = event.timeStamp - grab.lastTime > 90;
    fling.current = resting
      ? 0
      : Math.max(-5000, Math.min(5000, grab.velocity));
    grab.velocity = 0;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    event.currentTarget.style.cursor = "grab";
  };

  const handleClickCapture = (event) => {
    if (drag.current.travel > 6) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const copies = [];
  for (let i = 0; i < numCopies; i++) {
    copies.push(
      <span
        className={`flex shrink-0 items-center ${className}`}
        key={i}
        ref={i === 0 ? copyRef : null}
        aria-hidden={i > 0 ? true : undefined}
        style={{ gap, paddingRight: gap }}
      >
        {items.map((item, j) => (
          <RowItem key={j} item={item} size={itemSize} />
        ))}
      </span>,
    );
  }

  return (
    <div
      className={`${parallaxClassName} relative overflow-hidden`}
      style={{
        ...(draggable
          ? {
              cursor: "grab",
              userSelect: "none",
              WebkitUserSelect: "none",
              touchAction: "pan-y",
            }
          : {}),
        ...parallaxStyle,
      }}
      onPointerDown={draggable ? handlePointerDown : undefined}
      onPointerMove={draggable ? handlePointerMove : undefined}
      onPointerUp={draggable ? handlePointerUp : undefined}
      onPointerCancel={draggable ? handlePointerUp : undefined}
      onClickCapture={draggable ? handleClickCapture : undefined}
    >
      <motion.div
        className={`${scrollerClassName} flex items-center whitespace-nowrap drop-shadow`}
        style={{ x, skewX, scaleY, ...scrollerStyle }}
      >
        {copies}
      </motion.div>
    </div>
  );
}

export const ScrollVelocity = ({
  scrollContainerRef,
  rows = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
  pauseOnHover = false,
  fadeEdges = false,
  skewWithVelocity = 0,
  scaleWithVelocity = 0,
  gap = 48,
  itemSize = 56,
  draggable = false,
}) => {
  const hoveredRef = useRef(false);

  return (
    <section
      className="w-full"
      style={
        fadeEdges
          ? { WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK }
          : undefined
      }
      onPointerEnter={() => {
        hoveredRef.current = true;
      }}
      onPointerLeave={() => {
        hoveredRef.current = false;
      }}
    >
      {rows.map((items, index) => (
        <div className="py-5" key={index}>
          <VelocityRow
            key={index}
            items={items}
            className={className}
            baseVelocity={index % 2 !== 0 ? -velocity : velocity}
            scrollContainerRef={scrollContainerRef}
            damping={damping}
            stiffness={stiffness}
            numCopies={numCopies}
            velocityMapping={velocityMapping}
            parallaxClassName={parallaxClassName}
            scrollerClassName={scrollerClassName}
            parallaxStyle={parallaxStyle}
            scrollerStyle={scrollerStyle}
            pauseOnHover={pauseOnHover}
            hoveredRef={hoveredRef}
            skewWithVelocity={skewWithVelocity}
            scaleWithVelocity={scaleWithVelocity}
            gap={gap}
            itemSize={itemSize}
            draggable={draggable}
          />
        </div>
      ))}
    </section>
  );
};

export default ScrollVelocity;
