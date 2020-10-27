import React, {useEffect, useState} from 'react';

const ProfileStatusWithHook = (props) => {
  let [editMode, setEditMode] = useState(false);

  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode
        ? <div>
          <b>Status</b>: <span onDoubleClick={activateEditMode}>{props.status || 'Write the status'}</span>
        </div>
        : <div>
          <b>Status</b>: <input type="text"
                 autoFocus={true}
                 onBlur={deactivateEditMode}
                 onChange={onStatusChange}
                 value={status}/>
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHook;