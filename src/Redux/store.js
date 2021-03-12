import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";


const store = {
    _state: {
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Abylai'},
                {id: 2, name: 'Katya'},
                {id: 3, name: 'Ulan'},
                {id: 4, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is Abylai?'},
                {id: 3, message: 'I`m okay'},
                {id: 4, message: 'I`m okay'}
            ],
            newMessageText: 'Hi my friends'
        },
        profilePage: {
            posts: [
                {id: 1, message: 'My name is Kong! I hate Space', likesCount: 13, dislikesCount: 3},
                {id: 2, message: 'It`s cool! I love Space', likesCount: 39, dislikesCount: 0},
            ],
            newPostText: 'Abylai can'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("state changed!")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}


// export default store;
// window.store = store;
