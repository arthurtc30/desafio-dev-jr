import "./index.css";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <button className="button" onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;
