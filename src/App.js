import {useEffect} from 'react'
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Faq from "./sections/faqs/Faq";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import NavBar from "./sections/navBar/NavBar";
import Portfolio from "./sections/portfiolio/Portfolio";
import Services from "./sections/services/Services";
import Testimonials from "./sections/testimonials/Testimonials";
import "./index.css";
 
function App() {

    useEffect(() => {
      const currentThemeColor = localStorage.getItem("color");
      setPrimaryTheme(currentThemeColor);
      const currentBackgroundColor = localStorage.getItem("backgroundColor");
      // setBackgroundTheme(currentBackgroundColor);
    }, []);
  
   const setPrimaryTheme = (color) => {
    document.documentElement.style.setProperty("--color-primary", color);
  };
  

  const setBackgroundTheme = (color) => {
    document.documentElement.style.setProperty("--color-white", "#0F0F0F");
    document.documentElement.style.setProperty("--color-light", "#1F201D");
    document.documentElement.style.setProperty("--color-black", "#D7D7D8");
   };
  
  

  return (
    <>
      <NavBar
        setPrimaryTheme={setPrimaryTheme}
        setBackgroundTheme={setBackgroundTheme}
      />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
