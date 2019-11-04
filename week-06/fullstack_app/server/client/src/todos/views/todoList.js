import React from 'react';
import { TodoItem } from './todoItem';
import FilterTypes from  '../../constants';
import { toggleTodo, removeTodo } from '../actions';

export const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul className="todo-list">
            {
                todos.map((item) => (
                    <TodoItem 
                        key = {item.id}
                        text = {item.text}
                        completed = {item.completed}
                        onToggle = {() => onToggleTodo(item.id)}
                        onRemove = {() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    );
}

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error('unsupported filter');
    }
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = { // prop => action
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
}