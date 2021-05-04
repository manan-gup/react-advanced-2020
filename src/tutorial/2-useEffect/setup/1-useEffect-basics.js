import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  }
  useEffect(() => {document.title = `You have ${value} new messages.`}, [value]);
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={handleClick}>+1</button>
  </>;
};

export default UseEffectBasics;
