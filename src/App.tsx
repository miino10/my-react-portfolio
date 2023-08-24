import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mystack from "./components/Mystack";
import Navbar from "./components/Navbar";
import Projectscard from "./components/Projectscard";
import Testimonials from "./components/Testimonials";
import ProjectsPage from "./components/ProjectsPage";
import EmailForm from "./components/EmailForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Navbar />
      <Hero />
      <Mystack />
      <Testimonials />
      <Projectscard />
      <EmailForm/>

      <Footer />
    </Router>
  );
};

export default App;
