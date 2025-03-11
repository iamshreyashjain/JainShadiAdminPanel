import { Link } from "react-router-dom"

import { FaUserAlt } from "react-icons/fa";
import { RiHome5Fill } from "react-icons/ri";


export default function Sidebar(){
    const siderbarLinks = [
        {
            name: "home",
            link: "/home",
            logo : <FaUserAlt/>,
        },
        {
            name: "home2",
            link: "/home2",
            logo : "",
        },
]
    return(
        <>
            <div className="h-screen w-2/12 bg-slate-950">
            <ul>
                <li className="text-gray-200 grid items-center justify-center mt-12">{siderbarLinks.map(({name, link, logo}, index)=>(
                    
                    <Link className="flex items-center gap-3 my-1" to = {link} key={index}>{logo} {name}</Link>
                ))
                }</li>
            </ul>
            </div>
        </>
    )
}