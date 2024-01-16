import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - CarRental app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            AutoMobile Rental System is an online Vehicles booking system. This
            is a web based application that overcomes the issue of managing and
            booking vehicles. Our platform eliminates the middleman, allowing
            owners to list their vehicles and renters to rent them directly,
            enhancing transparency and reducing costs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
