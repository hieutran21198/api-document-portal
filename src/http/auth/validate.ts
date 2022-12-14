import axios, { AxiosError } from "axios";
import { API } from "constants/http";
import { LoginResponse } from "./login";

export const httpAuthValidate = async (): Promise<
  LoginResponse | undefined
> => {
  try {
    const response = await axios.post<LoginResponse>(API.authValidate, null, {
      withCredentials: true,
    });

    if (response.status !== 200) {
      return;
    }

    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const err = e as AxiosError;
      if (err.response?.status === 401) {
        // validateFailed
        return;
      }
    }
  }
};
