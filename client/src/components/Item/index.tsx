import api from "../../services/api";
import Button from "./Button";
import "./index.css";

export interface ItemProps {
    id: number;
    title: string;
    description?: string;
    finished: boolean;
    setDeleted: Function;
}

function Item(props: ItemProps) {
    async function deleteTask() {
        await api.delete(`/tasks?id=${props.id}`)
        .then((p) => {
            props.setDeleted(true);
            console.log(`Deleted task ${props.title}`);
        })
        .catch((err: Error) => {
            console.log(err.message);
        });
    }

    return (
        <div className="item">
            <div className="item-text">
                <h4>
                    {props.title}
                </h4>
            </div>
            <div className="item-buttons">
                <Button>Edit task</Button>
                <Button>Finish/Open task</Button>
                <Button onClick={deleteTask}>Delete task</Button>
            </div>
        </div>
    );
}

export default Item;