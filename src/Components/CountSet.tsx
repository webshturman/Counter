import React, {ChangeEvent} from 'react';
import s from "../App.module.css";
import {Counter} from "./Counter";
import {Button} from "./Button";
import {InputSet} from "./InputSet";

type CountSetPropsType = {
    minValue: number
    maxValue: number
    setMinValue: (e:ChangeEvent<HTMLInputElement>) => void
    setMaxValue: (e:ChangeEvent<HTMLInputElement>) => void
}

export const CountSet: React.FC<CountSetPropsType> = ({minValue, maxValue,setMaxValue, setMinValue}) => {
    const settingCount = () => {
        console.log('Success')
    }
    return (
        <div className={s.container}>
            <div className={s.countSetter}>
                <InputSet title={'Max value'} value={maxValue} changingValue={setMaxValue}/>
                <InputSet title={'Start value'} value={minValue} changingValue={setMinValue}/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={settingCount} title={'Set'} count={true}/>
            </div>
        </div>
    );
};

