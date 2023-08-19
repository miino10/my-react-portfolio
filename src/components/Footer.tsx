const Footer = () => {
  return (
    <div className="bg-gray-200 p-4 sm:w-full ">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
