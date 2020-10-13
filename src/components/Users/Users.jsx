import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          followed: false,
          photoUrl: 'https://cs8.pikabu.ru/avatars/2475/x2475414-1671954292.png',
          fullName: 'Dmitry',
          status: 'I am boss',
          location: {cityName: 'Minsk', country: 'Belarus'}
        },
        {
          id: 2,
          followed: true,
          photoUrl: 'https://cs8.pikabu.ru/avatars/2475/x2475414-1671954292.png',
          fullName: 'Sasha',
          status: 'I am boss 2',
          location: {cityName: 'Moscow', country: 'Russia'}
        },
        {
          id: 3,
          followed: false,
          photoUrl: 'https://cs8.pikabu.ru/avatars/2475/x2475414-1671954292.png',
          fullName: 'Andrew',
          status: 'I am boss 3',
          location: {cityName: 'Kiev', country: 'Ukraine'}
        },
      ]
    )
  }

  return (
    <div>
      {props.users.map(user => <div key={user.id} className={styles.userItem}>
        <div>
          <img className={styles.userPhoto} src={user.photoUrl} alt={user.fullName}/>
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
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </div>
          <div>
            <div>{user.location.country}</div>
            <div>{user.location.cityName}</div>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default Users;