import { SearchBoxProps } from "./types";
import './search-box.styles.scss'

const SearchBox = ({placeholder,onChangeHandler, ...restProps}: SearchBoxProps)=> (
    <input className="search-box" type="search" placeholder={placeholder} onChange={onChangeHandler} {...restProps}/>   
)

export default SearchBox;