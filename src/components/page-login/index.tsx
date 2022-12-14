import styled from "@emotion/styled";
import { FormLogin } from "components/page-login-form";
import { Box } from "components/shared";

const S = {
  PageLogin: styled(Box)`
    height: calc(100vh - ${({ theme }) => theme.spacing(2)});
    display: flex;
    align-items: center;
  `,
};

export const PageLogin = () => {
  return (
    <S.PageLogin>
      <FormLogin />
    </S.PageLogin>
  );
};
