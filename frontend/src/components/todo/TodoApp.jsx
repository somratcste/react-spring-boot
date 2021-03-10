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
    render() {
        return (
            <>
                User Name: <input type="text" name="username" />
                Password: <input type="text" name="password" />
                <button>Login</button>
            </>
        )
    }
}

export default TodoApp