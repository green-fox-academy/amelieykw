import React from 'react';
// import './App.css';

import Form from './Form';
import List from './List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      secondName: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <Form handleChange={this.handleChange} />
        <List 
          firstName={this.state.firstName}
          secondName={this.state.secondName}
          email={this.state.email} />
      </div>
    );
  }
}

export default App;
