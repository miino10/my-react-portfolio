import { TbBrandNextjs } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";

const Mystack = () => {
  return (
    <div className="flex flex-col items-center m-4 md:py-10 ">
      <h1 className="text-3xl font-semibold mb-4 md:text-4xl md:mb-10">
        My stack !
      </h1>
      {/* icons and ptags */}
      <div className="flex flex-col gap-5 md:flex-row  md:gap-20 w-full justify-evenly  ">
        <div className=" flex flex-col items-center">
          <button className="bg-green-300 p-4 rounded-full mb-2">
            <TbBrandNextjs className="text-4xl  md:text-6xl" />
          </button>
          <p className="text-xs md:text-xl">Next js</p>
        </div>
        <div className=" flex flex-col items-center">
          <button className="bg-green-300 p-4 rounded-full mb-2">
            <FaNode className="text-4xl md:text-6xl " />
          </button>
          <p className="text-xs md:text-xl ">Node js</p>
        </div>
        <div className=" flex flex-col items-center">
          <button className="bg-green-300 p-4 rounded-full mb-2">
            <BiLogoTypescript className="text-4xl md:text-6xl " />
          </button>
          <p className="text-xs md:text-xl">Typescript</p>
        </div>
        <div className=" flex flex-col items-center">
          <button className="bg-green-300 p-4 rounded-full mb-2">
            <SiMongodb className="text-4xl md:text-6xl " />
          </button>
          <p className="text-xs md:text-xl">Mongo DB</p>
        </div>
      </div>
    </div>
  );
};

export default Mystack;
