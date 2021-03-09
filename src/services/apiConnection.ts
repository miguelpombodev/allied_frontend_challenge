import axios from 'axios';

const api = axios.create({
  baseURL: 'http://private-59658d-celulardireto2017.apiary-mock.com/',
});

export default api;
