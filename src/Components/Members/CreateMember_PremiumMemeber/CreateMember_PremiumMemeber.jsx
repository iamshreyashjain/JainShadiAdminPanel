//state
import { useState } from "react";

//reactRouterDom
import { Link } from "react-router-dom";

//react-ICONS
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

//DropDown-Data
//Gender
import genderDropDown from "../../../data/dropDown/genderDropDown.js";

//OnBehalf
import onBehalfDropDown from "../../../data/dropDown/onBehalfDropDown.js";

//Packages
import packagesDropDown from "../../../data/dropDown/packageDropDown.js";

//Component
export default function CreateMember_PremiumMemeber() {
  //Schema-FORM
  const [defaultFormData, setdefaultFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    DOB: "",
    behalfOf: "",
    package: "",
    photo: "",
    password: "",
    confirmPassword: "",
    memberVerified: "",
  });

  //---------------------------> memberVerified => toggle <---------------------------
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    const newValue = !isToggled;
    setIsToggled(newValue);
    setdefaultFormData.memberVerified(newValue); // Pass the value to the parent
  };
  //---------------------------> Gender <---------------------------
  const [defaultTextGender, setdefaultTextGender] = useState("Select Gender");
  const [isDropDownGender, setisDropDownGender] = useState(false);

  const toggleDropDownGender = () => {
    setisDropDownGender(!isDropDownGender);
  };

  const handleGenderChange = (updatedgender) => {
    setdefaultTextGender(updatedgender);
    setisDropDownGender(false);
    setdefaultFormData((prevData) => ({
      ...prevData,
      gender: updatedgender,
    }));
  };

  //---------------------------> behalfOf <---------------------------
  const [defaultTextBehalfOf, setdefaultTextBehalfOf] =
    useState("Select Behalf Of");
  const [isDropDownBehalfOf, setisDropDownBehalfOf] = useState(false);

  const toggleDropDownBehalfOf = () => {
    setisDropDownBehalfOf(!isDropDownBehalfOf);
  };

  const handleBehalfOfChange = (updatedbehalfOf) => {
    setdefaultTextBehalfOf(updatedbehalfOf);
    setisDropDownBehalfOf(false);
    setdefaultFormData((prev) => ({
      ...prev,
      behalfOf: updatedbehalfOf,
    }));
  };

  //---------------------------> Package <---------------------------
  const [defaultTextPackage, setdefaultTextPackage] =
    useState("Select Package");
  const [isDropDownPackage, setisDropDownPackage] = useState(false);

  const toggleDropDownPackage = () => {
    setisDropDownPackage(!isDropDownPackage);
  };

  const handlePackage = (updatePackage) => {
    setdefaultTextPackage(updatePackage);
    setisDropDownBehalfOf(false);
    setdefaultFormData((prev) => ({
      ...prev,
      behalfOf: updatePackage,
    }));
  };

  //---------------------------> FORM <---------------------------
  const handleChange = (e) => {
    setdefaultFormData({
      ...defaultFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", defaultFormData);
  };

  return (
    // {/* Form body: STARTS FROM HERE  */}
    <>
      <div className="m-4 rounded-2xl shadow-2xl bg-stone-100 ">
        <Link
          to="/home/members/premiumMembers"
          className="absolute right-10 top-25  float-right"
        >
          <RxCross2
            size={25}
            className="hover:shadow-md rounded-full font-bold"
          />
        </Link>

        <div className="flex justify-center items-center min-h-screen">
          {/* FORM  */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4 bg-white rounded-2xl shadow-md w-9/12 p-6 "
          >
            {/* I */}
            {/* FORM: FIRST NAME & LAST NAME */}
            {/* FORM: FIRST NAME */}
            {/* I OF II */}
            <label className="flex flex-col ">
              <span className="text-md">First Name</span>
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light outline-0"
                type="text"
                name="firstName"
                value={defaultFormData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </label>
            {/* FORM: LAST NAME */}
            {/* II OF II */}
            <label className="grid grid-cols-1">
              Last Name
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light  outline-0"
                type="text"
                name="lastName"
                value={defaultFormData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </label>
            {/* II */}
            {/* FROM:  EMAIL &   GENDER */}
            {/* FORM: EMAIL */}
            {/* I OF II */}
            <label className="grid grid-cols-1">
              Email
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                type="email"
                name="email"
                value={defaultFormData.email}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </label>
            {/* FORM: GENDER */}
            {/* II OF II */}
            <label htmlFor="gender" className="grid grid-cols-1">
              Gender
              <div
                className="relative"
                onClick={toggleDropDownGender}
                onMouseLeave={() => setisDropDownGender(false)}
              >
                <button
                  className="mt-1 flex w-full items-center justify-between rounded-md bg-stone-50 text-stone-800 font-light border border-gray-300 p-2"
                  id="genderDropDown"
                >
                  {defaultTextGender}
                  <FaAngleDown className="ml-2 text-gray-400" />
                </button>
                {isDropDownGender && (
                  <div className="top-10 absolute w-full rounded-md border border-gray-300 bg-white z-10">
                    <ul className="text-sm text-gray-500">
                      {genderDropDown.map(({ key, value }) => (
                        <li
                          key={key}
                          onClick={() => handleGenderChange(value)}
                          className="block p-2  cursor-pointer hover:bg-stone-600 hover:text-white"
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </label>
            {/* III */}
            {/* FROM:  DATE OF BIRTH &    */}
            {/* FORM: EMAIL */}
            {/* I OF II */}
            <label className="grid grid-cols-1">
              Date Of Birth
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                type="date"
                name="DOB"
                value={defaultFormData.DOB}
                onChange={handleChange}
                placeholder="DD-MM-YYYY"
              />
            </label>
            {/* FORM: ON-BEHALF */}
            {/* II OF II */}
            <label htmlFor="behalfOf" className="grid grid-cols-1">
              On Behalf
              <div
                className="relative"
                onClick={toggleDropDownBehalfOf}
                onMouseLeave={() => setisDropDownBehalfOf(false)}
              >
                <button
                  className="mt-1 flex w-full items-center justify-between rounded-md bg-stone-50 text-stone-800 font-light border border-gray-300 p-2"
                  id="behalfOfDropDown"
                >
                  {defaultTextBehalfOf}
                  <FaAngleDown className="ml-2 text-gray-400" />
                </button>
                {isDropDownBehalfOf && (
                  <div className="top-10.5 absolute w-full rounded-md border border-gray-300 bg-white overflow-y-scroll h-36">
                    <ul className="text-sm text-gray-500">
                      {onBehalfDropDown.map(({ key, value }) => (
                        <li
                          key={key}
                          onClick={() => handleBehalfOfChange(value)}
                          className="block p-2  cursor-pointer hover:bg-stone-600 hover:text-white"
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </label>
            {/* IV */}
            {/* FROM:  PACKAGE & UPLOAD-PHOTO */}
            {/* FORM: PACKAGE */}
            {/* I OF II */}
            <label htmlFor="package" className="grid grid-cols-1">
              Package
              <div
                className="relative"
                onClick={toggleDropDownPackage}
                onMouseLeave={() => setisDropDownPackage(false)}
              >
                <button
                  className="mt-1 flex w-full items-center justify-between rounded-md bg-stone-50 text-stone-800 font-light border border-gray-300 p-2"
                  id="genderDropDown"
                >
                  {defaultTextPackage}
                  <FaAngleDown className="ml-2 text-gray-400" />
                </button>
                {isDropDownPackage && (
                  <div className="top-10 absolute w-full rounded-md border border-gray-300 bg-white">
                    <ul className="text-sm text-gray-500">
                      {packagesDropDown.map(({ key, value }) => (
                        <li
                          key={key}
                          onClick={() => handlePackage(value)}
                          className="block p-2  cursor-pointer hover:bg-stone-600 hover:text-white"
                        >
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </label>
            {/* FORM: UPLOAD-PHOTO  */}
            {/* II OF II */}
            <label className="grid grid-cols-1">
              Photo
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light outline-0"
                type="file"
                name="name"
              />
            </label>
            {/* V */}
            {/* FROM:  Password &  Confirm-Password */}
            {/* FORM: EMAIL */}
            {/* I OF II */}
            <label className="grid grid-cols-1">
              Password
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light outline-0"
                type="password"
                name="password"
              />
            </label>
            {/* FORM: Confirm-Password  */}
            {/* II OF II */}
            <label className="grid grid-cols-1">
              Confirm Password
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light outline-0"
                type="password"
                name="confirmPassword"
              />
            </label>
            {/* VI */}
            {/* FROM:  Member Verified */}
            <div>
              Member Verified
              <div
                className={`w-12 h-6 flex items-center bg-gray-300 rounded-full mt-2  cursor-pointer ${
                  isToggled ? "bg-rose-800" : "bg-gray-800"
                }`}
                onClick={handleToggle}
              >
                <div
                  className={`bg-stone-200 w-6 h-6 rounded-full shadow-lg transform duration-300 ${
                    isToggled ? "translate-x-7" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div className="flex justify-between">
              <div></div>
              {/* SUBMIT BUTTON */}
              <div>
                <Link
                  to="/home/members/premiumMembers"
                  type="submit"
                  className="bg-rose-900 text-white py-2 px-8 rounded-md"
                >
                  Add Member
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
