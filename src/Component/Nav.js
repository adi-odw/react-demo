import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        background: 'black',
        display: 'flex',
        padding: '10px'
    }
    return (
        <nav style={navStyle} className="navbar">
            <h1>
                Logo
            </h1>
            <ul className="nav-link">
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        About
                    </li>
                </Link>
                <Link to="/product">
                    <li>
                        Product
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;