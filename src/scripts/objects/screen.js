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

                    <p>Followers: ${user.followers}</p>
                
                    <br>
                   
                    <p>Following: ${user.following}</p>
                
                </div>

            </div>

        </div>

        `

        let repositoriesItens = ""

        user.repositories.forEach(repo => repositoriesItens += `
            
            <li>
            
            <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>

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

        let creatEventsItem = ""

        user.events.forEach(evnt => creatEventsItem += `
            
            <li>
            
            <a href="${evnt.repo.html_url}" target="_blank"> ${evnt.repo.name} - Sem mensagem de commit </a>

            </li>
            
        `)

        let pushEvents = ""
        user.events.forEach(evnt => pushEvents += `
            
           <li>
            
            <a href="${evnt.repo.html_url}" target="_blank"> ${evnt.repo.name} - Sem mensagem de commit </a>

            </li>
            
        `)

        if (user.events.length > 0) {

            this.userProfile.innerHTML += `
            
            <div class="events section">

                <h2>Events</h2>

                <ul> ${creatEventsItem} </ul>

            </div>            
            
            `
        }

    },

    renderNotFound() {

        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }

}

export { screen }