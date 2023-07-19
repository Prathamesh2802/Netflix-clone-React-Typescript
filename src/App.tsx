import { useState } from "react";
import NavigationBar from "./components/Navigation";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div>
      <div className="background-img">
        <NavigationBar></NavigationBar>
      </div>
      <MainContent />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
