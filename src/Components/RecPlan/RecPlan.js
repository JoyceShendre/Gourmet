import React from "react";
import classes from "./RecPlan.module.css";

function RecPlan() {
  return (
    <div
      className={classes.cPadding}
      style={{
        background: "#c2833c",
      }}
    >
      <div className={classes.plan}>
        <h2 className="heading">RECOMMENDED MEAL PLAN FROM OUR POPULAR OUTLETS</h2>
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
            <img width={"100%"} src="./images/plan3.jpeg"></img>
            <h4>Half Meal (Rs. 3000/- / 30 meals) </h4>
            <p className={classes.notifications}>Price varies according to the location.</p>
            <button>Order now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecPlan;
