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

                    <p>🍴${repo.forks_count}</p>                   
                    <p>🌟${repo.stargazers_count}</p>
                    <p>👀${repo.watchers_count}</p>
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

        let eventsItems = '';

        user.events.forEach(event => {

            if (event.type === 'PushEvent') {

                eventsItems += `
                
                <li class="container events">${event.repo.name} - ${event.payload.commits[0]?.message ?? 'No commits'}
                </li>

                `;

            } else if (event.type === 'CreateEvent') {

                eventsItems += `
                
                <li class="container events">${event.repo.name} - No commits</li>

                `;
            }

        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                <h2>Events</h2>
                <ul>${eventsItems}</ul>
            </div>`;
        }
    },

    renderNotFound() {

        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }

}

export { screen }