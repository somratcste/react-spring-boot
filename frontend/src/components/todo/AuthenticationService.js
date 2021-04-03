import axios from "axios";

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors();
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return false;
        }
        return true;
    }

    getLoggedInUserName() {
        let userName = sessionStorage.getItem('authenticatedUser')
        if (userName === null) {
            return '';
        }
        return userName;
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = 'somrat'
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService()