import React from "react"
import {follow, requestUsers, setCurrentPage, unfollow} from "../../store/reducers/usersReducer"
import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"
import {UserType} from "../../types/types"
import {AppStateType} from "../../store/reduxStore"
import {compose} from "redux"
import {connect} from "react-redux"
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../store/selectors/usersSelectors"

type MapStateToPropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void
  setCurrentPage: (pageNumber: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type OwnPropsType = {
  title: string
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      <h1>{this.props.title}</h1>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    requestUsers
  })
// @ts-ignore
)(UsersContainer)
