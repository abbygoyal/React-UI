import React from "react";
import Layout from "../Layout/index";
import "./gindex.css";
function Glowing() {
  return (
    <Layout>
      <div className="glowing-parent">
        <div className="h-100">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_SkhtL8.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="glowing-text-part">
          <h1>Abhishek</h1>
          <h4>FrontEnd ReactJS Developer</h4>
        </div>
      </div>
    </Layout>
  );
}

export default Glowing;
