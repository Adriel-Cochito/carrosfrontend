import axios from 'axios';

class LoginService {
 logar (user: string, password: string) {
    return axios.post('http://localhost:8080/api/usuarios/login', { email: user, password: password });
  }
}

export default LoginService;
