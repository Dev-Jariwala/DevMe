import React from 'react'
import "./homeSection.css"
import Navbar from './Navbar';


const HomeSection = ({ toggleSidebar }) => {

    return (
        <section className="home-section">
            <div className="home-content">

                <Navbar toggleSidebar={toggleSidebar} />

            </div>
        </section>
    );
};

export default HomeSection