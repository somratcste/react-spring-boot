class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
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
}

export default new AuthenticationService()