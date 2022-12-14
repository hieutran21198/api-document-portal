import { PageLogin, PageRegister } from "components";
import { PageMerchant } from "components/page-merchant";
import { AppRoutes } from "constants/router";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { selectAuth } from "selectors";

type PrivateRouteProps = {
  children: React.ReactElement | null;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const auth = useSelector(selectAuth);
  return auth.user ? children : <Navigate to={AppRoutes.LOGIN} />;
};

const PrivateAuthRoute = ({ children }: PrivateRouteProps) => {
  const auth = useSelector(selectAuth);
  return auth.user ? <Navigate to={AppRoutes.HOME} /> : children;
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={AppRoutes.LOGIN}
        element={
          <PrivateAuthRoute>
            <PageLogin />
          </PrivateAuthRoute>
        }
      />
      <Route
        path={AppRoutes.REGISTER}
        element={
          <PrivateAuthRoute>
            <PageRegister />
          </PrivateAuthRoute>
        }
      />
      <Route
        path={AppRoutes.HOME}
        element={
          <PrivateRoute>
            <PageMerchant />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to={AppRoutes.HOME} />} />
    </Routes>
  );
};
