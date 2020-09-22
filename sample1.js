// find set of 3 numbers of an Array , sum of which are maximum

let input1 = [1, 2, 22, 1, 4, 5, 23, 7];
let input2 = [1, 2, 22, -25, 5, 7, 23, -11];

const getMaxSum = (input, stackSize) => {
    let val = [], sum = 0, pointer = 0;
    while(pointer < input.length - stackSize){
        let newSum = input.slice(pointer, pointer+stackSize).reduce((prevVal, currentVal, index) => prevVal+currentVal);
        if(newSum > sum) {
            sum  = newSum;
            val = input.slice(pointer, pointer+stackSize);
        }
        pointer++;
    }
    return val;
} 

//merge sort
const sort = (left, right) => {
    let merged = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] <= right[0]) merged.push(left.shift());
        else merged.push(right.shift());
    }
    while (left.length > 0){
        merged.push(left.shift());
    }
    while (right.length > 0){
        merged.push(right.shift());
    }
    return merged;
}
const merge = (arr) => {
    if(arr.length < 2) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return sort(merge(left),merge(right));
}

// binary search
const search = (input, element) => {
    let mid  = Math.floor(input.length/2);
}



console.log(merge(input2,4));