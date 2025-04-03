import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
    const { toggleTask, deleteTask } = useContext(TaskContext);

    return (
        <li>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;
