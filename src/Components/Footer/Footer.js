import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <div
        className={classes.grid2}
        style={{
          backgroundImage: `url("./images/01_preview1600x800 (1).jpg")`,
        }}
      >
        <div className={classes.box}>
          <div>
            <h3 className="subHeading">Book Your Tiffin</h3>
            <h2 className={classes.enquiry}>ENQUIRE NOW</h2>
            <div className={classes.input6}>
              <input type="text" placeholder="Full Name"></input>
              <input type="number" placeholder="Enter Your Phone Number"></input>
            </div>
            <div className={classes.input6}>
              <input type="text" placeholder="Your Email"></input>
              <input type="text" placeholder="Location"></input>
            </div>
            <div className={classes.input6}>
              <input type="number" placeholder="No of Meals"></input>
              <input type="text" placeholder="Lunch / Dinner"></input>
            </div>
            <div className={classes.input6}>
              <input type="date" placeholder="Start Service"></input>
              <input type="Submit" value={"Enquiry Now"}></input>
            </div>
          </div>
        </div>
        <div><h3 className={classes.location} >Our Location</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14888.703408158017!2d79.07428963493403!3d21.10555420123012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sin!4v1655571819725!5m2!1sen!2sin" width="97%" height="81%"></iframe> </div>
      </div>
      <div className={classes.footer}>
        <p>You can also call/whatsapp to make an enquiry.</p>
        <h2>+91 - 99873 94444 | 99679 54444</h2>
      </div>
      <div className={classes.footer}>2022 Gourmet All rights reserved. Designed by BIT Students</div>
      <div class={classes.innerfooter}></div>
      <div class={classes.footeritems}>
        <h1>Company Name</h1>
        <p>Description of any product or motto of the company.</p>
      </div>
      <div class={classes.footeritems}>
        <h3>Quick Links</h3>
        <div class="border1"></div>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
      </div>

    </div >
  );
}

export default Footer;
