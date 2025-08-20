import { useState } from "react";
import styels from "./TaskList.module.css";
import TaskInput from "./TaskInput/TaskInput";
import Task from "./Task/Task";

let currTask = [
  { id: 1, name: "First Task", isCompleted: false },
  { id: 2, name: "Second Task", isCompleted: false },
  { id: 3, name: "Third Task", isCompleted: false },
];

const TaskList = () => {
  const [tasks, setTasks] = useState(currTask);

  const addTaskHandler = (task) => {
    setTasks((state) => [...state, task]);
  };

  const editTaskHandler = (newTask) => {
    setTasks((state) => [
      ...state.map((x) => (x.id === newTask.id ? newTask : x)),
    ]);
  };

  const removeTaskHandler = (id) => {
    setTasks((state) => state.filter((x) => x.id !== id));
  };

  const completeTaskHandler = (id) => {
    setTasks((state) => [
      ...state.map((x) =>
        x.id === id ? { ...x, isCompleted: !x.isCompleted } : x
      ),
    ]);
  };

  return (
    <div className={styels["container"]}>
      <h2 className={styels["task-title"]}>Task planner</h2>
      <div className={styels["task-layout"]}>
        {tasks.map((x) => (
          <Task
            key={x.id}
            task={x}
            completeTask={completeTaskHandler}
            editTask={editTaskHandler}
            removeTask={removeTaskHandler}
          />
        ))}
      </div>
      <div>
        <TaskInput addTask={addTaskHandler} />
      </div>
    </div>
  );
};

export default TaskList;
