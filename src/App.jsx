import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Home, About, Team, Events, Photos } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
};

export default App;
