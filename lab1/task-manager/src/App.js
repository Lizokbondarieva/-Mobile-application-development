import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

function App() {
    return (
        <TaskProvider>
            <div className="App">
                <h1>Task Manager</h1>
                <TaskInput />
                <TaskFilter />
                <TaskList />
            </div>
        </TaskProvider>
    );
}

export default App;
