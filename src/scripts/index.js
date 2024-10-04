import { getUser } from "/src/scripts/services/user.js"
import { getRepositories } from "/src/scripts/services/repositories.js"

import { user } from "/src/scripts/objects/user.js"
import { screen } from "/src/scripts/objects/screen.js"

//*buscando clicando no botão
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value

    if (validateEmptyInput(userName)) return

    getUserData(userName)
})

//*buscando com a tecla enter
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
    
        if(validateEmptyInput(userName)) return
    
        getUserData(userName)
    }
})

function validateEmptyInput(userName) {
    
    if (userName.length === 0) {
        
        alert('Preencha o campo com o nome do usuário do GitHub')

        return true
    }    

}

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)


    // getUser(userName).then(userData => {

    //     console.log(userData);


    //     let userInfo = `

    //     <div class="info">
    //         <img src="${userData.avatar_url}" alt="Foto do Perfil">

    //         <div class="data">

    //             <h1>${userData.name ?? 'Não possui nome cadastrado 😓'}</h1>

    //             <p>${userData.bio ?? 'Não possui bio cadastrada 😓'}</p>

    //         </div>

    //     </div>

    //     `

    //     document.querySelector('.profile-data').innerHTML = userInfo

    //     getUserRepositories(userName)
    // })

}

// function getUserRepositories(userName) {

//     getRepositories(userName).then(reposData => {

//         let repositoriesItens = ""

//         reposData.forEach(repo => {

//             repositoriesItens += `
            
//             <li>
            
//             <a href="${repo.html_url}" target="_blank"> ${repo.name}</a> 
            
//             </li>
            
//             `
//         });

//         document.querySelector('.profile-data').innerHTML += `
        
//         <div class="repositories section">

//             <h2>Repositories</h2>

//             <ul>
            
//                 <li>${repositoriesItens}</li>
            
            
//             </ul>

//         </div>

//         `
//     })
// }

