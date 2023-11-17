import data from '../navBar/data'
import './footer.css'
import SocialIcon from '../../components/SocialIcon';
import footerData from './footerData';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Footer = () => {

     useEffect(() => {
       AOS.init({ duration: 3000 });
     }, []);
  
  return (
    <footer>
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" footer__content"
        >
          {data.map((data) => (
            <li data-aos="fade-up" data-aos-duration="3000" key={data.id}>
              <a href={data.link}>{data.title}</a>
            </li>
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" footer__container"
        >
          {footerData.map((social) => (
            <SocialIcon
              data-aos="fade-up"
              data-aos-duration="3000"
              key={social.id}
              classsName="footer__container"
            >
              <a
                className="footer__link"
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {social.icon}
              </a>
            </SocialIcon>
          ))}
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footer__right"
        >
          2021 - {new Date().getFullYear()}, All rights Reserved To Simegnew
          Tizazu.
        </p>
      </div>
    </footer>
  );
}
   
export default Footer