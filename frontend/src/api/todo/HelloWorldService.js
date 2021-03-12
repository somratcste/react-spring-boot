import axios from "axios";


class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/api/auth/hello');
    }
}

export default new HelloWorldService()