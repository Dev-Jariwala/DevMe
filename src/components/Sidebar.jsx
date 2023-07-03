import React, { useEffect } from 'react'
import { useSwipeable } from 'react-swipeable';
import menuApi from './menuApi';
import "./sidebar.css"
const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const handlers = useSwipeable({
        onSwipedRight: toggleSidebar, // Swipe right to open sidebar
        onSwipedLeft: toggleSidebar, // Swipe left to close sidebar
    });
    useEffect(() => {
        const arrows = document.querySelectorAll('.arrow');

        const handleClick = (e) => {
            const arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle('showMenu');
        };

        arrows.forEach((arrow) => {
            arrow.addEventListener('click', handleClick);
        });

        return () => {
            // Clean up the event listener when the component unmounts
            arrows.forEach((arrow) => {
                arrow.removeEventListener('click', handleClick);
            });
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`}{...handlers}>
            <div>
                <div className="logo-details">
                    <img className="logo_img" src="img/logo.png" alt="" />
                    <span className="logo_name">DevME</span>
                </div>
                <ul className="nav-links">
                    {menuApi.map((curElm) => {
                        return (
                            <>
                                <li >
                                    <div className="iocn-link">
                                        <a href="/">
                                            <i className={curElm.icon}></i>
                                            <span className="link_name">{curElm.name}</span>
                                        </a>
                                        <i className={`${curElm.subMenu.length === 0 ? '' : 'bx bxs-chevron-down arrow'}`}></i>

                                    </div>
                                    <ul className={`sub-menu ${curElm.subMenu.length === 0 ? 'blank' : ''}`}>
                                        <li><a className="link_name" href="/">{curElm.name}</a></li>
                                        {curElm.subMenu.map((curSubMenu, index) => {
                                            return (
                                                <>
                                                    <li ><a href="/">{curSubMenu}</a></li>
                                                </>
                                            )
                                        })}
                                    </ul>
                                </li>

                            </>
                        )
                    })}



                </ul>
            </div>
            <div className="profile-details">
                <div className="profile-content">
                    <img src="img/Dprofile.png" alt="profileImg" />
                    <div className="name-job">
                        <div className="profile_name">Dev Jariwala</div>
                        <div className="job">Web Desginer</div>
                    </div>
                </div>
                <i className='bx bx-log-out logout-i'></i>
            </div>
        </div >
    );
};

export default Sidebar