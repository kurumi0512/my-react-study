// TodoList 練習
import './App.css'
import { useState } from 'react';

function App() {

    const [todos, setTodos] = useState([
        {id:1, text:'吃早餐', completed:false}, 
        {id:2, text:'做體操', completed:true}, 
        {id:3, text:'寫程式', completed:false},
    ])
    const [todo, setTodo] = useState('');

    const handleTodoChange = (e) => { //每當使用者在輸入框輸入文字，就更新 todo 的值。
        setTodo(e.target.value);
    }
    // map是轉換
    const handleTodoAdd = () => {
        const newId = todos.length > 0 ? Math.max(...todos.map((t)=>t.id)) + 1 : 1;  //todos陣列大於0的話,陣列中最大的id數值+1,false就回傳1
        const newTodo = {id:newId, text:todo, completed:false}; //newTodo的預設值
        setTodos([...todos, newTodo]); // 將newTodo加到原本 todos 陣列後面
        setTodo(''); // 清空欄位資料
    }

    const toggleCompletion = (id) => {
        setTodos(
            todos.map((todo) => todo.id ===id ? {...todo, completed: !todo.completed} :todo)
        )
    }
    //找出使用者點擊的那一筆 todo（id 相符的）
    //建立一個新的物件，內容跟原本的 todo 一樣，但把 completed 屬性的值取反
    //:todo 如果不是要改的那筆 todo，就原封不動地保留。

    //使用者點一下 checkbox → 對應的 todo 的 completed 值會切換 → CSS 顯示會改變（例如加刪除線）。

    const handleTodoDelete = (id) => {
        // 利用 filter 來過濾不需要的資料
        //如果使用者點選刪除 id 為 2 的項目，就會留下所有 id ≠ 2 的 todo。
        setTodos(todos.filter((todo) => todo.id !== id));
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
                    todos.map((todo) => (
                        <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through': 'none'}}> {/* 如果todo完成就文字畫線 */}
                            {todo.id}
                            <input type="checkbox" 
                                   onChange={() =>toggleCompletion(todo.id)} 
                                   checked={todo.completed} />
                            {/*當勾選狀態改變時，呼叫 toggleCompletion 函式，並把這個 todo 的 id 傳進去，可能是更新完成狀態的意思。*/}
                            {todo.text}
                            {/*你要讓畫面上顯示出「每一項代辦事項的內容」，就一定要把 todo.text 放進去渲染，否則只會看到空白或 ID，使用者看不懂。 */}
                            <button onClick={() => handleTodoDelete(todo.id)}>X</button>
                            {/*當按下這個按鈕時，會呼叫 handleTodoDelete 並傳入該項目的 id，會把這一筆資料從 todos 中刪除。*/}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default App