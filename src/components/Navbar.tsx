import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const datas = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/",
    title: "Works",
  },
  {
    id: 3,
    url: "",
    title: "About",
  },
  {
    id: 4,
    url: "/Projects",
    title: "Projects",
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isWorksDropdownOpen, setisWorksDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const toggleWorks = () => {
    setisWorksDropdownOpen((prev) => !prev);
  };
  return (
    <div
      className={`fixed w-full top-0 z-50 bg-white   border-b-4 border-opacity-20 border-gray-300 p-4 ${
        isMenuOpen ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between mx-auto  ">
        {/* logo */}
        <div className="md:flex-1">
          <a href={"/"} className="text-4xl font-extrabold xl:text-5xl">
            Miino<button className="w-2 h-2 bg-red-600 rounded-full "></button>
          </a>
        </div>
        {/* links */}
        <div className="hidden h-full flex-1 md:flex md:flex-col md:justify-center md:items-center relative   ">
          <div className="  justify-between gap-30  flex    items-center   ">
            <div className="flex gap-5 lg:gap-10 md:text-xs  md:px-4 ">
              {/* Add your navigation links here for medium and large screens */}
              {datas.map((data) => (
                <a className="flex" key={data.id} href={data.url}>
                  <p className=" lg:text-lg  xl:text-xl lg:font-semibold xl:font-medium ">
                    {data.title}
                  </p>
                  {data.id === 2 && (
                    <p
                      className="flex items-center ml-1 "
                      onClick={toggleWorks}
                    >
                      <FaChevronDown className="lg:ml-2 lg:text-xl" />{" "}
                      {/* Replace with the desired icon */}
                    </p>
                  )}
                  {data.id === 2 && isWorksDropdownOpen && (
                    <div className="bg-green-300 md:top-8 md:w-36 md:left-10   md:text-sm md:p-3 lg:text-lg lg:w-52 left-20 lg:top-14 absolute rounded-md  xl:w-52   xl:top-8 xl:left-48">
                      <p>1:Building Websites</p>
                      <p>2:Testing</p>
                      <p>3:Designing</p>
                      <p>4:Debugging</p>
                    </div>
                  )}
                </a>
              ))}
            </div>
            <button className="md:py-2 md:px-3 md:text-sm lg:text-xl  lg:py-1  lg:px-5 bg-white border-black border-2">
              Let's Chat
            </button>
          </div>
        </div>

        <div className="relative md:hidden ">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>

          <div
            className={`flex-col  right-0  absolute z-50 bg-green-200 w-screen h-screen top-full mt-6    p-10 rounded-lg    ${
              isMenuOpen ? "flex   " : "hidden"
            } `}
          >
            {datas.map((data) => (
              <p className=" flex" key={data.id} onClick={toggleMenu}>
                <p className="text-6xl mb-7">{data.title}</p>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
