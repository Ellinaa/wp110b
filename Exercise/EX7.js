let text = "name:Ellinaa age:90 weight:100"
let re = /[0-9]+/g
let re2 = /[a-z]+/g
let re3 = /:([0-9a-zA-Z])+/g
let re4 = /:([0-9a-zA-Z])+/
let re5 = /:\w+/
let re6 = /:\d+/g
let re7 = /:\D+/g



console.log(text.match(re));
console.log(text.match(re2));
console.log(text.match(re3));
console.log(text.match(re4));
console.log(text.match(re5));
console.log(text.match(re6));
console.log(text.match(re7));
