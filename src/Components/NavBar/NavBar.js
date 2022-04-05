import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return(
        <div className="navbar">
            <nav>
                <div id='logo'>
                    <Link to="/">
                        <h2>Archaeology Fair</h2>
                    </Link>
                </div>
                <ul>
                    <Link to="/bio">
                        <li>Biography</li>
                    </Link>
                    <Link to="/video">
                        <li>Video</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;