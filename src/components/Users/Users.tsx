import React from 'react'
import Pagination from '../common/Pagination/Pagination'
import {UserType} from "../../types/types"
import User from "./User"

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  user?: UserType
}

let Users: React.FC<PropsType> = ({
                                    totalUsersCount,
                                    pageSize,
                                    currentPage,
                                    onPageChanged,
                                    users,
                                    ...props
                                  }) => {
  return <div>
    <Pagination totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}/>
    {
      users.map(user => <User
        key={user.id}
        user={user}
        followingInProgress={props.followingInProgress}
        follow={props.follow}
        unfollow={props.unfollow}
        />
      )
    }
  </div>
}

export default Users
