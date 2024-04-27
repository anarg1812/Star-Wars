import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { SingleChar } from "./views/singleChar";
import { SinglePlanet } from "./views/singlePlanets";
import { SingleStarship } from "./views/singleStarship";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/single_char/:uid" element={<SingleChar />} />
            <Route path="/single_planet/:uid"element={<SinglePlanet />}/>
            <Route path="/single_starship/:uid"element={<SingleStarship />}/>
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);