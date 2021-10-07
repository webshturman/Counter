import React from 'react';
import s from "../App.module.css";
import {Button} from "./Button";
import {InputSet} from "./InputSet";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {CountDataType} from "../bll/counter-reducer";
import {changeMaxValueAC, changeMinValueAC, resetCountResultAC} from "../bll/actions";

type CountSetPropsType = {
    setCorrectData: (correctData:boolean) => void
}

export const CountSet: React.FC<CountSetPropsType> = React.memo(({setCorrectData}) => {
    // let disabledCondition = minValue >= maxValue || minValue < 0

    const dispatch = useDispatch()
    const {minValue, maxValue} = useSelector<RootStateType, CountDataType>( state => state.counter.countData)

    const changingMinValue =(newInputValue:number)=> {
        dispatch(changeMinValueAC(newInputValue))
        setCorrectData(false)
    }
    const changingMaxValue =(newInputValue:number)=> {
        dispatch(changeMaxValueAC(newInputValue))
        setCorrectData(false)
    }

    const settingCount = () => {
        dispatch(resetCountResultAC(minValue))
        setCorrectData(true)
    }
    return (
        <div className={s.container}>
            <div className={s.countSetter}>
                <InputSet title={'Max value'} value={maxValue} changingValue={changingMaxValue}/>
                <InputSet title={'Start value'} value={minValue} changingValue={changingMinValue}/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={settingCount} title={'Set'}/>
            </div>
        </div>
    );
});

