import React, {Component} from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'nazmul',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                <button>Login</button>
            </>
        )
    }
}

export default TodoApp