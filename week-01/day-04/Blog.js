'use strict';
// Blog

// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

const BlogPost = require('./BlogPost');

class Blog {
    constructor(blogPostList) {
        this.blogPostList = blogPostList;
    }

    add(newBlogPost) {
        this.blogPostList.push(newBlogPost);
    }

    delete(blogPost) {
        this.blogPostList.delete(blogPost);
    }

    update(int, blogPost) {
        this.blogPostList[int] = blogPost;
    }
}