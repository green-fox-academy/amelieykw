import React from 'react';
// import data from '../data/TodoItems';

class TodoList extends React.Component {
    render() {
        let items = this.props.todoItems.map(item => <li className="todo-item" key={item.id}>{item.description}</li> );
    
        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default TodoList;