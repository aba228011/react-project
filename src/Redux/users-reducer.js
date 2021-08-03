import {followAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IS_FETCHING = 'TOGGLE_FOLLOW_IS_FETCHING';

let initialState = {
    users: [],
    totalCount: 0,
    currentUsers: 20,
    currentPage: 1,
    isFetching: false,
    followIsFetching: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.usersCount
            }
        }
        default:
            return state;
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOW_IS_FETCHING: {

            return {
                ...state,
                followIsFetching: action.followIsFetching
                    ? [...state.followIsFetching, action.userId]
                    : state.followIsFetching.filter(Id => Id !== action.userId)
            }
        }
    }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (usersCount) => ({type: SET_TOTAL_COUNT, usersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowIsFetching = (followIsFetching, userId) => ({
    type: TOGGLE_FOLLOW_IS_FETCHING,
    followIsFetching,
    userId
});

//Thunk
export const getUsersThunkCreator = (currentPage, currentUsers) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));

        const data = await usersAPI.getUsers(currentPage, currentUsers);

        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
        dispatch(toggleIsFetching(false));

    }
}

export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowIsFetching(true, userId))
        const data = await followAPI.postFollow(userId);

        if (data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowIsFetching(false, userId));

    }
}
export const unfollowThunkCreator = (userId) => async (dispatch) => {
    dispatch(toggleFollowIsFetching(true, userId))
    const data = await followAPI.deleteFollow(userId);

    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowIsFetching(false, userId));
}

export default usersReducer;