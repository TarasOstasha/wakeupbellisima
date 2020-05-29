const appState = {
    hostName: (location.hostname == 'localhost') ? 'http://localhost/' : '/',
    //header
    header: {
        isLogged: false,
        user: {
            userName: '',
            _id: 'unlogged',
            role: 'user',
            isLogged: false
        },
    },
    portfolioImg: []


}





export default appState;