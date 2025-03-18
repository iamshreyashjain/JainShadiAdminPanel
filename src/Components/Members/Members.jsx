import { BsPlusCircleDotted } from "react-icons/bs";
import MembersTitle from "./MembersTitle/MembersTitle";
import imgIcon from "../../assets/Images/imgIcon.png";

import { PiDotsThreeOutlineVertical } from "react-icons/pi";

function Members() {
  const data = [
    {
      key: 1,
      id: 2065376,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 0,
      memberSince: "2021-09-01",
      memberStatus: "Active",
    },
    {
      key: 2,
      id: 2065376,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 0,
      memberSince: "2021-09-01",
      memberStatus: "Unactive",
    }, {
      key: 3,
      id: 2065376,
      userCode: 122113,
      name: "John Doe",
      img: imgIcon,
      gender: "Male",
      profileReported: 0,
      memberSince: "2021-09-01",
      memberStatus: "Active",
    },
  ];

  return (
    <>
      <MembersTitle />
      <div className="flex justify-between items-center m-4">
        <span className="text-xl ">Free Members</span>
        <button className="flex items-center bg-rose-900 text-white p-2 gap-2 rounded-md">
          <BsPlusCircleDotted size={22} />
          Add New Member
        </button>
      </div>
      <div className="overflow-x-auto m-4 rounded-2xl p-4 shadow-2xl">
        <table className="table-auto w-full">
          <thead className=" text-gray-700">
            <tr className="text-center bg-amber-50 border border-b-0  ">
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

          {/* Table Body */}
          <tbody className="">
            {data.map((item, index) => (
              <tr key={item.id} className="text-center border ">
                <td className="p-2 ">{index + 1}</td>
                <td className="p-2 ">{item.id}</td>
                <td className="p-2 ">{item.userCode}</td>
                <td className="p-2 ">{item.name}</td>
                <td className="p-2 ">
                  <img src={item.img} alt="Profile" className="w-10 h-10 rounded-md mx-auto" />
                </td>
                <td className="p-2 ">{item.gender}</td>
                <td className="p-2 ">{item.profileReported}</td>
                <td className="p-2 ">{item.memberSince}</td>
                <td>

                  <button
                    className={`px-2 py-1  font-light text-white min-w-24  rounded-lg ${item.memberStatus === "Active" ? "bg-green-600" : "bg-orange-600"
                      }`}
                  >
                    {item.memberStatus}
                  </button>
                </td>
                <td className="p-2 ">
                  <button className="" onClick={(e) => (e.preventDefault())}><PiDotsThreeOutlineVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Members;
