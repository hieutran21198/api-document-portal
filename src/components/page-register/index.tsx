import styled from "@emotion/styled";
import { PageRegisterForm } from "components/page-register-form";
import { Box } from "components/shared";

const S = {
  PageRegister: styled(Box)`
    height: calc(100vh - ${({ theme }) => theme.spacing(2)});
    display: flex;
    align-items: center;
  `,
};

export const PageRegister = () => {
  return (
    <S.PageRegister>
      <PageRegisterForm />
    </S.PageRegister>
  );
};
