import axios from "axios";
require('dotenv').config({path: '../../.env'})

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND,
});

export default api;
