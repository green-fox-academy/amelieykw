import React from 'react';
import './App.css';
import Title from './components/Title';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';
import data from './data/TodoItems';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: data
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(value) {
    if (value !== undefined) {
      this.setState(() => {
        return {
          newChange: value
        }
      });
    }
  }

  handleClick() {
    if (this.state.newChange !== undefined) {
      this.setState(() => {
        this.state.todos.todoItems.push({
          id: this.state.todos.todoItems.length + 1,
          description: this.state.newChange
        });

        return {
          todos: this.state.todos
        }
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Title />
        <InputBox
          todoItems={this.state.todos.todoItems}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        <TodoList todoItems={this.state.todos.todoItems} />
      </div>
    );
  }
}

export default App;
