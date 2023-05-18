import { useEffect, useState } from "react";
import api from "../../services/api";
import Item, { ItemProps } from "../Item";
import "./index.css";

function Content() {
    const [tasks, setTasks] = useState<ItemProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    async function loadTasks() {
        await api.get("/tasks")
        .then((p) => {
            setTasks(p.data.tasks);
        })
        .catch((err: Error) => {
            console.log(err.message);
        });
    }

    useEffect(() => {
        setLoading(true);
        loadTasks();
        setLoading(false);
    }, []);

    useEffect(() => {
        if (deleted) {
            loadTasks();
            setDeleted(false);
        }
    }, [deleted]);

    return (
        <div className="container">
            {loading ? (
                <h4>Loading...</h4>
            ) : (
                tasks.map((item, index) => <Item key={index} id={item.id} title={item.title} description={item.description} finished={item.finished} setDeleted={setDeleted} />)
            )}
        </div>
    );
}

export default Content;
