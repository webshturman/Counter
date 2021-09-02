import React from 'react';
import s from "../App.module.css";
import {Counter} from "./Counter";
import {Button} from "./Button";

type CountResultPropsType ={
    count: number
    minValue: number
    maxValue: number
    setCount: (value:number)=>void
    correctData:boolean
}

export const CountResult: React.FC<CountResultPropsType> = (
    {count, minValue, correctData, maxValue,setCount}
) => {

    const changeCount = () => {
            setCount(count + 1)
    }
    const resetCount = () => {
        setCount(minValue)
    }
    return (
        <div className={s.container}>
            <div className={s.counter}>
                <Counter count={count} maxCount={maxValue} correctData={correctData}/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={changeCount} title={'Inc'} condition={count === maxValue || !correctData}/>
                <Button callback={resetCount} title={'Reset'} condition={count ===minValue || !correctData}/>
            </div>
        </div>
    );
};
