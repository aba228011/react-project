import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {Textarea} from "../Common/FormControls/FormControls";


const maxLength20 = maxLength(20);

const NewDialogMessageForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newMessageText" placeholder="Enter your message :)"
             validate={[required, maxLength20]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const NewDialogMessageFormRedux = reduxForm({
    form: 'newDialogMessage'
})(NewDialogMessageForm)

const Dialogs = (props) => {
    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>);

    const sendMessage = (value) => {
        props.sendMessageActionCreator(value.newMessageText);
    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
                <NewDialogMessageFormRedux onSubmit={sendMessage}/>
            </div>
        </div>
    );
}


export default Dialogs;