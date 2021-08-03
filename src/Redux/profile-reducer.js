import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'My name is Kong! I hate Space', likesCount: 13, dislikesCount: 3},
        {id: 2, message: 'It`s cool! I love Space', likesCount: 39, dislikesCount: 0},
        {id: 3, message: 'I know what is Erbakyt lox', likesCount: 999, dislikesCount: 0}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0,
                dislikesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.userProfile
            }
        }
        case SET_USER_PROFILE_STATUS: {
            return {
                ...state,
                status: action.userStatus
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setUserProfileStatus = (userStatus) => ({type: SET_USER_PROFILE_STATUS, userStatus});

export const getProfileThunkCreator = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfileId(userId);
    dispatch(setUserProfile(data));

}
export const getProfileStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfileStatus(userId)

    dispatch(setUserProfileStatus(data));

}
export const updateProfileStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateProfileStatus(status);

    if (data.resultCode === 0) {
        dispatch(setUserProfileStatus(status));
    }

}


export default profileReducer;