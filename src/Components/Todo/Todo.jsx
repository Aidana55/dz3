import React from 'react';
import style from './todo.module.css'

const Todo = ({id}) => {
    return (
        <div className={style.open}>
            {id}
            
        </div>
    );
};

export default Todo;