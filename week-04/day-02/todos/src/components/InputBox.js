import React from 'react';

class InputBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input type="text" />
                <button type="button" value="Add">Add</button>
            </div>
        );
    }
}

export default InputBox; 