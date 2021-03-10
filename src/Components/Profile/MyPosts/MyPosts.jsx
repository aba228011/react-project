import s from './MyPost.module.css';
import Post from "./Posts/Post";
import * as React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {
    const newPostElement = React.createRef();

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text))
    }

    const postsElements = props.profileState.profilePage.posts.map(p => <Post message={p.message} like={p.likesCount}
                                                                              dislike={p.dislikesCount}/>);
    return (
        <div className={s.my_posts}>
            My posts
            <div className={s.enter_new_post}>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.profileState.profilePage.newPostText}
                          placeholder="Hi! This you can write your opinion :)"/>
                <button onClick={addPost}>Add</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;