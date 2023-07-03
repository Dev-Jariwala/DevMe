import React from 'react'
import Sidebar from '../components/Sidebar';
import HomeSection from '../components/HomeSection';
import "./devme.css"


const DevMe = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className='fullscreen'>
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <HomeSection toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default DevMe