import React, { useState } from "react";

function useCounter() {
  const [num, setnNum] = useState(0);

  const increment = () => {
    setnNum((prevNum) => prevNum + 1);
  };
  const decrement = () => {
    setnNum((prevNum) => prevNum - 1);
  };
  const reset = () => {
    setnNum(0);
  };

  return [num, increment, decrement, reset];
}

export default useCounter;
