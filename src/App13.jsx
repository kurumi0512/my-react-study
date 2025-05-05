function App() {
    let count = 0;

    function handleClick() {
        count++; //更新count = 相當於setCount
        document.getElementById('count').textContent = count; //拿到新的count,資料重新渲染(當初是0,重新f5變成1就是網頁渲染)
        //該 <div> 中的文字內容改成變數 count 的值。也就是：直接操作 DOM 元素的顯示內容。
    }

    return(<>
        <div id='count'>0</div>
        <button onClick={handleClick}> 按我一下 count 可以 + 1</button>
    
    </>)
}

export default App;