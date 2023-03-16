import React, { useState, useRef } from "react";

const GenericRecapApply = () => {
    // PolymorphismApply.tsx 와 타입 선언만 같고 아래 로직과 변수 사용 동일
    type TodoType = <T>(arr: T[]) => void
    
    const [numTodoList, setNumTodoList] = useState([])
    const [strTodoList, setStrTodoList] = useState([])
    
    const aRef = useRef<HTMLInputElement>(null)
    const bRef = useRef<HTMLInputElement>(null)
    const cRef = useRef<HTMLInputElement>(null)
    const dRef = useRef<HTMLInputElement>(null)
    
    const makeTodoList: TodoType = (arr) => {
        let emoArr = ['😈', '👻', '🥶']
        let result = arr.map((cur, i) => {
        if(typeof cur === 'string') {
            return `${emoArr[(i%3)]} ${cur}`
        } else {
            return cur
        }
        });
        
        return result
    }
    
    const clickButton = () => {
        let a = aRef.current?.value || ''
        let b = bRef.current?.value || ''
        let c = cRef.current?.value || ''
        let d = dRef.current?.value || ''
    
        let numRegExp = /^[0-9]+$/
        let numArr: number[] = new Array()
        if(numRegExp.test(a)) numArr.push(Number(a))
        if(numRegExp.test(b)) numArr.push(Number(b))
        if(numRegExp.test(c)) numArr.push(Number(c))
        if(numRegExp.test(d)) numArr.push(Number(d))
    
        let numUpdated: any = makeTodoList(numArr)
        setNumTodoList(numUpdated)
    
        let strArr: string[] = new Array()
        if(a !== '') strArr.push(''+a)
        if(b !== '') strArr.push(''+b)
        if(c !== '') strArr.push(''+c)
        if(d !== '') strArr.push(''+d)
    
        let strUpdated: any = makeTodoList(strArr)
        setStrTodoList(strUpdated)
    }
    
    return (
        <>
        <div className="container bg-yellow">
            <div className="title">🌟 GenericRecap - Generic 타입 선언 사용법 변경(PolymorphismApply.tsx 와 다른 점) </div>
            <h3>문자리스트</h3>
            <ul>
                {strTodoList && strTodoList.map((cur, i) => <li key={`${i}_${cur}`}>{cur}</li>)}
            </ul>
            <h3>숫자리스트</h3>
            <ul>
                {numTodoList && numTodoList.map((cur, i) => <li key={`${i}_${cur}`}>{cur}</li>)}
            </ul>
            <input style={{display: 'inline-block', margin: 'auto', marginBottom:'10px', marginRight: '10px'}} type="text" ref={aRef}/>
            <input style={{display: 'inline-block', margin: 'auto', marginBottom:'10px'}} type="text" ref={bRef}/>
                <br />
            <input style={{display: 'inline-block', margin: 'auto', marginBottom:'10px', marginRight: '10px'}} type="text" ref={cRef}/>
            <input style={{display: 'inline-block', margin: 'auto', marginBottom:'10px'}} type="text" ref={dRef}/>
                <br />
            <button onClick={clickButton}>오늘의 할 일 목록 만들기</button>
        </div>
        </>
    )
};
export default GenericRecapApply;