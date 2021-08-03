import s from './Users.module.css';
import defaultImgUser from "../../img/defaultUserPhoto.png";
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let countPages = Math.ceil(props.totalCount / props.currentUsers);

    let pages = [];
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    return (
        <div className={s.usersPage}>
            <div className={s.title}>Users</div>
            <div>
                {
                    pages.map(p => {
                        if (p === props.currentPage && props.currentPage === pages[0] && props.currentPage < pages[pages.length - 1]) {
                            return <span key={p}>
                                <span className={s.activeClass}>{props.currentPage}</span>
                                <span> ... </span>
                                <span
                                    onClick={() => props.onChangePage(pages[pages.length - 1])}>{pages[pages.length - 1]} </span>
                                <button onClick={() => props.onChangePage(p + 1)}>Next</button>
                            </span>
                        } else if (p === props.currentPage && props.currentPage === pages[pages.length - 1]) {
                            return <span key={p}>
                                <button onClick={() => props.onChangePage(p - 1)}>Previous</button>
                                <span onClick={() => props.onChangePage(pages[0])}>{pages[0]} </span>
                                <span> ... </span>
                                <span className={s.activeClass}>{props.currentPage}</span>
                            </span>
                        } else if (p === props.currentPage && props.currentPage > pages[0] && props.currentPage < pages[pages.length - 1]) {
                            return <span key={p}>
                                <button onClick={() => props.onChangePage(p - 1)}>Previous</button>
                                <span onClick={() => props.onChangePage(pages[0])}>{pages[0]} </span>
                                <span> ... </span>
                                <span className={s.activeClass}>{props.currentPage}</span>
                                <span> ... </span>
                                <span
                                    onClick={() => props.onChangePage(pages[pages.length - 1])}>{pages[pages.length - 1]} </span>
                                <button onClick={() => props.onChangePage(p + 1)}>Next</button>
                            </span>
                        }
                        else{
                            return null;
                        }
                    })
                }
            </div>
            {
                props.users.map(u => {
                    return <div className={s.usersWrapper} key={u.id}>
                        <div>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={
                                        u.photos.small == null ?
                                            defaultImgUser : u.photos.small
                                    } alt={u.name}/>
                                </NavLink>
                            </div>
                            {
                                u.followed ? <button className={s.usersFollow}
                                                     disabled={props.followIsFetching.some(id => id === u.id)}
                                                     onClick={() => {
                                                         props.unfollowThunkCreator(u.id)
                                                     }}>Unfollow</button>
                                    : <button className={s.usersFollow}
                                              disabled={props.followIsFetching.some(id => id === u.id)}
                                              onClick={() => {
                                                  props.followThunkCreator(u.id)
                                              }}>Follow</button>
                            }
                        </div>
                        <div className={s.usersItem}>
                            <div>
                                <div className={s.usersName}>{u.name}</div>
                                <div className={s.usersDescr}>{u.status}</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Users;