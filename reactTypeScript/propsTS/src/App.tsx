import "./App.css";
import ContextExemple from "./components/ContextExemple";
import EventActions from "./components/EventActions";
import Home from "./components/Home";
import InstructorList from "./components/InstructorList";
import LoginCheck from "./components/LoginCheck";
import Request from "./components/Request";
import { ThemeContextProvider } from "./components/ThemeContext";
import Instructor from "./components/instructor";

function App() {
  const instructor = { firstName: "Onur", lastName: "Taşcı" };
  const instructorList = [
    { firstName: "Onur", lastName: "Taşcı" },
    { firstName: "Kerem", lastName: "Taşcı" },
    { firstName: "Ahmet", lastName: "Taşcı" },
  ];
  return (
    <div className="App">
      {/* <Home name="Onur" courseNumber={5} isBest={true} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="success" />
      <EventActions /> */}
      <LoginCheck />
      <ThemeContextProvider>
        <ContextExemple />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
