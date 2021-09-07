import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "redux_tk/app/hook";

interface PrivateRouteProps {
  component: React.FC;
  [x: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const loginSuccess = useAppSelector(state => state.auth.loginSuccess);
  
  return (
    <Route
      {...rest}
      render={(props) => {
        return loginSuccess ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
