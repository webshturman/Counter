import React, {useState} from 'react';
import s from './App.module.css'
import './App.css';
import {Counter} from "./Components/Counter";
import {Button} from "./Components/Button";
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
    let minCount = 0
    let maxCount = 5
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

    )
}

export default App;
