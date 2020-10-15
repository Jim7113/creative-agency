import React from "react";
import { useHistory } from "react-router-dom";
import TopNavbar from "../Navbar/TopNavbar";
import "./Header.css";

const Header = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/profile/order-form");
  };

  return (
    <div className="main-header">
      <TopNavbar />
      <div className="row d-flex justify-content-center align-items-center mx-lg-5 mx-md-3 mx-sm-2">
        <div className="col-lg-5 col-md-4 col-sm-9 col-xs-8 mt-5">
          <h1 style={{ fontSize: "3.8vw" }}>
            Lets Grow Your Brand To The Next Level
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            libero sapiente consectetur, ab excepturi facere. Fugiat tempore
            velit ducimus consequatur ratione eaque cumque.
          </p>
          <button className="btn btn-secondary" onClick={handleClick}>
            Hire Us
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-9 col-xs-8 mt-5">
          <img
            src="https://i.ibb.co/WPD5NPq/Frame.png"
            alt="Frame"
            style={{ width: "100%" }}
            className="ml-md-5 img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
