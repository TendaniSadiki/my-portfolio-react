import './App.css';

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
      <Navbar/>
     <br></br>
     <br></br>
     
      <Home/>
      <br></br>
      <About/>
      <br></br>
      <Youtube/>
      <br></br>
      <Contact/>
      </div>
      
    </div>
  );
}

export default App;
