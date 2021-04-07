import axios from "axios";

class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        let basicAuthHeader = 'somrat'
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(basicAuthHeader);
    }

    registerSuccessfulLoginForJwt(token) {
        sessionStorage.setItem('authenticatedUser', token);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    createJWTToken(token) {
        return 'Bearer ' + token;
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

    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/api/auth/signin', {
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