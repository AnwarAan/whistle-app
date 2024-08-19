"use server";

import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const axiosClient = axios.create({ baseURL: BASE_URL });

export async function getApi(params: string, headers: AxiosRequestConfig) {
  const response = await axiosClient.get(`${params}`, headers);
  return response.data.data;
}

export async function postApi(params: string, data: unknown, headers?: AxiosRequestConfig) {
  return await axiosClient.post(`${params}`, data, headers);
}

export async function putApi(params: string, data: unknown, headers: AxiosRequestConfig) {
  return await axiosClient.put(`${params}`, data, headers);
}

export async function deleteApi(params: string, data: unknown, headers: AxiosRequestConfig) {
  return await axiosClient.delete(`${params}`, headers);
}

class Repository {
  async getApi(params: string, headers: AxiosRequestConfig) {
    const response = await axiosClient.get(`${params}`, headers);
    return response.data.data;
  }

  async postApi(params: string, data: unknown, headers?: AxiosRequestConfig) {
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
