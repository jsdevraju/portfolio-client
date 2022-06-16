import React from "react";
import CountUp from "react-countup";

const CountProject = ({ title, number, className }) => {
  return (
    <div className={className}>
      <h1>
        <CountUp start={0} end={number} />
      </h1>
      <p>{title}</p>
    </div>
  );
};

export default CountProject;
