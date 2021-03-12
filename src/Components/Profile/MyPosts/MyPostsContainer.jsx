import * as React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                store=>{
                    const state = store.getState().profilePage;

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    const onPostChange = (text) => {
                        store.dispatch(updateNewPostActionCreator(text))
                    }
                    return(
                        <MyPosts addPostActionCreator={addPost} updateNewPostActionCreator={onPostChange}
                                 posts={state.posts} newPostText ={state.newPostText}/>
                    );
                }
            }
        </StoreContext.Consumer>

    );
}

export default MyPostsContainer;