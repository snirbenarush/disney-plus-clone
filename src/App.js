import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
