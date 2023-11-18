import './about.css'
import aboutImage from '../../assets/header/imgcv.jpg'
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
            I am software developer specialized in web technologies like
            ReactJs, React Native, javascript, HTML5, CSS3, SQL, java,
            bootstrap5, C#, NodeJs,Express and MongoDb.I am open minded to adopt
            new technologies to fulfill business needs. I enjoy coding
          </p>
          <p data-aos="fade-up" data-aos-duration="3000">
            I am an Information System Student in Addis Ababa University, and am
            constantly learning and staying up-to-date with the latest trends
            and technologies in my field.
          </p>
          <a href={cv} download className="btn primary">
            Download CV <BiSolidDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About