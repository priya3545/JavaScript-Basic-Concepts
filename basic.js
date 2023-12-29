//hoisting -> variable and function declartion are moved to top of the scope irrespective of where declared.

a=10;
console.log(a);
var a;   //hoisting -> variable declartion only not initalization

printPromoCode();

function printPromoCode(){
  value="Promo";
  console.log("hello", value);
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
var -> global and funciton scope,it's possible for hoisting
       we can re-declare and update */
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
let Share = 30;
//newShare =20; it'll throw error like already declared.
if(Share >0) {let Share =1; }// same variable name but here the scope are different.So,it'll treat as different variable.
console.log(Share);//30 here let scope variable can't accessible outside the scope.

/*
const -> blcok scope, not able update or re-declarable
         it should initalization at the time of delcare*/
         
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




