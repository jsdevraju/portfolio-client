import React from "react";
import { RotatingSquare } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div style={{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)"
    }}>
      <RotatingSquare
        ariaLabel="rotating-square"
        visible={true}
        color="#122f57"
        strokeWidth="10"
      />
    </div>
  );
};

export default Loader;
