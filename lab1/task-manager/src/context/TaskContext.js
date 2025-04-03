import { createContext, useState, useEffect, useCallback, useMemo } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    });

    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = useCallback((text) => {
        setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
    }, []);

    const toggleTask = useCallback((id) => {
        setTasks(prev =>
            prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
        );
    }, []);

    const deleteTask = useCallback((id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    const filteredTasks = useMemo(() => {
        switch (filter) {
            case "active":
                return tasks.filter(task => !task.completed);
            case "completed":
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    }, [tasks, filter]);

    return (
        <TaskContext.Provider value={{ tasks, filteredTasks, addTask, toggleTask, deleteTask, setFilter }}>
            {children}
        </TaskContext.Provider>
    );
};
