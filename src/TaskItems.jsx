import React, { useContext } from "react";
import { Taskcontext } from "./taskContext";

const TaskItems = () => {
    const { Task, setTask } = useContext(Taskcontext);


    const toggleDone = (id) => {
        setTask(Task.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    const deleteTask = (id) => {
        setTask(Task.filter(t => t.id !== id));
    };

    return Task.length ? (
        <ul className="list-group mt-2">
            {Task.map(t => (
                <li key={t.id} className={`list-group-item d-flex justify-content-between ${t.done ? "list-group-item-success" : ""}`}>
                    {t.title}
                    <span>
                        <i className={`me-3 pointer fas ${t.done ? "fa-times text-warning" : "fa-check text-success"}`}
                            onClick={() => toggleDone(t.id)}></i>
                        <i className="me-3 pointer fas fa-trash text-danger" onClick={() => deleteTask(t.id)}></i>
                    </span>
                </li>
            ))}
        </ul>
    ) : (
        <h2 className="text-center text-danger">هیچ کاری ثبت نشده...!</h2>
    );
};

export default TaskItems;
