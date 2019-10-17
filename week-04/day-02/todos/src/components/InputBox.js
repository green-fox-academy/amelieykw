import React from 'react';

class InputBox extends React.Component {
    constructor() {
        super();
        this.state = {
            newChange: undefined
        }
    }

    render() {
        return (
            <div className="inputBox">
                <input
                    type="text"
                    className="input"
                    onChange={(event) => this.props.handleChange(event.target.value)}
                />
                <button
                    type="button"
                    value="Add"
                    className="button-text"
                    onClick={(event) => this.props.handleClick()}>Add</button>
            </div>
        );
    }
}

export default InputBox; 