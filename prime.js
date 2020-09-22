// logic here is first get all prime numbers till range end.
// one non prime number is divisible by other smaller prime numbers.

const getPrime = (rangeStart, rangeEnd) => {
    let getPrimesFromNumber = [], checker = 2;
    
    while(checker <= rangeEnd){

        if(!findDivisible(checker,[...getPrimesFromNumber])){
            getPrimesFromNumber.push(checker);
        }
        checker++;
    }
    return getPrimesFromNumber.filter(number => number > rangeStart);
}

function findDivisible(n, arr){
    while(arr.length > 0){
        if(n % arr.pop() === 0){
            return true;
        }
    }
    return false;
}

console.log(getPrime(200, 300));
