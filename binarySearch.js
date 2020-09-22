let input = [1, 3, 5, 7, 8, 9];

function binarySearch(input, keyToSearch) {
    if (input.length > 1) {
        let mid = Math.floor(input.length / 2);
        if (keyToSearch >= input[mid]) {
            return binarySearch(input.slice(mid, input.length), keyToSearch)
        } else {
            return binarySearch(input.slice(0, mid), keyToSearch);
        }
    } else {
        if (input[0] === keyToSearch) return true;
        else return false;
    }
}

console.log(binarySearch(input, 5));
console.log(binarySearch(input, 6));