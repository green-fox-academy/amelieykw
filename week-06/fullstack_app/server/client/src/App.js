import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('http://localhost:3001')
      .then((resp)=>{ return resp.json() })
      .then((json)=>{ this.setState({users: json.users}) })
      .catch(error => console.log("error at fetching : " + error));
  }

  showUsers = (user) => { return user.name };

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
