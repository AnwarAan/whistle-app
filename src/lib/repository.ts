import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "./helpers";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const axiosClient = axios.create({ baseURL: baseUrl, timeout: 3000 });
const token = getCookie("token");
console.log("object", token);
const bearer = { headers: { Authorization: `Bearer ${token}` } };

class Repository {
  async getApi(params: string, headers: AxiosRequestConfig) {
    const response = await axiosClient.get(`${params}`, headers);
    return response.data.data;
  }

  async postApi(params: string, data: unknown, headers: AxiosRequestConfig) {
    return await axiosClient.post(`${params}`, data, headers ? headers : {});
  }

  async putApi(params: string, data: unknown, headers: AxiosRequestConfig) {
    return await axiosClient.put(`${params}`, data, headers);
  }

  async deleteApi(params: string, data: unknown, headers: AxiosRequestConfig) {
    return await axiosClient.delete(`${params}`, headers);
  }
}

const repository = new Repository();
export default repository;
