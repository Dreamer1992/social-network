import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar.png";
import {NavLink} from "react-router-dom";
import {getUserAdd, getUsersDelete} from "../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div className={styles.pagination}>
      {pages.map(page => {
        return <span className={props.currentPage === page && styles.selectedPage} key={page} onClick={(e) => {
          props.onPageChanged(page);
        }}>{page}</span>
      })}
    </div>
    {
      props.users.map(user => <div key={user.id} className={styles.userItem}>
        <div>
          <div className={styles.userPhotoWrapper}>
            <NavLink to={'/profile/' + user.id}>
              <img className={styles.userPhoto}
                   src={user.photos.small !== null ? user.photos.small : userPhoto}
                   alt={user.name}/>
            </NavLink>
          </div>
          {user.followed
            ? <button onClick={() => {
              getUsersDelete(user.id).then(response => {
                if (response.data.resultCode === 0) {
                  props.unfollow(user.id)
                }
              })
            }}>Unfollow</button>
            : <button onClick={() => {
              getUserAdd(user.id).then(response => {
                if (response.data.resultCode === 0) {
                  props.follow(user.id);
                }
              });
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
      </div>)
    }
  </div>
}

export default Users;