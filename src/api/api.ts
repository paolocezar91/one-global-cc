import axios from "axios";
import { API_KEY, API_URL } from "./config";
import { UsersResponse, UserResponse } from "./interfaces";

const api = axios.create({ baseURL: API_URL });
const apiKey = API_KEY;

api.interceptors.request.use((config) => {
  config.headers.set('x-api-key', apiKey);
  return config;
});

interface LoginData {
    email: string;
    username?: string;
    password: string;
}
export async function login(body: LoginData) {
  return api.post("/api/login", body);
}

interface RegisterData {
    email: string;
    username?: string;
    password: string;
}

export async function register(body: RegisterData) {
  return api.post("/api/register", body);
}

export async function listUsers(page: number = 1) {
  return api.get<UsersResponse>(`/api/users?page=${page}`);
}

export async function getUser(id: number) {
  return api.get(`/api/users/${id}`);
}

interface UserData {
    email: string;
    first_name: string;
    last_name: string;
}

export async function putUser(id: number, body: UserData) {
  return api.put<UserResponse>(`/api/users/${id}`, body);
}

export async function postUser(body: UserData) {
  return api.post<UserResponse>(`/api/users`, body);
}

export async function deleteUser(id: number) {
  return api.delete(`/api/users/${id}`);
}