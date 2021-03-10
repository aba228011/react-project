import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src = "https://www.flaticon.com/premium-icon/icons/svg/3513/3513022.svg"
                alt="logo"/>
            <h1>First React App</h1>
        </header>
    );
}

export default Header;