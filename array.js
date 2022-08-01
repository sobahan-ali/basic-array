var namesFriend = ['habib', 'asad', 'sobuj', 'alal', 'mahi'];

var age = [45, 50, 87, 40, 50, 90];
var vowel = ['a', 'e', 'i', 'o', 'u'];
console.log('array length is', vowel.length); // .length we can get arrays length here output is 5.
console.log(namesFriend);
console.log(age);
console.log(typeof age); // output array is a object .
// we can exes arrays element with index no. arrays index number start 0 .
 console.log(vowel.indexOf(45)) // output -1 , if thats element are not in the arrays.
 console.log(age.indexOf(90)); // here output is 1. because age arrays inside 50 index no is 1
 // get element by index
 console.log(age[1]); // output 50 . its means 1 no index e 50 namok element stand.

 // we can set new element value an array with inex no.
 age[1] = 800; // output we see [45, 800, baki elements ] like as updated or added new value an array by index no
 console.log(age);

// ***  add or remove element from arrays last position using push , pop. m-17-4 
const friends = ['salam', 'kalam', 'balam'];
console.log(friends);
 friends.push('gelam');
console.log(friends); // seen the friends arrays laste added new value gelam

friends.pop();
var outElement = friends.pop(); // its stor outer elements . we see balam beacuse he is out.
console.log(friends); // here we not seen gelam its pop() method er maddhome bahire giyase.
console.log(outElement);

const students = ['aliya', 'maliya', 'dalia', 'kaliya'];

console.log(students);

students.unshift('moyna'); // with unshift method we can set a new arrays value at first position in existing array.
console.log(students); //output [ 'moyna', 'aliya', 'maliya', 'dalia', 'kaliya' ]

students.shift()
console.log(students) // output [ 'aliya', 'maliya', 'dalia', 'kaliya' ] with shift method we can reject or move a value at first position in existing array.

// compare variable or comparison operator

var a= 5;
var b= 3;

console.log(a>b) // result true
console.log(a<b) // result false
console.log(a==b) // result false
console.log(a===b) // result false with type
console.log(a==b) // result false 
console.log(a!=b) // result true
console.log(a!==b) // result true

//  && both site true result true one site false result false.
// || anay one true output  true

//  make conditional decesion , if, else , comparison.module 17-6

var men1Salary = 100;
var men2Salary = 200;

if (men1Salary > men2Salary){
    console.log('i married men1Salary')
}
else{
    console.log('i married men2Salary')
}

// handle multiple condition && and or || 

var isGraduated = true;
var car = 1;
var salary = 30000;

// if(isGraduated == true && salary > 30000) {
//     console.log('eso biya kori');
// }
// else {
//     console.log('tor kopale biya nai')
// } result seen tor kopale biya nai.

if((isGraduated == true && car >= 1) || salary > 40000){
    console.log('eso prem kori')
}
else{
    console.log('give your friend mo number') // output eso prem kori
}

if((isGraduated == false && car >= 1) || salary > 40000){
    console.log('eso prem kori')
}
else{
    console.log('give your friend mo number') // output give your friend mo number.
}

console.log(6!=6)
console.log(6>=6)


//Practice Problem 1

var fruits = ['Apple', 'Banana', 'Orange'];

console.log(fruits.indexOf('Banana'));// output is 1 a) Find the index of ‘Banana’

//replace ‘Banana’ with ‘Mango’.

fruits[1] = 'mango';

console.log(fruits);  // output is : [ 'Apple', 'mango', 'Orange' ]

// Practice Problem 2

var marks = 100;

if(marks > 100 || marks < 0){
    console.log('its not a valid number')
}

else if(marks >= 80){
    console.log('You have got A grade');
}
else if(marks >= 60 ){
    console.log('You have got B grade')
}

else if(marks >= 50){
    console.log('You have got C grade')
}
else if(marks >= 40){
    console.log('You have got D grade')
}

else{
    console.log('You have got F grade')
}


//  Practice Problem 3

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3){
    console.log("The largest number is :",  num1);
}

else if (num2 > num1 && num2> num3){
    console.log("The largest number is :",  num2);
}
else{
    console.log("The largest number is :",  num3);
}


// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal

var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side1 || side2 == side3 || side3 == side1 || side3 == side2){
    console.log('the  triangle is Isosceles')
}

else {
    console.log('the  triangle is not Isosceles')
}




