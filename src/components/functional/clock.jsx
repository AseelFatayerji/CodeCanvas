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
    hrs %= 12;
    hrs = hrs == 0 ? 12 : 12;
    return [hrs, min, sec, meridian];
  };
  let [hrs, min, sec, mer] = timeFormat();
  return (
    <div className="pt-3">
      <div className={`flex justify-evenly `}>
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
          <span>{Math.trunc(min / 10)}</span>
        </div>
        <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
          <span>{min % 10}</span>
        </div>
        <div className=" pt-1 font-bold font-mono text-yellow-300/50 tracking-wider">
          <span>:</span>
        </div>
        <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
          <span>{Math.trunc(sec / 10)}</span>
        </div>
        <div className=" font-bold  p-1 rounded-lg border-2 font-mono text-yellow-300/50 tracking-wider">
          <span>{sec % 10}</span>
        </div>
      </div>
      <div
        className={`font-bold justify-self-end mb-2.5 font-mono text-yellow-300/50 tracking-wider}`}
      >
        {mer}
      </div>
    </div>
  );
}

export default Clock;
