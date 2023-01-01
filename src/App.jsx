import React from "react";
import "./App.css";
import { Navbar, Home, About, Team, Events, Photos, Footer} from "./Components/defaultExports";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Team/>
      <Events/>
      <Photos/>
      <Footer/>
    </div>
  );
};

export default App;
