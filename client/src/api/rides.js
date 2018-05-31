import axios from 'axios';
import { HOST, PORT } from './config';

export default {
  getUserRides() {
    return axios.get(`${HOST}:${PORT}/ride/user-all`);
  },
  addRide(data) {
    return axios.post(`${HOST}:${PORT}/ride`, data);
  },
};
