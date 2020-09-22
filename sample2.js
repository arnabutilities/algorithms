const { rejects } = require("assert")

// chain pattern
const reducer = (initialValue) => {
    return new Promise((resolve, rejects) => {
        initialValue = resolve(initialValue);
    })
}

const reducer1 = (initialValue) => {
    return {
        then:(cb) => {
            initialValue = cb(initialValue);
            return reducer1(initialValue);
        }
    }
}

//reducer1(5).then((reduced) => reduced+10).then((reduced)=> reduced/5).then(reduced => console.log(reduced));

function hoistingTest(){
    console.log(c); // display ReferenceError: c is not defined 
    console.log(b); // display undefined 
    console.log(a); // display ReferenceError: Cannot access 'a' before initialization 
    let a = 10; 
    var b = 20; 
}

hoistingTest();