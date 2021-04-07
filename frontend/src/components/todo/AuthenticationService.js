import axios from "axios";
import {API_URL} from "../../Constants";

export const TOKEN_SESSION_ATTRIBUTE_NAME = 'token'

class AuthenticationService {

    registerSuccessfulLoginForJwt(token) {
        sessionStorage.setItem(TOKEN_SESSION_ATTRIBUTE_NAME, token);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    createJWTToken(token) {
        return 'Bearer ' + token;
    }

    logout() {
        sessionStorage.removeItem(TOKEN_SESSION_ATTRIBUTE_NAME)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
        if (user === null) {
            return false;
        }
        return true;
    }

    getLoggedInToken() {
        let token = sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE_NAME)
        if (token === null) {
            return '';
        }
        return token;
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/api/auth/signin`, {
            username,
            password
        })
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService()