import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react' // You can use any icon library

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-full min-h-screen flex flex-col border border-gray-300">
            {/* Navbar */}
            <div className="border-b border-gray-300">
                <Navbar />
            </div>

            {/* Sidebar + Main Content */}
            <div className="flex flex-1 relative">
                {/* Toggle Sidebar Button (visible on small screens) */}
                <button
                    className="absolute top-4 left-4 z-20 md:hidden bg-white border border-gray-300 p-2 rounded"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <Menu className="w-5 h-5" />
                </button>

                {/* Sidebar (visible on md+, or toggle on mobile) */}
                <div className={`
                    fixed top-0 left-0 z-10 h-full bg-white border-r border-gray-300 w-64 p-4
                    transform transition-transform duration-300 ease-in-out
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:relative md:translate-x-0 md:block
                `}>
                    <Sidebar />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
