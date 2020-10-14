import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar.png";
import * as axios from "axios";

class UsersC extends React.Component {
  componentDidMount () {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items)
    });
  }

  render() {
    return <div>
      {
        this.props.users.map(user => <div key={user.id} className={styles.userItem}>
          <div>
            <div className={styles.userPhotoWrapper}>
              <img className={styles.userPhoto}
                   src={user.photos.small !== null ? user.photos.small : userPhoto}
                   alt={user.name}/>
            </div>
            {user.followed
              ? <button onClick={() => {
                this.props.unfollow(user.id)
              }}>Follow</button>
              : <button onClick={() => {
                this.props.follow(user.id)
              }}>Unfollow</button>
            }
          </div>
          <div className={styles.userItemInfo}>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{'user.location.country'}</div>
              <div>{'user.location.cityName'}</div>
            </div>
          </div>
        </div>)
      }
    </div>
  }
}

export default UsersC;