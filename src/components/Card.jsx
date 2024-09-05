export default function Card({ img }) {
  return (
    <div className="flex xl:flex-row flex-col  justify-between items-center ">
      <img src={img} alt="" className="xl:w-[40%] w-full" />
      <div className="xl:w-[45%] w-full">
        <h2 className="text-[36px] font-semi-bold">Light, Fast & Powerful</h2>
        <p className="text-[#6F7CB2]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
          <br />
          <br />
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </p>
      </div>
    </div>
  );
}
