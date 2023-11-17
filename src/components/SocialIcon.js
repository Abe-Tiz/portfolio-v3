// import "./Card.css";

const SocialIcon = ({ children, classsName, onClick }) => {
  return (
    <article className={`${classsName}`} onClick={onClick}>
      {children}
    </article>
  );
};

export default SocialIcon;
