//react
import { useState } from "react";

// reactIcons
import { RiDeleteBinFill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

//Title
import ProfileAttributesTitle from "../../ReusableComponents/ProfileAttributesTitle/ProfileAttributesTitle";

export default function FamilyStatus() {
  const [familyStatus, setfamilyStatus] = useState("");
  const data = [];

  const handleChange = (e) => {
    setfamilyStatus(e.target.value);
  };
  return (
    <>
      {/*------------------------------Heading------------------------------*/}
      <ProfileAttributesTitle />

      {/*------------------------------SUB-Heading------------------------------*/}
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2 ">Family Status</span>
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
              {data && data.length > 0 ? (
                data?.map((item) => (
                  <tr
                    key={item.id}
                    className="text-center border border-gray-300 text-sm"
                  >
                    <td className="">{item.key}</td>
                    <td className="">{item?.value}</td>
                    <td className="p-2 relative">
                      <div className="flex gap-2 items-center justify-center">
                        <MdModeEditOutline
                          className="bg-rose-800 text-white rounded p-[0.8px]"
                          size={20}
                        />
                        <RiDeleteBinFill className="text-pink-600" size={20} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <>
                  <tr className="h-[200px]">
                    <td
                      colSpan="3"
                      className="text-center text-3xl font-medium py-2 text-gray-300 align-middle h-full"
                    >
                      Nothing found
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>

        {/*------------------------------Part - II------------------------------*/}
        {/*------------------------------The Form part will come here : An Input value, Add Button------------------------------*/}
        <div className="">
          <div className="shadow-lg p-2 rounded-2xl ">
            <div className="font-semibold">Add New Family Status</div>
            <form>
              <label className="flex flex-col  my-3">
                <span className="text-md">Name</span>
                <input
                  className="bg-stone-100 p-3 my-3 rounded-lg text-stone-800 font-light outline-0 w-full "
                  type="text"
                  name="familyStatus"
                  value={familyStatus}
                  onChange={handleChange}
                  placeholder="Family Status Name"
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
