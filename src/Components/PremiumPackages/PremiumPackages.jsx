//react
import { useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../ReusableComponents/Pagination/Pagination";

import TableMenu from "../ReusableComponents/TableMenu/TableMenu";
import tableMenu from "./../../data/TableMenu.js";

import PremiumPackages_TableData from "../../data/PremiumPackages_TableData.js";

// reactIcons
import { BsPlusCircleDotted } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import { CgSearch } from "react-icons/cg";
import { MdModeEditOutline } from "react-icons/md";

export default function PremiumPackages() {
  const [search, setSearch] = useState("");
  const data = PremiumPackages_TableData;
  const [currentData, setCurrentData] = useState(data);

  const [tableMenuOption] = useState(tableMenu);

  const [isToggled, setIsToggled] = useState({});
  const handleToggle = (key) => {
    setIsToggled((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the specific item's state
    }));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium ">Premium Packages</span>
        <Link
          to="/home/create/premiumPackages"
          className="flex items-center bg-rose-900 text-white p-2 gap-2 rounded-md"
        >
          <BsPlusCircleDotted size={22} />
          Add New Package
        </Link>
      </div>
      <div className="overflow-x-auto m-4 rounded-2xl p-4 shadow-2xl">
        <div className="flex justify-between items-center ">
          <div className="flex p-2 bg-white border border-gray-300 items-center w-32 justify-between my-4 rounded-md ">
            <span>All</span>
            <IoIosArrowDown />
          </div>
          <div className="flex  bg-white drop-shadow-xl items-center w-4/12 justify-between my-4 rounded-md ">
            <input
              type="text"
              className="text-sm text-gray-900 font-thin outline-0 flex-grow p-3 px-4"
              value={search}
              onChange={handleChange}
              placeholder="Search"
            />
            <CgSearch size={22} />
          </div>
        </div>
        <table className="table-auto w-full">
          <thead className="text-gray-700">
            <tr className="text-center text-sm bg-stone-100 border border-gray-300 border-b-0">
              <th className=" w-12 ">S No</th>
              <th className="p-2 ">Name</th>
              <th className="p-2 ">Price</th>
              <th className="p-2 ">Status</th>
              <th className="p-2 ">Options</th>
            </tr>
          </thead>
          <tbody>
            {currentData && currentData.length > 0 ? (
              currentData.map((item) => (
                <tr
                  key={item.key}
                  className="text-center border border-gray-300 text-sm"
                >
                  <td className="">{item.key}</td>
                  <td className="p-2">{item?.name}</td>
                  <td className="p-2">{item?.price}</td>
                  <td className="p-2">
                    <div
                      className={`w-12 h-6 flex mx-auto rounded-full mt-2 cursor-pointer ${
                        isToggled[item?.key] ? "bg-rose-800" : "bg-gray-800"
                      }`}
                      onClick={() => handleToggle(item?.key)}
                    >
                      <div
                        className={`bg-stone-200 w-6 h-6 rounded-full shadow-lg transform duration-300 ${
                          isToggled[item?.key]
                            ? "translate-x-7"
                            : "translate-x-0"
                        }`}
                      ></div>
                    </div>
                  </td>

                  <td className="p-2 relative ">
                    <MdModeEditOutline
                      className="bg-rose-800 mx-auto text-white rounded p-[0.8px]"
                      size={20}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <>
                <tr className="h-[200px]">
                  <td
                    colSpan="8"
                    className="text-center text-3xl font-medium py-2 text-gray-300 align-middle h-full"
                  >
                    Nothing found
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        <Pagination
          data={data}
          itemsPerPage={10}
          onPageChange={setCurrentData}
        />
      </div>
    </>
  );
}
