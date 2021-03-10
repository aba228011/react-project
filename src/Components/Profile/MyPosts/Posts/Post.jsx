import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'/>
                <div>
                    {props.message}
                </div>
            </div>
            <div className={s.actions}>
                <div className="like">{props.like} <img
                    src="https://www.flaticon.com/svg/vstatic/svg/633/633759.svg?token=exp=1615003913~hmac=691f327959adfc403844e97f4a4a14ea"
                    alt="like"/></div>
                <div className="dislike">{props.dislike} <img
                    src="https://www.flaticon.com/svg/vstatic/svg/633/633758.svg?token=exp=1615003965~hmac=45b79d22a59117306cb3327f2c7dc80d"
                    alt="dislike"/></div>
            </div>
        </div>
    );
}

export default Post;