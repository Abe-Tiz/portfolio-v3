import SocialIcon from '../../components/SocialIcon';
import './contact.css'
import data from './data';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);

  
  return (
    <section id="contact">
      <h2 data-aos="fade-up" data-aos-duration="3000">
        Get In Touch
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="3000"
        className="contact__description"
      >
        Shoot me a message via any of the links below.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container contact__container "
      >
        {data.map((item) => (
          <SocialIcon
            data-aos="fade-up"
            data-aos-duration="3000"
            classsName="contact__container"
          >
            <a
              className="contact__link"
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.icon}
            </a>
          </SocialIcon>
        ))}
      </div>
    </section>
  );
}

export default Contact