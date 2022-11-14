import axios from "axios";

const URL_BASE_API = import.meta.env.VITE_URL_BASE_API;

export const ApiRequest = axios.create({
  baseURL: URL_BASE_API,
  headers: { "Content-Type": "application/json" },
});

const validResponseFormat = /[2]\d\d/;

ApiRequest.interceptors.response.use((response, error) => {
  if (!validResponseFormat.test(response.status)) {
    return Promise.reject(error);
  }
  return response.data;
});
