import React from "react";

const ShowDateComponent = ({ timestamp }) => {
  const date = new Date(timestamp);
  const currentDay = date.toLocaleDateString("en-US", {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const currentTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div className="">
      <div className="">{currentTime}</div>
      <div className="">{currentDay}</div>
    </div>
  );
};

export default ShowDateComponent;
