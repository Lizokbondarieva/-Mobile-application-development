import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const { filteredTasks } = useContext(TaskContext);

    return (
        <ul>
            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
