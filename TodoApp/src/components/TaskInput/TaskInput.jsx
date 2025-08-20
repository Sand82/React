import { useState } from "react";
import styles from "./TaskInput.module.css";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState({ name: "" });

  const onTaskChangeHandler = (e) => {
    let newId = Math.random();
    let newTask = {
      id: newId,
      name: e.target.value,
      isCompleted: false,
    };
    setTask(newTask);
  };

  const addTaskHandler = () => {
    addTask(task);
    setTask((state) => ({ name: "" }));
  };

  return (
    <section className={styles["container"]}>
      <div className={styles["input-container"]}>
        <label className={styles["task-label"]} htmlFor="task">
          Creat new Task
        </label>
        <input
          className={styles["task-input"]}
          type="text"
          name="task"
          value={task.name}
          onChange={onTaskChangeHandler}
        />
      </div>
      <button className={styles["task-button"]} onClick={addTaskHandler}>
        Add Task
      </button>
    </section>
  );
};

export default TaskInput;
