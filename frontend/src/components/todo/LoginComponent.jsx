import AuthenticationService from "./AuthenticationService";
import React, {Component} from 'react'

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'nazmul',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = event => {
        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }). catch(() => {
            this.setState({
                hasLoginFailed: true,
                showSuccessMessage: false
            })
             })

        // nazmul, dummy
        // if (this.state.username === 'nazmul' && this.state.password === 'dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // } else {
        //     this.setState({
        //         hasLoginFailed: true,
        //         showSuccessMessage: false
        //     })
        // }
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />*/}
                    {this.state.hasLoginFailed && <div className="alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </>
        )
    }
}

export default LoginComponent