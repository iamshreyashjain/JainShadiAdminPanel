//react
import { useState } from "react";

//customData
import religionDropDown from "../../../data/dropDown/religionDropDown";
import subCaste from "../../../data/dropDown/subCasteDropDown";

// reactIcons
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

import ProfileAttributesTitle from "../../ReusableComponents/ProfileAttributesTitle/ProfileAttributesTitle";

export default function SubCaste() {
  const [defaultFormData, setdefaultFormData] = useState({
    religion: "",
    caste: "",
  });

  //---------------------------> Caste <---------------------------
  const [defaultTextCaste, setdefaultTextCaste] = useState("Caste Name");
  const [isDropDownCaste, setisDropDownCaste] = useState(false);

  const toggleDropDownCaste = (e) => {
    e.preventDefault();
    setisDropDownCaste(!isDropDownCaste);
  };

  const handleCaste = (updateCaste) => {
    setdefaultTextCaste(updateCaste);
    setisDropDownCaste(false);
    setdefaultFormData((prev) => ({
      ...prev,
      caste: updateCaste,
    }));
  };
  //---------------------------> Sub Caste <---------------------------
  const [defaultTextSubCaste, setdefaultTextSubCaste] =
    useState("Sub Caste Name");
  const [isDropDownSubCaste, setisDropDownSubCaste] = useState(false);

  const toggleDropDownSubCaste = (e) => {
    e.preventDefault();
    setisDropDownSubCaste(!isDropDownCaste);
  };

  const handleSubCaste = (updateSubCaste) => {
    setdefaultTextSubCaste(updateSubCaste);
    setisDropDownSubCaste(false);
    setdefaultFormData((prev) => ({
      ...prev,
      subcaste: updateSubCaste,
    }));
  };

  //---------------------------> FORM <---------------------------
  const handleChange = (e) => {
    setdefaultFormData({
      ...defaultFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/*------------------------------Heading------------------------------*/}
      <ProfileAttributesTitle />

      {/*------------------------------SUB-Heading------------------------------*/}
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2 ">Sub Caste</span>
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
              {subCaste.map((item) => (
                <tr
                  key={item.key}
                  className="text-center border border-gray-300 text-sm"
                >
                  <td className="p-2">{item?.value}</td>
                  <td className="p-2 relative">
                    <div className="inline-block">
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
          <div className="shadow-lg p-2 rounded-2xl h-12/12">
            <div className="font-semibold">Add New Caste</div>

            <form className="grid grid-cols-1 gap-3  mt-3 ">
              <label className="flex flex-col ">
                <span className="text-md">Name</span>
                <input
                  className="bg-stone-100 p-3  rounded-lg text-stone-800 font-light outline-0 w-full "
                  type="text"
                  name="religion"
                  value={defaultFormData.religion}
                  onChange={handleChange}
                  placeholder="Religion Name"
                />
              </label>
              <label htmlFor="package" className="grid grid-cols-1">
                Caste Name
                <div
                  className="relative"
                  onClick={toggleDropDownCaste}
                  onMouseLeave={() => setisDropDownCaste(false)}
                >
                  <button
                    className="mt-1 flex w-full items-center justify-between rounded-md bg-stone-100 text-stone-800 font-light border border-gray-300 p-2"
                    id="genderDropDown"
                  >
                    {defaultTextCaste}
                    <FaAngleDown className="ml-2 text-gray-400" />
                  </button>
                  {isDropDownCaste && (
                    <div className="top-10 absolute w-full rounded-md border border-gray-300 bg-white z-10">
                      <ul className="text-sm text-gray-500 z-10 h-32 overflow-x-scroll">
                        {religionDropDown.map(({ key, value }) => (
                          <li
                            key={key}
                            onClick={() => handleCaste(value)}
                            className="z-10 block p-2  cursor-pointer hover:bg-stone-600 hover:text-white"
                          >
                            {value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </label>

              <label htmlFor="package" className="grid grid-cols-1">
                Sub Caste Name
                <div
                  className="relative"
                  onClick={toggleDropDownSubCaste}
                  onMouseLeave={() => setisDropDownSubCaste(false)}
                >
                  <button
                    className="mt-1 flex w-full items-center justify-between rounded-md bg-stone-100 text-stone-800 font-light border border-gray-300 p-2"
                    id="genderDropDown"
                  >
                    {defaultTextSubCaste}
                    <FaAngleDown className="ml-2 text-gray-400" />
                  </button>
                  {isDropDownSubCaste && (
                    <div className="bottom-10  absolute w-full rounded-md border border-gray-300 bg-white">
                      <ul className="text-sm text-gray-500 h-32 overflow-x-scroll">
                        {subCaste.map(({ key, value }) => (
                          <li
                            key={key}
                            onClick={() => handleSubCaste(value)}
                            className=" block p-2 cursor-pointer hover:bg-stone-600 hover:text-white"
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
