import React from "react";
import { NavLink, Outlet } from 'react-router-dom'

import { Navbar } from 'react-bootstrap';

import './Layout.css'

function Header(){ 

    return <>       
        <Navbar id='navbar' expand="lg" className="bg-body-tertiary">
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='about'>About</NavLink>
            <NavLink className='nav-link' to='destinations'>Destination</NavLink>
            <NavLink className='nav-link' to='createItinerary'>Create your own itinerary</NavLink>
            <NavLink className='nav-link' to='blog'>Blogs</NavLink>
            <NavLink className='nav-link' to='#'>Search</NavLink>
            <NavLink className='nav-link' to='#'>Login</NavLink>
        </Navbar>
        <Outlet />
        <footer>
            <p>Copyright 2024</p>
            <div id="footer-links">
                <NavLink className='nav-link' to='/'>Home</NavLink>
                <NavLink className='nav-link' to='about'>About</NavLink>
                <NavLink className='nav-link' to='destinations'>Destination</NavLink>
                <NavLink className='nav-link' to='createItinerary'>Create your own itinerary</NavLink>
                <NavLink className='nav-link' to='blog'>Blogs</NavLink>
            </div>
            
        </footer>
    </>
}

export default Header;