import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({ data, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  useEffect(() => {
    onPageChange(currentData);
  }, [currentPage]);

  return (
    <div className="flex justify-between space-x-4 my-4">
      <span className="text-gray-600 text-sm font-medium">
        Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of{" "}
        {data.length} entries
      </span>
      <div className="flex ">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="  px-2 bg-gray-100 border-gray-500 border rounded-md "
        >
          <IoIosArrowBack />
        </button>

        <span className="px-4 py-2">{currentPage}</span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="  px-2 bg-gray-100 border-gray-500 border rounded-md "
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
