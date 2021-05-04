import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h2>{text || "John Doe"}</h2>
      <button
        style={{ marginBottom: "2rem" }}
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        Toggle Error
      </button>
      {isError && <h2>Error...</h2>}
      {isError ? <p>There is an error...</p> : <p>All OK</p>}
    </>
  );
};

export default ShortCircuit;
