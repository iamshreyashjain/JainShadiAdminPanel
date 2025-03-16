import { FiUsers } from "react-icons/fi";

import DashboardComponents_BgImg from "../../../assets/Images/DashboardComponents_BgImg.png";

export default function DashboardTopLevelComp(){
    const data = [
        {
          index: 1,
          quantity: 230,
          title: "Total Members",
          logo: <FiUsers />
        },
        {
          index: 2,
          quantity: 260,
          title: "Total Members",
          logo: <FiUsers />
        },
        {
          index: 3,
          quantity: 260,
          title: "Total Members",
          logo: <FiUsers />
        },
        {
          index: 4,
          quantity: 260,
          title: "Total Members",
          logo: <FiUsers />
        },
        {
          index: 5,
          quantity: 260,
          title: "Total Members",
          logo: <FiUsers />
        },
        {
          index: 6,
          quantity: 260,
          title: "Total Members",
          logo: <FiUsers />
        },
        {
          index: 7,
          quantity: 260,
          title: "Total Members",
          logo: <FiUsers />
        },
        {
          index: 8,
          quantity: 260,
          title: "Total Members",
          logo: <FiUsers />
        },
      ]
    

  return (
    <>
    <div className="bg-amber-50 py-6 m-4 p-4 rounded-md shadow-md">
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
        <div key={item.index} className="relative w-full h-32 bg-white rounded-xl overflow-hidden  shadow-lg">
          {/* Background Image */}
          <div
            className="absolute inset-0 -top-6 bg-contain bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${DashboardComponents_BgImg})` }}
          />
          
          {/* Overlay */}
          <div className="absolute  inset-0 flex flex-col   text-slate-900 p-1 ">
          <div className="flex items-center justify-between w-full px-4">
            <span className="text-2xl font-medium text-red-900">{item.quantity}</span>
            <span className="bg-rose-100 text-rose-900 rounded-full p-1 mt-2 text-2xl">{item.logo}</span>
            </div>

            <div className="text-md font-light px-4 -mt-1.5 tracking-wide">{item.title}</div>
            </div>
        </div>
      ))}
    </div>
  </div>
  </>
  )
}
