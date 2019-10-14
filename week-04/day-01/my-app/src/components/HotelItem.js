import React from 'react';

function HotelItem(props) {
    return (
        <li>
            <div className="item">
                <div className="hotelName">
                    {props.hotelName}
                </div>
                <p></p>
                <button type="button">Book now!</button>
            </div>
        </li>
    );
}

export default HotelItem;