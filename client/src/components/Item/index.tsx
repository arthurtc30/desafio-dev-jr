import { useState } from "react";
import api from "../../services/api";
import Button from "./Button";
import "./index.css";

export interface ItemProps {
    id: number;
    title: string;
    description?: string;
    finished: boolean;
    setEdited: Function;
}

function Item(props: ItemProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const expandedTextAreaStyle = {
        height: "60%",
    };

    const hiddenTextAreaStyle = {
        height: "0%",
        opacity: "0%",
        pointerEvents: "none"
    }

    async function toggleTask() {
        await api.put(`/tasks?id=${props.id}`)
        .then((p) => {
            props.setEdited(true);
            console.log(`${props.finished ? "Opened" : "Finished"} task ${props.title}`);
        })
        .catch((err: Error) => {
            console.log(err.message);
        });
    }

    async function deleteTask() {
        await api.delete(`/tasks?id=${props.id}`)
        .then((p) => {
            props.setEdited(true);
            console.log(`Deleted task ${props.title}`);
        })
        .catch((err: Error) => {
            console.log(err.message);
        });
    }

    function expand() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={isExpanded ? "item expanded" : "item"}>
            <div className="item-text">
                <h4>
                    {props.title}
                </h4>

                <textarea placeholder="Description..." className="textbox" style={isExpanded ? expandedTextAreaStyle : hiddenTextAreaStyle}>{props.description}</textarea>
            </div>

            <div className="item-buttons">
                <Button onClick={expand}>{isExpanded ? "Hide" : "Show"} details...</Button>
                <Button onClick={toggleTask}>{props.finished ? "Open" : "Finish"} task</Button>
                <Button onClick={deleteTask}>Delete task</Button>
            </div>
        </div>
    );
}

export default Item;