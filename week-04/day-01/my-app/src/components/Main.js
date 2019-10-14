import React from 'react';

function Main() {
    return (
        <main>
                <div className="hotelList">Hotel List</div>
                <div className="hotels">
                    <ul>
                        <li>
                            <div className="item">
                                <div className="hotelName">
                                    Hotel des Vosges
                                </div>
                                <p></p>
                                <button type="button">Book now!</button>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="hotelName">
                                    We loft
                                </div>
                                <p></p>
                                <button type="button">Book now!</button>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <div className="hotelName">
                                    Hipotel Paris Gambetta République
                                </div>

                                <p></p>
                                <button type="button">Book now!</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
    );
}

export default Main;