import { SearchBoxProps } from "./types";
import './search-box.styles.scss'

const SearchBox = ({placeholder,onChangeHandler}: SearchBoxProps)=> (
    <input className="search-box" type="search" placeholder={placeholder} onChange={onChangeHandler}/>   
)

export default SearchBox;