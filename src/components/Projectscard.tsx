import { Link } from "react-router-dom";
import dashboard from "../assets/dashboard.png";
import socialmedia from "../assets/socialmedia.png";

const Projectscard = () => {
  return (
    <div className=" flex flex-col items-center xl:gap-8 lg:mb-10  ">
      <button className="bg-blue-500 text-white py-2 px-8 text-2xl rounded-bl-2xl">
        My Projects
      </button>
      <div className="md:flex md:flex-wrap md:items-center md:pl-10 md:w-full xl:full lg:pl-48 xl:gap-12 ">
        <div className="flex flex-col    m-4 w-72 h-96  px-6  lg:w-2/5  xl:mb-20 ">
          <div className="w-full h-full relative ">
          
            <img src={dashboard} className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 bg-green-200 py-2 px-4 ">
            <h2 className="text-xl md:text-2xl md:font-medium">Dashboard</h2>
            <p className="text-sm  xl:text-lg">
              Experience the power of data visualization with our Dynamic Data
              Dashboard. Monitor key metrics, track trends, and gain insights at
              a glance. A user-friendly interface puts the information you need
              right at your fingertips.
            </p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col    m-4 w-72 h-96 px-6 lg:w-2/5 ">
          <div className="w-full h-full relative   ">
           
            <img src={socialmedia} className="object-cover" />
          </div>
          <div className="flex flex-col gap-2 bg-green-200 py-2 px-4 ">
            <h2 className="text-xl md:text-2xl md:font-medium">Social Media</h2>
            <p className="text-sm  xl:text-lg">
              Presenting a clone of a popular social media platform. Explore
              familiar features, connect with friends, share updates, and engage
              with content—all within a faithful recreation of the well-loved
              social experience. Immerse yourself in nostalgia.
            </p>
          </div>
        </div>

       
      </div>

      
      <Link to="/projects" className="xl:mt-16">
        - - See More ! - -
      </Link>
      
    </div>
  );
};

export default Projectscard;
