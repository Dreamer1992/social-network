import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/default_avatar.png';
import {NavLink} from 'react-router-dom';
import Pagination from '../common/Pagination/Pagination';

let Users = (props) => {
  return <div>
    <Pagination totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
    />
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
            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
              props.unfollow(user.id);
            }}>Unfollow</button>
            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
              props.follow(user.id);
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