{
  /* Logic:: When SUBMENU is true, means when submenu do exists in any particular module and after 
              && means we're setting hoverIndex, the value of index such that the both matches and the pop up works  */
}
import { useState } from "react";
import { Link } from "react-router-dom";

// React Icons
import { FaUserAlt } from "react-icons/fa";
import { RiHome5Fill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { IoMdCash, IoMdVolumeHigh } from "react-icons/io";
import { IoWallet, IoCreateOutline, IoSettingsSharp } from "react-icons/io5";
import { RiHandHeartFill } from "react-icons/ri";
import { MdOutlineUploadFile } from "react-icons/md";
import { IoDesktopSharp } from "react-icons/io5";
import { ImUsers } from "react-icons/im";
import { IoSettings } from "react-icons/io5";

export default function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sidebarLinks = [
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
      subMenu: [
        { key: 1, name: "Free Members", link: "/home/members" },
        { key: 2, name: "Premium Members", link: "/home/premiumMembers" },
        { key: 3, name: "Bulk Member Add", link: "/home/bulkMembers" },
        { key: 4, name: "Deleted Members", link: "/home/deletedMembers" },
        { key: 5, name: "Reported Members", link: "/home/reportedMembers" },
        {
          key: 6,
          name: "Unapproved Profile Pictures",
          link: "/home/unapprovedProfilePictures",
        },
        { key: 7, name: "Shaadi Done Users", link: "/home/shaadiDoneUsers" },
        {
          key: 8,
          name: "Request For Deactivation Account",
          link: "/home/requestForrDeactivationAccount",
        },
        {
          key: 9,
          name: "Unverified Member List",
          link: "/home/unverifiedMemberList",
        },
        {
          key: 10,
          name: "Request For Call Arrange",
          link: "/home/requestForCallArrange",
        },
      ],
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
    <div className="sticky top-0 overflow-scroll w-2/12 bg-slate-950 h-screen px-4">
      <ul className="text-gray-200 grid items-center mt-12">
        {sidebarLinks.map(({ name, link, logo, subMenu }, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              className="flex items-center gap-2 text-lg hover:bg-slate-700 p-2 rounded-lg"
              to={link}
            >
              {logo}
              {name}
            </Link>
            {subMenu && hoveredIndex === index && (
              <ul className="absolute left-2 w-full top-10 z-10 bg-stone-50 text-gray-900 shadow-lg text-sm rounded-t-2xl">
                {subMenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={sub.link}
                      className="block hover:text-white hover:bg-rose-900 bg-stone-50 p-1 rounded-md rounded-b-none"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
