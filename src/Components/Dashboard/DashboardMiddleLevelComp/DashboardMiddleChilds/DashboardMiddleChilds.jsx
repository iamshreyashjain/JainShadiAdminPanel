import DashboardComponents_BgImg from "./../../../../assets/Images/DashboardComponents_BgImg.png";
import { LuIndianRupee } from "react-icons/lu";
export default function DashboardMiddleChilds({data}){
  return (
    <div className="grid grid-cols-2 gap-4">
    {data.map((item) => (
      <div
        key={item.index}
        className="relative w-full h-32 bg-white rounded-xl overflow-hidden  shadow-lg"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 -top-6 bg-contain bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${DashboardComponents_BgImg})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute  inset-0 flex flex-col   text-slate-900 p-1 ">
          <div className="flex items-center justify-between w-full px-4">
            <span className="flex items-center text-2xl font-medium text-red-900">
              {item.amount}<LuIndianRupee />
            </span>
            <span className="bg-rose-100 text-rose-900 rounded-full p-1 mt-2 text-2xl">
              {item.logo}
            </span>
          </div>

          <div className="text-md font-light px-4 -mt-1.5">
            {item.title}
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}
