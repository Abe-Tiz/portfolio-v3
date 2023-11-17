import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../../components/Card';
import data from './data';
import Front from './Front';
import Back from './Backend';
import './portfolio.css'

const Portfolio = () => { 

  const [isPressed, setIsPressed] = useState(null);
  
  let _allPortfolio = null;
  let _frontPortfolio = null;
  let _backPortfolio = null;

  
  const handleBtnPressed = (category) => {
    setIsPressed(category);
  }

    // useEffect(() => {
    //   localStorage.setItem("selectedCategory", isPressed);
    // }, [isPressed]);
    
  useEffect(() => {
    handleBtnPressed();
     AOS.init({ duration: 3000 });
  }, []);

    // useEffect(() => {
    //   AOS.init({ duration: 3000 });
    // }, []);
  

  if (isPressed === 'All') {

    
    _allPortfolio = data.map((item) => (
      <Card
        data-aos="fade-up"
        data-aos-duration="3000"
        classsName="single__portfolio"
        key={item.id}
      >
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="portfolio__img"
        >
          <img src={item.image} alt="myproject- images" />
        </div>
        <span data-aos="fade-up" data-aos-duration="3000">
          {item.title}
        </span>
        <small data-aos="fade-up" data-aos-duration="3000">
          {item.desc}
        </small>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="portfolio_cta"
        >
          <a
            className="btn light"
            href={item.demo}
            target="_blank"
            rel="noreferrer noopener"
          >
            Demo
          </a>
          <a
            className="btn primary"
            href={item.prolink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </div>
      </Card>
    ));
  } else if (isPressed === 'front') {
    _frontPortfolio = Front.map((item) => (
      <Card  data-aos="fade-up"
            data-aos-duration="3000" classsName="single__portfolio" key={item.id}>
        <div className="portfolio__img">
          <img src={item.image} alt="myproject- images" />
        </div>
        <span>{item.title}</span>
        <small>{item.desc}</small>
        <div className="portfolio_cta">
          <a
            className="btn light btn_portfolio"
            href={item.demo}
            target="_blank"
            rel="noreferrer noopener"
          >
            Demo
          </a>
          <a 
            className="btn primary"
            href={item.prolink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </div>
      </Card>
    ));
  } else {
    _backPortfolio = Back.map((item) => (
      <Card  data-aos="fade-up"
            data-aos-duration="3000" classsName="single__portfolio" key={item.id}>
        <div className="portfolio__img">
          <img src={item.image} alt="myproject- images" />
        </div>
        <span>{item.title}</span>
        <small>{item.desc}</small>
        <div className="portfolio_cta">
          <a
            className="btn light btn_portfolio"
            href={item.demo}
            target="_blank"
            rel="noreferrer noopener "
          >
            Demo
          </a>
          <a
            className="btn primary" 
            href={item.prolink} 
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </div>
      </Card>
    ));
    
  }


    return (
      <section id="portfolio">
        <h2  data-aos="fade-up"
            data-aos-duration="3000">portfolio</h2>
        <p  data-aos="fade-up"
            data-aos-duration="3000" className='portfolio__description'>
          Check Out some of the projects i recently worked on for my clients.
          use the button s to toggle the different categories.
        </p>
        <div  data-aos="fade-up"
            data-aos-duration="3000" className=" container">
          <div className="portfolio__items">
            <button
              className={`btn ${
                isPressed === "All" ? "active" : "btnPortfolio"
              }`}
              onClick={() => handleBtnPressed("All")}
            >
              All
            </button>
            <button
              className={`btn ${
                isPressed === "front" ? "active" : "btnPortfolio"
              }`}
              onClick={() => handleBtnPressed("front")}
            >
              Frontend
            </button>
            <button
              className={`btn ${
                isPressed === "back" ? "active" : "btnPortfolio"
              }`}
              onClick={() => handleBtnPressed("back")}
            >
              Backend
            </button>
          </div>

          <div className="portfolio__items-1">
            {_allPortfolio}
            {_frontPortfolio}
            {_backPortfolio}
          </div>
        </div>
      </section>
    );
}

export default Portfolio