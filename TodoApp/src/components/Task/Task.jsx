import { useState } from "react";
import styles from "./Task.module.css";

const Task = ({ task, completeTask, editTask, removeTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [currTask, setCurrTask] = useState(task);

  let completeTaskStyle = task.isCompleted ? styles["complete-task"] : "";

  const completeTaskHandler = (e) => {
    e.stopPropagation();
    completeTask(task.id);
  };

  const removeTaskHandler = () => {
    removeTask(task.id);
  };

  const toggleEditTaskHandler = (id) => {
    setIsEdit((state) => !isEdit);
  };

  const taskEditNameHandler = (e) => {
    setCurrTask((state) => ({ ...state, name: e.target.value }));
  };

  const editTaskHandler = () => {
    editTask(currTask);
    setIsEdit(false);
  };

  return (
    <section className={styles["task"]}>
      {isEdit ? (
        <input
          className={styles["task-edit-input"]}
          type="text"
          name="task"
          value={currTask.name}
          onChange={taskEditNameHandler}
          onBlur={editTaskHandler}
        />
      ) : (
        <div onClick={completeTaskHandler} className={completeTaskStyle}>
          <span className={styles["task-name"]}>{currTask.name}</span>
        </div>
      )}
      <div>
        <button
          className={`${styles["task-button"]}`}
          onClick={() => toggleEditTaskHandler(task.id)}
        >
          E
        </button>
        <button
          className={`${styles["task-button"]} ${styles["remove-task-button"]}`}
          onClick={removeTaskHandler}
        >
          x
        </button>
      </div>
    </section>
  );
};

export default Task;
