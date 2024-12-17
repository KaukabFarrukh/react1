import {Link} from 'react-router-dom';
import '../styles/navbar.css';

function Navbar () {
    return (
        <header>
        <div className="navContainer">   
            <nav className="navbar">
                <ul className="list">
                    <li className="navLink"><Link to="/">Home</Link></li>
                    <li className="navLink"><Link to="/About">About</Link></li>
                    <li className="navLink"><Link to="/Gallery">Gallery</Link></li>
                    <li className="navLink"><Link to="/Counter">Counter</Link></li>
                   
                </ul>
         </nav>
    </div>
    </header>
      

    );
}

export default Navbar;