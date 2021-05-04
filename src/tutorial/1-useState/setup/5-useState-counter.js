import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const complexIncrease = () => {
    setTimeout(() =>{setCounter((prevState) => {return prevState + 1});}, 2000);
  }
  return (
    <>
      <section style={{margin: '4rem 0' }}>
        <h3>Regular Counter</h3>
        <h2>{counter}</h2>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setCounter(0)}>
          Reset
        </button>
      </section>
      <section style={{margin: '4rem 0' }}>
        <h3>Functional Update Counter</h3>
        <h2>{counter}</h2>
        <button className="btn" onClick={complexIncrease}>Increase Later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
