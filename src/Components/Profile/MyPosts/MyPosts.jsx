import s from './MyPost.module.css';
import Post from "./Posts/Post";
import * as React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormControls/FormControls";
import {maxLength, required} from "../../../utils/validators/validators";

const maxLength50 = maxLength(50);

const NewPostForm = (props) => {
    return <form className={s.enter_new_post} onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"newPostText"}
               placeholder="Hi! This you can write your opinion :)"
               validate={[required, maxLength50]}
        />
        <button>Add</button>
    </form>
}

const NewPostFormRedux = reduxForm({
    form: 'newPost'
})(NewPostForm)

const MyPosts = (props) => {

    const addPost = (value) => {
        props.addPostActionCreator(value.newPostText);
    }

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.likesCount}
                                                     dislike={p.dislikesCount}/>);

    return (
        <div className={s.my_posts}>
            My posts
            <NewPostFormRedux onSubmit={addPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;