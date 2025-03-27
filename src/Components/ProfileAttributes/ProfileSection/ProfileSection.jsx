import { useState } from "react";
// Title
import ProfileAttributesTitle from "../../ReusableComponents/ProfileAttributesTitle/ProfileAttributesTitle";

export default function ProfileSection() {
  const [checkboxValues, setCheckboxValues] = useState({
    presentAddress: true, // or 0 (depends on your requirement)
    education: true,
    career: true,
    physicalAttributes: true,
    language: true,
    hobbiesInterests: false,
    personalAttitudeBehavior: false,
    residencyInformation: false,
    spiritualSocialBackground: false,
    astronomicInformation: false,
    permanentAddress: false,
    familyInformation: false,
    partnerExpectation: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <>
      {/*------------------------------Heading------------------------------*/}
      <ProfileAttributesTitle />

      {/*------------------------------SUB-Heading------------------------------*/}
      <div className="flex justify-between items-center m-4">
        <span className="text-xl font-medium my-2">Profile Sections</span>
      </div>

      {/*------------------------------Division------------------------------*/}
      <div className="overflow-x-auto rounded-2xl p-4 grid grid-cols-1 gap-6">
        {/* Parent */}
        <div className="shadow-lg p-2 rounded-2xl bg-stone-100">
          <h1 className="font-medium text-xl">
            Member Profile Selections Configuration
          </h1>
          <div>
            <form className="bg-stone-50 shadow-md grid grid-cols-1 gap-2  w-3/12 my-6 ">
              {/* Present Address */}
              <label className="border rounded-sm border-gray-400 p-1  hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="presentAddress"
                  checked={checkboxValues.presentAddress}
                  onChange={handleChange}
                />{" "}
                Present Address
              </label>

              {/* Education */}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="education"
                  checked={checkboxValues.education}
                  onChange={handleChange}
                />{" "}
                Education
              </label>

              {/* Career */}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="career"
                  checked={checkboxValues.career}
                  onChange={handleChange}
                />{" "}
                Career
              </label>

              {/* Physical Attributes */}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="physicalAttributes"
                  checked={checkboxValues.physicalAttributes}
                  onChange={handleChange}
                />{" "}
                Physical Attributes
              </label>

              {/* Language */}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="language"
                  checked={checkboxValues.language}
                  onChange={handleChange}
                />{" "}
                Language
              </label>

              {/* Hobbies & Interests */}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="career"
                  checked={checkboxValues.hobbiesInterests}
                  onChange={handleChange}
                />{" "}
                Hobbies & Interests
              </label>
              {/* Personal Attitude & Behavior */}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="career"
                  checked={checkboxValues.personalAttitudeBehavior}
                  onChange={handleChange}
                />{" "}
                Personal Attitude & Behavior
              </label>

              {/* Residency Information */}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="residencyInformation"
                  checked={checkboxValues.residencyInformation}
                  onChange={handleChange}
                />{" "}
                Residency Information
              </label>

              {/* Spiritual & Social Background */}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="spiritualSocialBackground"
                  checked={checkboxValues.residencyInformation}
                  onChange={handleChange}
                />{" "}
                Spiritual & Social Background
              </label>

              {/* Life Style*/}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="lifeStyle"
                  checked={checkboxValues.lifeStyle}
                  onChange={handleChange}
                />{" "}
                Life Style
              </label>

              {/*Astronomic Information*/}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="astronomicInformation"
                  checked={checkboxValues.astronomicInformation}
                  onChange={handleChange}
                />{" "}
                Astronomic Information
              </label>

              {/*Permanent Address*/}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="permanentAddress"
                  checked={checkboxValues.permanentAddress}
                  onChange={handleChange}
                />{" "}
                Permanent Address
              </label>

              {/*Family Information*/}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="familyInformation"
                  checked={checkboxValues.familyInformation}
                  onChange={handleChange}
                />{" "}
                Family Information
              </label>

              {/*Partner Expectation*/}
              <label className="border rounded-sm border-gray-400 p-1 hover:bg-stone-100">
                <input
                  type="checkbox"
                  name="partnerExpectation"
                  checked={checkboxValues.partnerExpectation}
                  onChange={handleChange}
                />{" "}
                Partner Expectation
              </label>
            </form>
            <button className="bg-rose-900 text-white py-2 px-8 rounded-md float-right my-3">
              Update Settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
