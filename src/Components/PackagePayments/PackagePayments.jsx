//react
import { useState } from "react";
import { Link } from "react-router-dom";

import Pagination from "../ReusableComponents/Pagination/Pagination";

import TableMenu from "../ReusableComponents/TableMenu/TableMenu";
import tableMenu from "./../../data/TableMenu.js";

// reactIcons
import { BsPlusCircleDotted } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { CgSearch } from "react-icons/cg";

export default function PackagePayments() {
  const data = [];
  const [currentData, setCurrentData] = useState(data);
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [tableMenuOption] = useState(tableMenu);

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

  return (
    <>
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2 ">Package Payment List </span>
      </div>
      <div className="overflow-x-auto m-4 rounded-2xl p-4 shadow-2xl">
        <div className="flex justify-between items-center ">
          <div className="flex p-2 bg-white border border-gray-300 items-center w-32 justify-between my-2 rounded-md ">
            <span>All</span>
            <IoIosArrowDown />
          </div>
        </div>
        <table className="table-auto w-full">
          <thead className="text-gray-700">
            <tr className="text-center text-sm bg-stone-100 border border-gray-300 border-b-0">
              <th className="w-12">S No.</th>
              <th className="p-2 ">Member Name</th>
              <th className="p-2 ">Package</th>
              <th className="p-2 ">Payment Method</th>
              <th className="p-2 ">Amount</th>
              <th className="p-2 ">Payment Status</th>
              <th className="p-2 ">Payment Code</th>
              <th className="p-2 ">Purchase Date</th>
              <th className="p-2 ">Options</th>
            </tr>
          </thead>
          <tbody>
            {currentData && currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr
                  key={item.id}
                  className="text-center border border-gray-300 text-sm"
                >
                  <td className="">{index + 1}</td>
                  <td className="p-2">{item?.memberName}</td>
                  <td className="p-2">{item?.package}</td>
                  <td className="p-2">{item?.paymentMethod}</td>
                  <td className="p-2">{item?.amount}</td>
                  <td className="p-2">{item?.paymentStatus}</td>
                  <td className="p-2">{item?.paymentCode}</td>
                  <td className="p-2">{item?.purchaseDate}</td>
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
