import React from 'react';

class AddTodo extends React.Component {
    refInput(node) {
        this.input = node;
    }

    onSubmit(ev) {
        ev.preventDefault(); // prevent the web page to refresh itself

        const input = this.input;
        if (!input.value.trim()) { // if the user input is empty, ignore it 
            return;
        }
        this.props.onAdd(input.value);
        input.value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <form action="" onSubmit={this.onSubmit}>
                    <input type="text" className="new-todo" ref={this.refInput} />
                    <button className="add-btn" type="submit">
                        add
                    </button>
                </form>
            </div>
        );
    }
}

export default AddTodo;