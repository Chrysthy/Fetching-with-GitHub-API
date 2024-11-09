const screen = {

    userProfile: document.querySelector('.profile-data'),

    renderUser(user) {

        this.userProfile.innerHTML = `

        <div class="info">

            <img src="${user.avatarUrl}" alt="Foto do Perfil">

            <div class="data">

                <h1>${user.name ?? 'Não possui nome cadastrado 😓'}</h1>

                <p>${user.bio ?? 'Não possui bio cadastrada 😓'}</p>

                <br>

                <div class="follow">

                    <p>👥 Followers: ${user.followers}</p>
                
                    <br>
                   
                    <p>👣 Following: ${user.following}</p>
                
                </div>

            </div>

        </div>

        `

        let repositoriesItens = ""

        user.repositories.forEach(repo => repositoriesItens += `
            
            <li>
            
                <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>

                <div class="container">

                    <p>🍴${repo.forks_count ?? 'No Forks'}</p>                   
                    <p>🌟${repo.stargazers_count ?? 'No Stars'}</p>
                    <p>👀${repo.watchers_count ?? 'No Watchers'}</p>
                    <p>💻${repo.language ?? 'No Language'}</p>
                    
                </div>
            
            </li>
            
            `)

        if (user.repositories.length > 0) {

            this.userProfile.innerHTML += `
            
            <div class="repositories section">

                <h2>Repositories</h2>               

                <ul> ${repositoriesItens} </ul>

            </div>            
            
            `
        }

        let eventsItem = ""

        user.events.forEach(element => {

            if (element.type === 'PushEvent') {

                eventsItem += `

                <li>
                
                    <h3> ${element.repo.name}</h3>
                
                    <p> -- ${element.payload.commits[0].message}</p>
                      
                </li>`

            } else {

                eventsItem += `
                
                <li>
                
                    <h3> ${element.repo.name}</h3>
                
                    <p> -- ${element.payload.ref_type}</p>
                      
                </li>            
                                
                `
            }

        })


    },

    renderNotFound() {

        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }

}

export { screen }