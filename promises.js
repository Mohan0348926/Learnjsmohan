const p = new Promise((resolve, reject) => {
    let x = 1 + 1;
    if (x === 2) {
        resolve("Success");
    }
    else {
        reject("Fail");
    }
});

console.log(p)
 p.then((message) => console.log(message)) 

//promise functions

// Promise.all() - Returns a single Promise from a list of promises When all promises fulfill

// Promise.race() - Returns a single Promise from a list of promises When the faster promise settles

// Promise.any() - Returns a single Promise from a list of promises When any promise fulfills

// Promise.allSettled() - Returns a single Promise from a list of promises When all promises settle
const p1 = Promise.resolve('this is a promise 1');
//const p2 = Promise.reject("this is a promise 2"); 
const p3 = 150;
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, 'This is promise 3');
})
const p5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "This is promise 5");
})

//Promise.all([p1, p3, p4, p5]).then((values) => console.log(values)); // resolved values 
Promise.any([p1,p3,p4,p5]).then((values)=>console.log(values));

//Promise.allSettled([p1,p3]).then((values)=> console.log(values));
//Promise.race([p4,p5]).then((values)=>console.log(values));