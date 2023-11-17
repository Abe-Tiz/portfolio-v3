import './Card.css'

const Card = ({children, classsName, onClick}) => {
    return (
        <article className={`card ${classsName}`} onClick={onClick}>
            {children}
        </article>
    );
}

export default Card