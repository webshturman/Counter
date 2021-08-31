import React, {useState} from 'react';
import s from "../App.module.css";
import {Counter} from "./Counter";
import {Button} from "./Button";

type CountResultPropsType ={
    minValue: number
    maxValue: number
}

export const CountResult: React.FC<CountResultPropsType> = ({minValue,maxValue}) => {
    let minCount = minValue
    let maxCount = maxValue
    let [count, setCount] = useState(minCount)
    const changeCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(minCount)
    }
    return (
        <div className={s.container}>
            <div className={s.counter}>
                <Counter count={count} maxCount={maxCount}/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={changeCount} title={'Inc'} count={count === maxCount}/>
                <Button callback={resetCount} title={'Reset'} count={count === minCount}/>
            </div>
        </div>
    );
};
