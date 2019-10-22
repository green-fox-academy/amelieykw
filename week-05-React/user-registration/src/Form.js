import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true
        }
        this.validate = this.validate.bind(this);
    }

    validate(event) {
        var pass = event.target.value;
        var minLength = 8;
        if (pass.length >= minLength) {
            this.setState({
                disabled: false
            });
        } else {
            this.setState({
                disabled: true
            });
        }
    }

    render() {
        return (
            <form>
                <input type="text"
                    name="username"
                    value={this.props.username}
                    placeholder="Username"
                    onChange={this.props.handleChange}
                />
                <br />

                <input type="email"
                    name="email"
                    value={this.props.email}
                    placeholder="Email"
                    onChange={this.props.handleChange}
                />
                <br />

                <input type="password"
                    name="password"
                    value={this.props.password}
                    placeholder="Password"
                    onInput={this.validate}
                    onChange={this.props.handleChange}
                />
                <br />

                <button type="button" disabled={this.state.disabled}>Submit</button>
            </form>
        );
    }
}

export default Form;