import { faCopy as Empty } from "@fortawesome/free-regular-svg-icons";
import { faCopy as Full } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function CopyBtn() {
  const [copied, setCopied] = useState(false);
  const email = "fatayerjiaseel@gmail.com";
  const handleCopy = async () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div class="relative flex justify-center group">
      <button onClick={handleCopy}>
        <FontAwesomeIcon
          icon={copied ? Full : Empty}
          className="text-2xl hover:cursor-pointer"
        />
      </button>

      {copied ? (
        <div class="absolute top-full mb-3 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div class="w-2 h-2 bg-gray-900 rotate-45 -mb-1"></div>
          <div class="px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg shadow-lg">
            Copied
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CopyBtn;
