import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      arrows: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2.5,
      autoplay: true,
      speed: 2000,
      dots: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div style={{ margin: 55 }}>
            <img
              src="https://i.ibb.co/4fzjBD1/carousel-1.png"
              alt="carousel-1"
              width="85%"
            />
          </div>
          <div style={{ margin: 35 }}>
            <img
              src="https://i.ibb.co/S5rNRRN/carousel-2.png"
              alt="carousel-2"
              width="85%"
            />
          </div>
          <div style={{ margin: 35 }}>
            <img
              src="https://i.ibb.co/mbvZWwR/carousel-4.png"
              alt="carousel-4"
              width="85%"
            />
          </div>
          <div style={{ margin: 35 }}>
            <img
              src="https://i.ibb.co/jJ9ttnJ/carousel-5.png"
              alt="carousel-5"
              width="85%"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
