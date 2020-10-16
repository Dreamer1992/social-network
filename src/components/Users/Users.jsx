import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default_avatar.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                withCredential: true,
                headers: {
                  'API-KEY': '49868490-96c7-4528-94fc-999e9e5ae9c5'
                }
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.follow(user.id);
                  }
                });
            }}>Follow</button>
            : <button onClick={() => {
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                withCredentials: true,
                headers: {
                  'API-KEY': '49868490-96c7-4528-94fc-999e9e5ae9c5'
                }
              })
                .then(response => {
                  if(response.data.resultCode !== 0) {
                    props.unfollow(user.id)
                  }
                })
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