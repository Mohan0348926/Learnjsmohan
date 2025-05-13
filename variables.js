 //1.Var
 //2.let
 //3.const
 /* var
 
// var - variable global scope 
// let and const - Blocked scope 

 // we can access any where 
 //it is a global scope
 //declare different value for same variable
 */

 var x=123
{
    x='different value for same variable'
    console.log(x)
    {
        x='123'
    }
}
console.log(x)//123

// reassign the different value is possible for let

if(true){

   let Name = "Mohan"

   Name = "Kumar"

   console.log(Name)

}
reassign the different value is possible with var and let 
//reassign the different value is not possible with const

const
 const  number = "48569869"
{
   const number = "678954697"
   const number="2y378"
   console.log(number)
}
 console.log(number)

//let
 let a=1
 {
    let a =2
      let a=4
    console.log(a)
 }
 console.log(a)