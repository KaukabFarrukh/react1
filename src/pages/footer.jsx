import {Link} from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import home from '../pages/Home.jsx';
import about from '../pages/About.jsx';
import '../styles/footer.css';

function Footer () {
    return (
        <footer className="footer">
        <div className="footerContainer">
            <nav className="footerNav">
                <ul className="footerList">
                    <li className="footerItem">
                        <Link to="/" className="footerLink">Home</Link>
                    </li>
                    <li className="footerItem">
                        <Link to="/About" className="footerLink">About</Link>
                    </li>
                    <li className="footerItem">
                        <Link to="/" className="footerLink">Find Us</Link>
                    </li>
                    <li className="footerItem">
                        <Link to="/" className="footerLink">Facebook</Link>
                    </li>
                    <li className="footerItem">
                        <Link to="/" className="footerLink">LinkedIn</Link>
                    </li>
                    <li className="footerItem">
                        <Link to="/" className="footerLink">Instagram</Link>
                    </li>
                </ul>
            </nav>
            <p className="footerCopy">© 2024 KKF Company. All rights reserved.</p>
        </div>
    </footer>    
    );
}

export default Footer;