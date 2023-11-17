import { useState,useEffect } from 'react';
import QuestionsComponent from '../../components/QuestionsComponent';
import data from './data';
import './faq.css'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
 
    const [activeQuestions, setActiveQuestions] = useState([]);
    const [activeQuestionId, setActiveQuestionId] = useState(null);
    
    const handleClick = (questionId) => {
      if (activeQuestions.includes(questionId)) {
        setActiveQuestions(activeQuestions.filter((id) => id !== questionId));
      } else {
        setActiveQuestions([...activeQuestions, questionId]);
      }
         setActiveQuestionId(
           questionId === activeQuestionId ? null : questionId
         );
  };
  
   useEffect(() => {
     AOS.init({ duration: 3000 });
   }, []);


  return (
    <section id="faqs">
      <h2 data-aos="fade-up" data-aos-duration="3000">
        Frequently Asked Questions
      </h2>
      <p
        data-aos="fade-up"
        data-aos-duration="3000"
        className="faq__description"
      >
        Here are some questins i usually get. click to toggle the answer and if
        you still have some more questions. shoot me a message from the contact
        section.
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="container faq__items"
      >
        {data.map((item) => (
          <QuestionsComponent
            data-aos="fade-up"
            data-aos-duration="3000"
            key={item.id}
          >
            <div
              onClick={() => handleClick(item.id)}
              className="faq__content"
            >
              <span className="faq__question">{item.ques}</span>
              <span onClick={() => handleClick(item.id)} className="faq__icon">
                {activeQuestions.includes(item.id) ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="faq__answer"
            >
              {activeQuestions.includes(item.id) && (
                <span key={item.id}>{item.answer}</span>
              )}
            </div>
          </QuestionsComponent>
        ))}
      </div>
    </section>
  );
}

export default Faq