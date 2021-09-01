import React, {ChangeEvent} from 'react';
import s from "../App.module.css";

type InputSetPropsType = {
    title: string
    value: number
    changingValue: (e:ChangeEvent<HTMLInputElement>)=> void
}
export const InputSet: React.FC<InputSetPropsType> = ({title, value,changingValue}) => {
    return (
        <div className={s.inputValueBlock}>
            <span className={s.spanInputTitle}>{title}:</span>
            <input value={value} type="number" onChange={changingValue} className={s.spanInputValue}/>
        </div>
    );
};