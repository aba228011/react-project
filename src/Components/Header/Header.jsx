import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {


    return (
        <header className={s.header}>
            <img
                src = "https://www.flaticon.com/premium-icon/icons/svg/3513/3513022.svg"
                alt="logo"/>
            <h1>First React App</h1>
            <div className={s.loginUser}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;