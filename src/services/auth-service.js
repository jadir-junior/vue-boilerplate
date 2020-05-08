import axios from "axios";
import { config } from "../config/config";

const API_URL = config.API_URL;

class AuthService {
  login(user) {
    const { email, password } = user;

    return axios
      .post(`${API_URL}/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
        }

        return response.data;
      });
  }

  register(user) {
    const { name, email, password } = user;

    return axios
      .post(`${API_URL}/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }
}

export default new AuthService();
