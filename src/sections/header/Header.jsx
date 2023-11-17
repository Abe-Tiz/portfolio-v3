import './header.css'
import data from './data'
import profile from "../../assets/header/profile-1.jpg";
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
          Simegnew Tizazu
        </h3>
        <p data-aos="fade-up" data-aos-duration="3000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="header__cta"
        >
          <a
            href="#contact"
            className="btn primary"
          >
            Let's Talk
          </a>
          <a
            
            href="#portfolio"
            className="btn light"
          >
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