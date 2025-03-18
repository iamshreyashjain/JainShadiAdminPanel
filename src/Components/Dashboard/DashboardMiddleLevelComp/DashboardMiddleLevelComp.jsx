import { LuIndianRupee } from "react-icons/lu";
import { TbReceiptRupee } from "react-icons/tb";
import DashboardComponents_BgImg from "./../../../assets/Images/DashboardComponents_BgImg.png";
import DashboardMiddleChilds from "./DashboardMiddleChilds/DashboardMiddleChilds.jsx";

export default function DashboardMiddleLevelComp() {
  const data = [
    {
      index: 1,
      amount: 0.00,
      title: "Total Earnings",
      logo: <TbReceiptRupee />,
    },
    {
      index: 2,
      amount: 0.00,
      title: "Last Month Earnings",
      logo: <TbReceiptRupee />,
    },
    {
      index: 3,
      amount: 0.00,
      title: "Last 6 Months Earnings",
      logo: <TbReceiptRupee />,
    },
    {
      index: 4,
      amount: 0.00,
      title: "Last 12 Months Earnings",
      logo: <TbReceiptRupee />,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
      {/* For GRAPH */}
        <div></div>
        <div className=" bg-stone-100 rounded-md shadow-md p-4">
          <DashboardMiddleChilds data ={data}/>
        </div>
      </div>
    </>
  );
}
