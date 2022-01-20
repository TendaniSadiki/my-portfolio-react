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
      <Route path="*" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Youtube" element={<Youtube />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Topbar/>
      
      </div> 
    </div>
  );
}

export default App;
