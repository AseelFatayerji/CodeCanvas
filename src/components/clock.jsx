import React, { useState, useEffect } from "react";

function Clock(props) {
  const [time, SetTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      SetTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const timeFormat = () => {
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    const meridian = hrs >= 12 ? "pm" : "am";
    hrs %= 12 || 12;
    return [hrs, min, sec, meridian];
  };
  let [hrs, min, sec, mer] = timeFormat();
  return (
    <div
      className={`inset-0 fixed self-end ${
        props.size
          ? "justify-self-start ml-2 -mb-2 "
          : "justify-self-center mr-76 mb-4 p-2 "
      }`}
    >
      <div className={`flex justify-evenly gap-1 ${props.size ? "text-xl":"text-3xl"}`}>
        <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
          <span>{Math.trunc(hrs / 10)}</span>
        </div>
        <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
          <span>{hrs % 10}</span>
        </div>
        <div className=" pt-1 font-bold font-mono text-yellow-300/50 tracking-wider">
          <span>:</span>
        </div>
        <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
          <span>{Math.trunc(min / 10) }</span>
        </div>
        <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
          <span>{min % 10}</span>
        </div>
        {props.size ? (
          <>
            {" "}
            <div
              className={`font-bold text-right pt-2 font-mono text-yellow-300/50 tracking-wider text-m`}
            >
              {mer}
            </div>
          </>
        ) : (
          <>
            <div className=" pt-1 font-bold font-mono text-yellow-300/50 tracking-wider">
              <span>:</span>
            </div>
            <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
              <span>{Math.trunc(sec / 10)}</span>
            </div>
            <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
              <span>{sec % 10}</span>
            </div>
          </>
        )}
      </div>
      <div
        className={`font-bold text-right font-mono text-yellow-300/50 tracking-wider ${
          props.size ? "hidden" : ""
        }`}
      >
        {mer}
      </div>
    </div>
  );
}

export default Clock;
