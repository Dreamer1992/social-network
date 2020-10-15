import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar.png";

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
            <img className={styles.userPhoto}
                 src={user.photos.small !== null ? user.photos.small : userPhoto}
                 alt={user.name}/>
          </div>
          {user.followed
            ? <button onClick={() => {
              props.unfollow(user.id)
            }}>Follow</button>
            : <button onClick={() => {
              props.follow(user.id)
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

export default Users;