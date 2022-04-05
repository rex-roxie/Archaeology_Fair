import './Header.css'
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Header() {
    return(
        <div className="header">
            <NavBar />
            <header>
                <h1>Welcome to the Archaeology Fair</h1>
                <h2>Hope You Enjoy!</h2>
            </header>
        </div>
    );
}

export default Header;