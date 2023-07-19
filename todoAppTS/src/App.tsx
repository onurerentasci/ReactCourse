import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { todoType } from "./apptypes";
import TodoItem from "./components/TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [dueDate, setDueDate] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDueDate(Number(event.target.value));
    }
  };

  const addNewTask = (): void => {
    const newTask = {
      taskName: task,
      dueDate: dueDate,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDueDate(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((item) => {
        return item.taskName !== nameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="maincard">
        <input
          className="maincardinput"
          type="text"
          value={task}
          name="task"
          placeholder="Task giriniz.."
          onChange={handleChange}
        />
        <input
          className="maincardinput"
          type="number"
          value={dueDate}
          name="due"
          placeholder="Due to"
          onChange={handleChange}
        />
        <button className="maincardbutton" onClick={addNewTask}>
          Yeni Task Ekle
        </button>
      </div>
      <div className="todocard">
        {todoList.map((item: todoType, index: number) => {
          return <TodoItem key={index} item={item} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
