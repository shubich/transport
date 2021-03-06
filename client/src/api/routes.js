import axios from 'axios';
import { HOST, PORT } from './config';

export default {
  getRoutes() {
    return axios.get(`${HOST}:${PORT}/route/all`);
  },
  getRoute(id) {
    return axios.get(`${HOST}:${PORT}/route/${id}`);
  },
  addRoute(data) {
    return axios.post(`${HOST}:${PORT}/route`, data);
  },
  editRoute(data) {
    return axios.put(`${HOST}:${PORT}/route`, data);
  },
  deleteRoute(id) {
    return axios.delete(`${HOST}:${PORT}/route`, { data: { id } });
  },
  getRoutesByStops(data) {
    return axios.post(`${HOST}:${PORT}/route/by-stops`, data);
  },
};
