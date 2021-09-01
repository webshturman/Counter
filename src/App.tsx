import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css'
import './App.css';
import {CountResult} from "./Components/CountResult";
import {CountSet} from "./Components/CountSet";


export const getFromStorage = (key:string)=> {
    let storageItem = localStorage.getItem(key);
    if(storageItem){
        return JSON.parse(storageItem)
    }
}
export const setToStorage =(key:string, value:number)=> {
    localStorage.setItem(key,JSON.stringify(value));
}

function App() {
    let [minValue, setMinValue] = useState(getFromStorage('set minValue') ? getFromStorage('set minValue') : 0)
    let [maxValue, setMaxValue] = useState(getFromStorage('set maxValue') ? getFromStorage('set maxValue') : 1)
    let [count, setCount] = useState(getFromStorage('set count') ? getFromStorage('set count') : minValue)
    let [correctData, setCorrectData] = useState(true)
    // const disabledCondition = minValue >= maxValue || minValue < 0
//-----------------------------------------------------------------
    useEffect( () =>{
        setCount(getFromStorage('set count'));
        setMinValue(getFromStorage('set minValue'));
        setMaxValue(getFromStorage('set maxValue'));
    },[])
    useEffect(()=> {
        setToStorage('set count',count);
        setToStorage('set minValue',minValue);
        setToStorage('set maxValue',maxValue)
    },[minValue,maxValue,count])
//---------------------------------------------------------------------------------------
    const changingMinValue =(e:ChangeEvent<HTMLInputElement>)=> {
        let newMinValue = Number(e.currentTarget.value)
        setMinValue(newMinValue)
        setCorrectData(false)
    }
    const changingMaxValue =(e:ChangeEvent<HTMLInputElement>)=> {
        let newMaxValue = Number(e.currentTarget.value)
        setMaxValue(newMaxValue)
        setCorrectData(false)
    }
 //----------------------------------------------------------------------------------------------
    return (
        <div className={s.bothCounters}>
            <CountSet minValue={minValue} maxValue={maxValue}
                      setMinValue={changingMinValue}
                      setMaxValue={changingMaxValue}
                      setCount={setCount}
                      setCorrectData={setCorrectData}
            />
           <CountResult count={count} minValue={minValue}maxValue={maxValue}
                        setCount={setCount}
                        correctData={correctData}/>
        </div>

    )
}

export default App;
