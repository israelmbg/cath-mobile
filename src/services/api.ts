import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cath-api.herokuapp.com',
});

export default api;
