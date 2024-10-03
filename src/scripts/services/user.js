async function user(userName) {

    const response = await fetch(`${baseUrl}/${userName}`)

    return await response.json()

}