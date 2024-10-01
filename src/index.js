async function user() {

    const response = await fetch('https://api.github.com/users/chrysthy')

    return await response.json()

}



