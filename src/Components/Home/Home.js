import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
import RecPlan from "../RecPlan/RecPlan";
import HomeAbout from "./HomeAbout";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.relative}>
        <img width={"100%"} src="./images/rajat-sarki-nnNCCQfSNsc-unsplash.jpg"></img>
        <h2 >Gourmet</h2>
        <h3>We provide tiffin services at your home.</h3>
      </div>
      <HomeAbout />
      <RecPlan />
      <Footer />
    </div>
  );
};

export default Home;
