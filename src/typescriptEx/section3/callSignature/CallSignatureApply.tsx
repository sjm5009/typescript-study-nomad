import React, { useRef, useState } from "react";

const CallSignatureApply = () => {
    type Add = (a: number, b: number) => number // call signature

    const add: Add = (a, b) => {
        return a + b
    }

    const [value, setValue] = useState(0)
    const aRef = useRef<HTMLInputElement>(null)
    const bRef = useRef<HTMLInputElement>(null)

    const clickButton = () => {
        if(aRef.current && bRef.current) {
            let aVal = parseInt(aRef.current.value)
            let bVal = parseInt(bRef.current.value)
            setValue(add(aVal, bVal))
        }
    }

    return (
        <div className="container bg-yellow">
            <div className="title">🌟 CallSignature 연습</div>
            <h1>{value}</h1>
            <input type="text" ref={aRef}/>
            <input type="text" ref={bRef}/>
            <button onClick={clickButton}>버튼을 눌러 더하기</button>
        </div>
    )
};

export default CallSignatureApply;