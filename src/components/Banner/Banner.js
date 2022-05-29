import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
      <div className="d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between container mx-auto">
        <div className="banner-info">
          <h1>
            Leading Sensor Supplier in{" "}
            <span className="text-success">Bangladesh</span>{" "}
          </h1>
          <h6>
            We have a wide selection of sensors that will help you work in the
            best possible way. We have all kinds of sensors, fabricated
            metal products, industrial supplies and other related materials can
            fulfill all your needs.
          </h6>
          <button className="btn btn-success my-2 d-lg-inline d-block mx-lg-0 mx-auto">Explore</button>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="w-75"
            src="https://img.directindustry.com/images_di/photo-g/7106-13112728.jpg"
            alt="banner"
          />
        </div>
      </div>
    );
};

export default Banner;