//變數應用

function App(){
    const text = 'Hello React' ;
    return(
        <>
            <h1>{text}</h1>
            <h1>{text}{text}</h1>
            <h1>{text.toUpperCase()}</h1>
            <h1 style={{backgroundColor: 'red'}}>{text}</h1>
            {/*外層的大括號 {} 表示：你要在 JSX 裡「嵌入 JavaScript 表達式」*/ }
            {/*內層的大括號 { backgroundColor: 'red' } 是：一個 JavaScript 的物件。*/ }
            <form>
                Text:<input type="text" value={text} />
            </form>
        </>


    )
}

export default App 