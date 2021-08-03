import React from "react";

const ProfileStatusWithHooks = (props) => {

    const [editmode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status);


    const activateStatus = () => {
        setEditMode(true);
    }
    const deactivateStatus = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    React.useEffect(
        () => {
            setStatus(props.status);
        },
        [props.status]
    )

    return <div>
        Status:
        {
            editmode
                ? <input type="text" value={status} onChange={onStatusChange}
                         onBlur={deactivateStatus} autoFocus={true}/>
                : <span onDoubleClick={activateStatus}>{status}</span>
        }
    </div>

}

export default ProfileStatusWithHooks;