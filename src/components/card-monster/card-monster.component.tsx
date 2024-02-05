import { CardMonsterProps } from "./types";
import './card-monster.styles.scss'

const CardMonster = ({monster} : CardMonsterProps) => {
    const {id,name,email} = monster
    return(
        <div className="card">
            <div className="card-content">
                <img 
                    src={`https://robohash.org/${id}?set=set2&size=180x180`} 
                    alt={`monster ${name}`}/>
                <div className="details">
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default CardMonster;