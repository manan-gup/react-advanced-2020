import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("Cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1>Window Size</h1>
      <h3>{size} px</h3>
    </>
  );
};

export default UseEffectCleanup;
