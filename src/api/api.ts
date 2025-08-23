import axios from "axios";
import { API_KEY, API_URL } from "./config";
import { UsersResponse } from "./interfaces";

const api = axios.create({ baseURL: API_URL });
const apiKey = API_KEY;

api.interceptors.request.use((config) => {
  config.headers.set('x-api-key', apiKey);
  return config;
});

interface LoginInterface {
    email: string;
    username?: string;
    password: string;
}
export async function login(body: LoginInterface) {
  return api.post("/api/login", body);
}

interface RegisterInterface {
    email: string;
    username?: string;
    password: string;
}

export async function register(body: RegisterInterface) {
  return api.post("/api/register", body);
}

export async function listUsers(page: number = 1) {
  return api.get<UsersResponse>(`/api/users?page=${page}`);
}

export async function deleteUser(id: number) {
  return api.delete(`/api/users/${id}`);
}