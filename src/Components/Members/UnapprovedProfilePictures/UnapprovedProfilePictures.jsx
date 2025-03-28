//react
import { useState } from "react";

// reactIcons
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";

import TableMenu from "../../ReusableComponents/TableMenu/TableMenu";

import data from "../../../data/Members_TableData";
import tableMenu from "../../../data/TableMenu";

import Pagination from "../../ReusableComponents/Pagination/Pagination";
import MembersTitle from "../../ReusableComponents/MembersTitle/MembersTitle";

export default function UnapprovedProfilePictures() {
  const [search, setSearch] = useState("");
  const [currentData, setCurrentData] = useState(data);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const tableMenuOption = tableMenu;

  const handleAction = (action) => {
    if (action === tableMenu[0]) {
      console.log("View Clicked");
    } else if (action === tableMenu[1]) {
      console.log("Edit Clicked");
    } else if (action === tableMenu[2]) {
      console.log("Block Clicked");
    } else if (action === tableMenu[3]) {
      console.log("Package Clicked");
    } else if (action === tableMenu[4]) {
      console.log("Wallet Balance Clicked");
    } else if (action === tableMenu[5]) {
      console.log("Login as this Memeber Clicked");
    } else if (action === tableMenu[6]) {
      console.log("Deleted Clicked");
    }
    setVisibleDropdown(null);
  };

  const handleMouseEnter = (id) => {
    setVisibleDropdown(id);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <MembersTitle />
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2">
          Unapproved Profile Pictures{" "}
        </span>
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
              <th className="p-2 ">S No.</th>
              <th className="p-2 ">Name</th>
              <th className="p-2 w-3/12">Image</th>

              <th className="p-2 ">Options</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={item.id}
                className="text-center border border-gray-300 text-sm"
              >
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item?.name}</td>
                <td className="p-2">
                  <img
                    className="mx-auto h-6/12 w-6/12 "
                    src={item?.img}
                    alt={item?.name}
                  />
                </td>

                <td className="p-2 relative">
                  <div
                    className="inline-block"
                    onMouseEnter={() => handleMouseEnter(item?.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <PiDotsThreeOutlineVertical
                      size={20}
                      className="cursor-pointer"
                    />
                    {visibleDropdown === item?.id && (
                      <div className="absolute right-0 w-42 bg-stone-100 text-gray-900 shadow-lg rounded-md  z-10">
                        <TableMenu
                          item={tableMenuOption}
                          onItemClick={handleAction}
                        />
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
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
