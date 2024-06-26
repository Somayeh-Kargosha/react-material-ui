import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const httpService = axios.create({
  baseURL: BASE_URL,
});

export { httpService };
