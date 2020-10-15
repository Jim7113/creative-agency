import React, { useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import ClientSidebar from "../ClientSidebar/ClientSidebar";
import { UserContext } from "../../App";

const OrderForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  const [info, setInfo] = useState({});
  let query = new URLSearchParams(useLocation().search);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.id] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInfo = { ...info };
    if (!newInfo.service) {
      newInfo.service = query.get("service");
    }
    newInfo.name = loggedInUser.name;
    newInfo.email = loggedInUser.email;
    setInfo(newInfo);
    fetch("https://still-ocean-48985.herokuapp.com/service-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.successMsg) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: "#f5f5f5", height: "100vh" }}
    >
      <div className="row">
        <ClientSidebar />
        <div className="col-md-9 text-center mr-auto">
          <h3 style={{ backgroundColor: "White", padding: 25 }}>Order</h3>

          <form
            className="m-5 p-5 border-rounded"
            style={{ backgroundColor: "white", borderRadius: 12 }}
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <input
                readOnly
                type="text"
                className="form-control"
                id="name"
                value={loggedInUser.name}
                required
              />
            </div>
            <div className="form-group">
              <input
                readOnly
                type="email"
                className="form-control"
                id="email"
                value={loggedInUser.email}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="service"
                placeholder="service type"
                defaultValue={query.get("service")}
                onBlur={(e) => handleBlur(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Service Description"
                onBlur={(e) => handleBlur(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Price"
                onBlur={(e) => handleBlur(e)}
              />
            </div>
            <p className="text-danger my-2"></p>
            <button type="submit" className="btn btn-primary m-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
