import React, {ChangeEvent} from 'react';
import s from "../App.module.css";
import {useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {CountDataType, InitialStateType} from "../bll/counter-reducer";



type InputSetPropsType = {
    title: string
    value: number
    changingValue: (newInputValue:number)=> void
    // error:boolean
}
export const InputSet: React.FC<InputSetPropsType> = React.memo(({title, value,changingValue}) => {
    const {minValue, maxValue} = useSelector<RootStateType, CountDataType>( state => state.counter.countData)
    // const {minValue, maxValue} = useSelector<RootStateType, InitialStateType>( state => state.counter)
    const inputError = minValue >= maxValue || minValue < 0 ? s.redInput : s.spanInputValue
    // const inputError = error ? s.redInput : s.spanInputValue
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
});
