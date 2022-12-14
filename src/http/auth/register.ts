import axios from "axios";
import { API } from "constants/http";
import { LoginResponse } from "./login";

export type RegisterRequest = {
  merchant_id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type RegisterResponse = {} & LoginResponse;

export const httpAuthRegister = async (req: RegisterRequest) => {
  const response = await axios.post<RegisterResponse>(API.authRegister, req);

  if (response.status !== 200) {
    return;
  }

  return response.data;
};
