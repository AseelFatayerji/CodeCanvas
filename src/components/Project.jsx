import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Project = ({ index, repo, title, demo, link }) => {
  const [stacks, setStacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "AseelFatayerji";

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${username}/${repo}/languages`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_git_token}`,
        },
      })
      .then((res) => {
        const stacks = res.data;
        setStacks(Object.keys(stacks));
      })
      .catch((err) => console.error("Error fetching repos:", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-[#d6995c]">
            {stacks.map((stack, index) => (
              <span key={index}>{stack}</span>
            ))}
          </div>
        </div>
        <button className="flex items-center gap-1 cursor-pointer hover-animation">
          Read More
          <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
        </button>
      </div>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full mt-6" />
    </>
  );
};

export default Project;
