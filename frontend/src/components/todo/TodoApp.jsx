import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

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
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
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
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>{todo.done.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
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
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
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
        return <div>
            Welcome in {this.props.match.params.name}
            You can manage your todos <Link to="/todos">here</Link>
        </div>
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
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
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