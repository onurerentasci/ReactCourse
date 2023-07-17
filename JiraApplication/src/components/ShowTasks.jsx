import React, { useState, useContext } from "react";
import "../styles/ShowTask.css";
import TaskCreate from "./TaskCreate";
import TaskContext from "../context/Task";

function ShowTasks({ task }) {
  const { deleteTaskByID, editTaskByID } = useContext(TaskContext);

  const [showEdit, setShowEdit] = useState(false);
  const handleRemove = () => {
    // onDelete(task.id);
    deleteTaskByID(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    // onUpdate(id, updatedTitle, updatedTaskDesc);
    editTaskByID(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="show-task">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleRemove} className="btn-delete">
              Sil
            </button>
            <button
              onClick={handleEditClick}
              className="btn-update update-button"
            >
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowTasks;
