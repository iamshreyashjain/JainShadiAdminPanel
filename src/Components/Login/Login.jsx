import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import couples_loginScreenImage from './../../assets/Images/couples_loginScreenImage.png'
import flowers_loginScreenImage from './../../assets/Images/flowers_loginScreenImage.png'


export default function Login() {
    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const [isChecked, setischecked] = useState(true)

    const handleCheckboxChange = () => {
        setischecked(!isChecked)
    }

    const loginAPI_URL = 'https://jainsadi.copulaa.com/api/AdminProfile/login'

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setform((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const login_payloadData = {
            userName: form.email,
            password: form.password,
            "deviceType": "string",
            "deviceAddress": "string"
        }

        try {
            const response = await axios.post(loginAPI_URL, login_payloadData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            
            localStorage.setItem("token", response.data.token);

            const { isSuccess } = response.data;
            if (isSuccess) {
                navigate('/home')
            }

        } catch (error) {
            console.error("Login failed", error.response?.data || error.message);
        }
    };

    return (
        <>
            <div className="flex flex-row min-h-screen ">
                <div className=" w-1/12">
                    <img
                        src={flowers_loginScreenImage}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2    h-[500px]"
                    />
                </div>
                <div className=" w-7/12 flex items-center ">
                    <div className='mx-auto  w-6/12 '>
                        <h1 className="font-bold text-3xl">
                            Login With Your Account
                        </h1>
                        <h1 className="font-thin text-sm">
                            See what is going on with your business
                        </h1>
                        <form onSubmit={handleSubmit} className='grid gap-3 mt-6'>
                            <label className='grid'>Email
                                <input
                                    type='email'
                                    className="outline-none border-1 border-gray-300 text-gray-800 rounded-md p-2"
                                    value={form.email}
                                    name="email"
                                    onChange={handleChange}
                                    placeholder='john@gmail.com' />
                            </label>
                            <label className='grid'>Password
                                <input
                                    type='password'
                                    className="outline-none border-1 border-gray-300  rounded-md p-2"
                                    value={form.password}
                                    name="password"
                                    onChange={handleChange}
                                    placeholder="xxxx-xxxx" />
                            </label>
                        </form>
                        <div className='flex justify-between items-center my-6'>
                            <label>
                                <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} className='mr-1' />
                                Remember be
                            </label>
                            <h1 className='text-rose-800  text-sm font-medium'> Forgot Password ? </h1>
                        </div>
                        <button onClick={handleSubmit} className='text-white bg-rose-800 w-full shadow-md  p-2 rounded-md'> Login </button>
                    </div>
                </div>
                <div className="flex  relative">
                    <img src={couples_loginScreenImage} className='h-screen object-cover  w-3xl' />

                </div>
            </div>
        </>
    );
}
