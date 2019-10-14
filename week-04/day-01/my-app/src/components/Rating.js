import React from 'react';

function Rating() {
    return (
        <div className="rating">
            <h3>Star Rating</h3>
            <input type="checkbox" />1 star<br />
            <input type="checkbox" />2 stars<br />
            <input type="checkbox" />3 stars<br />
            <input type="checkbox" />4 stars<br />
            <input type="checkbox" />5 stars<br />
        </div>
    );
}

export default Rating;
