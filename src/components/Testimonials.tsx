import TestImg1 from '../assets/testImage1.jpg';
import TestImg2 from "../assets/testImage2.jpg";
import TestImg3 from "../assets/testImage3.jpg";
import TestImg4 from "../assets/testImage4.jpg";
// import TestImg5 from "../assets/testImage5.jpg";

const Testimonials = () => {
  return (
    <div className="pt-10 pb-4 flex flex-col items-center  ">
      <div className=" bg-blue-500 flex  py-3 px-8 rounded-t-2xl w-fit mb-5">
        <h1 className=" text-xl  md:text-3xl  font-semibold   text-center  text-white">
          What People Say
        </h1>
      </div>
      <div className=" lg:flex lg:flex-col lg:gap-3 ">
        <div className="bg-green-100  m-3 flex flex-col p-5 rounded-lg gap-3 lg:">
          <div className="flex items-center gap-3">
            <div className="relative rounded-full overflow-hidden">
              <img src={TestImg1} className=" w-20 h-20 object-cover" />
            </div>
            <h2 className="text-xl font-semibold">Chio beng du</h2>
          </div>
          <div className="py-2">
            <p className=" text-sm leading-6 lg:text-xl">
              "Your work on my app was phenomenal; I'm truly impressed by your
              coding skills and professionalism <br /> I wholeheartedly
              recommend you!"
            </p>
          </div>{" "}
        </div>
        {/* 2 */}
        <div className="bg-green-100  m-3 flex flex-col p-5 rounded-lg gap-3">
          <div className="flex items-center gap-3">
            <div className="  relative rounded-full overflow-hidden">
              <img src={TestImg2} className=" w-20 h-20 object-cover" />
            </div>
            <h2 className="text-xl font-semibold">Hussien Yallaxow</h2>
          </div>
          <div className="py-2">
            <p className=" text-sm  leading-6 lg:text-xl">
              "The website you built for us is beyond expectations; your
              expertise made a significant difference <br />
              highly recommended!"
            </p>
          </div>{" "}
        </div>
        {/* 3 */}
        <div className="bg-green-100  m-3 flex flex-col p-5 rounded-lg gap-3">
          <div className="flex items-center gap-4">
            <div className=" relative  rounded-full overflow-hidden">
              <img src={TestImg3} className=" w-20 h-20 object-cover" />
            </div>
            <h2 className="text-xl font-semibold">Amuda kulle</h2>
          </div>
          <div className="py-2">
            <p className=" text-sm  leading-6 lg:text-xl">
              "For our nonprofit organization's website overhaul, your web
              development skills proved invaluable,
              <br /> creating a seamless and visually appealing experience."
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="bg-green-100 m-3 flex flex-col p-5 rounded-lg gap-3  ">
          <div className="flex items-center gap-4">
            <div className=" relative rounded-full  overflow-hidden ">
              <img src={TestImg4} className=" w-20 h-20 object-cover" />
            </div>
            <h2 className="text-xl font-semibold">John winson</h2>
          </div>
          <div className="py-2">
            <p className=" text-sm  leading-6 lg:text-xl">
              "In redesigning our portfolio website, your web development skills
              played a pivotal role,
              <br /> resulting in a sleek and impressive online presence. <br />
              Your ability to translate ideas into captivating design elements
              is commendable.
              <br /> I highly recommend your web development services."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials