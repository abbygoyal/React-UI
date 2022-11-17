import React from "react";
import Layout from "../Layout";
import "./index.css";

function Home() {
  return (
    <div>
      <Layout>
        <div className="home-parent">
          <div className="d-flex parts align-items-center">
            <div className="part1 text-center text-white d-flex align-items-center justify-content-center flex-column">
              <h3 className="my-5" data-aos="slide-right">
                <b>FrontEnd Developer</b>
              </h3>
              <div className="h-50">
                <lottie-player
                  src="https://assets5.lottiefiles.com/private_files/lf30_xeb8piyr.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </div>
            <div className="part2 text-center text-white d-flex align-items-center justify-content-center flex-column">
              <div className="h-50">
                <lottie-player
                  src="https://assets7.lottiefiles.com/private_files/lf30_4bkst7vs.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </div>
              <h3 className="my-5" data-aos="slide-left">
                <b>Tech Nerd</b>
              </h3>
            </div>
          </div>
          <div className="seperator">
            <span>REACT🖤</span>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
