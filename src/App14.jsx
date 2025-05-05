import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);   //變更這個count的方法是setCount,讓變數count預設值初始值是0
    const [count2, setCount2] = useState(0);

    function handleClick() {
        setCount( count+1 ); //變更count內容並且自動渲染
    }

    function handleClick2() {
        setCount2( count+2 ); //變更count2內容並且自動渲染
    }

    return(<>
        <div>{count}</div> {/* 是使用第四行的count*/}
        <div>{count2}</div>
        <button onClick={handleClick}> 按我一下 count 可以 + 1</button>
        <button onClick={handleClick2}> 按我一下 count2 可以 + 2</button>
    </>)
}

export default App;