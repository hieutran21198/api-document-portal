import styled from "@emotion/styled";
import { Box } from "components/shared";
import { useEffect, useState } from "react";
import { useAppDispatch } from "store";
import { actionMerchantList } from "store/reducers/merchant";

const S = {
  PageMerchant: styled(Box)``,
};

type PageMerchantState = {};

export const PageMerchant = () => {
  const [state, setState] = useState<PageMerchantState>({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionMerchantList({}));
  }, []);

  return <S.PageMerchant></S.PageMerchant>;
};
