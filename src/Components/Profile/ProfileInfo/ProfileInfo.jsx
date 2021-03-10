import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profile__img}
                     src="https://s-zametki.ru/wp-content/uploads/2018/08/Test-na-kosmonavta-vzyali-by-vas-v-kosmonavty-ili-net-projdite-test-chtoby-uznat.jpg"
                     alt="space"/>
            </div>
            <div>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;