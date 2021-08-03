const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Али'},
        {id: 2, name: 'Катя'},
        {id: 3, name: 'Саша'},
        {id: 4, name: 'Валера'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is Abylai?'},
        {id: 3, message: 'I`m okay'},
        {id: 4, message: 'I`m okay'}
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}


export const sendMessageActionCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default messagesReducer;