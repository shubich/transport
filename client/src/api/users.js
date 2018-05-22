import axios from 'axios';
import { HOST, PORT } from './config';

export default {
  getUsers() {
    return axios.get(`${HOST}:${PORT}/user/all`);
  },
  putMoney(data) {
    return axios.put(`${HOST}:${PORT}/user/put-money`, data);
  },
  getMe() {
    return axios.get(`${HOST}:${PORT}/user/me`);
  },
};
