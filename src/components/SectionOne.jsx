import edit_img from "../assets/edit.png";
import section1 from "../assets/woman.png";

const items = [
  {
    img: edit_img,
    title: " Title Goes Here",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
  {
    img: edit_img,
    title: " Title Goes Here",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
  },
];

export default function SectionOne() {
  return (
    <section className="flex xl:flex-row flex-col xl:pl-[150px] p-4 items-center justify-around">
      <div className="xl:w-[40%] w-full">
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
        <div className="flex mt-10 items-center gap-8">
          {items.map((item, index) => (
            <div key={index} className="">
              <img src={item.img} alt={item.title} className="w-12 h-12" />
              <h3 className="text-[#091133] text-[16px] font-semibold">
                {item.title}
              </h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <img src={section1} alt="woman" />
    </section>
  );
}
