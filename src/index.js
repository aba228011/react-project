import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./Redux/redux-store";
import reportWebVitals from "./reportWebVitals";
import StoreContext from "./StoreContext";

let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store);
store.subscribe(()=>{
    rerenderEntireTree(store);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
