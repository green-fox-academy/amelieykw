import React from 'react';

export const TodoItem = ({text, completed, onToggle, onRemove}) => (
    <li 
        className = "todo-item"
        style={{textDecoration: completed? 'line-through' : 'none'}}
    >
        <input className="toggle" type="checkbox" checked={completed? "checked" : ""}  readOnly onClick={onToggle} />
        <label className="text">{text}</label>
        <button className="remove" onClick={onRemove}>X</button>
    </li>
)