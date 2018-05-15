import axios from 'axios';
import { HOST, PORT } from './config';

export default {
  getStops() {
    return axios.get(`${HOST}:${PORT}/stop/all`);
  },
  addStop(data) {
    return axios.post(`${HOST}:${PORT}/stop`, data);
  },
  editStop(data) {
    return axios.put(`${HOST}:${PORT}/stop`, data);
  },
  deleteStop(name) {
    return axios.delete(`${HOST}:${PORT}/stop`, { data: { name } });
  },
};
