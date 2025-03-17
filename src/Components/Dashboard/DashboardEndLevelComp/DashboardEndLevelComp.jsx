import { IoSquare } from "react-icons/io5";

export default function DashboardEndLevelComp() {
  return (
    <>
      <div className="bg-stone-100 py-6  m-4 h-4/12 p-4 rounded-md shadow-md">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <IoSquare className="text-yellow-700" />
            Total Happy Stories
          </div>

          <div className="flex items-center gap-1">
          <IoSquare className="text-green-800" />
          Approved Happy Stories
        </div>

        <div className="flex items-center gap-1">
        <IoSquare className="text-red-800" />
        Pending Happy Stories
      </div>
        </div>
      </div>
    </>
  )
}
