import React from "react";

const OrderCard = ({ info }) => {
  return (
    <div
      className="col-md-5 text-left border"
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        padding: "15px 25px",
        margin: 10,
        boxShadow: "0 0 15px 7px #f5f5f5",
      }}
    >
      <h3>{info.service}</h3>
      <p>
        <small>{info.price}</small>
      </p>
      <p>{info.description}</p>
      <p>
        <span className="badge badge-info p-2">{info.state}</span>
      </p>
    </div>
  );
};

export default OrderCard;
