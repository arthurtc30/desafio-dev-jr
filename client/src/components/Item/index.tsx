import "./index.css";

interface ItemProps {
    title?: string;
    description?: string;
    finished?: boolean;
}

function Item(props: ItemProps) {
    return (
        <div className="item">
            <div className="item-text">
                <h4>
                    {props.title}
                </h4>
            </div>
            <div className="item-buttons">
                <button>Editar tarefa</button>
                <button>Marcar como finalizada</button>
                <button>Remover tarefa</button>
            </div>
        </div>
    );
}

export default Item;
