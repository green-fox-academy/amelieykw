import React from 'react';

import data from '../data/data';

function Rating() {
    const star = data.filters["Star rating"];

    const stars = star.map((rate) => <div><input type = "checkbox" /> { rate.name } <br /></div>);

    return ( 
        <div className = "rating" >
            <h3 > Star Rating </h3> 
            { stars }
        </div>
    );
}

export default Rating;