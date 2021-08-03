import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            <div>
                {
                    props.profile ?
                        <div>
                            {props.profile.photos.large ? <img src={props.profile.photos.large} alt="Profile"/> : null}
                            {props.profile.aboutMe ? <div>{props.profile.aboutMe}</div> : null}
                        </div>
                        : null
                }
                <ProfileStatusWithHooks status={props.status} updateProfileStatus = {props.updateProfileStatus}
                               setUserProfileStatus = {props.setUserProfileStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;