import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../Auth/authContext';

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { login, logout } = authContext;
    return (
        <>
            <button onClick={() => login()}>Login</button>
            <button onClick={() => logout()}>Logout</button>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/app'>App</NavLink>
                <NavLink to='/red'>redirect</NavLink>
            </nav>
        </>
    );
};

export default Navbar;
