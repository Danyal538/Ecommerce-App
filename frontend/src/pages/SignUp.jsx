import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">

                {/* Heading with line beside it */}
                <div className="flex items-center justify-center mb-10">
                    <p className="text-2xl text-[#414141] font-[Prata] font-normal text-[40px] leading-[120px] tracking-normal text-center capitalize mr-3">Sign Up</p>
                    <div className="h-[2px] bg-[#252525] rounded-[10px] w-[30px] "></div>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-4" onSubmit={submitHandler}>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="p-2 border border-gray-300 rounded" />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" />
                    <button type="submit" className="mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">Sign Up</button>
                </form>

                {/* Already have an account */}
                <div className="mt-6 text-center">
                    <p>Already have an account?</p>
                    <button className="text-blue-600 hover:underline">Login Here</button>
                </div>
            </div>
        </div>



    )
}

export default SignUp