import './about.css'
import aboutImage from '../../assets/header/profile-1.jpg'
import cv from '../../assets/Abebe.pdf'
import { BiSolidDownload } from 'react-icons/bi'
import data from './data'
import Card from '../../components/Card'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  
  return (
    <section id="about">
      <div className="container about__container">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="about__left"
        >
          <div className="about__portrait">
            <img src={aboutImage} alt="about-profile" />
          </div>
        </div>

        <div className="about__right">
          <h2 data-aos="fade-up" data-aos-duration="3000">
            About Me
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="about__cards"
          >
            {data.map((item) => (
              <Card
                data-aos="fade-up"
                data-aos-duration="3000"
                key={item.id}
                classsName="about__card"
              >
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p data-aos="fade-up" data-aos-duration="3000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p data-aos="fade-up" data-aos-duration="3000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a
            href={cv}
            download
            className="btn primary"
          >
            Download CV <BiSolidDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About