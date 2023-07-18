import React, { useReducer, useEffect } from "react";
import "./App.css";
import Calculate from "./Calculate";

export const NumberContext = React.createContext();

const initialValue = 0; // başlangıç değeri

const reducer = (state, action) => {
  switch (action) {
    case "increment": // dispatch içinde yer alan ifade burada action olarak tanımlanır
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue); // count ifadesine reducerdan gelen komutlar ile manipüle edilir. initial value default değer olarak kabul edilir

  useEffect(() => {
    console.log("render oldu");
  }, [count]);

  return (
    <div className="App">
      <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
        <Calculate />
      </NumberContext.Provider>
    </div>
  );
}

export default App;
