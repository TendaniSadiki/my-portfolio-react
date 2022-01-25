import './App.css';
import * as React from "react";
import { Routes, Route} from "react-router-dom";

//Components

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Youtube from "./components/youtube/Youtube";
import Topbar from "./components/topbar/Topbar";


function App() {
  return (
    <div className="App">
      <div>
      <Routes>
      <Route path="*" element={<Home />} exact />
      <Route path="Home" element={<Home />} exact />
        <Route path="About" element={<About />} exact />
        <Route path="Youtube" element={<Youtube />} exact />
        <Route path="Contact" element={<Contact />} exact />
      </Routes>
      <Topbar/>
      
      </div> 
    </div>
  );
}

export default App;
