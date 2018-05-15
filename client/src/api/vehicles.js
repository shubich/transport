import axios from 'axios';
import { HOST, PORT } from './config';

export default {
  getVehicles() {
    return axios.get(`${HOST}:${PORT}/vehicle/all`);
  },
  getVehicle(id) {
    return axios.get(`${HOST}:${PORT}/vehicle/${id}`);
  },
  addVehicle(data) {
    return axios.post(`${HOST}:${PORT}/vehicle`, data);
  },
  editVehicle(data) {
    return axios.put(`${HOST}:${PORT}/vehicle`, data);
  },
  deleteVehicle(id) {
    return axios.delete(`${HOST}:${PORT}/vehicle`, { data: { id } });
  },
};
