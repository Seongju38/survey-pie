import axios from 'axios';

const mainApi = axios.create({
  baseURL: 'http://localhost:3001',
});

export default mainApi;
