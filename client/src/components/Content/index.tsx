import { useEffect, useState } from "react";
import api from "../../services/api";
import Item, { ItemProps } from "../Item";
import "./index.css";

function Content() {
    const [tasks, setTasks] = useState<ItemProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [edited, setEdited] = useState(false);

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
        if (edited) {
            loadTasks();
            setEdited(false);
        }
    }, [edited]);

    return (
        <div className="container">
            {loading ? (
                <h4>Loading...</h4>
            ) : (
                tasks.map((item, index) => <Item key={index} id={item.id} title={item.title} description={item.description} finished={item.finished} setEdited={setEdited} />)
            )}
        </div>
    );
}

export default Content;
