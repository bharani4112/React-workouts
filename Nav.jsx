import React, { useState } from 'react'
import './nav.css'
const Navs = () => {
const [isOpen, setIsOpen] = useState( false);
console.log(isOpen);
const open = () => {
    // Toggle menu open/close based on current state and screen width
    if (window.screen.width < 900 && isOpen) {
        setIsOpen(false);
        display = 'none';

    } else {
        setIsOpen(true); 
        display = 'block';
    }
}
return (
    <nav className='nav'>
        <h2 className='title'>title</h2>
        <button
            className='menu-toggle'
            onClick={open}
           
            aria-label="Open menu"
        >
            &#9776;
        </button>
        <ul className='nav-items' onChange={() => setIsOpen(false)} style={{ display: isOpen || window.screen.width > 900 ? 'flex' : 'none' }}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <button
                className='close'
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
            >
                X
            </button>
        </ul>
    </nav>
)
}

export default Navs