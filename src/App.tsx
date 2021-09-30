import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css'
import './App.css';
import {CountResult} from "./Components/CountResult";
import {CountSet} from "./Components/CountSet";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./bll/store";
import {InitialStateType} from "./bll/counter-reducer";
import {changeMaxValueAC, changeMinValueAC} from "./bll/actions";


// export const getFromStorage = (key:string, defaultValue:number)=> {
//     let newValue = defaultValue
//     let storageItem = localStorage.getItem(key);
//     if(storageItem !== null){
//         newValue = JSON.parse(storageItem)
//     }
//     return newValue
// }
// export const setToStorage =(key:string, value:number)=> {
//     localStorage.setItem(key,JSON.stringify(value));
// }

function App() {
    // let [minValue, setMinValue] = useState(getFromStorage('set minValue',0))
    // let [maxValue, setMaxValue] = useState(getFromStorage('set maxValue', 1))
    // let [count, setCount] = useState(getFromStorage('set count',minValue))
    // let [correctData, setCorrectData] = useState(true)
    //  const error = minValue >= maxValue || minValue < 0
//-----------------------------------------------------------------

    // useEffect(()=> {
    //     setToStorage('set minValue',minValue);
    //     setToStorage('set maxValue',maxValue);
    //     setToStorage('set count',count);
    // },[minValue,maxValue,count])
//---------------------------------------------------------------------------------------
//     const dispatch = useDispatch()
    const {minValue, maxValue} = useSelector<RootStateType, InitialStateType>( state => state.counter)

    let [correctData, setCorrectData] = useState(true)
    const error = minValue >= maxValue || minValue < 0

    // const changingMinValue =(newInputValue:number)=> {
    //     dispatch(changeMinValueAC(newInputValue))
    //     setCorrectData(false)
    // }
    // const changingMaxValue =(newInputValue:number)=> {
    //     dispatch(changeMaxValueAC(newInputValue))
    //     setCorrectData(false)
    // }
 //----------------------------------------------------------------------------------------------
    return (
        <div className={s.bothCounters}>
            <CountSet
                    // minValue={minValue} maxValue={maxValue}
                      // setMinValue={changingMinValue}
                      // setMaxValue={changingMaxValue}
                      // setCount={setCount}
                      setCorrectData={setCorrectData}
                      error={error}
            />
           <CountResult
                        // count={count} minValue={minValue} maxValue={maxValue}
                        // setCount={setCount}
                        correctData={correctData} error={error}/>
        </div>

    )
}

export default App;
