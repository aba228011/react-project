import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' alt="Post"/>
                <div>
                    {props.message}
                </div>
            </div>
            <div className={s.actions}>
                <div className="like">{props.like} 	&#9785;</div>
                <div className="dislike">{props.dislike} &#9786;</div>
            </div>
        </div>
    );
}

export default Post;