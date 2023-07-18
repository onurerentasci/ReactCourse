import React, { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
  const numberContext = useContext(NumberContext);
  return (
    <>
      <div>Number = {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch("increment")}>
        increase
      </button>
      <button onClick={() => numberContext.dispatch("decrement")}>
        decrease
      </button>
      <button onClick={() => numberContext.dispatch("reset")}>reset</button>
    </>
  );
}

export default Calculate;
