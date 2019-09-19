// OOP
console.log("=================  OO : ex 01 ==================")
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


console.log("=================  OO : ex 02 ==================")
// BlogPost

// Create a BlogPost class that has
// an authorName
// a title
// a text
// a publicationDate

// Create a few blog post objects:
// "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
// Lorem ipsum dolor sit amet.

// "Wait but why" titled by Tim Urban posted at "2010.10.10."
// A popular long-form, stick-figure-illustrated blog about almost everything.

// "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. 
// When I asked to take his picture outside one of IBM’s New York City offices, 
// he told me that he wasn’t really into the whole organizer profile thing.
class BlogPost {
    constructor(authorName, title, text, publicationDate) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}
const blog1 = new BlogPost("John doe", "Lorem Ipsum", "Lorem ipsum dolor sit amet.", "2000.05.04.");
const blog2 = new BlogPost("Tim Urban", "Wait but why", "A popular long-form, stick-figure-illustrated blog about almost everything.", "2010.10.10.");
const blog3 = new BlogPost("William Turton", "One Engineer Is Trying to Get IBM to Reckon With Trump", "// Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.", "2017.03.28.");


// Encapsulation and Constructor
class Human {

  constructor(name = 'unknown', age = 0, iq = 0) {
    this.name = name;
    this.age = age;
    this.iq = iq;
  }

  isSmart() {
    return this.iq > 100;
  }

  isNameless() {
    return this.name === 'unkown' || this.name === '';
  }

  beSmarter() {
    this.iq += 20;
  }
}

const human = new Human();
const human2 = new Human('Laci', 18, 110);

human.name = 'Hector';
human.age = 1;

if (human.isSmart()) {
  console.log(`${human.name} is smart, with iq: ${human.iq}`);
}


console.log("=================  Encapsulation and Constructor : ex 01 ==================");
// Animal

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    constructor(hunger = 50, thirst = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat() {
        this.hunger--;
    }

    drink() {
        this.thirst--;
    }

    play() {
        this.hunger++;
        this.drink++;
    }
}

console.log("=================  Encapsulation and Constructor : ex 02 ==================");
// Sharpie

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount
class Sharpie {
    constructor(color, width, inkAmount = 100.0) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use() {
        this.inkAmount--;
    }
}

console.log("=================  Encapsulation and Constructor : ex 03 ==================");
// Counter

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    static initialValue = 0;

    constructor(counter = 0) {
        this.counter = counter;
        Counter.initialValue = this.counter;
    }

    add(number) {
        this.counter += number;
    }

    get counter() {
        return this.counter;
    }

    reset() {
        this.counter = Counter.initialValue;
    }
}

