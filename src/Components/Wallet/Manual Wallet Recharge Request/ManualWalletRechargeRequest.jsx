
import { useState } from "react";

import WalletTitle from "../../ReusableComponents/WalletTitle/WalletTitle";

import DateFilter from "../../ReusableComponents/DateFilter/DateFilter";
import Pagination from "../../ReusableComponents/Pagination/Pagination";


import data from "../../../data/Members_TableData";

// reactIcons
import { IoIosArrowDown } from "react-icons/io";


export default function ManualWalletRechargeRequest(){
    const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

    const filteredData = data.filter(item => {
      const itemDate = new Date(item.date);
      const start = dateRange.startDate ? new Date(dateRange.startDate) : null;
      const end = dateRange.endDate ? new Date(dateRange.endDate) : null;


      return (!start || itemDate >= start) && (!end || itemDate <= end);          
        
    });

    const [currentData, setCurrentData] = useState(data);

    const handleReset = () => {
      setDateRange("")
    }
  
  return(
    <>
      <WalletTitle/>
       <div className="flex justify-between items-center m-4">
          <span className="text-xl font-medium ">Offline Wallet Recharge Requests</span>
        </div>
        <div className="overflow-x-auto m-4 rounded-2xl p-4 shadow-2xl">
        <div className="flex justify-between items-center ">
          <div className="flex p-2 bg-white border border-gray-300 items-center w-32 justify-between my-4 rounded-md ">
            <span>All</span>
            <IoIosArrowDown />
          </div>

          <div className="flex gap-3 justify-center items-center">
        


          <div className="flex p-2 bg-white border border-gray-300 items-center w-40 justify-between my-4 rounded-md ">
            <span>Choose User</span>
            <IoIosArrowDown />
          </div>


          <DateFilter dateRange={dateRange} setDateRange={setDateRange} />

          <div>
          <button className=" items-center bg-rose-900 text-white p-2 px-4  rounded-md"  onClick = {handleReset} >
            Reset
          </button>
          </div>
          </div>
        </div>
        <table className="table-auto w-full">
          <thead className="text-gray-700">
            <tr className="text-center text-sm bg-stone-100 border border-gray-300 border-b-0">
              <th className="w-12 ">S No.</th>
              <th className="p-2 ">Name </th>
              <th className="p-2 ">Amount</th>
              <th className="p-2 ">Method</th>
              <th className="p-2 ">Approval</th>
              <th className="p-2 ">Date</th>
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
                <td className="p-2">{item?.amount}</td>
                <td className="p-2">{item?.method}</td>
                <td className="p-2">{item?.approval}</td>
                <td className="p-2">{item?.date}</td>
                <td className="p-2"> </td>
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
};
