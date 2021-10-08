import React from 'react';
import s from "../App.module.css";
import {Button} from "./Button";
import {InputSet} from "./InputSet";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {InitialStateType} from "../bll/counter-reducer";
import {changeMaxValueAC, changeMinValueAC, resetCountResultAC} from "../bll/actions";

export const CountSet: React.FC = React.memo((props) => {

    const dispatch = useDispatch()
    const {minValue, maxValue} = useSelector<RootStateType, InitialStateType>(state => state.counter)
    const changingMinValue = (newInputValue: number) => {
        dispatch(changeMinValueAC(newInputValue, false))
    }
    const changingMaxValue = (newInputValue: number) => {
        dispatch(changeMaxValueAC(newInputValue, false))
    }

    const settingCount = () => {
        dispatch(resetCountResultAC(minValue, true))
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

