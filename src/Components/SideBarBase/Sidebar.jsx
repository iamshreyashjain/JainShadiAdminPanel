{
  /* Logic:: When SUBMENU is true, means when submenu do exists in any particular module and after 
              && means we're setting hoverIndex, the value of index such that the both matches and the pop up works  */
}
import { useState } from "react";
import { Link } from "react-router-dom";

// React Icons
import { FaUserAlt } from "react-icons/fa";
import { RiHome5Fill } from "react-icons/ri";
import { FaRegIdCard } from "react-icons/fa";
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
      link: "/home/members/freemembers",
      logo: <FaUserAlt />,
      subMenu: [
        { key: 1, name: "Free Members", link: "/home/members/freemembers" },
        {
          key: 2,
          name: "Premium Members",
          link: "/home/members/premiumMembers",
        },
        { key: 3, name: "Bulk Member Add", link: "/home/members/bulkMembers" },
        {
          key: 4,
          name: "Deleted Members",
          link: "/home/members/deletedMembers",
        },
        {
          key: 5,
          name: "Reported Members",
          link: "/home/members/reportedMembers",
        },
        {
          key: 6,
          name: "Unapproved Profile Pictures",
          link: "/home/members/unapprovedProfilePictures",
        },
        {
          key: 7,
          name: "Shadi Done Users",
          link: "/home/members/shadiDoneUsers",
        },
        {
          key: 8,
          name: "Request For Deactivation Account",
          link: "/home/members/requestForDeactivationAccount",
        },
        {
          key: 9,
          name: "Unverified Member List",
          link: "/home/members/unverifiedMemberList",
        },
        {
          key: 10,
          name: "Request For Call Arrange",
          link: "/home/members/requestForCallArrange",
        },
      ],
    },
    {
      index: 14,
      name: "Profile Attributes",
      link: "/home/profileAttribute/religions",
      logo: <FaRegIdCard />,
      subMenu: [
        { key: 1, name: "Religions", link: "/home/profileAttribute/religions" },
        { key: 2, name: "Caste", link: "/home/profileAttribute/caste" },
        { key: 3, name: "Sub Caste", link: "/home/profileAttribute/subCaste" },
        {
          key: 4,
          name: "Members Language",
          link: "/home/profileAttribute/membersLanguage",
        },
        { key: 5, name: "On Behalf", link: "/home/profileAttribute/onBehalf" },

        {
          key: 7,
          name: "Family Status",
          link: "/home/profileAttribute/familyStatus",
        },
        {
          key: 6,
          name: "Marital Status",
          link: "/home/profileAttribute/maritalStatus",
        },
        {
          key: 9,
          name: "Profile Section",
          link: "/home/profileAttribute/profileSection",
        },
        { key: 10, name: "Set", link: "/home/profileAttribute/set" },
        { key: 11, name: "Subset", link: "/home/profileAttribute/subset" },
        { key: 12, name: "Gotra", link: "/home/profileAttribute/gotra" },
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
      link: "/home/wallet/walletTransactionHistory",
      logo: <IoWallet />,
      subMenu: [
        {
          key: 1,
          name: "Wallet Transaction History",
          link: "/home/wallet/walletTransactionHistory",
        },
        {
          key: 2,
          name: "Manual Wallet Recharge Request",
          link: "/home/wallet/manualwalletTransactionHistory",
        },
      ],
    },
    {
      index: 6,
      name: "Happy Stories",
      link: "/home/happyStories",
      logo: <RiHandHeartFill />,
    },
   
   
    {
      index: 9,
      name: "Uploaded Files",
      link: "/home/uploadedFiles",
      logo: <MdOutlineUploadFile />,
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
