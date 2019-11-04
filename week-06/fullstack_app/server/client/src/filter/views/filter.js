import React from 'react';

import FilterTypes from  '../../constants';
const Link = require('./link');

export const Filter = () => {
    return (
        <p className="filters">
            <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
            <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
            <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
        </p>
    );
}