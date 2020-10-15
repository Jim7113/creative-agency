import React, { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();

  const handleClick = () => {
    history.push("/profile/order-form");
  };

  return (
    <div style={{ backgroundColor: "#fbd062", marginTop: 150 }}>
      <div className="row d-flex justify-content-center align-items-start mx-lg-5 mx-md-3 mx-sm-2 mt-5">
        <div className="col-lg-5 col-md-4 col-sm-9 col-xs-8 mt-5">
          <h2>Let us handle your project, professionally</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            libero sapiente consectetur, ab excepturi facere. Fugiat tempore
            velit ducimus consequatur ratione eaque cumque.
          </p>
          <button className="btn btn-secondary" onClick={handleClick}>
            Hire Us
          </button>
        </div>
        <div className="col-lg-6 col-md-7 col-sm-9 col-xs-8">
          <div className="col-md-12 mr-auto">
            <form
              className="p-5 border-rounded ml-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <input
                  readOnly
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={loggedInUser.name || "your name"}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="company's name, your position"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  style={{ height: 200 }}
                  id="your message"
                  placeholder="your message"
                  required
                />
              </div>
              <p className="text-danger my-2"></p>
              <button type="submit" className="btn btn-secondary m-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
