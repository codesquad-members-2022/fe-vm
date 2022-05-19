import axios from 'axios';

const baseURL = 'http://localhost:3005';

const axiosRequest = axios.create({
  baseURL: baseURL,
  timeout: 2000,
});

export default axiosRequest;
