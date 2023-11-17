import "./Card.css";

const QuestionsComponent = ({ children, classsName, onClick }) => {
  return (
    <article className={`faq ${classsName}`} onClick={onClick}>
      {children}
    </article>
  );
};

export default QuestionsComponent;
