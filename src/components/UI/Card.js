import './Card.css';
const Card=(props)=>{
    const classesName="card "+props.className;
    return(
        <div className={classesName}>
            {props.children}
        </div>
    );
}

export default Card;