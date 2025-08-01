import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react' // or any icon

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <div className="border-b border-gray-300">
                <Navbar />
            </div>

            {/* Sidebar + Main Content */}
            <div className="flex flex-1 relative">
                {/* Sidebar Toggle for Mobile */}
                <button
                    className="absolute top-4 left-4 z-30 p-2 bg-white border rounded md:hidden"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <Menu className="w-5 h-5" />
                </button>

                {/* Sidebar */}
                <div
                    className={`fixed md:static top-0 left-0 h-full md:h-auto bg-white z-20 w-64 border-r transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:flex`}
                >
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 z-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
