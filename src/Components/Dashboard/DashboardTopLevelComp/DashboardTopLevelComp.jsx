import { FiUsers } from "react-icons/fi";


import DashboardTopLevelCompChild from "./DashboardTopLevelCompChild/DashboardTopLevelCompChild.jsx";

export default function DashboardTopLevelComp() {
  const data = [
    {
      index: 1,
      quantity: 150,
      title: "Total Members",
      logo: <FiUsers />,
    },
    {
      index: 2,
      quantity: 160,
      title: "Premium Members",
      logo: <FiUsers />,
    },
    {
      index: 3,
      quantity: 130,
      title: "Free Members",
      logo: <FiUsers />,
    },
    {
      index: 4,
      quantity: 200,
      title: "Blocked Members",
      logo: <FiUsers />,
    },
    {
      index: 5,
      quantity: 210,
      title: "Complete Members",
      logo: <FiUsers />,
    },
    {
      index: 6,
      quantity: 160,
      title: "Incomplete Members",
      logo: <FiUsers />,
    },
    {
      index: 7,
      quantity: 150,
      title: "Verified Members",
      logo: <FiUsers />,
    },
    {
      index: 8,
      quantity: 190,
      title: "Shaadi Members",
      logo: <FiUsers />,
    },
  ];

  return (
    <>
      <div className="bg-stone-100 py-6 m-4 p-4 rounded-md shadow-md">
       <DashboardTopLevelCompChild data={data}/>
      </div>
    </>
  );
}
