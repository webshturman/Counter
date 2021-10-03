import React from 'react';
import s from "../App.module.css";
import {Counter} from "./Counter";
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../bll/store";
import {InitialStateType} from "../bll/counter-reducer";
import {changeCountResultAC} from "../bll/actions";

type CountResultPropsType ={
    correctData:boolean
    error:boolean
}

export const CountResult: React.FC<CountResultPropsType> = ({correctData, error}) => {
    const dispatch = useDispatch()
    const {minValue, maxValue,count} = useSelector<RootStateType, InitialStateType>( state => state.counter)

    const changeCount = () => {
        dispatch(changeCountResultAC(count))
    }
    const resetCount = () => {
        dispatch(changeCountResultAC(minValue))
    }
    return (
        <div className={s.container}>
            <div className={s.counter}>
                <Counter count={count} maxCount={maxValue} correctData={correctData} error={error}/>
            </div>
            <div className={s.buttonBlock}>
                <Button callback={changeCount} title={'Inc'} condition={count === maxValue || !correctData}/>
                <Button callback={resetCount} title={'Reset'} condition={count ===minValue || !correctData}/>
            </div>
        </div>
    );
};
