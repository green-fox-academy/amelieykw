import React from 'react';
import HotelItem from './HotelItem';

function Main() {
    return (
        <main>
            <div className="hotelList">Hotel List</div>
            <div className="hotels">
                <ul>
                    <HotelItem hotelName="Hotel des Vosges" />
                    <HotelItem hotelName="We loft" />
                    <HotelItem hotelName="Hipotel Paris Gambetta République" />
                </ul>
            </div>
        </main>
    );
}

export default Main;