import React from 'react';

function HotelTypeCheckbox(props) {
    return (
        <div>
            <input type="checkbox" /> {props.type} <br />
        </div>
    );
}

export default HotelTypeCheckbox;