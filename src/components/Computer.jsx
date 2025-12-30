import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import Loader from "./loaders/model-loader";
import Computer from "../model_loader/Computer";

function Model(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 853px)" });

  return (
    <div>
      <figure className={isMobile ? "w-30 h-15 m-0" : "w-160 h-80 m-0"}>
        <Canvas className="h-min cursor-grab active:cursor-grabbing">
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={2.5} />
            <Computer
              position={isMobile ? props.poseM : props.poseD}
              scale={props.scale}
              rotation={props.rotation}
            />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              enableDamping={true}
            />
          </Suspense>
        </Canvas>
      </figure>
    </div>
  );
}

export default Model;
