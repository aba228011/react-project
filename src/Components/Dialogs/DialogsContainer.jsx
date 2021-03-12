import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/messages-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                store=>{
                    let state = store.getState().messagesPage;
                    const sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    }
                    const onMessageChange = (body) => {
                        store.dispatch(updateNewMessageActionCreator(body));
                    }
                    return(<Dialogs dialogs={state.dialogs} messages={state.messages} sendMessageActionCreator={sendMessage}
                                    updateNewMessageActionCreator={onMessageChange} newMessageText={state.newMessageText}
                    />);
                }
            }
        </StoreContext.Consumer>

    );
}
export default DialogsContainer;