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
        {/* left */}
        <div className="left">
          <h3 data-aos="fade-up" data-aos-duration="3000">
            I am <span>Abebe Tizazu.</span>
          </h3>
          <p data-aos="fade-up" data-aos-duration="3000">
            Are You Looking for a Frontend | Mern stack | Mobile app Developer
            Who works hard but stay humble?
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="header__cta"
          >
            <a href="#contact" className="btn primary">
              Hire Me
            </a>
            <a href="#portfolio" className="btn light">
              Browse My Work
            </a>
          </div>

          {/* <div
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
          </div> */}
        </div>

        {/* right */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="header__profile"
        >
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Header