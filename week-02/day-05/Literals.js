'use strict';

// before es6
function carWrapper(model, color, year, doors, specPropName, specPropValue) {
    return {
        model: model,
        color: color,
        year: year,
        doors: doors,
        specPropName: specPropName,
        specPropValue: specPropValue
    };
}

// after es6
function carWrapper(model, color, year, doors, specPropName, specPropValue) {
    var obj = {
        model,
        color,
        year,
        doors,
        specPropName,
        specPropValue
    };

    Object.model = model;
    Object.color = color;
    Object.year = year;
    Object.doors = doors;
    Object.specPropName = specPropName;
    Object.specPropValue = specPropValue;

    return obj;
}

console.log(JSON.stringify(carWrapper('Benz', 'black', 1886, 0, 'historical', true)));