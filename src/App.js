import React, { useRef, useState } from "react";
import NavBar from "./Components/Nav/NavBar";
import Home from "./Components/Home/Home";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./Components/About/About";
import MealPlan from "./Components/MealPlan/MealPlan";
import ContactUs from "./Components/ContactUs/ContactUs";
import Outlets from "./Components/Outlets/Outlets";



function App() {
  // var option;

  return (
    <div>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/meal-plan" element={<MealPlan />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/outlets" element={<Outlets />}></Route>
      </Routes>
    </div>
  );
}

export default App;
