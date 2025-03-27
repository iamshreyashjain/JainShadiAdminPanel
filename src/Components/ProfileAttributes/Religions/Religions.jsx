//react
import { useState } from "react";

//Manually create Data
import religionDropDown from "../../../data/dropDown/religionDropDown";

// reactIcons
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import ProfileAttributesTitle from "../../ReusableComponents/ProfileAttributesTitle/ProfileAttributesTitle";

export default function Religions() {
  const [religion, setreligion] = useState("");

  const handleChange = (e) => {
    setreligion(e.target.value);
  };

  return (
    <>
      {/*------------------------------Heading------------------------------*/}
      <ProfileAttributesTitle />

      {/*------------------------------SUB-Heading------------------------------*/}
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2 ">Religions</span>
      </div>

      {/*------------------------------Division------------------------------*/}

      {/* The Page is divided into two parts from here */}
      {/*------------------------------Part - I------------------------------*/}
      <div className="overflow-x-auto rounded-2xl p-4  grid grid-cols-2 gap-6 ">
        {/*------------------------------ Parent ------------------------------*/}
        <div className="shadow-lg p-2 rounded-2xl">
          {/*------------------------------ {Drop-Down} ------------------------------*/}

          <div className="flex justify-between items-center ">
            <div className="flex p-2 bg-white border border-gray-300 items-center w-32 justify-between my-4 rounded-md ">
              <span>All</span>
              <IoIosArrowDown />
            </div>
          </div>

          {/*------------------------------ {Table} ------------------------------*/}
          <table className="table-auto w-full ">
            <thead className="text-gray-700">
              <tr className="text-center text-sm bg-stone-100 border border-gray-300 border-b-0">
                <th className=" w-12 ">S No</th>
                <th className="p-2 ">Name</th>
                <th className="p-2 ">Options</th>
              </tr>
            </thead>
            <tbody>
              {religionDropDown.map((item) => (
                <tr
                  key={item.key}
                  className="text-center border border-gray-300 text-sm"
                >
                  <td className="">{item.key}</td>
                  <td className="p-2">{item?.value}</td>
                  <td className="p-2 relative">
                    <div
                      className="inline-block"
                    >
                      <PiDotsThreeOutlineVertical
                        size={20}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/*------------------------------Part - II------------------------------*/}
        {/*------------------------------The Form part will come here : An Input value, Add Button------------------------------*/}
        <div className="">
          <div className="shadow-lg p-2 rounded-2xl h-12/12 ">
            <div className="font-semibold">Add New Religion</div>
            {/*------------------------------FORM------------------------------*/}
            <form>
            {/*------------------------------Input-<Name: Religion>------------------------------*/}
              <label className="flex flex-col  my-3">
                <span className="text-md">Name</span>
                <input
                  className="bg-stone-100 p-3 my-3 rounded-lg text-stone-800 font-light outline-0 w-full "
                  type="text"
                  name="religion"
                  value={religion}
                  onChange={handleChange}
                  placeholder="Religion Name"
                />
              </label>
              {/*------------------------------Save Button------------------------------*/}
              <div className="grid items-end justify-end ">
                <button
                  type="submit"
                  className=" bg-rose-900 text-white py-2 px-8 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
