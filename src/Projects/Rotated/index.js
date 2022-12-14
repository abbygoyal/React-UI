import React from "react";
import Layout from "../Layout";
import "./index.css";

function Rotated() {
  return (
    <Layout>
      <div className="rotated-parent">
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <div className="h-75">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_qhrndegx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rotated-text-part">
              <h1 data-aos="slide-right">Abhishek</h1>
              <p data-aos="slide-left">
                FrontEnd <b>ReactJS</b> Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rotated;
