import { useDispatch, useSelector } from "react-redux"
import pawfulApi from "../api/pawfulApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth)

    const dispath = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispath(onChecking())

        try {
            const { data } = await pawfulApi.post('/auth/login', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispath(onLogin({ email: data.user.email, uid: data.user.id, token: data.token }))

            // console.log(data)
        } catch (error) {
            dispath(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispath(clearErrorMessage());
            }, 10)

        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispath(onLogout());

        try {
            const { } = pawfulApi.get('/auth/renew');
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispath(onLogin({ name: data.name, uid: data.id }))
        } catch (error) {
            localStorage.clear();
            dispath(onLogout());

        }
    }

    return {
        //Propiedades
        status,
        user,
        errorMessage,

        //Metodos
        checkAuthToken,
        startLogin,
    }
}