import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api_url = 'https://e8e5d9f3-afdd-475d-97e4-23a0480d33dd-dev.e1-us-east-azure.choreoapis.dev/pythonreactfullstack/backend-nwg/rest-api-be2/v1.0';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : api_url,
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
