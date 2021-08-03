import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    }

    activateStatus = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateStatus = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {
        return <div>
            Status:
            {
                this.state.editMode
                    ? <input type="text" value={this.state.status} onChange={this.onStatusChange}
                             onBlur={this.deactivateStatus} autoFocus={true}/>
                    : <span onDoubleClick={this.activateStatus}>{this.props.status}</span>
            }
        </div>
    }
}

export default ProfileStatus;