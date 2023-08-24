"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const endingDate = new Date(`${year}-${month + 1}-${date + 1}`);

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
