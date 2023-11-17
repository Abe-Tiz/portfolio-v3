import React, { useEffect} from "react";
import Card from "../../components/Card";
import data from "./data";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {

    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  
  return (
    <section id="testimonials">
      <h2 data-aos="fade-up" data-aos-duration="3000">
        What My Clients Say
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="3000"
        className="testimonial__description"
      >
        These are unbaised testimonials from some of my clients
      </p>

      <Swiper
        spaceBetween={10}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
         breakpoints={{
           768: {
            slidesPerView: 3, // Number of slides per view for tablets
          },
          480: {
            slidesPerView: 1, // Number of slides per view for phones
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 20,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {data.map((item) => (
          <SwiperSlide>
            <Card
              data-aos="fade-up"
              data-aos-duration="3000"
              classsName="testimonial_item"
              key={item.id}
            >
              <small>{item.desc}</small>
              <div className="testimonial_image">
                <img src={item.image} alt="client-profile" />
                <div className="testimonial_content-topic">
                  <span className="testimonial__name">{item.name}</span>
                  <small>{item.title}</small>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="slider-controler"
        >
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
