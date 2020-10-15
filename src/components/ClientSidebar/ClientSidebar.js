import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faShoppingCart,
  faUserPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div
      className="col-md-3"
      style={{
        backgroundColor: "white",
        height: "100vh",
        borderLeft: "2px solid #f5f5f5",
      }}
    >
      <img
        src="https://i.ibb.co/5GM9yfq/logo.png"
        alt="logo"
        className="img-fluid"
        style={{ width: 175, marginTop: 25 }}
      />
      <div className="mt-5 ml-2">
        <Link to="/profile/order-form">
          <FontAwesomeIcon icon={faShoppingCart} /> Order
        </Link>
      </div>
      <div className="mt-3 ml-2">
        <Link to="/profile/service-list">
          <FontAwesomeIcon icon={faShoppingBasket} /> Service List
        </Link>
      </div>
      <div className="mt-3 ml-2">
        <Link to="/profile/review">
          <FontAwesomeIcon icon={faUserPlus} /> Review
        </Link>
      </div>
      <div className="mt-3 ml-2">
        <Link to="/home">
          <FontAwesomeIcon icon={faHome} /> Homepage
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
