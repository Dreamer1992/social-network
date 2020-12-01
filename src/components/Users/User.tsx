import React from "react"
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/default_avatar.png"
import {NavLink} from "react-router-dom"
import {UserType} from "../../types/types";

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {
  return (
    <div key={user.id} className={styles.userItem}>
      <div>
        <div className={styles.userPhotoWrapper}>
          <NavLink to={'/profile/' + user.id}>
            <img className={styles.userPhoto}
                 src={user.photos.small !== null ? user.photos.small : userPhoto}
                 alt={user.name}/>
          </NavLink>
        </div>
        {user.followed
          ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            unfollow(user.id);
          }}>Unfollow</button>
          : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
            follow(user.id);
          }}>Follow</button>
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
    </div>
  )
}

export default User
