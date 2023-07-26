import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Stats from './Components/Stats';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div style={{marginTop:'0px'}} >
  
    <Navbar id="nav-menu"/>
<Home id="home"/>
<About id="about" class="about-section"/>
<Skills id="skills"/>
<Projects id="projects"/>
<Stats/>
<Contact id="contact"/>
   
    </div>
  );
}

export default App;
