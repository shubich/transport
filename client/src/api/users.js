import axios from 'axios';
import { HOST, PORT } from './config';

export default {
  getUsers() {
    return axios.get(`${HOST}:${PORT}/user/all`);
  },
};
