import axios from "axios";

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        let basicAuthHeader = 'somrat'
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(basicAuthHeader);
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

    setupAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService()