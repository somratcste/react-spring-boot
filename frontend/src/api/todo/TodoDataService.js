import axios from "axios";

class TodoDataService {

    retrieveAllTodos() {
        return axios.get('http://localhost:8080/api/todos/');
    }

    retrieveTodo(id) {
        return axios.get(`http://localhost:8080/api/todos/${id}`);
    }

    deleteTodo(id) {
        return axios.delete(`http://localhost:8080/api/todos/${id}`);
    }
}

export default new TodoDataService()