import './Nav.css';

import { Link, NavLink, useNavigation } from "react-router-dom";


const Nav = () => {
    // const navigation = useNavigation();
    return (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            {/* <Link to="/posts">Posts</Link> */}
            <NavLink to="/posts">Posts</NavLink>
            <Link to="/todos"> Todos</Link>
            
            </nav>
            
            
        </div>
    );
};

export default Nav;