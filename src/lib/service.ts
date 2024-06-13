import { AxiosRequestConfig } from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import repository from "./repository";

interface ErrorResponse {
  response: { data: { message: string } };
}

const useGetApi = (params: string, query: string, headers: AxiosRequestConfig = {}) => {
  return useQuery({ queryKey: [query], queryFn: () => repository.getApi(params, headers), staleTime: Infinity });
};

const usePostApi = async (params: string, headers: AxiosRequestConfig = {}) => {
  return useMutation({
    mutationFn: async (data: unknown) => {
      const response = await repository.postApi(params, data, headers);
      return response.data;
    },
    onError: async (error: ErrorResponse) => {
      if (error.response.data) {
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
    onError: async (error: ErrorResponse) => {
      if (error.response.data) {
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
    onError: async (error: ErrorResponse) => {
      if (error.response.data) {
        return error;
      }
    },
  });
};

export { useGetApi, usePostApi, usePutApi, useDeleteApi };
