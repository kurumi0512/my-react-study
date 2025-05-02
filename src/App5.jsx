//事件處理

function App(){

    const handleClick2 = function() {
        alert('OK2');
    }

    const handleClick3 = (e) => {
        alert('OK3:' + e);
        console.log(e);
    }

    return(
        <>
            <button onClick={function(){alart('ok');}}>我是按鈕1</button>
            <button onClick={handleClick2}>我是按鈕2</button>
            <button onClick={handleClick3}>我是按鈕3</button>
        </>
    )
}

export default App;