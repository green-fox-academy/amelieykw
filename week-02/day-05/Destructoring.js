'use strict';

var car = {
    model: 'Benz',
    color: 'black',
    year: 1886,
    doors: 0,
    historical: true
};

// before es6
var model = car.model;
var color = car.color;
var year = car.year;
var doors = car.doors;
var historical = car.historical;

// from es6
var {model, color, year, doors, historical} = car;


var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower: {
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}

// before es6
var type = computer.type;
var monitorColor = computer.monitor.color;
var monitorSize = computer.monitor.size;
var monitorHDMI = computer.monitor.HDMI;
var monitorVGA = computer.monitor.VGA;
var towerColor = computer.tower.color;
var towerCPU = computer.tower.CPU;
var towerMemory = computer.tower.memory;
var towerSSD = computer.tower.SSD;

// from es6
var {type, monitor:{color, size, HDMI, VGA}, tower:{color,CPU,monitor,SSD}} = computer;
