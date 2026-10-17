import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Font } from "three-stdlib";

export default function Project2D({ name, repo, link, disc, demo, icon }) {
  return (
    // <!-- From Uiverse.io by imtausef -->
    <div className="parent rounded-b-full">
      <div className="card2">
        <div className="content-box">
          <span className="card2-title">{name}</span>
          <p className="card2-content text-pretty">{disc}</p>
          <div className="flex gap-4 mt-auto transform-3d">
            <a
              href={demo}
              className="see-more rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
            <a
              href={link}
              className="view-more rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repo
            </a>
          </div>
        </div>
        <div className="icon-box text-center justify-center items-center align-middle">
          <FontAwesomeIcon icon={icon} className="text-4xl" />
        </div>
      </div>
    </div>
  );
}