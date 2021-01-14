import {baseUrl } from '../Utilities/constants';

//Home Data
export const getUserAsync =  () => {
    let URL = baseUrl + '/users'
    console.log('Fuction Called')
    return  fetch(URL)
            .then(async (response)=> {
            console.log(response);
            return response.json()
        })
    .catch(err=> {
        console.log(err);
    })
}  

