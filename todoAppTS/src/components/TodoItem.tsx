import React from "react";
import { todoType } from "../apptypes";

type PropsType = {
  item: todoType;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ item, deleteTask }: PropsType) {
  return (
    <div className="card">
      <div>
        <p style={{ marginTop: "5px" }}>{item.taskName}</p>
        <p>{item.dueDate} gün kaldı</p>
        <button onClick={() => deleteTask(item.taskName)}>Sil</button>
      </div>
    </div>
  );
}

export default TodoItem;
