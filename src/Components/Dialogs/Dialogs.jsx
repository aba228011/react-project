import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.messages.map(m => <Message message={m.message}/>);

    const sendMessage = () => {
        props.sendMessageActionCreator();
    }
    const onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageActionCreator(body);
    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={onMessageChange} value={props.newMessageText} placeholder="Enter your message :)"/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;