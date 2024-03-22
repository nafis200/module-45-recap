import { Link, NavLink } from "react-router-dom";

import './Header.css'


const Header = () => {
    return (
        <div>
            <h2 className="bg-yellow-400">Navbar</h2>
            <nav className="space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">posts</NavLink>
                
            </nav>

        </div>
    );
};

export default Header;