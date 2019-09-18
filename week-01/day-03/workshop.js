'use strict';

// Strings
console.log("================= Strings : ex 01 ==================")
var example = "In a dishwasher far far away";

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
example = example.replace('dishwasher', 'galaxy');

console.log(example)
console.log();

console.log("================= Strings : ex 02 ==================")
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

function reverse (input) {
    // time: O(input.length) 
    let reversed_input = '';
    for (let i = input.length - 1; i >= 0 ; i--) {
        reversed_input += input.charAt(i);
    }
    return reversed_input;
}

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
console.log(reverse(reversed));

module.exports = reverse;
console.log();

console.log("================= Strings : ex 03 ==================")
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
var url = "https//www.reddit.com/r/nevertellmethebots";

url = url.replace('bots', 'odds');
url = url.replace('https', 'https:');

console.log(url);
console.log();


console.log("================= Strings : ex 04 ==================")
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
quote = quote.replace('It you', 'It takes longer than you');

console.log(quote);
console.log();

console.log("================= Strings : ex 05 ==================")
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";
todoText = "My todo:\n" + todoText;
todoText += " - Download\n";
todoText += "\t- Diablo\n";  

console.log(todoText);
console.log();

// Data Structures
console.log("================= Data Structures : ex 01 ==================")
// Map introduction 1

// We are going to play with maps. Feel free to use the built-in methods where possible.
// Create an empty map where the keys are integers and the values are characters
let map = {}
// Print out whether the map is empty or not
console.log(map);
// Add the following key-value pairs to the map
// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
map[97] = 'a';
map['98'] = 'b';
map['99'] = 'c';
map['65'] = 'A';
map['66'] = 'B';
map['67'] = 'C';

// Print all the keys
console.log('keys : ', Object.keys(map));
// Print all the values
console.log('values : ', Object.values(map));
// Add value D with the key 68
map['68'] = 'D';
// Print how many key-value pairs are in the map
console.log('key-value pairs length : ', Object.entries(map).length);
// Print the value that is associated with key 99
console.log(map[99]);
// Remove the key-value pair where with key 97
delete map[97];
console.log(map);
// Print whether there is an associated value with key 100 or not
console.log(map[100] == undefined ? false : true);
// Remove all the key-value pairs
console.log(map);


console.log("================= Data Structures : ex 02 ==================")
// Map introduction 2
// Create a map where the keys are strings and the values are strings with the following initial values

// Key	Value
// 978-1-60309-452-8	A Letter to Jo
// 978-1-60309-459-7	Lupus
// 978-1-60309-444-3	Red Panda and Moon Bear
// 978-1-60309-461-0	The Lab
let ISBN = {
    '978-1-60309-452-8':	'A Letter to Jo',
    '978-1-60309-459-7':	'Lupus',
    '978-1-60309-444-3':	'Red Panda and Moon Bear',
    '978-1-60309-461-0':	'The Lab'
}
// Print all the key-value pairs in the following format
let ISBN_entries = Object.entries(ISBN);

ISBN_entries.forEach(element => {
    console.log(element[1], '(ISBN: ', element[0], ')');
});
// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)

// Remove the key-value pair with key 978-1-60309-444-3
delete ISBN['978-1-60309-444-3'];
// Remove the key-value pair with value The Lab
delete ISBN[Object.keys(ISBN).find(key => ISBN[key] === 'The Lab')];
console.log(ISBN);
// Add the following key-value pairs to the map

// Key	Value
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?
ISBN['978-1-60309-450-4'] = 'They Called Us Enemy';
ISBN['978-1-60309-453-5'] = 'Why Did We Trust Him?';

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(ISBN['478-0-61159-424-8'] == undefined ? false : true);
// Print the value associated with key 978-1-60309-453-5
console.log(ISBN['978-1-60309-453-5']);
console.log();


console.log("================= Data Structures : ex 03 ==================")
// Telephone book
// We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

// Create a map with the following key-value pairs.

// Name (key)	Phone number (value)
// William A. Lathan	405-709-1865
// John K. Miller	402-247-8568
// Hortensia E. Foster	606-481-6467
// Amanda D. Newland	319-243-5613
// Brooke P. Askew	307-687-2982
let telephoneBook = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
}
// Create an application which solves the following problems.

// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?
function getPhoneNumber (name) {
    return telephoneBook[name];
}
function getName (phoneNumber) {
    return Object.keys(telephoneBook).find(key => telephoneBook[key] == phoneNumber);
}
console.log(getPhoneNumber('John K. Miller'));
console.log(getName('307-687-2982'));
console.log(getPhoneNumber('Chris E. Myers'));
console.log();

