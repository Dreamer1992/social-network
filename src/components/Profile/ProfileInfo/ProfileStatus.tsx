import React, {ChangeEvent} from "react"

type PropsType = {
  status: string
  updateUserStatus: (status: string) => void
}

type StateType = {
  editMode: boolean
  status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })

    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode
          ? <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Write the status'}</span>
          </div>

          : <div>
            <input type="text"
                   onChange={this.onStatusChange}
                   onBlur={this.deactivateEditMode}
                   autoFocus={true}
                   value={this.state.status}/>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;
