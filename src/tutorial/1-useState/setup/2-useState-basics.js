import React, { useState } from "react";

const UseStateBasics = () => {
  let [text, setText] = useState("Random Title");
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          if (text === "Hello People") {
            setText("Random Title");
          } else {
            setText("Hello People");
          }
        }}
      >
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
