const user = {

    avatarUrl: '',
    name: '',
    bio: '',
    username: '',

    repositories: [],

    //*criando o método
    setInfo(gitHubUser) {

        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.username = gitHubUser.loging
    },

    setRepositories(repositories) {

    }

}

