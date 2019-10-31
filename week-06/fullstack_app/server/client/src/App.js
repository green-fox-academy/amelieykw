import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    fetch('http://localhost:3001')
      .then(response => console.log(response)) // response.json()
      .then(({response}) => this.setState({users : 'response.users'}))
      .catch(error => console.log(error));
  }

  showUsers = user => {user.username};

  render() { 
    const { users } = this.state;
    return (
      <div className="App">
        {users.map(this.showUsers)}
      </div>
    );
  }
}

export default App;
