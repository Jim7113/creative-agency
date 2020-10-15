import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home/Home";
import AdminPage from "./components/AdminPage/AdminPage";
import AddService from "./components/AddService/AddService";
import Login from "./components/Login/Login";
import ClientPage from "./components/ClientPage/ClientPage";
import OrderForm from "./components/OrderForm.js/OrderForm";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotAuthorized from "./components/NotAuthorized/NotAuthorized";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = new Date().getTime() / 1000;
      if (decodedToken.exp > currentTime) {
        setLoggedInUserInfo(
          decodedToken.name,
          decodedToken.email,
          decodedToken.picture
        );
      }
    }
  }, []);

  const setLoggedInUserInfo = (name, email, photoURL) => {
    fetch(`https://still-ocean-48985.herokuapp.com/isAdmin/${email}`)
      .then((res) => res.json())
      .then((result) => {
        const signedInUser = { name, email, photoURL, isAdmin: result };
        setLoggedInUser(signedInUser);
      });
  };

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/manage-user">
            <Login />
          </Route>
          <PrivateRoute path="/profile/service-list">
            {loggedInUser.isAdmin ? <AdminPage /> : <ClientPage />}
          </PrivateRoute>
          <PrivateRoute path="/profile/order-form">
            {loggedInUser.isAdmin ? <AdminPage /> : <OrderForm />}
          </PrivateRoute>
          <PrivateRoute path="/profile/review">
            {loggedInUser.isAdmin ? <AdminPage /> : <ReviewForm />}
          </PrivateRoute>
          <Route path="/admin/service-list">
            {loggedInUser.isAdmin && loggedInUser.email ? (
              <AdminPage />
            ) : (
              <NotAuthorized />
            )}
          </Route>
          <Route path="/admin/add-service">
            {loggedInUser.isAdmin && loggedInUser.email ? (
              <AddService />
            ) : (
              <NotAuthorized />
            )}
          </Route>
          <Route path="/admin/make-admin">
            {loggedInUser.isAdmin && loggedInUser.email ? (
              <MakeAdmin />
            ) : (
              <NotAuthorized />
            )}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
