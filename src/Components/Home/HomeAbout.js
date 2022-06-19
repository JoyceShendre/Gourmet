import React from "react";
import classes from "./Home.module.css";

function HomeAbout() {
  return (
    <div id="about">
      <h2 className={classes.heading}>Find a tiffin service near your home.</h2>
      <div class={classes.dropdown}>
        <button class={classes.dropbtn}>Please select our outlets in your locality here.</button>
        <div class={classes.dropdownContent}>
          <a href="/outlets">Bengali Camp</a>
          <a href="/outlets">Bajaj Ward</a>
          <a href="/outlets">Bapat Nagar</a>
          <a href="/outlets">MIDC Road</a>
          <a href="/outlets">Vijay Nagar</a>
        </div>
      </div>
      &nbsp;
      <div className={classes.aboutParent}>
        <div className={classes.imgDiv}>
          <img src="./images/calum-lewis-vA1L1jRTM70-unsplash.jpg" width={"102%"} height={"78%"}></img>
        </div>
        <div>
          <h2 className={classes.aboutTitle}>Our Vision </h2>
          <p>
            Gourmet was started to merge the wisdom of the Vedas that pay tribute to the inherent
            spirituality that exemplifies Indian cooking. We just didn’t want to be another veg Tiffin service in Chandrapur
            that only provides home food; but we also wanted to give our customers the feel of, "maa ke haath ka khana"
            with our dishes that are healthy for both physical and mental well being, delicious and uplifting. We love
            to take our customers back to the warmth of a mother’s love by serving fresh, organic, locally sourced,
            dishes cooked according to Vedic customs.
          </p>
          <p>
            We believe it’s our duty as vegetarian Tiffin service provider in Chandrapur is to deliver fresh, hygienic meals
            and most importantly taste with every bite. Our staff is dedicated to satisfying your cravings for great
            food that will uplift your body, mind, and spirit!
          </p>
          <p>
            Gourmet today has grown from a small lunch box service in Chandrapur to a service provider that can
            accommodate and cater to anything or anyone. Be it lunch boxes, Tiffin service, any workplace function or
            private event – we will work with you in every step to make your dining experience pleasurable and
            worry-free. We work with you on your menu selection to ensure the dishes are a perfect fit for your special
            occasion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
