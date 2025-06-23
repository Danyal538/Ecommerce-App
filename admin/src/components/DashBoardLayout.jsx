// DashboardLayout.jsx
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div className="h-full min-h-screen flex flex-col border border-gray-300">
            {/* Navbar */}
            <div className="border-b border-gray-300">
                <Navbar />
            </div>

            {/* Sidebar + Main Content */}
            <div className="flex flex-1">
                {/* Sidebar with right border */}
                <div className="w-64 border-r border-gray-300">
                    <Sidebar />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
