import styled from "@emotion/styled";
import { Box, Button, InputGroup } from "components/shared";
import { AppRoutes } from "constants/router";
import { Link } from "react-router-dom";
import { useAppDispatch } from "store";
import { actionAuthLogin } from "store/reducers";
import { Breakpoint } from "theme";

const S = {
  FormLogin: styled.form`
    display: grid;
    grid-auto-rows: max-content;
    gap: ${({ theme }) => theme.spacing(1)};
    ${({ theme }) => theme.media(Breakpoint.LG)} {
      grid-template-columns: 1fr 1fr;
      align-items: flex-end;
    }
  `,
  FormContent: styled(Box)`
    display: grid;
    grid-auto-rows: max-content;
    gap: ${({ theme }) => theme.spacing(1)};
  `,
  InputGroup: styled(InputGroup)`
    ${({ theme }) => theme.media(Breakpoint.LG)} {
      width: 320px;
    }
  `,
  AlternativeContent: styled(Box)`
    display: grid;
    grid-auto-rows: max-content;
    gap: ${({ theme }) => theme.spacing(1)};
  `,
  ForgotPassword: styled(Box)``,
  Register: styled(Box)``,
};

export const FormLogin = () => {
  const dispatch = useAppDispatch();

  const handleOnSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      merchant_id: { value: string };
      email: { value: string };
      password: { value: string };
    };
    const { merchant_id, email, password } = target;
    dispatch(
      actionAuthLogin({
        merchant_id: merchant_id.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <S.FormLogin onSubmit={handleOnSubmitForm}>
      <S.FormContent>
        <S.InputGroup
          label="Merchant ID"
          name="merchant_id"
          type="string"
          placeholder="Merchant ID"
        />
        <S.InputGroup
          label="Email"
          name="email"
          type="email"
          placeholder={"Email address"}
        />
        <S.InputGroup
          label="Password"
          name="password"
          type="password"
          placeholder="Secure password"
        />
        <Button type="submit">Login</Button>
      </S.FormContent>
      <S.AlternativeContent>
        <S.ForgotPassword>
          <p>Forgot password?</p>
          <Link to={AppRoutes.FORGOT_PWD}>Click here</Link>
        </S.ForgotPassword>
        <S.Register>
          <p>Do not have an account?</p>
          <Link to={AppRoutes.REGISTER}>Register here</Link>
        </S.Register>
      </S.AlternativeContent>
    </S.FormLogin>
  );
};
