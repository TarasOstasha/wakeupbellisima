"use strict";
exports.__esModule = true;
var appState = {
    hostName: (location.hostname == 'localhost') ? 'http://localhost/' : '/',
    //header
    header: {
        isLogged: false,
        user: {
            userName: '',
            _id: 'unlogged',
            role: 'user',
            isLogged: false
        }
    },
    portfolioImg: [],
    // for auth component
    state_form: 'login',
    error: {
        dublicate_user: false
    },
    //currentNewProductImg: 'assets/img/sws1.png',
    previews: [
        {
            reader: {
                result: "assets/400x300.png"
            }
        }
    ]
};
exports["default"] = appState;
