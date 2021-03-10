import './App.css';
import Header from './Components/Header/Header';
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path='/profile'
                       render={() => <Profile profileState={props.state} dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
};
export default App;
