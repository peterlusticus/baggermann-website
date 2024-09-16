"use client";
// import { Progress } from "flowbite-react";
import Link from "next/link";
import React from "react";
import Progressbar from "./Progressbar";
const ProgressData = {
  title: "we develop our skills regularly to keep us updated",
  brief:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  btntext: "view more",
  btnlink: "#",
  progressbarlist: [
    {
      title: "idea",
      percent: 70,
      delay: 200,
    },
    {
      title: "photoshop",
      percent: 95,
      delay: 400,
    },
    {
      title: "frontend",
      percent: 85,
      delay: 500,
    },
  ],
};
const Progress = () => {
  return (
    <>
      <div className="khalif-progress-wrape mt-[100px] py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6">
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
