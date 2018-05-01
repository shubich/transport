import axios from 'axios';
import { HOST, PORT } from './config';

export default {
  signup(data) {
    return axios.post(`${HOST}:${PORT}/auth/signup`, data);
  },
  signin(credentials) {
    return axios.post(`${HOST}:${PORT}/auth/signin`, credentials);
  },
};
