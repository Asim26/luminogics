 
export const getUserAsync =  () => {
    console.log('Fuction Called')
    return  fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(async (response)=> {
            console.log(response);
            return response.json()
        })
    .catch(err=> {
        console.log(err);
    })
}  

// export default getUserAsync;