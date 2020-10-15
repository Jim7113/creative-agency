import React, { useState, useEffect } from "react";
import ClientSidebar from "../ClientSidebar/ClientSidebar";
import OrderCard from "../OrderCard/OrderCard";

const ClientPage = () => {
  const [orderList, setOrderList] = useState([]);
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
      .then((data) => setOrderList(data));
  }, []);

  return (
    <div
      className="container fluid"
      style={{ backgroundColor: "#f5f5f5", height: "100vh" }}
    >
      <div className="row">
        <ClientSidebar />
        <div className="col-md-9 text-center mr-auto">
          <h3 style={{ backgroundColor: "White", padding: 25 }}>
            Services List
          </h3>
          <div className="d-flex flex-wrap mt-4 mx-5 justify-content-center align-items-center">
            {!orderList.length ? (
              <div class="d-flex justify-content-center text-info py-5">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              orderList.map((order) => (
                <OrderCard key={order._id} info={order} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
