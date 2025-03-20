import { useState } from "react";
import MembersTitle from "./MembersTitle/MembersTitle";
import imgIcon from "../../assets/Images/imgIcon.png";
import { BsPlusCircleDotted } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";
import Pagination from "../Pagination";

function Members() {
  const data = [
    {
      key: 1,
      id: 2065376,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 2,
      memberSince: "2021-09-01",
      memberStatus: "Active",
    },
    {
      key: 2,
      id: 2065372,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 0,
      memberSince: "2021-09-01",
      memberStatus: "Unactive",
    },
    {
      key: 3,
      id: 2065379,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Active",
    },
    {
      key: 4,
      id: 4065379,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Unactive",
    },
    {
      key: 5,
      id: 6065379,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Active",
    },
    {
      key: 6,
      id: 5065379,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Unactive",
    },
    {
      key: 7,
      id: 1065379,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Active",
    },
    {
      key: 8,
      id: 8065379,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Active",
    },
    {
      key: 9,
      id: 2965379,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Unactive",
    },
    {
      key: 10,
      id: 2065479,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Unactive",
    },
    {
      key: 11,
      id: 2065479,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 5,
      memberSince: "2021-09-01",
      memberStatus: "Unactive",
    },
  ];

  const [currentData, setCurrentData] = useState(data);
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const handleMouseEnter = (id) => {
    setVisibleDropdown(id);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  return (
    <>
      <MembersTitle />
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium ">Free Members</span>
        <button className="flex items-center bg-rose-900 text-white p-2 gap-2 rounded-md">
          <BsPlusCircleDotted size={22} />
          Add New Member
        </button>
      </div>

      <div className="overflow-x-auto m-4 rounded-2xl p-4 shadow-2xl">
        <div className="flex justify-between items-center ">
          <div className="flex p-2 bg-white border border-gray-300 items-center w-32 justify-between my-4 rounded-md ">
            <span>All</span>
            <IoIosArrowDown />
          </div>

          <div className="flex p-2 bg-white drop-shadow-xl items-center w-4/12 justify-between my-4 rounded-md ">
            <span className="text-sm text-gray-900 font-thin">Search</span>
            <CgSearch size={22} />
          </div>
        </div>

        <table className="table-auto w-full">
          <thead className="text-gray-700">
            <tr className="text-center text-sm bg-stone-100 border border-gray-300 border-b-0">
              <th className="p-2 "></th>
              <th className="p-2 ">ID</th>
              <th className="p-2 ">User Code</th>
              <th className="p-2 ">Name</th>
              <th className="p-2 ">Image</th>
              <th className="p-2 ">Gender</th>
              <th className="p-2 ">Profile Reported</th>
              <th className="p-2 ">Member Since</th>
              <th className="p-2 ">Member Status</th>
              <th className="p-2 ">Options</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item, index) => (
              <tr key={item.id} className="text-center border border-gray-300 text-sm">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.userCode}</td>
                <td className="p-2">{item.name}</td>
                <td className="p-2">
                  <img src={item.img} alt="Profile" className="w-10 h-10 rounded-md mx-auto" />
                </td>
                <td className="p-2">{item.gender}</td>
                <td className="p-2">{item.profileReported}</td>
                <td className="p-2">{item.memberSince}</td>
                <td>
                  <button
                    className={`px-2 py-1 font-light text-white min-w-24 rounded-lg ${item.memberStatus === "Active" ? "bg-green-600" : "bg-orange-600"
                      }`}
                  >
                    {item.memberStatus}
                  </button>
                </td>
                <td className="p-2 relative">
                  <div
                    className="inline-block"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <PiDotsThreeOutlineVertical size={20} className="cursor-pointer" />
                    {visibleDropdown === item.id && (
                      <div className="absolute right-0 w-32 bg-white border shadow-lg rounded-md z-10">
                        <ul className="py-2 text-sm text-gray-700">
                          <li className=" hover:bg-gray-100 cursor-pointer">View</li>
                          <li className=" hover:bg-gray-100 cursor-pointer">Edit</li>
                          <li className=" hover:bg-gray-100 cursor-pointer">Block</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination data={data} itemsPerPage={10} onPageChange={setCurrentData} />

      </div>
    </>
  );
}

export default Members;
