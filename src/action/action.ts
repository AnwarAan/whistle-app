"use server";
import { generateFormData, generateMultipartFormData, ModelFormData } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Model<S> = {
  structure: ModelFormData[];
  url: S;
};

const errorMessage = (error: unknown) => {
  let message;
  if (error instanceof AxiosError) {
    message = error.response?.data?.message;
  } else if (error instanceof Error) {
    message = error.message;
  } else {
    message = "Somthing went wrong";
  }
  return message;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const axiosClient = axios.create({ baseURL: BASE_URL });
const getToken = () => {
  const token = cookies().get("whistle_token")?.value;
  const bearerToken = { Authorization: `Bearer ${token}` };
  return bearerToken;
};

export async function getData(url: string) {
  try {
    const { data } = await axiosClient.get(url, { headers: getToken() });
    return data.data;
  } catch (error) {
    return { error: errorMessage(error) };
  }
}

export async function logout() {
  cookies().delete("whistle_token");
  redirect("/auth");
}

export async function postFormLogin(formData: FormData, model: Model<string>) {
  const form = generateFormData(formData, model.structure);
  try {
    const { data } = await axiosClient.post(model.url, form);
    cookies().set("whistle_token", data.data.access_token);
  } catch (error) {
    return { error: errorMessage(error) };
  } finally {
  }
}

export async function postFormRegister(formData: FormData, model: Model<string>) {
  const form = generateFormData(formData, model.structure);
  try {
    await axiosClient.post(model.url, form);
  } catch (error) {
    return { error: errorMessage(error) };
  }
}

export async function postFormData(formData: FormData, model: Model<string>) {
  const form = generateFormData(formData, model.structure);
  try {
    await axiosClient.post(model.url, form, { headers: getToken() });
  } catch (error) {
    return { error: errorMessage(error) };
  }
}

export async function postMultipartFormData(formData: FormData, model: Model<string>) {
  const form = generateMultipartFormData(formData, model.structure);

  try {
    await axiosClient.post(model.url, form, {
      headers: { "content-type": "multipart/form-data", Authorization: getToken().Authorization },
    });
  } catch (error) {
    return { error: errorMessage(error) };
  }
  revalidatePath(`/home`);
}

export async function posting(formData: FormData,) {
  const url = "/api/post";
  const data = new FormData();
  const file = formData.get("file") as unknown as File;
  if (!file || file.size === 0) throw new Error("File Empty");
  data.append("file", file);
  try {
    await axiosClient.post(url);
  } catch (error) {
    return { error: errorMessage(error) };
  }
  revalidatePath(`/*`);
}

export async function postFormDataNoAuth(formData: FormData, model: Model<string>) {
  const form = generateMultipartFormData(formData, model.structure);
  try {
    await axiosClient.post(model.url, form);
  } catch (error) {
    return { error: errorMessage(error) };
  }
  revalidatePath(`/*`);

}

export async function uploadFile(formData: FormData) {
  const url = "/api/upload";
  const data = new FormData();
  const file = formData.get("file") as unknown as File;
  if (!file || file.size === 0) throw new Error("File Empty");
  data.append("file", file);
  try {
    await axiosClient.post(url);
  } catch (error) {
    return { error: errorMessage(error) };
  }
  revalidatePath(`/*`);
}

export async function actionFollow(formData: FormData) {
  const followedId = formData.get("id");
  const url = `/user-follower/follow/${followedId}`;
  try {
    await axiosClient.post(url, {}, { headers: getToken() });
  } catch (error) {
    return { error: errorMessage(error) };
  }
  revalidatePath(`/*`);
}
