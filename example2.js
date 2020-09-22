
// compare 2 objects
let compareObject = (obj1 , obj2) => {
    let keys = Object.keys(obj1);
    let newKeys = keys.filter((key) => {
        if(typeof (obj1[key]) === 'object') {
            if(typeof obj2[key] === 'object') return compareObject(obj1[key], obj2[key]);
            else return false;
        } else {
            if(obj1[key] !== obj2[key]) return false;
        }
        return true;
    });
    return keys.length === newKeys.length;
}

// example
// console.log(compareObject({
//     name: {
//         name: "y",
//         age: 20
//     },
//     age: 21,
//     address: "xx"
// }, {
//     name: {
//         name: "y",
//         age: 20
//     },
//     address: "xx",
//     age: 21
// }));


// sorting objects implemented merge-sort algorithm
let getNamesapceValue = (obj, namespace) => {
    let path = namespace.split(".");
    let val = path.length == 1 ? obj[key]: path.reduce((prevNext, key, index) => {
        obj = obj[key];
        return obj;
    },0);
    return val;
} 
let compares = (obj1, obj2, namespace) => {
    if(obj1[namespace] <= obj2[namespace]) return true;
    else return false;
}
let sort = (left, right, namespace) => {
    let sorted = [];
    while (left.length > 0 && right.length > 0){
        if( getNamesapceValue(left[0], namespace) <= getNamesapceValue(right[0], namespace)){
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    while (left.length > 0){
        sorted.push(left.shift());
    }
    while (right.length > 0){
        sorted.push(right.shift());
    }
    return sorted;
}
let mergeSortObjects = (inputArray, sortFieldNamespace) => {
    if(inputArray.length < 2) return inputArray;
    let mid = Math.floor(inputArray.length / 2);
    let left = inputArray.slice(0,mid);
    let right = inputArray.slice(mid, inputArray.length);
    return sort(mergeSortObjects(left, sortFieldNamespace), mergeSortObjects(right, sortFieldNamespace), sortFieldNamespace);
}

let input = [
    {name: 'arnab', details:{ age: 1}},
    {name: 'arnab', details:{age: 4}},
    {name: 'arnab', details:{age: 3}},
    {name: 'arnab', details:{age: 17}},
    {name: 'arnab', details:{age: 5}}
];
let input1 = [
    1, 2, 5, 6, 3, 11, 9
];

console.log(mergeSortObjects(input, "details.age"));


