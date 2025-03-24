import React, { useContext } from "react";
import { Taskcontext } from "./taskContext";

const TaskItems = () => {
    const { Task, setTask } = useContext(Taskcontext);

    const doneTask = (id) => {
        const newsetTask = Task.map(t =>
            t.id === id ? { ...t, done: !t.done } : t
        );
        setTask(newsetTask);
    };
    const deleatTask =(id)=>{
        let newtask= Task.filter(t=>t.id!=id)
        setTask(newtask)
    }

    if (Task.length) {
        return (
            <ul className="list-group m-0 p-0 mt-2">
                {Task.map(t => (
                    <li
                        key={t.id}
                        className={`list-group-item d-flex justify-content-between ${t.done ? "list-group-item-success" : ""}`}
                    >
                        {t.title}
                        <span>
                            {
                                t.done ? (
                                    <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"
                                        onClick={() => doneTask(t.id)}></i>
                                ) : (
                                    <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"
                                        onClick={() => doneTask(t.id)}></i>
                                )
                            }
                            <i onClick={()=>{deleatTask(t.id)}} className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
                        </span>
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <h2 className="text-center text-danger">
                هیچ کاری ثبت نشده...!
            </h2>
        );
    }
};

export default TaskItems;
