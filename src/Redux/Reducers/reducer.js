import {FETCH_DATA,FETCH_POSTS} from '../Actions/action-type'

const initialState = {
    fetchUsersData: [],
    usersPostsData:[]
}

// fetch user data
export default function fetchUsersData(state = [], action) {
    switch (action.type) {
        case FETCH_DATA:

        return [
                ...state,
                {fetchUsersData: action.data}
            ]            

        default:
            return state
    }


}

// userPostData
export function usersPostsData(state = [], action) {
    switch (action.type) {
        case FETCH_POSTS:

            
            return [
                ...state,
                {usersPostsData: action.data}
            ]            

        default:
            return state
    }


}
