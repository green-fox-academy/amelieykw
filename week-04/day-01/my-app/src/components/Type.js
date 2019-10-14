import React from 'react';
import HotelTypeCheckbox from './HotelTypeCheckbox';

function Type() {
    return (
        <div className="type">
            <h3>Proper Type</h3>
            <HotelTypeCheckbox type="Apartments" />
            <HotelTypeCheckbox type="Hotels" />
            <HotelTypeCheckbox type="Hostels" />
        </div>
    );
}

export default Type;
