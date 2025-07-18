import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Users from "./Users";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/users/:username" element={<Users />} />
        <Route path="/n" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
