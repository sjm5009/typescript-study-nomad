import React, { useRef, useState } from "react";

const OverloadingApply = () => {
    type StringType = {
        a: string,
        b: string,
        c: string
    }
    type OverridingType = {
        (a: number): void,
        (strType: StringType): void
    }

    const [numValue, setNumValue] = useState<number>()
    const [srtValue, setStrValue] = useState<string>()

    const aNumRef = useRef<HTMLInputElement>(null)

    const aStrRef = useRef<HTMLInputElement>(null)
    const bStrRef = useRef<HTMLInputElement>(null)
    const cStrRef = useRef<HTMLInputElement>(null)

    const clickNumberButton = (a:number) => {
        let numRegExp = /^[0-9]+$/
        if(!numRegExp.test(''+a)) return alert('숫자만 입력 가능합니다.');
        let num: number = Number(handleOverloadingType(a))
        setNumValue(num)
    }

    const clickStringButton = () => {
        let params: StringType = {
            a: aStrRef.current?.value || '',
            b: bStrRef.current?.value || '',
            c: cStrRef.current?.value || ''
        }
        let str = String(handleOverloadingType(params))
        setStrValue(str)
    }

    const handleOverloadingType: OverridingType = (ot) => {
        if(typeof ot === 'number') {
            return ot + ot
        }
        else {
            return `🛸 ${ot.a} 🚀 ${ot.b} 🚁 ${ot.c}`
        }
    }


    return (
        <section>
            <div className="container bg-yellow">
                <div className="title">🌟 Overloading - Number Overloading 함수 사용</div>
                <h1>{numValue}</h1>
                <input type="text" ref={aNumRef}/>
                <button onClick={()=>clickNumberButton(Number(aNumRef.current?.value))}>2배가 되는 버튼</button>
            </div>
            <div className="container bg-gray">
                <div className="title">🌟 Overloading - String Overloading 함수 사용</div>
                <h1>{srtValue}</h1>
                <input type="text" ref={aStrRef}/>
                <input type="text" ref={bStrRef}/>
                <input type="text" ref={cStrRef}/>  
                <button onClick={()=>clickStringButton()}>버튼을 눌러 할 일 추가하기</button>
            </div>
        </section>
    )
}
export default OverloadingApply;