import axios, { AxiosError } from "axios";
import { API } from "constants/http";

export type MerchantListRequest = {};
export type MerchantListResponse = {};

export const httpMerchantList = async (req: MerchantListRequest) => {
  try {
    const response = await axios.get<MerchantListResponse>(API.merchantList);
    if (response.status !== 200) {
      return;
    }

    return response.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      const err = e as AxiosError;
      console.error(err);
    }
  }
};
