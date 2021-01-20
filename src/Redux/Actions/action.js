import {FETCH_DATA,FETCH_POSTS} from './action-type'

export const fetchUsers =(data)=>{

    return {
        type:FETCH_DATA,
        data:data
    }
}

export const fetchPosts =(data)=>{
  
    return {
        type:FETCH_POSTS,
        data:data
    }
}