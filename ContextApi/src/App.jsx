import { useState, useEffect } from "react";
import "./styles/App.css";
import AuthContext from "./context/AuthContext";
import Auth from "./context/Auth";

function App() {
  const [authStatus, setAuthStatus] = useState(false);

  const loginAuth = () => {
    setAuthStatus(true);
  };
  useEffect(() => {
    loginAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ status: authStatus, login: loginAuth }}>
      <Auth />
    </AuthContext.Provider>
  );
}

export default App;
