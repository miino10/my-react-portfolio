import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mystack from "./components/Mystack";
import Navbar from "./components/Navbar";
import Projectscard from "./components/Projectscard";
import Testimonials from "./components/Testimonials";


const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Mystack/>
     <Testimonials/>
     <Projectscard/>
     <Footer/>
    </>
  );
};

export default App;
