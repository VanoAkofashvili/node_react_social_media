import React from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  component: React.FC;
  [x: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const loginLoading = true;
  return (
    <Route
      {...rest}
      render={(props) => {
        // console.log(props);
        return loginLoading ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
