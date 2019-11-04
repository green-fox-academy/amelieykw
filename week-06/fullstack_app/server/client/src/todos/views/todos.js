import React from 'react';

const AddTodo = require('./addTodo');
const TodoList = require('./todoList');

export const Todos = () => {
    return (
        <div className="todos">
            <AddTodo />
            <TodoList />
        </div>
    )
}