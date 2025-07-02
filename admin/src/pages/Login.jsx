import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import AppContext from '../context/AppContext'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { Base_Url, setIsLoggedIn } = useContext(AppContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.log("All fields are required")
            return;
        }
        try {
            const response = await axios.post(`${Base_Url}/api/user/login`, { email, password });
            console.log("Login response:", response.data);
            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                setIsLoggedIn(true);
                navigate('/');
                toast.success("Logged In successfully")
            }
        } catch (error) {
            console.log(error);
            toast.error("Error in Login")
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">

                <div className="flex items-center justify-center mb-10">
                    <p className="text-[#414141] font-[Prata] font-normal text-[40px] leading-[120px] tracking-normal text-center capitalize mr-3">
                        Admin Login
                    </p>
                    <div className="h-[2px] bg-[#252525] rounded-[10px] w-[30px]"></div>
                </div>

                <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" />
                    <button type="submit" className="mt-4 bg-black text-white py-3 rounded text-sm hover:bg-gray-800 transition">Login</button>
                </form>

                <div className="mt-6 text-center space-y-2">
                    <p className="text-blue-600 hover:underline cursor-pointer">Forget Password?</p>
                    <p className="text-blue-600 hover:underline cursor-pointer" onClick={() => navigate("/sign-up")}>Create Account</p>
                </div>

            </div>
        </div>

    )
}

export default Login