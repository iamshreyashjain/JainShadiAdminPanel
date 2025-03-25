import MembersTitle from "../../ReusableComponents/MembersTitle/MembersTitle";

import { IoIosCloudDownload, IoIosCloudUpload } from "react-icons/io";

export default function BulkMembers() {
  return (
    <>
      <MembersTitle />
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2">Members Bulk Upload</span>
        <div></div>
      </div>

      <div className="grid grid-cols-1 gap-4 bg-stone-100 rounded-2xl shadow-md p-4 overflow-x-auto  ">
        <div className="font-medium bg-white rounded-2xl p-4">
          <div className="font-medium">Step 1</div>
          <div>
            <ul className="font-normal my-2">
              <li className="flex gap-3">
                <span className="font-light">1</span>
                <span>
                  {" "}
                  Download the chosen file and complete it with accurate
                  information.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-light">1</span>
                <span>
                  {" "}
                  Access the sample file to understand the data format.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-light">1</span>
                <span>
                  {" "}
                  Download the skeleton file, fill it in, then upload and submit
                  it through the form below.
                </span>
              </li>
            </ul>
          </div>
          <button className="flex items-center bg-rose-900 text-white p-2 gap-2 rounded-md">
            <IoIosCloudDownload /> Download CSV
          </button>
        </div>
        <div className="font-medium bg-white rounded-2xl p-4">
          <div className="font-medium">Step 2</div>
          <div>
            <ul className="font-normal my-2">
              <li className="flex gap-3">
                <span className="font-light">1</span>
                <span>
                  {" "}
                  Gender, On Behalf ID, and Package ID must be in numeric
                  format.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-light">1</span>
                <span>Use numeric IDs for Gender: Male = 1, Female = 2.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-light">1</span>
                <span>
                  {" "}
                  You can access the PDF to get the On Behalf ID and Package ID.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="font-light">1</span>
                <span> Attach the country code to the phone number.</span>
              </li>
            </ul>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center bg-rose-900 text-white p-2 gap-2 rounded-md">
              <IoIosCloudDownload /> Download On Behalf
            </button>
            <button className="flex items-center bg-rose-900 text-white p-2 gap-2 rounded-md">
              <IoIosCloudDownload /> Download Package
            </button>
          </div>
        </div>
        <div className="font-medium bg-white rounded-2xl p-4">
          <div className="font-medium">Upload Member File</div>
          <input
            className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light outline-0"
            type="file"
          />
          <button className="flex items-center bg-rose-900 text-white p-2 gap-2 rounded-md my-3">
            <IoIosCloudUpload /> Upload CSV
          </button>
        </div>
      </div>
    </>
  );
}
