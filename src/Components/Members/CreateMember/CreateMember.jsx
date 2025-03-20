import { useState } from "react";


export default function CreateMember() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    }

    return (
        <div className="flex items-center justify-center m-4 rounded-2xl p-4 shadow-2xl bg-stone-100 h-screen">
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4 bg-white rounded-2xl shadow-2xl p-6 w-9/12"
            >
                <label className="flex flex-col ">
                   <span className ="text-lg font-extralight">First Name</span>
                    <input 
                        className="bg-stone-50 p-3 rounded-lg text-gray-700 font-light" 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First Name" />
                </label>
                <label className="grid grid-cols-1">
                    Last Name
                    <input className="bg-amber-50" type="text" name="name" />
                </label>
                <label className="grid grid-cols-1">
                Email
                    <input className="bg-amber-50" type="text" name="name" />
                </label>
                <label className="grid grid-cols-1">
                Gender
                    <input className="bg-amber-50" type="text" name="name" />
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
