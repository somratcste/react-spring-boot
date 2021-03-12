import axios from "axios";


class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8080/api/auth/hello');
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get(`http://localhost:8080/api/auth/hello-world/path-variable/${name}`);
    }
}

export default new HelloWorldService()