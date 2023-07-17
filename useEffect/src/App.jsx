import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [onur, setOnur] = useState(0);
  const [eren, setEren] = useState(0);
  useEffect(() => {
    console.log("Her zaman çalışır");
  });

  useEffect(() => {
    console.log("ilk kez render edildiğinde çalışır daha sonra çalışmaz");
  }, []);

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır, verilen Onur değeri değişene kadar çalışmaz"
    );
  }, [onur]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır, verilen Eren değeri değişene kadar çalışmaz"
    );
  }, [eren]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiğinde çalışır, verilen Onur veya Eren değeri değişene kadar çalışmaz"
    );
  }, [onur, eren]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setOnur(onur + 1)}>Onur ++</button>
        <div>Onur: {onur}</div>
      </div>
      <div>
        <button onClick={() => setEren(eren + 1)}>Eren ++</button>
        <div>eren: {eren}</div>
      </div>
    </div>
  );
}

export default App;
