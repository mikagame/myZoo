import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import Accueil from "./Site/Accueil/Accueil";
import Contact from "./Site/Contact/Contact";
import NotFound from "./Site/NotFound/NotFound";
import Application from "./Site/Application/Application";

const Site = (props) => {
  return (
    <div>
      <div className="site">
        <NavBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/animaux" element={<Application />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="minSite"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Site;
