//https://onecompiler.com/javascript/3zxu5j7tu -> u can utilize this.
//hoisting -> variable and function declartion are moved to top of the scope irrespective of where declared.
a=10;
console.log(a); //10
var a;   //hoisting -> variable declartion only not initalization

printPromoCode();
function printPromoCode(){
  value="Promo";
  console.log("hello", value); // hello Promo
  var value; //var only used. if we use 'let' will throw error like can't access .
  /*
  var a;
  console.log(a);   //will give output as 'undefined'
  a=10;
  */  
}
day = 'sun';
console.log(day +"day");// if u use let type will throw error like 'cannot access day before initalization'
let day; 

/*----------------------------------------------------------------------------------------------------------------*/

//var, let, const 
/*
var -> global and funciton scope,it's possible for hoisting, we can re-declare and update */
var share = 'yes';
var share = 40; // we can declare like this share = 40;
console.log("share value", share);

//should careful when use var keyword:
var newShare = 30;
if(newShare < share) {var newShare = share;}
console.log("share value", newShare);//40 value get updated with share value as 40

//actually it's not a problem.. but it's forget what defined before this

/*
let -> block scope, update but not re-declarable */
let Share = 30; //global variable
//newShare =20; it'll throw error like already declared.
if(Share >0) {let Share =1; }// same variable name but here the scope are different. So,it'll treat as different variable.
console.log(Share);//30 here let scope variable can't accessible outside the scope.

/*
const -> blcok scope, not able update or re-declarable, it should initalization at the time of delcare*/
const variable = 30;
//variable=20; throw the typeerror like ' assignme tot constant variable'
//but in Object case is different:
const stud = {
   name: "promo",
   dob: '22/22/1001',
   address:{
     no: 3,
     street: 'Malai street'
   },
}
stud.name = 'Priya'; // we can't directly update the const variable but we can do like this in const object
console.log("stud detais", stud);
/*stud detais {
  name: 'Priya',
  dob: '22/22/1001',
  address: { no: 3, street: 'Malai street' }
}*/

/*-----------------------------------------------------------------------------------------------------------------------------------*/

//+, - operations
let add=10,sub='10';
console.log(add+sub); //1010 number convert to string
console.log(add-sub); //0  string convert to number 

//Boolean Coercion falsy values ->  false, 0, 0n, -0, “ ”, null, undefined, and NaN; truthy vlaues -> except all falsy values

//Nan property -> not a number -> isNaN(value) -> we can check, if number will return 'false' otherwise return 'true'.
console.log(isNaN('555')); //false will convert this to number, after the check NaN, return true or false;
console.log(isNaN(true)); //false 
console.log(isNaN(33)); //false
console.log(isNaN(false));//false
console.log(isNaN(null)); //false
console.log(isNaN('Hello')); //true
console.log(isNaN(undefined));//true
/*-----------------------------------------------------------------------------------------------------------------------------------*/
//pass by value and Reference 
//pass by value -> primitve data types can only pass by value 
let y = 100;
let z = y; // here just value is assigned to z. If change happen in Z not affect in y.
z= 4;
console.log(y,z); // 100, 4

//non-primitive data types can pass by Reference
let stud1 = stud;//in this memory address is stored in stud1. if change happend in stud1 will affect the stud also.
stud1.message = 'good morning';
console.log(stud); 
/*
{
  name: 'Priya',
  dob: '22/22/1001',
  address: { no: 3, street: 'Malai street' },
  message: 'good morning'
}
*/
/*------------------------------------------------------------------------------------------------------------------------------------*/

//Immediately invoke functions (IIFE):

/* function(){} // it'll throw error like ' function statements require a function name -> it needs to be declare as 'function a(){}'

function(){
  console.log("throw error");
}; // for above error, we've to declare like inside parenthesis '(function(){})' this is tell compiler like this is not function declaration it's a function expression.

*/
(function(){console.log('get inside')})();//get inside () -> this is for function invoke, the way of calling function.

//function expression -> assign function to variable
let func1 = function (){console.log('a func expression');}
func1(); // a func expression

//function statement/Declaration -> like declare of function
function func(){ console.log("a func statement/declaration");}
func(); //a func statement/declaration -> function invoke 

