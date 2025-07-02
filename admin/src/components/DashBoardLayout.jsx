import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu } from 'lucide-react'

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex flex-1 relative">
                {/* Sidebar toggle button */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="md:hidden absolute top-4 left-4 z-30 bg-white border border-gray-300 p-2 rounded shadow"
                >
                    <Menu className="w-5 h-5" />
                </button>

                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full bg-white z-20 w-64 border-r transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <Sidebar onClose={() => setSidebarOpen(false)} />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto z-10 bg-gray-50 min-h-screen">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
