import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus = {props.updateProfileStatus}
                         setUserProfileStatus = {props.setUserProfileStatus}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;