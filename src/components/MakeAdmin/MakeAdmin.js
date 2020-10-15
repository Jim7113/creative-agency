import React, { useState, useContext } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { UserContext } from "../../App";

const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [adminEmail, setAdminEmail] = useState({});
  const [result, setResult] = useState({});
  const handleChange = (e) => {
    const newAdmin = { ...adminEmail };
    newAdmin[e.target.id] = e.target.value;
    newAdmin.madeBy = loggedInUser.email;
    setAdminEmail(newAdmin);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://still-ocean-48985.herokuapp.com/add-admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(adminEmail),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        setResult({ errMsg: "Could not register as an Admin" });
      });
  };

  return (
    <div className="container">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9">
          <h4
            className="mt-2 py-4"
            style={{ borderRight: "2px solid #f5f5f5" }}
          >
            Make Admin
          </h4>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              height: "100%",
              border: "1px solid #f5f5f5",
            }}
          >
            <form
              className="m-5 p-5 border-rounded"
              style={{ backgroundColor: "white", borderRadius: 12 }}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <h6>Email:</h6>
              <div className="form-inline">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary ml-2">
                  Submit
                </button>
              </div>
              <p className="text-success mt-5">{result.successMsg}</p>
              <p className="text-danger">{result.errMsg}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
