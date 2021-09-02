import React, {ChangeEvent} from 'react';
import s from "../App.module.css";
import {Button} from "./Button";
import {InputSet} from "./InputSet";

type CountSetPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (e:ChangeEvent<HTMLInputElement>) => void
    setMaxValue: (e:ChangeEvent<HTMLInputElement>) => void
    setCount: (value:number)=>void
    setCorrectData: (correctData:boolean) => void
}

export const CountSet: React.FC<CountSetPropsType> = (
    {minValue, maxValue,setMaxValue, setMinValue,setCount,setCorrectData}
) => {
    let disabledCondition = minValue >= maxValue || minValue < 0
    const settingCount = () => {
        setCount(minValue)
        setCorrectData(true)
    }
    return (
        <div className={s.container}>
            <div className={s.countSetter}>
                <InputSet title={'Max value'} value={maxValue} changingValue={setMaxValue}/>
                <InputSet title={'Start value'} value={minValue} changingValue={setMinValue}/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={settingCount} title={'Set'} condition={disabledCondition}/>
            </div>
        </div>
    );
};

