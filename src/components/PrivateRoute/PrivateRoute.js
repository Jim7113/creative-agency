import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const validateByToken = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    return decodedToken.exp > currentTime;
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || validateByToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/manage-user",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
