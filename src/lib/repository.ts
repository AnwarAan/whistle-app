import axios, { AxiosRequestConfig } from "axios";

const baseUrl = process.env.BASE_URL;
const axiosClient = axios.create({ baseURL: baseUrl, timeout: 3000 });

class Repository {
  async getApi(params: string, headers: AxiosRequestConfig) {
    const response = await axiosClient.get(`${params}`, headers);
    return response.data.data;
  }

  async postApi(params: string, data: unknown, headers: AxiosRequestConfig) {
    return await axiosClient.post(`${params}`, data, headers);
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
