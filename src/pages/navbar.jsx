import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

function Navbar () {
    const { navbarColor } = useContext(ColorContext); 

    return (
        <header>
        <div className="navContainer">   
            <nav className="navbar" style={{ backgroundColor: navbarColor || "#ffffff" }}> {/* Apply dynamic color */}
                <ul className="list">
                <li className="navLink">
              <Link to="/">Home</Link>
            </li>
            <li className="navLink">
              <Link to="/About">About</Link>
            </li>
            <li className="navLink">
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li className="navLink">
              <Link to="/Counter">Counter</Link>
            </li>
            <li className="navLink">
              <Link to="/color-picker">Color Picker</Link> {/* New link */}
            </li>       
                </ul>
         </nav>
    </div>
    </header>
      

    );
}

export default Navbar;