import {Field, reduxForm} from "redux-form";
import {loginThunkCreator} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Input} from "../Common/FormControls/FormControls";
import {maxLength, required} from "../../utils/validators/validators";
import style from "./../Common/FormControls/FormControls.module.css";

const maxLength20 = maxLength(40);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label htmlFor={"email"}>Email </label>
            <Field name={"email"} component={Input}
                   validate={[required, maxLength20]}
                   placeholder="E-mail" type={"email"}/>
        </div>
        <div>
            <label htmlFor={"password"}>Password </label>
            <Field name={"password"} component={Input}
                   validate={[required, maxLength20]}
                   placeholder="Password" type={"password"}/>
        </div>
        <div>
            <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> remember me
        </div>
        {
            props.error && <div className={style.error}>{props.error}</div>
        }

        <div>
            <button>Log in</button>
        </div>
    </form>
}

const LoginFormRedux = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const submit = (value) => {
        props.loginThunkCreator(value.email, value.password, value.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return <div>
        <h1>Login</h1>
        <LoginFormRedux onSubmit={submit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginThunkCreator})(Login);