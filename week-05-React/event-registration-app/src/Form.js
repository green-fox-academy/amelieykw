import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form>
                <input
                    type="text"
                    name="firstName"
                    onChange={this.props.handleChange} />
                <input
                    type="text"
                    name="secondName"
                    onChange={this.props.handleChange} />
                <input
                    type="email"
                    name="email"
                    onChange={this.props.handleChange} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;