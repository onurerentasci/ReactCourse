import React, { useState, useContext } from "react";
import TaskContext from "../context/Task";
import "../styles/App.css";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { createTask, editTaskByID } = useContext(TaskContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      // onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz</h3>
          <form className="task-form">
            <label>Başlığı düzenleyiniz</label>
            <input value={title} onChange={handleChange} />
            <label>Görevi Düzenleyiniz</label>
            <textarea rows={5} value={taskDesc} onChange={handleTaskChange} />
            <button
              onClick={handleSubmit}
              style={{
                cursor: "pointer",
                backgroundColor: "blueviolet",
                borderColor: "violet",
              }}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Görev Ekleyiniz!</h3>
          <form className="task-form">
            <label>Başlık</label>
            <input value={title} onChange={handleChange} />
            <label>Görev Giriniz</label>
            <textarea rows={5} value={taskDesc} onChange={handleTaskChange} />
            <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