//anaonyoums function -> a function without a name like this 'function() {}'
//function () {console.log("anaonyoums function")}; throw error like 'function statement require function name'

//Named function expression -> assign to name to function in function expression
//let nameFunc = (function value(){console.log("named function expression")})(); -> we doing function invoke Immediately.
let nameFunc = (function value(){console.log("named function expression")});
nameFunc();// named function expression

//first class function -> the ability of use function as 
function firstClass(afunc){
  if(afunc){ console.log('firstClass function'); return afunc};
}

var fc = firstClass(nameFunc); //'func' instead of 'nameFunc' output will be [Function: func] because it's function statement 
console.log(fc);// [Function: value] because 'nameFunc' is expression it set as a value.

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//High-Order functions -> take one or more funciton as argu is higher order func, return func as result;
//high-order functions -> reduce, filter, map are high order function. because it takes function as argu and return a result as a function

function firstClass1(){ console.log("heloo this from HighOrderFuction");}
const arr =[1,2,3,4,5, 'Nisa','Promo', 'momo','karuva', 'nemo','shimo'];
function HighOrderFuction(firstClass){
   console.log("high order func");
   return firstClass();
}
HighOrderFuction(firstClass1); // firstclass function passed a argu and it'result return a function.

//map method
console.log("arrValue:", arr);
var addSum =(values) => {
  if(!isNaN(values)) return values+1; return 0;
}

let arrSum = arr.map(addSum); //put function as parameter 
// let arrSum = arr.map(function(addSum){  return addSum+1;}); -> using normal function
//let arrSum = arr.map((value) => { return value + 1;}) -> using arrow function
console.log(arrSum); // [2,3,4,5,6]

//filter method 
const arr1 =[1,2,3,4,5, 'Nisa','Promo', 'momo','karuva', 'nemo','shimo', 'Neelambomo'];
let ar = arr1.filter(value => {if(isNaN(value))  {
const reg = new RegExp("^[nN].*o+mo$"); //filter start and endwith mo string names.  start -> '^n' | '^[nN]'', end -> 'mo$'
let newValue=reg.exec(value);
return newValue; }})

console.log(ar);

//reduce method -> we can do some manipulation and also we can merge the two different objects

let arvalue = arr.reduce((sum, currValue) => {
  return sum+currValue;
},0);//here if am not giving also by default it'll take as zero(0)
console.log(arvalue);

/*-------------------------------------------------------------------------------------------------------------------------------------------*/
/*
   'this' keyword will refer => method(a func inside object) -> object, function -> window, global(if u used inside node)
*/
//this keyword -> always refer to object. object it refers to will vary depending on how and where this is being called.
const Learn = {
  lang: 'JS',
  level: ['Basic','interMediate','Advanced'],
  haveUStarted: function(){
    console.log('I have started to learn '+ this.lang); // with use of 'this' keyword we can access the other properties of object also
  } 
}
Learn.haveUStarted();
function doAdd(){console.log(this);}//<ref *1> Object [global] because it's defined particular node
//If I try this in browser, window properties will be displayed
doAdd();

// const callThisinArrow = () => console.log(this); {} sometimes in arrow function also window properties will come.
// callThisinArrow();
const Learn1 = {
  lang: 'JS',
  level: ['Basic','interMediate','Advanced'],
  haveUStarted: ()=>{
    console.log('I have started to learn '+ this.lang); //here this.lang -> undefined => in arrow function we can't able to access the object properties.
}
}
Learn1.haveUStarted();

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//call, apply, bind 

//call -> call method used to borrow the function to use.
const val = {
  number1: 1,
  name: "Promo",
  print: function(city, state) {console.log('Hello '+ this.name + ' from ' + city + ', '+ state);}
}
val.print();
val.print.call({name:'Viji'}, "Pattiveeran Patti"); // first argu should reference of this keyword, second is func argument
val.print.call({name:'Mohana'}, "Aatur", "Salem"); // other argu can be passed in separted by commos.

//we can do this for separate func also
// const printRanks = () => {console.log("Ranks: "+ this.rank)}; -> print undefined for 'this.rank'. as earlier said, 'this' not work sometimes in arrow function
const printRanks = function(){console.log("Ranks: "+ this.rank)}; //5
printRanks.call({rank:5});






