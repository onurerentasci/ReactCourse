import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import "./styles/App.css";
import GeneralForm from "./components/GeneralForm";
import PortalFrom from "./components/PortalFrom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<PortalFrom />} />
      </Routes>
    </div>
  );
}

export default App;
