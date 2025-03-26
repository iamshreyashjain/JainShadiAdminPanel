//react
import { useState } from "react";

//Manually create Data
import OnBehalfOfData from "../../../data/OnBehalfOfData";
import tableMenu from "../../../data/TableMenu";

// reactIcons
import { IoIosArrowDown } from "react-icons/io";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import TableMenu from "../../ReusableComponents/TableMenu/TableMenu";
import ProfileAttributesTitle from "../../ReusableComponents/ProfileAttributesTitle/ProfileAttributesTitle";

export default function OnBehalf() {
  const [onbehalf, setonbehalf] = useState("");
  const [currentData] = useState(OnBehalfOfData);
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


  const handleChange = (e) => {
    setonbehalf(e.target.value)
  }

  return (
    <>
    {/*------------------------------Heading------------------------------*/}
    <ProfileAttributesTitle />
    
    {/*------------------------------SUB-Heading------------------------------*/}
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2 ">On Behalves</span>
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
              <th className=" w-12 ">S No</th>
                <th className="p-2 ">Name</th>
                <th className="p-2 ">Options</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => (
                <tr
                  key={item.id}
                  className="text-center border border-gray-300 text-sm"
                >
                <td className="">{index + 1}</td>
                  <td className="p-2">{item?.value}</td>
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

        </div>

        {/*------------------------------Part - II------------------------------*/}
        {/*------------------------------The Form part will come here : An Input value, Add Button------------------------------*/}
        <div className="">
          <div className="shadow-lg p-2 rounded-2xl ">
            <div className="font-semibold">Add New On Behalf</div>
            <form>
              <label className="flex flex-col  my-3">
                <span className="text-md">Name</span>
                <input
                  className="bg-stone-100 p-3 my-3 rounded-lg text-stone-800 font-light outline-0 w-full "
                  type="text"
                  name="onbehalf"
                  value={onbehalf}
                  onChange={handleChange}
                  placeholder="On Behalf Name"
                />
              </label>
              <div className="flex items-end justify-end ">
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
