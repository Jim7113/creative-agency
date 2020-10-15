import React from "react";

const NotAuthorized = () => {
  return (
    <div
      className="d-flex flex-column justify-content-start align-items-center text-muted text-center"
      style={{ height: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <img
        src="https://i.ibb.co/5GM9yfq/logo.png"
        alt="logo"
        style={{ width: 300, marginTop: 150 }}
      />
      <h1 style={{ fontSize: 75, marginTop: 35 }}>400</h1>
      <p>-You are not allowed to visit this page-</p>
    </div>
  );
};

export default NotAuthorized;
