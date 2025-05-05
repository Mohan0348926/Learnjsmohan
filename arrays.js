// declare a array
arr= new Array()
console.log(arr)
arr1=[]// empty array
console.log(arr1) //[]

arr2=["Mohan","Thimmarju","Pandu","Narendra"]//string arrry
console.log(arr2)//[ 'Mohan', 'Thimmarju', 'Pandu', 'Narendra' ]
arr3=[1,5,10,30] // number array
console.log(arr3)//[ 1, 5, 10, 30 ]
arr4=[1,true,"Mohan"]//mixed array
console.log(arr4)

/* lenght method
  returns the count the elements in the array
  */
 arr5=['Mohan','pandu','pavan','Girish','Narendra']
 console.log(arr5.length)//5

/*accesing elements by indexing
*/
cities=['Bengaluru','Hydrabad','Chennai','Noida']
console.log(cities[1]) //Hydrabad
console.log(cities[0]) //Bengaluru

/*push()
 Adding elements in the end
 */
fruits = ["apple", "banana","kiwi"];
fruits.push("orange");
fruits.push("muskmelon");
console.log(fruits); // ["apple", "banana","kiwi","orange","muskmelon"]

/*pop()
 remove the elemnts at the end
 */
fruits1= ["apple", "banana","kiwi"];
fruits1.pop(); // [ 'apple', 'banana' ]
fruits1.pop();// [ 'apple' ]
console.log(fruits1);
/* unshift()
  adding elements from the biginning
  */
Names=['Mohan','Narendra']
Names.unshift('Nishu')// [ 'Nishu', 'Mohan', 'Narendra' ]
Names.unshift('Harish') // [ 'Harish', 'Nishu', 'Mohan', 'Narendra' ]
console.log(Names)

/* shift()
  Remove elements from the begining
  */
  Names=['Mohan','Narendra']
  Names.shift()
  //Names.shift() 
  console.log(Names)

  /* concat()
    joining two or more arrays
    */
 arr=['Mohan']
 arr1=['kumar']
 arr2=['Nagendrappa']
 arr3=arr+arr1 //it returns in string 
 arr4=arr.concat(arr1) //it returns in array
 arr5=arr2.concat(arr,arr1)
 console.log(arr3)
 console.log(arr4)
 console.log(arr5)
 //convert array to string
 arr=["my", "name","is","mohankumar"]
 str= arr.join("") //mynameismohankumar
 str= arr.join(" ") //my name is mohankumar
 console.log(str)
  
 //conver string  to array 
 str="my nameis mohan kumar"
 //arr=str.split("")
 arr=str.split(" ")
 console.log(arr)

 //change the elements of array
 arr=['raju','mohan','arjun','darshan']
 console.log(arr[2]='Gopi')
 console.log(arr)


  //IndexOf()
arr=['raju','mohan','arjun','darshan']
console.log(arr.indexOf('raju'))

//Includes()
arr=['raju','mohan','arjun','darshan']
console.log(arr.includes("raju"))

//sort()
arr=['Raju','mohan','Arjun','darshan']
console.log(arr.sort())

arr=[10,30,23,12,8,74]
console.log(arr.sort())//[ 10, 12, 23, 30, 74, 8 ]

//reverse a array
arr=[10,30,23,12,8,74]
console.log(arr.sort().reverse())//[ 8, 74, 30, 23, 12, 10 ]
// reverse a string
str='my name is mohan'
//revstr=str.split("").reverse().join("")//nahom si eman ym
revstr=str.split(" ").reverse().join(" ") //mohan is name my
console.log(revstr)


/*slice()
 it create a new  array from then existing array
 array.slice(start, end)

 */
fruits=['Mango','Ornge','Banana','Apple']
console.log(fruits) //[ 'Mango', 'Ornge', 'Banana', 'Apple' ]
slicefruits=fruits.slice(1)
console.log(slicefruits)//[ 'Ornge', 'Banana', 'Apple' ]
console.log(fruits)
/*splice()
 it  add new elements in a array
 and remove the elements in  a array
 array.splice(start, deleteCount, item1, item2, ...)
// */
fruits=['Mango','Orange','Banana','Apple']
console.log(fruits) //[ 'Mango', 'Ornge', 'Banana', 'Apple' ]
splicefruits=fruits.splice(2,1,'kiwi','Apple')//2 is the add from 2 nd index and 0 is for how many elements delete from 2nd index
console.log(splicefruits)//[ 'Banana' ]
console.log(fruits)//[ 'Mango', 'Orange', 'kiwi', 'Apple', 'Apple' ]
/* map
array.map(callback(currentValue, index, array))
*/
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
/* reduce()
Executes a reducer function on each element of the array, resulting in a single output value.
*/
const nums1 = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
/*
filter
Creates a new array with all elements that pass the test implemented by the provided function.
*/
const nums2 = [1, 2, 3, 4, 5];
const evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
