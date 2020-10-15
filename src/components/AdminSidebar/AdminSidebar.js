import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faPlus,
  faUserPlus,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div
      className="col-md-3"
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
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
        <Link to="/admin/service-list">
          <FontAwesomeIcon icon={faShoppingBasket} /> Service List
        </Link>
      </div>
      <div className="mt-3 ml-2">
        <Link to="/admin/add-service">
          <FontAwesomeIcon icon={faPlus} /> Add Service
        </Link>
      </div>
      <div className="mt-3 ml-2">
        <Link to="/admin/make-admin">
          <FontAwesomeIcon icon={faUserPlus} /> Make Admin
        </Link>
      </div>
      <div className="mt-3 ml-2">
        <Link to="/home">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
