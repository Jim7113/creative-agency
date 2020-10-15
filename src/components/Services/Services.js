import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://still-ocean-48985.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mx-5 my-5">
      <h3 className="my-5 text-center">
        Provide <span className="text-success">Awesome Services</span>
      </h3>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {!services.length ? (
          <div class="d-flex justify-content-center text-info">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          services.map((service) => (
            <Service key={service._id} info={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
