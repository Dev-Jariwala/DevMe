import React from 'react'
import "./navbar.css"
import FullScreen from './FullScreen';
const Navbar = ({ toggleSidebar }) => {
    return (
        <div className='navbar'>
            <i className="bx bx-menu" onClick={toggleSidebar}></i>

            <div className="nav-icons">
                <FullScreen />
                <FullScreen />
                <FullScreen />
                <FullScreen />
                <FullScreen />
            </div>
        </div>
    )
}

export default Navbar