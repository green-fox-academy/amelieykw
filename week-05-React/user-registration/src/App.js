import React, {Component} from 'react';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }    

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }
  
  render() {
    return (
      <div className="App">
        <Form handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
