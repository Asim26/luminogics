import {combineReducers} from 'redux'
import fetchUsersData from './reducer'
import usersPostsData from './reducer'

export default combineReducers({
    fetchUsersData, usersPostsData
})