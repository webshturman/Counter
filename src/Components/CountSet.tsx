import React from 'react';
import s from "../App.module.css";
import {Button} from "./Button";
import {InputSet} from "./InputSet";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {InitialStateType} from "../bll/counter-reducer";
import {changeCountResultAC, changeMaxValueAC, changeMinValueAC} from "../bll/actions";

type CountSetPropsType = {
    // minValue: number
    // maxValue: number
    // setMinValue: (newInputValue:number) => void
    // setMaxValue: (newInputValue:number) => void
    // setCount: (value:number)=>void
    setCorrectData: (correctData:boolean) => void
    error:boolean
}

export const CountSet: React.FC<CountSetPropsType> = ({setCorrectData,error}) => {
    // let disabledCondition = minValue >= maxValue || minValue < 0

    const dispatch = useDispatch()
    const {minValue, maxValue} = useSelector<RootStateType, InitialStateType>( state => state.counter)

    const changingMinValue =(newInputValue:number)=> {
        dispatch(changeMinValueAC(newInputValue))
        setCorrectData(false)
    }
    const changingMaxValue =(newInputValue:number)=> {
        dispatch(changeMaxValueAC(newInputValue))
        setCorrectData(false)
    }

    const settingCount = () => {
        dispatch(changeCountResultAC(minValue))
        setCorrectData(true)
    }
    return (
        <div className={s.container}>
            <div className={s.countSetter}>
                <InputSet title={'Max value'} value={maxValue} changingValue={changingMaxValue} error={error}/>
                <InputSet title={'Start value'} value={minValue} changingValue={changingMinValue} error={error}/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={settingCount} title={'Set'} condition={error}/>
            </div>
        </div>
    );
};

