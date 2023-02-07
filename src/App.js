import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routes from "./Components/Routes";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <h1 className={darkTheme ? "dark" : ""}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Routes />
      <Footer />
    </h1>
  );
};

export default App;
