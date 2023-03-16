import React from "react";

const GenericConclusionsApply = () => {
    const handleState = <T,M>(arr: T[], title: M) => {

    }
    
    return (
        <>
            <div className="container bg-yellow">
                <div className="title">GenericConclusions</div>
                <h3>문자리스트</h3>
                <ul>
                    {/* {strTodoList && strTodoList.map((cur, i) => <li key={`${i}_${cur}`}>{cur}</li>)} */}
                </ul>
                <button onClick={()=>handleState}>오늘의 할 일 목록 만들기</button>
            </div>
        </>
    )
};
export default GenericConclusionsApply;