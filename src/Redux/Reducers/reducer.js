import {FETCH_DATA,FETCH_POSTS} from '../Actions/action-type'

const initialState = {
    fetchUsersData: [],
    usersPostsData:[]
}

export default function fetchUsersData(state = [], action) {
    switch (action.type) {
        case FETCH_DATA:
        console.log('fetch user data reducer',state)
        return {
                ...state,
                fetchUsersData: action.data
        }         
        
        case FETCH_POSTS:
 
            return {
                ...state,
                usersPostsData: action.data
            };     

        default:
            return state
    }

}

// userPostData
// export function usersPostsData(state = initialState , action) {
//     switch (action.type) {
//         case FETCH_DATA:
//         console.log('fetch user data reducer',state)
//         return {
//                 ...state,
//                 fetchUsersData: action.data
//         }         
        
//         case FETCH_POSTS:
 
//             return {
//                 ...state,
//                 usersPostsData: action.data
//             };     

//         default:
//             return state
//     }
// }
