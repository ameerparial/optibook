import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL + "/api";

console.log({ apiUrl });

const API = axios.create({
  baseURL: apiUrl,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
