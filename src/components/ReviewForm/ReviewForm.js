import React, { useContext, useState } from "react";
import ClientSidebar from "../ClientSidebar/ClientSidebar";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";

const ReviewForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  const [review, setReview] = useState({});

  const handleBlur = (e) => {
    const newReview = { ...review };
    newReview[e.target.id] = e.target.value;
    setReview(newReview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { ...review };
    newReview.name = loggedInUser.name;
    newReview.email = loggedInUser.email;
    newReview.photoURL = loggedInUser.photoURL;
    setReview(newReview);
    fetch("https://still-ocean-48985.herokuapp.com/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(newReview),
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
        <div className="col-md-9 mr-auto">
          <h3 style={{ backgroundColor: "White", padding: 25 }}>REVIEW</h3>

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
                defaultValue={loggedInUser.name}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="company's name, your position"
                onBlur={(e) => handleBlur(e)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control pb-5"
                id="Review"
                placeholder="Review"
                onBlur={(e) => handleBlur(e)}
                required
              />
            </div>
            <p className="text-danger my-2"></p>
            <button type="submit" className="btn btn-secondary m-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
