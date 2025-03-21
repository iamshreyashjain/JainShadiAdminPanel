import { useState } from "react";

//DropDown-Data
//Gender

import genderDropDown from "../../../data/dropDown/genderDropDown.js"
import { FaAngleDown } from "react-icons/fa";


export default function CreateMember() {


    const [defaultFormData, setdefaultFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        DOB: "",
        behalfOf: "",
        package: "",
        photo: "",
        password: "",
        confirmPassword: "",
        memberVerified: ""
    })

    //---------------------------> Gender <---------------------------
    const [defaultTextGender, setdefaultTextGender] = useState("Select Gender")
    const [isDropDownGender, setisDropDownGender] = useState(false);


    const toggleDropDownGender = () => {
        setisDropDownGender(!isDropDownGender);
    };

    const handleGenderChange = (gender) => {
        setdefaultTextGender(gender);
        setisDropDownGender(false);
        setdefaultFormData((prevData) => ({
            ...prevData,
            gender: gender
        }))

    }




    //---------------------------> FORM <---------------------------
    const handleChange = (e) => {
        setdefaultFormData({ ...defaultFormData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", defaultFormData);
    }

    return (
        <div className="flex items-center justify-center m-4 rounded-2xl p-4 shadow-2xl bg-stone-100 h-screen">
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 bg-white rounded-2xl shadow-2xl p-6 w-9/12"
            >
                <label className="flex flex-col ">
                    <span className="text-md">First Name</span>
                    <input
                        className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light outline-0"
                        type="text"
                        name="firstName"
                        value={defaultFormData.firstName}
                        onChange={handleChange}
                        placeholder="First Name" />
                </label>
                <label className="grid grid-cols-1">
                    Last Name
                    <input
                        className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light  outline-0"
                        type="text"
                        name="lastName"
                        value={defaultFormData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </label>
                <label className="grid grid-cols-1">
                    Email
                    <input
                        className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                        type="email"
                        name="email"
                        value={defaultFormData.email}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </label>
                <label
                    htmlFor="gender"
                    className="grid grid-cols-1"
                >
                    Gender 
                    <div
                        className="relative"
                        onClick={toggleDropDownGender}
                        onMouseLeave={() => setisDropDownGender(false)}
                    >
                        <button
                            className="mt-1 flex w-full items-center justify-between rounded-md bg-stone-50 text-stone-800 font-light border border-gray-300 p-2"
                            id="genderDropDown"
                        >
                            {defaultTextGender}
                            <FaAngleDown className="ml-2 text-gray-400" />
                        </button>
                        {isDropDownGender && (
                            <div
                                className="top-10 absolute w-full rounded-md border border-gray-300 bg-white">
                                <ul className="text-sm text-gray-500">
                                    {genderDropDown.map(({ key, value }) => (
                                        <li key={key}
                                            onClick={() => handleGenderChange(value)}
                                            className="block p-2  cursor-pointer hover:bg-stone-600 hover:text-white">
                                            {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                </label>

                <label className="grid grid-cols-1">
                    Date Of Birth
                    <input className="bg-amber-50" type="text" name="name" />
                </label>
                <label className="grid grid-cols-1">
                    On Behalf of
                    <input className="bg-amber-50" type="text" name="name" />
                </label>
                <label className="grid grid-cols-1">
                    Package
                    <input className="bg-amber-50" type="text" name="name" />
                </label>
                <label className="grid grid-cols-1">
                    Photo
                    <input className="bg-amber-50" type="text" name="name" />
                </label>

                <label className="grid grid-cols-1">
                    Password
                    <input className="bg-amber-50" type="text" name="name" />
                </label>
                <label className="grid grid-cols-1">
                    Confirm Password
                    <input className="bg-amber-50" type="text" name="name" />
                </label>
                <label className="grid grid-cols-1">
                    Member Veified
                    <input className="bg-amber-50" type="text" name="name" />
                </label>

            </form>
        </div>
    )
}
