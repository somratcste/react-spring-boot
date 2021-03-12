import axios from "axios";

class TodoDataService {

    retrieveAllTodos() {
        return axios.get('http://localhost:8080/api/todos/');
    }
}

export default new TodoDataService()