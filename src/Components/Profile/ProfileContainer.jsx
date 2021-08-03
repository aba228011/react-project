import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatus,
    getProfileThunkCreator,
    setUserProfileStatus,
    updateProfileStatus
} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthorizedUserId, getIsAuth, getProfile, getStatus} from "../../Redux/auth-selector";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login");
            }
        }
        this.props.getProfileThunkCreator(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return <div>
            <Profile {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUserId: getAuthorizedUserId(state),
        isAuth: getIsAuth(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {getProfileThunkCreator, getProfileStatus, updateProfileStatus, setUserProfileStatus})
    ,withRouter
)(ProfileContainer)