import React, {useState} from 'react';
import Todo from "../../Components/Todo/Todo";
const TodoPage = () => {
    const [todo, setTodo] = useState(['todo1', 'todo2', 'todo3'])
    return (
        <div>
            {todo.map(user =><Todo id={user}/>)}
            
        </div>
    );
};

export default TodoPage;