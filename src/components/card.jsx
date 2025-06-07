import style from "./card.module.css"
import { Tilt } from 'react-tilt'


export const Card = ({image,title,description}) => {
    return (
     <Tilt>
        <div className={style.wrapCard}>
            <img src = {image} alt = {title} loading="lazy" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
     </Tilt>
    )
}

export default Card