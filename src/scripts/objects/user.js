const user = {

    avatarUrl: '',
    name: '',
    bio: '',
    username: '',
    followers: '',
    following: '',

    repositories: [],

    //*criando o método
    setInfo(gitHubUser) {

        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.username = gitHubUser.loging
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },

    setRepositories(repositories) {

        this.repositories = repositories
    }

}

export { user }
