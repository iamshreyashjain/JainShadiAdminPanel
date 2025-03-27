//react
import { useState } from "react";

//customData

import languagesDropDown from "../../../data/dropDown/languagesDropDown";

// reactIcons
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import ProfileAttributesTitle from "../../ReusableComponents/ProfileAttributesTitle/ProfileAttributesTitle";

export default function MemberLanguage() {
  const [memberLanguage, setmemberLanguage] = useState("");


  
  //---------------------------> Member Languages <---------------------------
  const [defaultTextmemberLanguage, setdefaultmemberLanguage] =
    useState("Language Name");
  const [isDropDownmemberLanguage, setisDropDownmemberLanguage] =
    useState(false);

  const toggleDropDownPackage = (e) => {
    e.preventDefault();
    setisDropDownmemberLanguage(!isDropDownmemberLanguage);
  };

  const handlePackage = (updatedmemberLanguage) => {
    setdefaultmemberLanguage(updatedmemberLanguage);
    setisDropDownmemberLanguage(false);
    setmemberLanguage((prev) => ({
      ...prev,
      memberLanguage: updatedmemberLanguage,
    }));
  };

  return (
    <>
      {/*------------------------------Heading------------------------------*/}
      <ProfileAttributesTitle />

      {/*------------------------------SUB-Heading------------------------------*/}
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2 ">Member Languages</span>
      </div>

      {/*------------------------------Division------------------------------*/}

      {/* The Page is divided into two parts from here */}
      {/*------------------------------Part - I------------------------------*/}
      <div className="overflow-x-auto rounded-2xl p-4  grid grid-cols-2 gap-6">
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
                <th className="p-2 ">Name</th>
                <th className="p-2 ">Options</th>
              </tr>
            </thead>
            <tbody>
              {languagesDropDown.map((item) => (
                <tr
                  key={item.id}
                  className="text-center border border-gray-300 text-sm"
                >
                  <td className="p-2">{item?.value}</td>
                  <td className="p-2 relative">
                    <div
                      className="inline-block"


                    >
                      <PiDotsThreeOutlineVertical
                        size={20}
                        className="cursor-pointer"
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
          <div className="shadow-lg p-2 rounded-2xl ">
            <div className="font-semibold">Add New Member Language</div>
            <form>
              <label htmlFor="package" className="grid grid-cols-1 my-3">
                Name
                <div
                  className="relative"
                  onClick={toggleDropDownPackage}
                  onMouseLeave={() => setisDropDownmemberLanguage(false)}
                >
                  <button
                    className="mt-1 flex w-full items-center justify-between rounded-md bg-stone-100 text-stone-800 font-light border border-gray-300 p-2"
                    id="genderDropDown"
                  >
                    {defaultTextmemberLanguage}
                    <FaAngleDown className="ml-2 text-gray-400" />
                  </button>
                  {isDropDownmemberLanguage && (
                    <div className="top-10 absolute w-full rounded-md border border-gray-300 bg-white">
                      <ul className="text-sm text-gray-500">
                        {languagesDropDown.map(({ key, value }) => (
                          <li
                            key={key}
                            onClick={() => handlePackage(value)}
                            className="block p-2  cursor-pointer hover:bg-stone-600 hover:text-white"
                          >
                            {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </label>
              <div className="flex items-end justify-end  mt-4">
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
