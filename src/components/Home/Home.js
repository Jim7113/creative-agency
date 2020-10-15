import React from "react";
import ReviewSection from "../ReviewSection/ReviewSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Partners from "../Partners/Partners";
import Services from "../Services/Services";
import SliderHome from "../SliderHome/SliderHome";

const Home = () => {
  return (
    <>
      <Header />
      <Partners />
      <Services />
      <div style={{ backgroundColor: "#111430", height: 635, paddingTop: 100 }}>
        <h2 className="text-light text-center mb-5">
          Here are some of <span className="text-warning">our works</span>
        </h2>
        <SliderHome />
      </div>
      <ReviewSection />
      <Footer />
    </>
  );
};

export default Home;
