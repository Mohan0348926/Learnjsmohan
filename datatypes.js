//Datatypes
//Primitive Data Types
//Non primitive Data types
 /*Primitive Data types
1.Number
2.String
3.boolean
4.undefined
5.Null
*/
//1.Number
a=1 //number
b=1.2 //number
console.log(a)//1
console.log(b)//1.2
console.log(typeof a)//number
console.log(typeof b)//number
//2.String
// we can declare the string by using "",'',`` 
str='Mohan'
str2="MOhan"
str3=`Mohan`
console.log(str)//mohanm
console.log(str2)//mohan
console.log(str3)//mohan
console.log(typeof str)//string
console.log(typeof str2)//string
console.log(typeof str3)//string
//3.Boolean
x=true
y=false
console.log(x)//true
console.log(y)//true
console.log(typeof x)//boolean
console.log(typeof y)//boolean
//4.undifined
x=
y=undefined
console.log(x)//undefined
console.log(y)//undefined
console.log(typeof x)//undefined
console.log(typeof y)//undefined
//5.null
x=null
console.log(x)
console.log(typeof x)//object

//non primitive data types
//1.Arrays
//2.Objects
//3.Regular Expressoions
/* 1.Arrays
 Arrays are declared by square brakets[]
 arrays are group of elements
 return type is object
 */
 a=['mohan','kumar','nishu','pandu','praveen']//string array
 console.log(a)//[ 'mohan', 'kumar', 'nishu', 'pandu', 'praveen' ]
 console.log(typeof a)// Object
 b=['Mohan','kumar',true,12,undefined,null]//mixed array
 console.log(b)//[ 'Mohan', 'kumar', true, 12, undefined, null ]
 console.log(typeof a)//object

 //2.Objects
 // objectname = {

//     propertyname : propertyvalue
 car={
    name:'BMW',
    color:'Black',
    length:'5meter',
    width:'2meter'
 }
 console.log(car)//{ name: 'BMW', color: 'Black', length: '5meter', width: '2meter' }
 console.log(car.name)//BMW
 console.log(typeof car)// object
 console.log( typeof car.name) //string

 //Regular Expressions
 const regex = /pattern/i;
console.log(regex)
/*flags
g: Global search (find all matches).

i: Case-insensitive search.

m: Multi-line search.

u: Unicode; treat pattern as a sequence of Unicode code points.

s: Allows . to match newline characters.

y: Sticky; matches only from the last index position.

//methods
 
test(): Tests for a match in a string. Returns true or false.

exec(): Executes a search for a match in a string. Returns an array of information or null.
*/
//test()
 regexp = /hello/i;
console.log(regexp.test('Hello World')); // Output: true
//match()
 text = 'The rain in SPAIN stays mainly in the plain';
 matches = text.match(/ain/gi);
console.log(matches); // Output: ['ain', 'AIN', 'ain', 'ain']
//Replace()
 text = 'Visit Microsoft!';
 newText = text.replace(/microsoft/i, 'W3Schools');
console.log(newText); // Output: 'Visit W3Schools!'
//split()
 text = 'apple, banana, cherry';
 fruits = text.split(/,\s*/);
console.log(fruits); // Output: ['apple', 'banana', 'cherry']


