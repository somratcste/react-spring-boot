import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from "./AuthenticationService";

class TodoApp extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <HeaderComponent />
                        <Switch>
                            <Route exact path="/" component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTodosComponent} />
                            <Route path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                {id: 2, description: 'Learn Java', done: false, targetDate: new Date()},
                {id: 3, description: 'Learn Full Stack', done: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.somrat.info" className="navbar-brand">Github</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/nazmul">Home</Link></li>
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" onClick={AuthenticationService.logout} to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2021.</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out!</h1>
                <div className="container">
                    Thank you for Using our Application.
                </div>
            </>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>
        )
    }
}

function ErrorComponent () {
    return <div>An error occured! Please contact support.</div>
}

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
        // nazmul, dummy
        if (this.state.username === 'nazmul' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({
                hasLoginFailed: true,
                showSuccessMessage: false
            })
        }
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

function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null;
}

function ShowLoginSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Login Successful</div>
    }
    return null;
}

export default TodoApp