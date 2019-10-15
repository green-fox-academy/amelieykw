import React from 'react';
import HotelTypeCheckbox from './HotelTypeCheckbox';
import data from '../data/data';

function Type() {
    const type = data.filters["Property type"];

    const hotelTypeCheckbox = type.map((hotel) => <HotelTypeCheckbox type={hotel.name} />);

    return (
        <div className="type">
            <h3>Proper Type</h3>
            { hotelTypeCheckbox }
        </div>
    );
}

export default Type;
