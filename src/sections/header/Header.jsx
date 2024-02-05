import './header.css'
import data from './data'
import profile from "../../assets/header/imgcv.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
  
const Header = () => {

  useEffect(() => {
    AOS.init({duration:3000})
  }, [])
  
  return (
    <section>
      <div className="container header__container">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="header__profile"
        >
          <img src={profile} alt="profile" />
        </div>
        
        <h3 data-aos="fade-up" data-aos-duration="3000">
          Abebe Tizazu
        </h3>
        <p data-aos="fade-up" data-aos-duration="3000">
          I am an Information System Student in Addis Ababa University, and am
          constantly learning and staying up-to-date with the latest trends and
          technologies in my field.
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="header__cta"
        >
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="header__socials"
        >
          {data.map((item) => (
            <a
              key={item.id}
              target="_blanck"
              href={item.link}
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header