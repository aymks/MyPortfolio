import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"
import {useState} from "react";
const white = require('./1.jpg')
const black = require('./2.jpg')
const shirts = { white, black }

function App() {
  const [menuOpen , setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(shirts.white);
  
  return (
    <div className="app ">
      <div className="bkg" style={{ 
      //backgroundImage: `url("https://i.ibb.co/Y2K4hFC/1.png")` 
      //backgroundImage: `url("https://i.ibb.co/tYQgktM/2.png")` 
      backgroundImage: 'url(' + selected + ')',
        
    }}>
      
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <button className="btn1 " onClick={() => setSelected(shirts.black)}>Dark</button>
        <button className="btn2 " onClick={() => setSelected(shirts.white)}> Light</button>
        <div className="sections" >
        
         <Intro/>
         
          <Portfolio/>
          <Works/>
          <div className="cont">
          <Contact />
          </div>
        </div>
        
    </div></div>
  );
}

export default App;
