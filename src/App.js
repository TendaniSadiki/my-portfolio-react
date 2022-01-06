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
      <Navbar/>
      <br></br>
      
      <Home/>
      <About/>
      <Youtube/>
      <Contact/>
      
    </div>
  );
}

export default App;
