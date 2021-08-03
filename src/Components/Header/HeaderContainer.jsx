import * as React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunkCreator} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {


    render() {
        return <Header isAuth = { this.props.isAuth} login = { this.props.login} logout = {this.props.logoutThunkCreator}/>
    }
}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
);


export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer);