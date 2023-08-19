import { MdArrowOutward } from "react-icons/md";
import heroimg from "../assets/image.jpg";

const Hero = () => {
  return (
    <div className="mt-5 mb-10 lg:mb-10 md:flex justify-between  h-[850px] md:mb-40  ">
      {/* right part */}
      <div className="flex md:flex-1 flex-col justify-between mt-20  ">
        <div className="flex flex-col justify-center items-center text-start text-sm  md:ml-20  md:items-start ">
          {/* text part */}
          <div className=" flex flex-col  gap-7 justify-center items-start  pt-10 px-7    ">
            {/* text mainpart */}
            <div className="flex flex-col gap-3 md:gap-7">
              <div className="flex  md:gap-4">
                <h1 className="font-bold text-xl md:text-5xl">Hi! IAm </h1>
                <span className="bg-blue-500 rounded-b-full py-1 px-2 md:py-4 md:px-4 text-white md:text-3xl ">
                  Programmer
                </span>
              </div>

              <h1 className="font-bold text-xl  md:text-5xl ">
                Abdifatah dahir
              </h1>
              <p className="py-2 md:text-xl">
                Design user interfaces for over 7 years as a product designer
              </p>
            </div>
            {/* buttons part */}
            <div className="flex gap-4 ">
              <button className="bg-[rgb(253,72,29)]  text-white  text-sm py-2 px-5 md:py-4 md:px-6 md:text-lg">
                Hire Me
              </button>
              <button className="flex justify-center items-center md:text-lg">
                Projects <MdArrowOutward />
              </button>
            </div>

            <div>
              <h1 className="font-bold text-xl md:text-3xl ">+85</h1>
              <p className="text-xs md:text-base">Client work worldwide</p>
            </div>
            <div className=" flex gap-8 items-center  lg:gap-52">
              <div>
                <h1 className="font-bold text-xl md:text-3xl">647</h1>
                <p className="text-xs md:text-base">Project demo</p>
              </div>
              <div>
                <h1 className="font-bold text-xl md:text-3xl ">Contact</h1>
                <p className="text-xs md:text-base">abdifataah1619@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* black part */}
        <div className="bg-[rgb(38,38,38)] w-full lg:max-w-[50%]  md:min-w-full  flex flex-col  mt-6  items-start   px-7 py-4">
          <div className="  flex gap-4 mb-6 md:ml-16 ">
            <h1 className=" text-white text-sm font-bold md:text-base ">
              Project
              <br /> Statistics 2023
            </h1>
            <button className="bg-green-300 px-1  text-xs font-bold md:px-3 md:text-base   ">
              Know more
            </button>
          </div>
          <div className="text-white text-xs  flex flex-col gap-2   w-full md:text-base">
            <div className="flex justify-between  md:ml-16 ">
              <p>Website Design</p>
              <p>75</p>
            </div>
            <div className="flex justify-between  md:ml-16 ">
              <p>Mobile App Design</p>
              <p>64</p>
            </div>
            <div className="flex justify-between  md:ml-16 ">
              <p>Brand Identity</p>
              <p>37</p>
            </div>
          </div>
        </div>
      </div>
      {/* className=" w-screen h-screen md flex-1 my-3 md:my-0 bg-red-400 relative" */}
      <div className="   object-cover  md:flex-1 my-3 md:my-0 relative">
        <img
          src={heroimg}
          alt="Project"
          className="w-screen h-[300px] lg:h-full  md:h-[111%] object-fill"
        />
      </div>
      {/* left part */}
    </div>
  );
};

export default Hero;
