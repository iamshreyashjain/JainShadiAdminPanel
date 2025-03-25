import { IoIosArrowDown } from "react-icons/io";
import ProfileAttributesTitle from "../../ReusableComponents/ProfileAttributesTitle/ProfileAttributesTitle";
import Pagination from "../../ReusableComponents/Pagination/Pagination";

export default function Religions() {
  return (
    <>
      <ProfileAttributesTitle />
      <div className="grid grid-cols-2 gap-3">
      <div className="shadow-md border px-3">
      <div className="flex p-2 bg-white border border-gray-300 items-center w-32 justify-between my-4 rounded-md ">
                  <span>All</span>
                  <IoIosArrowDown />
                </div>

                <table className="table-auto w-full">
                <thead className="text-gray-700">
                  <tr className="text-center text-sm bg-stone-100 border border-gray-300 border-b-0">

                    <th className="p-2 ">Member Status</th>
                    <th className="p-2 ">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="text-center border border-gray-300 text-sm"
                    >
                      <td className="p-2">{item?.userCode}</td>
                     
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
      </div>
      <div className="shadow-md border "></div>

    </>
  );
}
