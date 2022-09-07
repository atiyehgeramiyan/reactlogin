

const initialAccountstate = {

    isUserOnline: false,
    loginModel:{username:"",password:""},
    user:null

}

const AccountReducer = (state = initialAccountstate, action) => {

    switch (action.type) {

        case "login":
            {
                return { ...state, isUserOnline: true ,user:action.payload}
            }
        case "logout":
            {
                return { ...state, isUserOnline: false }
            }
        default:
            {
                return state;
            }
    }

}

export default AccountReducer;