import styled from "@emotion/styled";
import { Box, Button, InputGroup } from "components/shared";
import { AppRoutes } from "constants/router";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { selectAuth, selectRegisteredUser } from "selectors";
import { useAppDispatch, useAppSelector } from "store";
import { actionAuthRegister } from "store/reducers";
import { Breakpoint } from "theme";

const S = {
  PageRegisterForm: styled.form`
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

export const PageRegisterForm = () => {
  const dispatch = useAppDispatch();
  const registeredUser = useAppSelector(selectRegisteredUser);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(registeredUser);
    if (registeredUser) {
      navigate(AppRoutes.LOGIN);
    }
  }, [registeredUser]);

  const handleOnSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      merchant_id: { value: string };
      email: { value: string };
      password: { value: string };
      first_name: { value: string };
      last_name: { value: string };
    };
    const { merchant_id, email, password, first_name, last_name } = target;
    dispatch(
      actionAuthRegister({
        merchant_id: merchant_id.value,
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <S.PageRegisterForm onSubmit={handleOnSubmitForm}>
      <S.FormContent>
        <S.InputGroup
          label="Merchant ID"
          name="merchant_id"
          type="string"
          placeholder="Merchant ID"
          autoComplete="username"
        />
        <S.InputGroup
          label="First Name"
          name="first_name"
          placeholder="First name"
          autoComplete="given-name"
        />
        <S.InputGroup
          label="Last Name"
          name="last_name"
          placeholder="Last name"
          autoComplete="family-name"
        />
        <S.InputGroup
          label="Email"
          name="email"
          type="email"
          placeholder={"Email address"}
          autoComplete="email"
        />
        <S.InputGroup
          label="Password"
          name="password"
          type="password"
          placeholder="Secure password"
          autoComplete="new-password"
        />
        <Button type="submit">Register</Button>
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
    </S.PageRegisterForm>
  );
};
