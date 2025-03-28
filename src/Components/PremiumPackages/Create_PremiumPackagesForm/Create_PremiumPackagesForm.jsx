//state
import { useState } from "react";

//reactRouterDom
import { Link } from "react-router-dom";

//react-ICONS
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

//Component
export default function Create_PremiumPackagesForm() {
  //Schema-FORM
  const [defaultFormData, setdefaultFormData] = useState({
    name: "",
    price: "",
    packageImage: "",
    expressInterest: "",
    galleryPhotoUpload: "",
    contactInfoView: "",
    profileInfoView: "",
    galleryImageView: "",
    validityFor: "",
    autoProfileMatchingShow: "",
  });

  //---------------------------> memberVerified => toggle <---------------------------
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    const newValue = !isToggled;
    setIsToggled(newValue);
    setdefaultFormData.memberVerified(newValue); // Pass the value to the parent
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
          to="/home/premiumPackages"
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
            {/* FORM:  NAME & PRICE */}
            {/* FORM: NAME */}
            {/* I OF II */}
            <label className="flex flex-col ">
              <span className="text-md">Name</span>
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light outline-0"
                type="text"
                name="firstName"
                value={defaultFormData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </label>
            {/* FORM: PRICE */}
            {/* II OF II */}
            <label className="grid grid-cols-1">
              Price
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light  outline-0"
                type="text"
                name="price"
                value={defaultFormData.price}
                onChange={handleChange}
                placeholder="Price"
              />
            </label>
            {/* II */}
            {/* FROM:packageImage & expressInterest */}
            {/* FORM: packageImage */}
            {/* I OF II */}

            <label className="grid grid-cols-1">
              Package Image
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light outline-0"
                type="file"
                name="packageImage"
              />
            </label>
            {/* FORM:Express Interest  */}
            {/* II OF II */}
            <label className="grid grid-cols-1">
              Express Interest
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                type="number"
                name="expressInterest"
                value={defaultFormData.expressInterest}
                onChange={handleChange}
                placeholder="10"
              />
            </label>

            {/* III */}

            {/* FORM: galleryPhotoUpload & contactInfoView */}
            {/* FORM: galleryPhotoUpload */}
            {/* I OF II */}
            <label className="grid grid-cols-1">
              Gallery Photo Upload
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                type="number"
                name="DOB"
                value={defaultFormData.galleryPhotoUpload}
                onChange={handleChange}
                placeholder="30"
              />
            </label>

            {/* FORM: contactInfoView */}
            <label className="grid grid-cols-1">
              Contact Info View
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                type="number"
                name="DOB"
                value={defaultFormData.contactInfoView}
                onChange={handleChange}
                placeholder="30"
              />
            </label>

            {/* IV */}
            {/* FROM:  profileInfoView & galleryImageView */}
            {/* FORM: profileInfoView */}
            {/* I OF II */}

            <label className="grid grid-cols-1">
              Profile Info View
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                type="number"
                name="DOB"
                value={defaultFormData.profileInfoView}
                onChange={handleChange}
                placeholder="0"
              />
            </label>

            {/* FORM: galleryImageView */}
            {/* I OF II */}
            <label className="grid grid-cols-1">
              Gallery Image View
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                type="number"
                name="DOB"
                value={defaultFormData.galleryImageView}
                onChange={handleChange}
                placeholder="0"
              />
            </label>

            {/* V */}
            {/* I OF I */}
            {/* FORM: validityFor */}
            <label className="grid grid-cols-1">
              Validity For
              <input
                className="bg-stone-50 p-3 rounded-lg text-stone-800 font-light"
                type="number"
                name="DOB"
                value={defaultFormData.validityFor}
                onChange={handleChange}
                placeholder="30"
              />
            </label>

            {/* II OF II */}
            <label className="grid grid-cols-1"></label>

            <div>
              Auto Profile Matching Show
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
                  to="/home/premiumPackages"
                  type="submit"
                  className="bg-rose-900 text-white py-2 px-8 rounded-md"
                >
                  Add New Package
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
