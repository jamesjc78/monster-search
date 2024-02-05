import { Monster } from "../../types/types";
import { isEmpty } from "lodash";
import { CardListProps } from "./types";
import CardMonster from "../card-monster/card-monster.component";
import './card-list.styles.scss'

const CardList = ({monsters}: CardListProps) => ( 
    <div>
    {!isEmpty(monsters)?<div className="card-list">{(monsters.map((monster:Monster)=>{
        return(<CardMonster monster={monster}/>)
        }))}
        </div>
        :<h1>No monsters found!</h1>
    }
    </div>
)

export default CardList;