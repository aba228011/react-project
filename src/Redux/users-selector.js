import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

//**** this used library reselect
export const getUsers = createSelector( getUsersSelector,
    (users)=>{
        return users.filter(u=>true);
    }
)
//******************************
export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}
export const getCurrentUsers = (state) => {
    return state.usersPage.currentUsers;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowIsFetching = (state) => {
    return state.usersPage.followIsFetching;
}