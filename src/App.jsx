import React, { useState } from "react";
import BMRForm from "./components/BMRForm/bmr-form";
import Header from "./components/Header/header";
import About from "./components/About/about";
import BMRDisplay from "./components/BMRDisplay/bmr-display";

const App = (props) => {
  const [BMRData, setBMRData] = useState([]);
  return (
    <div>
      <Header />
      <About />
      <BMRForm setBMRData={setBMRData} />
      <BMRDisplay BMRData={BMRData} />
    </div>
  );
};

export default App;
