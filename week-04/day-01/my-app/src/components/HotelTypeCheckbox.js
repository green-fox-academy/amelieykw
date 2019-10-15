import React from 'react';

function HotelTypeCheckbox(props) {
    return (
        <div>
            <input type="checkbox" checked = { props.checked } /> {props.type} <br />
        </div>
    );
}

export default HotelTypeCheckbox;