

import { useDispatch } from 'react-redux';
import AuthService from '../Services/AuthService';
import mainStore from '../Stores/Redux/MainStore';
import { errorMessage } from '../utils/alert/alert';




const authService = new AuthService();
const AccountViewService = () => {

    const dispatch = useDispatch();

    const autologin =() => {
        try {
            const user =  authService.autoLogin();
            if(user)
            {
                dispatch({ type: "login", payload: user });
            }
          
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const login = async () => {

        const { loginModel } = mainStore.getState().account;
        try {
            const user = await authService.login(loginModel);
            dispatch({ type: "login", payload: user });
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const logout = async() => {
        try {
            await authService.logout();
            dispatch({ type: "logout" });
            dispatch({type:"reset"});
        }
        catch (err) {
            errorMessage(err.message);
        }
        dispatch({ type: "logout" });
    }

    return { login, logout,autologin };
}

export default AccountViewService;