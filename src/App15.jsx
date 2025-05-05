//useState(會自動渲染網頁) 與事件處理 + 展開運算子(...messages)
import { useState } from "react"

function App() {
    //定義變數的同時也把set定義好 const [狀態變數, 設定函式] = useState(初始值);
    // 改變inputMessage叫做setInputMessage,預設值是空白
    const [inputMessage, setInputMessage ] = useState('') 
    //改變Messages叫做setMessages,預設內容是空陣列
    const [messages, setMessages ] = useState([]) 
    
    const handleInputChange = (e) => {
        //輸入就是改變onchange
        //e是事件 event
        //e.target.value是input欄位的內容,根據使用者輸入欄位setInputMessage
        setInputMessage(e.target.value);
    }

    const handleKeyDown = (e) =>{
        //若使用者輸入的是enter 則自動呼叫handleAddMessage()
        if(e.key === 'Enter') {
            handleAddMessage();
        }
     }

    const handleAddMessage = () => {
        //setMessages(messages.concat(inputMessage)); //concat相連->最原始的寫法
        setMessages([...messages, inputMessage]); //新加進來的inputMessage放在原先輸入的messages後面
    }


    return(<>
        <input type='text' value={inputMessage} onChange={handleInputChange} onKeyDown={handleKeyDown} /> 
        {/*value(呈現什麼內容){inputMessage}。但又希望不是空字串,所以要呼叫onchange的{handleInputChange}會在這個欄位做修正*/}
        <button onClick={handleAddMessage}>Send</button><p />
        {messages} {/*messages 是一個陣列，例如 ["你好", "早安", "加油"]，直接插入會變成這樣的文字。將現在的messages.concat(inputMessage)。可以直接用...運算子*/}
        <p/>
        <ul>
            {
                messages.map((message, index) => ( //map是轉換的意思
                    <li key={index}>{index}: {message} </li>
                ))
            }
        </ul>
    </>)
}

export default App;