// Desc: Sidebar for the admin panel
// Date: 5 March, 2025
// Dev: Shreyash Jain

import { Link } from "react-router-dom";

//reactIcons
import { FaUserAlt } from "react-icons/fa";
import { RiHome5Fill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { IoMdCash } from "react-icons/io";
import { IoWallet } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { IoMdVolumeHigh } from "react-icons/io";
import { MdOutlineUploadFile } from "react-icons/md";
import { IoDesktopSharp } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { IoSettings } from "react-icons/io5";

export default function Sidebar() {
  const siderbarLinks = [
    {
      index: 1,
      name: "Home",
      link: "/home",
      logo: <TiHome />,
    },
    {
      index: 2,
      name: "Members",
      link: "/home/members",
      logo: <FaUserAlt />,
    },
    {
      index: 3,
      name: "Premium Packages",
      link: "/home/premiumPackages",
      logo: <IoMdCash />,
    },
    {
      index: 4,
      name: "Package Payments",
      link: "/home/packagePayments",
      logo: <RiHome5Fill />,
    },
    {
      index: 5,
      name: "Wallet",
      link: "/home/wallet",
      logo: <IoWallet />,
    },
    {
      index: 6,
      name: "Happy Stories",
      link: "/home/happyStories",
      logo: <RiHandHeartFill />,
    },
    {
      index: 7,
      name: "Blog System",
      link: "/home/blogSystem",
      logo: <IoCreateOutline />,
    },
    {
      index: 8,
      name: "Marketing",
      link: "/home/marketing",
      logo: <IoMdVolumeHigh />,
    },
    {
      index: 9,
      name: "Uploaded Files",
      link: "/home/uploadedFiles",
      logo: <MdOutlineUploadFile />,
    },
    {
      index: 10,
      name: "Website Setup",
      link: "/home/websiteSetup",
      logo: <IoDesktopSharp />,
    },
    {
      index: 11,
      name: "Settings",
      link: "/home/settings",
      logo: <IoSettingsSharp />,
    },
    {
      index: 12,
      name: "Staffs",
      link: "/home/staff",
      logo: <ImUsers />,
    },
    {
      index: 13,
      name: "System",
      link: "/home/system",
      logo: <IoSettings />,
    },
  ];
  return (
    <>
      <div className="sticky top-0 overflow-scroll w-2/12 bg-slate-950">
        <ul className="text-gray-200 grid items-center justify-center mt-12">
          {siderbarLinks.map(({ name, link, logo, index }) => (
            <li>
              <Link
                className="flex items-center  gap-2 text-lg  hover:bg-slate-700 p-2 rounded-lg"
                to={link}
                key={index}
              >
                {logo}
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
