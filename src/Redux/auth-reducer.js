import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH = "SET_USER_AUTH";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_AUTH,
    payload: {userId, login, email, isAuth}
});

export const authMeThunkCreator = () => async (dispatch) => {
    const data = await authAPI.getAuthMe();

    if (data.resultCode === 0) {
        const {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }

}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
        dispatch(authMeThunkCreator());
    } else {
        const message = data.messages.length > 0 ? data.messages[0] : "Other error";
        dispatch(stopSubmit("login", {_error: message}));
    }

}

export const logoutThunkCreator = () => async (dispatch) => {
    const data = await authAPI.logout()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}
export default authReducer;