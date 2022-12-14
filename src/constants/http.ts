export const API_ENDPOINT = import.meta.env["VITE_API_ENDPOINT"];

export const API = {
  authLogin: `${API_ENDPOINT}/cms/auth/v1/login`,
  authValidate: `${API_ENDPOINT}/cms/auth/v1/validate`,
  authRegister: `${API_ENDPOINT}/cms/auth/v1/register`,
  merchantList: `${API_ENDPOINT}/cms/merchant/v1`,
};

export type ErrorResponse = {
  message: string;
};

export enum APIStatus {
  IDLE = "idle",
  LOADING = "loading",
}
