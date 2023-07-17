import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };
  
  return (
    <div className="App">
      <div>sayı: {value}</div>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
