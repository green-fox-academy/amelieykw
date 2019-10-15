import React from 'react';
import HotelItem from './HotelItem';
import data from '../data/data';

function Main() {
    const type = data.hotels;

    const hotelNames = type.map((hotel) => <HotelItem hotelName={hotel.name} description={hotel.description} img={hotel.imageURL} />);

    return (
        <main>
            <div className="hotelList">Hotel List</div>
            <div className="hotels">
                <ul>
                    {hotelNames}
                </ul>
            </div>
        </main>
    );
}

export default Main;