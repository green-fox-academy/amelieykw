'use strict';

var name = 'Bob';
var old = 'Hello '+name+'!\nHow are you today?'; // this is the old  way of creating a dynamic string.
var updated = `Hello ${name}!
How are you today?`; 

function log(timestamp, username, action) {
    console.log(`INFO - {${timestamp}} {${username}} : {${action}}`);
}