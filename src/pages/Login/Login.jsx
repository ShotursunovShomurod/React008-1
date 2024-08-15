import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`);
        navigate("/admin");
    }

    return (
        <div className='w-full container mx-auto text-center mt-[36px] flex flex-col gap-[30px] mb-[400px]'>
            <p className='font-bold text-3xl'>Личный кабинет</p>
            <form className='container mx-auto flex flex-col w-[454px] gap-[14px] mt-20' onSubmit={handleForm}>
                <input 
                    required 
                    placeholder='Email' 
                    className='border rounded-[30px] px-[20px] py-[10px] outline-none' 
                    type="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    required 
                    placeholder='Password' 
                    className='border rounded-[30px] px-[20px] py-[10px] outline-none' 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type='submit' 
                    className='bg-[#FF8A1E] rounded-[30px] px-[20px] py-[10px] text-white font-bold'
                >
                    ADMIN PANEL
                </button>
                <p className='text-[#5a5a5a] text-left'>Выход</p>
            </form>
            <p className='font-bold'>Мы в социальных сетях!</p>
        </div>
    )
}

export default Login
