function App() {
    let count = 0;

    function handleClick() {
        count++; //更新count = 相當於setCount
        document.getElementById('count').textContent = count; //拿到新的count,資料重新渲染(當初是0,重新f5變成1就是網頁渲染)
    }

    return(<>
        <div id='count'>0</div>
        <button onClick={handleClick}> 按我一下 count 可以 + 1</button>
    
    </>)
}

export default App;