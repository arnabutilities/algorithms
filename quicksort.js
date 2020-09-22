let input = [5,1,11,23,17, 3];
function quicksort(arr){

    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    while(arr.length > 0){
        let element = arr.pop();
        if(element < pivot) {
            left.push(element);
        }
        else {
            right.push(element);
        }
    }
    return quicksort(left).concat(quicksort(right));
}

function sort(left, right){
    let merged = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] <= right[0]) merged.push(left.shift());
        else merged.push(right.shift());
    }

    while(right.length > 0){
        merged.push(right.shift())
    }
    while(left.length > 0){
        merged.push(left.shift())
    }
    return merged;
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle, arr.length);

    return sort(mergeSort(left), mergeSort(right));
}


console.log(mergeSort(input));
console.log(quicksort(input));