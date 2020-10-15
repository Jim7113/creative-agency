import React from "react";

const ReviewCard = ({ info }) => {
  return (
    <div
      className="col-lg-3 col-md-5 col-sm-6 mx-4 my-3 text-center border"
      style={{
        borderRadius: 7,
        height: "350",
      }}
    >
      <div className="row mx-3 my-4">
        <img
          style={{ height: 65, borderRadius: "50%" }}
          src={info.photoURL}
          alt={info.name}
          className="col-4"
        />
        <div className="col-7">
          <h4>{info.name}</h4>
          <p className="text-muted">{info.company}</p>
        </div>
      </div>
      <p className="text-secondary mx-3 my-4">{info.Review}</p>
    </div>
  );
};

export default ReviewCard;
