import React, {ChangeEvent} from 'react';
import s from "../App.module.css";



type InputSetPropsType = {
    title: string
    value: number
    changingValue: (newInputValue:number)=> void
    error:boolean
}
export const InputSet: React.FC<InputSetPropsType> = ({title, value,changingValue,error}) => {
    const inputError = error ? s.redInput : s.spanInputValue
    const changeValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let newInputValue = Number(e.currentTarget.value)
        changingValue(newInputValue)
    }
    return (
        <div className={s.inputValueBlock}>
            <span className={s.spanInputTitle}>{title}:</span>
            <input value={value} type="number" onChange={changeValueHandler} className={inputError}/>
        </div>
    );
};
