import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import SingleServiceRow from "../SingleServiceRow/SingleServiceRow";

const AdminPage = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://still-ocean-48985.herokuapp.com/order-list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div
      className="container"
      style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}
    >
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 text-center mr-auto">
          <h3 style={{ backgroundColor: "White", padding: 25 }}>
            Services List
          </h3>
          <div
            className="d-flex justify-content-center align-items-center mt-4 p-3"
            style={{ borderRadius: 12, backgroundColor: "white" }}
          >
            <div className="col-md-1">
              {" "}
              <h6>Name</h6>{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <h6>Email ID</h6>{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <h6>Service</h6>{" "}
            </div>
            <div className="col-md-3">
              {" "}
              <h6>Details</h6>{" "}
            </div>
            <div className="col-md-2">
              {" "}
              <h6>Status</h6>
            </div>
          </div>
          {!services.length ? (
            <div class="d-flex justify-content-center text-info py-5">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            services.map((service) => (
              <SingleServiceRow key={service._id} info={service} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
