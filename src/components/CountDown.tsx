"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endingDate = new Date("2023-08-24");

  return (
    <div>
      <Countdown
        className="font-bold text-5xl text-yellow-300"
        date={endingDate}
      />
    </div>
  );
};

export default CountDown;
