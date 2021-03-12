import React, {Component} from 'react'
import TodoDataService from "../../api/todo/TodoDataService";

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            message: null
        }
    }

    componentDidMount() {
        this.refreshTodos()
    }

    deleteTodoClicked = id => {
        TodoDataService.deleteTodo(id)
            .then(
                response => {
                    this.setState({
                        todos: response.data,
                        message: `Delete of todo ${id} is Successful!`
                    })
                }
            )
    }

    refreshTodos() {
        TodoDataService.retrieveAllTodos()
            .then(
                response => {
                    this.setState({
                        todos: response.data
                    })
                }
            )
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
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

export default ListTodosComponent