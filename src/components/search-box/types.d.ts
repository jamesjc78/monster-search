import { InputHTMLAttributes } from "react";

export interface SearchBoxProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder:string,
    onChangeHandler: (event:any)=>void
}