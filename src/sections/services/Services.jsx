import {useEffect } from 'react'
import './services.css'
import Card from './../../components/Card';
import data from './data';
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

  
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <section  id="services">
      <h2  data-aos="fade-up"
            data-aos-duration="3000" >services</h2>
      <p   data-aos="fade-up"
            data-aos-duration="3000" className='service__description'>I give you the best in all the services below</p>
      <div  data-aos="fade-up"
            data-aos-duration="3000"  className="container services__container">
        {data.map((item) => (
          <Card  data-aos="fade-up"
            data-aos-duration="3000"  key={item.id} classsName="services__item">
            <span  className='service__icon'>{item.icon}</span>
            <div   className='service__card-sec'>
              <h5  >{item.title}</h5>
              <small >{item.desc}</small>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Services