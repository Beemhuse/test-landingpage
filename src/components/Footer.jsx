import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="xl:px-[150px] px-4 py-6 bg-[#E7ECFF]/10">
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-sm">©2023 Yourcompany</p>
        <h3 className="text-lg text-[#37447E] font-bold"> Landing</h3>
        <button className="bg-[#111B47] rounded-md text-white px-4 py-2 ">
          Purchase Now
        </button>
      </div>
      <hr className="w-full border-1 my-4 " />
      <div className=" flex xl:flex-row  flex-col gap-4 justify-between items-center">
        <ul className="flex items-center gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="text-[#B0B8BC] gap-6 flex flex-wrap items-center  ">
          <FaFacebookF size={20} />
          <FaLinkedin size={20} />
          <FaTwitter size={20} />
          <FaYoutube size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
    </footer>
  );
}
