import React from "react";
import { useHistory } from "react-router-dom";
import "./Service.css";

const Service = ({ info }) => {
  let history = useHistory();
  const handleClick = (serviceTitle) => {
    history.push(`/profile/order-form?service=${serviceTitle}`);
  };
  return (
    <div
      className="col-lg-3 col-md-5 col-sm-6 mx-4 my-3 text-center service-card"
      style={{ borderRadius: 7, boxShadow: "0 0 15px 7px #f5f5f5" }}
      onClick={() => {
        handleClick(info.serviceTitle);
      }}
    >
      <div className="mx-3 my-4">
        <img
          style={{ height: 75 }}
          src={`data:image/png;base64,${info.image.img}`}
          alt={info.serviceTitle}
        />
        <h5 className="my-3">{info.serviceTitle}</h5>
        <p className="text-secondary">{info.description}</p>
      </div>
    </div>
  );
};

export default Service;
