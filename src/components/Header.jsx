import Navbar from "./Navbar";
import header_img from "../assets/header_img.svg";
export default function Header() {
  return (
    <header className="custom_bg">
      <Navbar />
      <div className="flex xl:flex-row flex-col-reverse p-4  justify-between items-center ">
        <div className="xl:w-[45%] w-full xl:pl-[150px] pl-0">
          <h2 className="text-[#091133]  font-bold xl:text-[50px] text-3xl">Introduce Your Product Quickly & Effectively</h2>
          <p className="text-[#505F98] text-[18px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            <br />
            <br />
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            <br />
            <br />
            Nulla consequat massa quis enim.
          </p>
          <div className="flex my-8 gap-4 items-center">
            <button className="bg-[#111B47] text-white px-4 py-2 rounded">Purchase UI Kit</button>
            <button className="border-[#505F98] border-2 px-4 py-2 rounded">Learn More</button>
          </div>
        </div>
        <img src={header_img} alt="Header image" />
      </div>
    </header>
  );
}
