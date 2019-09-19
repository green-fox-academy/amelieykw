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

