import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="flex items-center py-4 justify-around">
      <ul
        className={`md:flex md:flex-row flex-col  items-center absolute md:static top-10 bg-white md:bg-transparent w-full md:w-fit py-10 gap-6 ${
          isOpen ? "flex" : "hidden"
        }  `}
      >
        <li className="hover:text-[#505F98] cursor-pointer">Home</li>
        <li className="hover:text-[#505F98] cursor-pointer">About</li>
        <li className="hover:text-[#505F98] cursor-pointer">Contact</li>
      </ul>
      <h3 className="text-lg text-[#37447E] text-[36px] font-bold"> Landing</h3>
      <button className="bg-[#111B47] rounded-md text-white px-10 py-2 ">
        Buy Now
      </button>
      <div onClick={toggleMenu} className="cursor-pointer md:hidden block ">
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
