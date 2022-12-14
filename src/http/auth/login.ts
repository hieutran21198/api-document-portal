import axios from "axios";
import { API } from "constants/http";

export type LoginRequest = {
  merchant_id: string;
  email: string;
  password: string;
};

export type LoginResponse = {
  id: number;
  first_name: string;
  last_name: string;
  operation_id: string;
  role: number;
  access_token: string;
};

export const httpAuthLogin = async (req: LoginRequest) => {
  const response = await axios.post<LoginResponse>(API.authLogin, req, {
    withCredentials: true,
  });
  if (response.status !== 200) {
    return;
  }

  return response.data;
};
