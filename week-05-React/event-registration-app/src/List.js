import React from 'react';

class List extends React.Component {

    render() {
        const firstName = this.props.firstName;
        const secondName = this.props.secondName;
        const email = this.props.email;
        return (
            <ul>
                <li>Your name is: {firstName === undefined ? "" : firstName} {secondName === undefined ? "" : secondName}</li>
                <li>Your email is: {email === undefined ? "" : email}</li>
            </ul>
        )
    }
}

export default List;