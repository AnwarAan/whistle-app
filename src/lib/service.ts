import { AxiosRequestConfig, AxiosError } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import repository from "./repository";
import { getCookie } from "./helpers";

// const isLogin = getCookie("login");
// const token = getCookie("token");
// const bearer = { headers: { Authorization: `Bearer ${token}` } };

const useGetApi = (params: string, query: string, headers: AxiosRequestConfig = {}) => {
  return useQuery({ queryKey: [query], queryFn: () => repository.getApi(params, headers), staleTime: Infinity });
};

const usePostApi = (params: string, headers: AxiosRequestConfig = {}) => {
  return useMutation({
    mutationFn: async (data: unknown) => {
      const response = await repository.postApi(params, data, headers);
      return response.data;
    },
    onError: async (error: AxiosError) => {
      if (error) {
        return error;
      }
    },
  });
};

const usePutApi = (params: string, headers: AxiosRequestConfig = {}) => {
  return useMutation({
    mutationFn: async (data: unknown) => {
      const response = await repository.postApi(params, data, headers);
      return response.data;
    },
    onError: async (error: AxiosError) => {
      if (error) {
        return error;
      }
    },
  });
};

const useDeleteApi = (params: string, headers: AxiosRequestConfig = {}) => {
  return useMutation({
    mutationFn: async (data: unknown) => {
      const response = await repository.postApi(params, data, headers);
      return response.data;
    },
    onError: async (error: AxiosError) => {
      if (error) {
        return error;
      }
    },
  });
};

export { useGetApi, usePostApi, usePutApi, useDeleteApi };
