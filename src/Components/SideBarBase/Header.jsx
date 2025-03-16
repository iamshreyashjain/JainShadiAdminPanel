import bg_header from "../../assets/Images/menuImg.png";
import ShadiPanel_Logo from "../../assets/Images/ShadiPanel_Logo.png";

export default function Header() {
  return (
    <div className="relative w-full flex items-center bg-rose-900 ">
      {/* Background Image */}
      <img
        src={bg_header}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"     
        />

      {/* Logo Image */}
      <div className="relative z-10 flex w-full justify-between items-center px-4">
        <img src={ShadiPanel_Logo} className="h-12 my-2" />
        <button className=" text-rose-900 bg-red-100 border-2 border-rose-950 px-4 py-2 rounded-md flex-end">
          Logout
        </button>
      </div>
    </div>
  );
}
