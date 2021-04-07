import axios from "axios";
import {API_URL} from "../../Constants";

class TodoDataService {

    retrieveAllTodos() {
        return axios.get(`${API_URL}/api/todos/`);
    }

    retrieveTodo(id) {
        return axios.get(`${API_URL}/api/todos/${id}`);
    }

    deleteTodo(id) {
        return axios.delete(`${API_URL}/api/todos/${id}`);
    }

    updateTodo(id, todo) {
        return axios.put(`${API_URL}/api/todos/${id}`, todo);
    }

    createTodo(todo) {
        return axios.post(`${API_URL}/api/todos/`, todo);
    }
}

export default new TodoDataService()