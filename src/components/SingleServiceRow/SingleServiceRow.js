import React, { useRef, useState } from "react";

const SingleServiceRow = ({ info }) => {
  const { _id, name, email, service, description, state } = info;

  let stateInput = useRef(null);
  const stateArr = ["Pending", "Ongoing", "Done"];
  const [serviceState, setServiceState] = useState(state);

  const handleChange = () => {
    const newState = stateInput.current.value;
    fetch("https://still-ocean-48985.herokuapp.com/update-state", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ _id, state: newState }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.successMsg) {
          setServiceState(newState);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center mt-4 p-3"
      style={{ borderRadius: 12, backgroundColor: "white", fontSize: 15 }}
    >
      <div className="col-md-1">
        <p>{name.split(" ")[0]}</p>
      </div>
      <div className="col-md-3">
        <p>{email}</p>
      </div>
      <div className="col-md-3 ml-3">
        <p>{service}</p>
      </div>
      <div className="col-md-3">
        <p>{description}</p>
      </div>
      <div className="col-md-2">
        <select
          className="custom-select"
          ref={stateInput}
          onChange={handleChange}
        >
          <option value={serviceState}>{serviceState}</option>
          {stateArr
            .filter((item) => item !== serviceState)
            .map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default SingleServiceRow;
