import {
    followThunkCreator, getUsersThunkCreator,
    setCurrentPage,
    setTotalCount,
    setUsers, unfollowThunkCreator
} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import * as React from "react";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {
    getCurrentPage,
    getCurrentUsers,
    getFollowIsFetching,
    getIsFetching,
    getTotalCount,
    getUsers
} from "../../Redux/users-selector";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.currentUsers)
    }


    onChangePage = (page) => {
        this.props.getUsersThunkCreator(page, this.props.currentUsers)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users users={this.props.users}
                                                           setUsers={this.props.setUsers}
                                                           currentPage={this.props.currentPage}
                                                           totalCount={this.props.totalCount}
                                                           currentUsers={this.props.currentUsers}
                                                           onChangePage={this.onChangePage}
                                                           followIsFetching = {this.props.followIsFetching}
                                                           followThunkCreator = {this.props.followThunkCreator}
                                                           unfollowThunkCreator = {this.props.unfollowThunkCreator}/>}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        currentUsers: getCurrentUsers(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followIsFetching: getFollowIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setUsers,
        setTotalCount,
        setCurrentPage,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)
