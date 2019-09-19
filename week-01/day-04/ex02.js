'use strict'
console.log("=================  OO : ex 02 ==================")
// Post-it

// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor

// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"
class PostIt {
    constructor(backgroundColor = undefined, text = undefined, textColor = undefined) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}
const orange = new PostIt("orange", "Idea 1", "blue");
console.log(orange);
const pink = new PostIt("pink", "Awesome", "black");
console.log(pink);
const yellow = new PostIt("yellow", "Superb!", "green");
console.log(yellow);