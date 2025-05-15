/* loops are 3 types
1.for loop
2. while loop
3. do while
*/

// for( initialization ; condition ; increment/decrement){
//  statement
//  }


for(let i=10 ; i<0; i--){

    console.log(i)
    console.log("Raju")
    console.log("Deekshit")
    console.log("Darshan")
    console.log("Arjun")

}
//2.while
// while (condition) {
//statements
// }


// i = 11

// while (i<10){

//     console.log(i)
//     console.log("Raju")
//     console.log("Deekshit")

//     i++
// }

//3.do while
// do{


// }while (condition) {

// }


i = 11

do {

    console.log(i)
    console.log("Raju")
    console.log("Deekshit")

    i++
} while (i < 10)

//for and while -if the condition is failing then it wont execute even single 

// do while 

// doent matter pass or fail  at least one time it will execute the block of code 

//es6

 car = {
    name:"BMW",
    color:"Black",
    type:"Electric"
}

 for(let ele in car){
    console.log(car[ele])
 }

// arr = []

// for of 

// array.forEach(element => {
    
// });

 arr = ["raju", "arjun", "xyz"]
 arr.forEach(element => {
 console.log(arr)
    
  });
