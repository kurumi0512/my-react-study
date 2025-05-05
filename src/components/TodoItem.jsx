function TodoItem({todo, toggleCompletion, handleTodoDelete}){
    return(
        <li key={todo.id} 
            style={{textDecoration: todo.completed ? 'line-through': 'none'}}> {/* 如果todo完成就文字畫線 */}
            {todo.id}
            <input type="checkbox" 
                    onChange={() =>toggleCompletion(todo.id)} 
                    checked={todo.completed} />

            {todo.text}

            <button onClick={() => handleTodoDelete(todo.id)}>X</button>

        </li>
    )
}

export default TodoItem;