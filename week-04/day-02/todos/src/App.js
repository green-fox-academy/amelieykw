import React from 'react';
import './App.css';
import Title from './components/Title';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <Title />
      <InputBox />
      <TodoList />
    </div>
  );
}

export default App;
