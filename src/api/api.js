import * as axios from "axios";


const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY": "62a543f0-a341-46f0-b10c-ac6a49a9c976"
        }
    }
)

export const usersAPI = {
    getUsers(currentPage, currentUsers){
        return instance.get(`users?page=${currentPage}&count=${currentUsers}`).then(response => response.data);
    }
}

export const followAPI = {
    deleteFollow(userId){
        return instance.delete(`follow/${userId}`).then(response => response.data);
    },
    postFollow(userId){
        return instance.post(`follow/${userId}`).then(response => response.data);
    }
}

export const authAPI = {
    getAuthMe(){
        return instance.get("auth/me").then(response => response.data);
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe
        }).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}

export const profileAPI = {
    getProfileId(userId){
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getProfileStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateProfileStatus(status){
        return instance.put(`profile/status`, { status: status}).then(response => response.data);
    }
}