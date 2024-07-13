import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: 'user', 
    password: '1cd94260-2570-496a-92c8-c28855c7d217', 
  },
//   withCredentials: true,
});

export default axiosInstance;
