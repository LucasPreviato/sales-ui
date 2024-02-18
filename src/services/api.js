import axios from 'axios';

const BASE_URL = 'https://api.plugg.to';
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const api = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

export default api;