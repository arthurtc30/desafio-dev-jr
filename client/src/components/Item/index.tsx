import { useState } from "react";
import api from "../../services/api";
import Button from "./Button";
import "./index.css";
import { AxiosResponse } from "axios";
import { FaCheck, FaTimes } from "react-icons/fa"
import { toast } from 'react-toastify';

export interface ItemData {
    id: number;
    title: string;
    description: string;
    finished: boolean;
}

interface ItemProps extends ItemData {
    setEdited: Function;
}

interface ResponseData {
    message: string;
    task: ItemData;
}

function Item(props: ItemProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(props.title);
    const [newDescription, setNewDescription] = useState<string>(props.description);
    const [shouldReset, setShouldReset] = useState<boolean>(true);

    const expandedTextAreaStyle = {
        height: "60%",
    };
    
    const hiddenTextAreaStyle = {
        height: "0%",
        opacity: "0%",
        pointerEvents: "none"
    }
    
    const expandedSaveButtonStyle = {
        height: "15%",
    }
    
    const hiddenSaveButtonStyle = {
        height: "0%",
        opacity: "0%",
        pointerEvents: "none"
    }

    async function toggleTask() {
        await api.put(`/tasks?id=${props.id}`)
        .then(() => {
            props.setEdited(true);
            toast.success(`Successfully ${props.finished ? "opened" : "finished"} task`);
        })
        .catch((err: Error) => {
            toast.error(`Could not ${props.finished ? "open" : "finish"} task`);
            console.log(err.message);
        });
    }

    async function deleteTask() {
        await api.delete(`/tasks?id=${props.id}`)
        .then(() => {
            props.setEdited(true);
            toast.success("Deleted task");
        })
        .catch((err: Error) => {
            toast.error("Could not delete task");
            console.log(err.message);
        });
    }

    async function updateTask() {
        if (!newTitle) return;
        setShouldReset(false);

        await api.patch(`/tasks?id=${props.id}`, {
            title: newTitle,
            description: newDescription,
            finished: props.finished
        })
        .then((p: AxiosResponse<ResponseData>) => {
            setNewTitle(p.data.task.title);
            setNewDescription(p.data.task.description);
            toast.success("Successfully updated task");
            props.setEdited(true);
            expand();
        })
        .catch((err: Error) => {
            toast.error("Could not update task");
            console.log(err.message);
            setShouldReset(true);
        });

    }

    function expand() {
        setIsExpanded(!isExpanded);
    }

    function resetFields() {
        setNewTitle(props.title);
        setNewDescription(props.description);
    }

    return (
        <div className={isExpanded ? "item expanded" : "item"}>
            <div className="item-text">
                {props.finished ? <FaCheck /> : <FaTimes />}

                {isExpanded ? (
                    <input
                        className="item-text-title-input"
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                ) : (
                    <h4 className="item-text-title">
                        {newTitle}
                    </h4>
                )}

                <textarea 
                    placeholder="Description..."
                    className="textbox"
                    style={isExpanded ? expandedTextAreaStyle : hiddenTextAreaStyle}
                    maxLength={300}
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <button
                    style={isExpanded ? expandedSaveButtonStyle : hiddenSaveButtonStyle}
                    className="item-save-button"
                    onClick={updateTask}
                >
                    Save
                </button>
            </div>

            <div className="item-buttons">
                <Button onClick={() => {
                    if (shouldReset) resetFields();

                    expand();
                }}>
                    {isExpanded ? "Hide" : "Show"} details...
                </Button>
                <Button onClick={toggleTask}>{props.finished ? "Open" : "Finish"} task</Button>
                <Button onClick={deleteTask}>Delete task</Button>
            </div>
        </div>
    );
}

export default Item;