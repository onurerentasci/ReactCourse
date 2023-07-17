import { useEffect, useContext } from "react";
import "./styles/App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TaskContext from "./context/Task";
function App() {

  const {fetchTasks} = useContext(TaskContext)
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
