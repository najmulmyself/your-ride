import React from 'react';
import './Navbar.css';
const Navabar = () => {
    return (
        <div className="nav">
            <li className='li'>Home</li>
            <li className='li'>Destination</li>
            <li className='li'>Blog</li>
            <li className='li'>Contact</li>
            <button>Log In</button>
        </div>
    );
};

export default Navabar;