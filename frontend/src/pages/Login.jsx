import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">

        {/* Heading with line beside it */}
        <div className="flex items-center justify-center mb-10">
          <p className="text-[#414141] font-[Prata] font-normal text-[40px] leading-[120px] tracking-normal text-center capitalize mr-3">
            Login
          </p>
          <div className="h-[2px] bg-[#252525] rounded-[10px] w-[30px]"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
          <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" />
          <button type="submit" className="mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">Login</button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-blue-600 hover:underline cursor-pointer">Forget Password?</p>
          <p className="text-blue-600 hover:underline cursor-pointer" onClick={() => navigate("/sign-up")}>Create Account</p>
        </div>

      </div>
    </div>

  )
}

export default Login