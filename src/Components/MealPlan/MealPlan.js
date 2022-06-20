import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Nav/NavBar";
import classes from "./MealPlan.module.css";


function MealPlan() {
  return (
    <div>
      <NavBar />
      <div
        className={classes.cPadding}
        style={{
          background: "#e8870d",
        }}
      >
        <div className={classes.plan}>
          <h2 className="heading">RECOMMENDED MEAL PLAN</h2>
          <p className="subHeading">
            Restoring authenticity to food from the ground up is the missioin that drives us. Tiffin Service is the
            realization of a dream.
          </p>
          <div className={classes.grid}>
            <div className={classes.card}>
              <img width={"100%"} src="./images/plan2.jpeg"></img>
              <h4>Full Meal (Rs. 3000/- / 30 meals) </h4>
              <p className={classes.notifications}>Price varies according to the location.</p>
              <button>Order now</button>
            </div>
            <div className={classes.card}>
              <img width={"100%"} src="./images/plan.jpeg"></img>
              <h4>Full Meal (Rs. 1500/- / 15 meals) </h4>
              <p className={classes.notifications}>Price varies according to the location.</p>
              <button>Order now</button>
            </div>
            <div className={classes.card}>
              <img width={"100%"} src="./images/plan2.jpeg"></img>
              <h4 >Half Meal (Rs. 3000/- / 30 meals) </h4>
              <p className={classes.notifications}>Price varies according to the location.</p>
              <button>Order now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MealPlan;
