import {sendMessageActionCreator} from "../../Redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageActionCreator: () => {
            dispatch(sendMessageActionCreator());
        }
    }

}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);