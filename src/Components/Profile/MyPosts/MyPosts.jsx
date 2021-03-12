import s from './MyPost.module.css';
import Post from "./Posts/Post";
import * as React from "react";


const MyPosts = (props) => {
    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPostActionCreator();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostActionCreator(text);
    }

    const postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}
                                                                              dislike={p.dislikesCount}/>);
    return (
        <div className={s.my_posts}>
            My posts
            <div className={s.enter_new_post}>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}
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