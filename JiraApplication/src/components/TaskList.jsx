import React, { useContext } from "react";
import ShowTasks from "./ShowTasks";
import TaskContext from "../context/Task";
import "../styles/ShowTask.css";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <ShowTasks key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
