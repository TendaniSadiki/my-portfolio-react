import './App.css';
import * as React from "react";
import { Routes, Route} from "react-router-dom";

//Components
import Navbar from './components/Navbar/Navbar';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Youtube from "./components/youtube/Youtube";



function App() {
  return (
    <div className="App">
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Youtube" element={<Youtube />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Navbar/>
      </div> 
    </div>
  );
}

export default App;
