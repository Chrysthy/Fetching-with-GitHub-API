async function user() {

    const response = await fetch('https://api.github.com/users/chrysthy')

    return await response.json()

}

function getUserProfile() {
    
    user().then(userData => {

        console.log(userData);
        

    })  

}


getUserProfile()



