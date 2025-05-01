/*
1.Airthematic Operators
+ --> Addition
- --> Subtraction
* --> Multiplication
/ --> Division
% --> Modulos
*/

a=20
b=30
console.log(a+b)
console.log(30-20)
console.log(4*3)
console.log(25/5)
console.log(25%6)
//++ increment operator
//- decrement operator
a=30
a++
console.log(a)
b=40
b--
console.log(b)

//2.comparison operators
x=10
y=10
//== === equal to operator
console.log(x==y)//true
console.log(x===y)//true
console.log(10=="10")//true (== checks valus not datatypes)
console.log(10==="10")//false (=== checks values and datatypes also)
//Greater than operator(>)
console.log(10>9)//true 10 grater than 9
console.log(10>11) //false 10 not grater than 11
//greater than or equal  operator(>=)
console.log(10>=10)//true 
console.log(10>=11)//false
//smaller than operator
console.log(10<12)//true
console.log(12<10)//false
//smaller than or equal operator
console.log(10<=10)// true
console.log(10<=11)//true
console.log(14<=12)//false
//not equal to Operator(!=) 
//here true is false, false is true
console.log((10!=10))//false
console.log((10!=11))//true

/*
3.Logical operators
1.and(&&)
2.or(||)
3.not(!)
*/
/* 
3.Logical Operators
1.AND(&&) if both conditions are true then only result is true
2.OR(||) if one condition is true then the result is true
3.NOT(!) if  the condition is true then result is false,if condition false then  result is true
*/
console.log((2==2)&&(4>3))//true both conditions are true
console.log((2==="2")&&(10==10))//false first condition is false
console.log((20>10)&&(30>=40)) // false second condition is false
console.log((10>=10)&&(10>11)) // false both conditions are false
 
console.log((5!=6)||("MOHAN"=="MOHAN")) //true both conditions are true
console.log((5==6)||("MOHAN"==3))//false both  condition is false 
console.log((5==6)||('mohan'=='mohan')) //true second condition is true
console.log((5>4)||(10>20))// true first condition is true

console.log(!(2==2))// false 
console.log(!(2==="2"))//true

/* 
4.Assignment Operators(to assign values)
  =, +=,-=,*=,/=,%=
*/
x=20 //=
console.log(x+=10)// 30 --x=x+10
console.log(x-=10)// 20 --x=x-10
console.log(x*=10)// 200 --x=x*10
console.log(x/=10)// 20  --x=x/10
console.log(x%=10)//0  -- x=x%10

/*
5.Conditional Operator(ternery Operator)
 syntax: condition?value1:vcalue2
 if condition is true value 1 is printed
 if condition is false value 2 is printed
 */
x=40
y=50
z=(12>10)?x:y
console.log(z)// 40 condition is true 
