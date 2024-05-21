import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
import Home from "./components/Home";
import AuthContainer from "./components/Authcontainer";

const App = () => {
  //   const [userData, setUserData] = useState(null);

  //   useEffect(() => {
  //     const jsonData = localStorage.getItem("userData");
  //     if (jsonData) {
  //       const userDataObject = JSON.parse(jsonData);
  //       setUserData(userDataObject);
  //     }
  //   }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
