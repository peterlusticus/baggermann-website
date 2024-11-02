"use client";
import React from "react";
import CountUp from "react-countup";
import bgimg from "../../public/img/counter/bg.png";

const CounterData = {
  bgimg: bgimg,
  CounterList: [
    {
      title: "Project Done",
      number: "35",
      symbol: "k",
      delay: "100",
    },
    {
      title: "Erfahrung",
      number: "4",
      symbol: "+",
      delay: "300",
    },
    {
      title: "Team Member",
      number: "60",
      symbol: "+",
      delay: "500",
    },
    {
      title: "Awards",
      number: "14",
      symbol: "",
      delay: "700",
    },
  ],
};
const Counter = () => {
  return (
    <>
      <div
        class="khalif-counter-wrape counter-bg bg-center bg-cover bg-no-repeat pt-[550px] px-0 pb-[100px]"
        style={{ backgroundImage: `url(${CounterData.bgimg.src})` }}
      >
        <div class="container">
        </div>
      </div>
    </>
  );
};

export default Counter;