console.log("================= Data Structures : ex 04 ==================")
// Product database
// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
let products = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}
// Create an application which solves the following problems.

// How much is the fish?
function getPrice (product) {
    return products[product];
}
console.log(getPrice('Fish'));

// What is the most expensive product?
function mostExpensiveProduct (products) {
    let values = Object.values(products);
    let max = 0;
    values.forEach(function (element) {
        if (element > max) {
            max = element;
        }
    });
    return Object.keys(products).find(key => products[key] == max);
}
console.log(mostExpensiveProduct(products));

// What is the average price?
function averagePrice (products) {
    let sum = 0;
    Object.values(products).forEach(function (element) {
        sum += element;
    });
    return sum / Object.entries(products).length;
}
console.log(averagePrice(products));

// How many products' price is below 300?
function productPriceBelow300 (products) {
    let num = 0;
    Object.values(products).forEach(function (element) {
        if (element < 300) {
            num++;
        }
    });
    return num;
}
console.log(productPriceBelow300(products));

// Is there anything we can buy for exactly 125?
function product125 (products) {
    return Object.values(products).find(element => element == 125) == undefined ? false : true;
}
console.log(product125(products));

// What is the cheapest product?
function cheapestProduct (products) {
    let values = Object.values(products);
    let min = values[0];
    values.forEach(function (element) {
        if (element < min) {
            min = element;
        }
    });
    return Object.keys(products).find(key => products[key] == min);
}
console.log(cheapestProduct(products));
console.log();

console.log("================= Data Structures : ex 05 ==================")
// Product database 2
// We are going to represent our products in a map where the keys are strings representing the product's name and the values are numbers representing the product's price.

// Create a map with the following key-value pairs.

// Product name (key)	Price (value)
// Eggs	200
// Milk	200
// Fish	400
// Apples	150
// Bread	50
// Chicken	550
let products2 = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
}
// Create an application which solves the following problems.

// Which products cost less than 201? (just the name)
function productsLessThan201 (products2) {
    return Object.keys(products2).filter(key => products2[key] < 201);
}
console.log(productsLessThan201(products2));
// Which products cost more than 150? (name + price)
function productsMoreThan150 (products2) {
    return Object.keys(products2).filter(key => products2[key] > 150);
}
console.log(productsMoreThan150(products2));
console.log();

console.log("================= Data Structures : ex 06 ==================")
// Shopping list 2
// Represent the following products with their prices

// Product	Amount
// Milk	1.07
// Rice	1.59
// Eggs	3.14
// Cheese	12.60
// Chicken Breasts	9.40
// Apples	2.31
// Tomato	2.58
// Potato	1.75
// Onion	1.10
let productsAndPrices = {
    'Milk':	1.07,
    'Rice':	1.59,
    'Eggs':	3.14,
    'Cheese':	12.60,
    'Chicken Breasts':	9.40,
    'Apples':	2.31,
    'Tomato':	2.58,
    'Potato':	1.75,
    'Onion':	1.10
}
// Represent Bob's shopping list

// Product	Amount
// Milk	3
// Rice	2
// Eggs	2
// Cheese	1
// Chicken Breasts	4
// Apples	1
// Tomato	2
// Potato	1
let bob = {
    'Milk':	3,
    'Rice':	2,
    'Eggs':	2,
    'Cheese':	1,
    'Chicken Breasts':	4,
    'Apples':	1,
    'Tomato':	2,
    'Potato':	1  
}
// Represent Alice's shopping list

// Product	Amount
// Rice	1
// Eggs	5
// Chicken Breasts	2
// Apples	1
// Tomato	10
let alice = {
    'Rice':	1,
    'Eggs':	5,
    'Chicken Breasts':	2,
    'Apples':	1,
    'Tomato':	10   
}

// Create an application which solves the following problems.

// How much does Bob pay?
function sumPay (productsAndPrices, shoopingList) {
    let sum = 0;
    Object.entries(shoopingList).forEach(function (entry) {
        sum += entry[1] * productsAndPrices[entry[0]];
    });
    return sum;
}
console.log(sumPay(productsAndPrices, bob));
// How much does Alice pay?
console.log(sumPay(productsAndPrices, alice));
// Who buys more Rice?
// Who buys more Potato?
// Who buys more different products?
// Who buys more products? (piece)
console.log();