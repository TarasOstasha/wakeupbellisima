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
    portfolioImg: [],
    // for auth component
    state_form: 'login',
    error: {
        dublicate_user: false
    }


}





export default appState;