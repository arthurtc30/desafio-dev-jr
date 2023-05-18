import './index.css';

interface HeaderProps {
    children: React.ReactNode;
}

function Header(props: HeaderProps) {
    return (
        <div className='header-content'>
            {props.children}
        </div>
    );
}

export default Header;