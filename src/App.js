import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./Redux/app-reducer";
import Preloader from "./Components/Common/Preloader/Preloader";
import {withSuspense} from "./Hoc/withSuspense";

const DialogsContainer = React.lazy(() => {
    return import('./Components/Dialogs/DialogsContainer');
});

console.log(withSuspense(DialogsContainer))

class App extends Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if(!this.props.initialized){
           return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);
