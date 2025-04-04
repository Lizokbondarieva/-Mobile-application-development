import React, { useState, useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskInput = () => {
    const [text, setText] = useState("");
    const { addTask } = useContext(TaskContext);
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
            setText("");
            inputRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                ref={inputRef} 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Enter task..." 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskInput;
