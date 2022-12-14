import styled from "@emotion/styled";
import { Box } from "components/shared";
import { APP_THEME } from "constants/theme";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "router";
import { useAppDispatch, useAppSelector } from "store";
import { AppThemeProvider } from "theme";
import { actionAuthValidate } from "store/reducers/auth";
import { selectAuth } from "selectors";
import axios from "axios";
import { setAuthorizationHeader } from "http/interceptor/authorization";

const S = {
  App: styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
  `,
  Container: styled(Box)`
    padding: ${({ theme }) => theme.spacing(1)};
  `,
};

function App() {
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectAuth);

  useEffect(() => {
    dispatch(actionAuthValidate());
  }, []);

  useEffect(() => {
    if (!authState.user) {
      return;
    }

    const accessToken = authState.user.access_token;
    setAuthorizationHeader(accessToken);
  }, [authState.user]);

  return (
    <AppThemeProvider theme={APP_THEME}>
      <S.App>
        <S.Container responsive>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </S.Container>
      </S.App>
    </AppThemeProvider>
  );
}

export default App;
