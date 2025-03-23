import React, { useState, useEffect } from "react";

function Clock() {
  return (
    <div className="inset-0 fixed self-end justify-self-center mr-80 mb-15">
      <div className="">
        <div>
          <spn>00:00</spn>
        </div>
      </div>
    </div>
  );
}

export default Clock;
