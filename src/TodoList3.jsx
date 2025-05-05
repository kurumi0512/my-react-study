// TodoList 練習
import './App.css'
import { useState } from 'react';

function App() {

    //const todos = ['吃早餐', '做體操', '寫程式'];
    const [todos, setTodos] = useState(['吃早餐', '做體操', '寫程式'])
    const [todo, setTodo] = useState(''); //todo: 單一筆輸入欄位的資料。
    //const [狀態變數, 設定函式] = useState(初始值);

    const handleTodoChange = (e) => { //每當使用者在輸入框輸入文字，就更新 todo 的值。
        setTodo(e.target.value);
    }

    const handleTodoAdd = () => {
        setTodos([...todos, todo]); // 將新項目加到原本 todos 陣列後面
        setTodo(''); // 清空欄位資料
    }

    return (
        <>
            <h1>My TodoList</h1>
            <div>
                <input type='text' value={todo} onChange={handleTodoChange} />
                {/*input 欄位綁定 todo 的狀態，每次輸入都會更新。
                value={todo} 讓輸入框「顯示」todo 的內容。
                onChange={handleTodoChange} 讓輸入框「改變」時，更新 todo*/}
                <button onClick={handleTodoAdd}>加入</button>
            </div>
            <ul>
                {
                    todos.map((todo, index) => ( //map轉換
                        <li key={index}>{todo}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default App