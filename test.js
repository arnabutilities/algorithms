function sort (left,right){
    let sorted = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sorted.push(left.shift());
        } else sorted.push(right.shift())
    }
    while(left.length){
        sorted.push(left.shift());
    }
    while(right.length){
        sorted.push(right.shift());
    }
    return sorted;
}

function binarySearch(input, keyToSearch) {
    if(input.length === 1){
        if(input[0] === keyToSearch) return true;
        else return false;
    }
    let mid = Math.floor(input.length/2);
    let left = input.slice(0, mid);
    let right = input.slice(mid, input.length);
    if(keyToSearch >= input[mid]){
        return binarySearch(right, keyToSearch);
    } else {
        return binarySearch(left, keyToSearch);
    }
    return false;
}

function mergeSort(input){
    if(input.length === 1) return input;
    let mid = Math.floor(input.length/2);
    let left = input.slice(0, mid);
    let right = input.slice(mid, input.length);
    return sort(mergeSort(left),mergeSort(right));
}


// let data = [1, 4, 3, 11, 7, 20, 2];
// console.log(binarySearch(mergeSort(data), 7));

function convertToRoman(input){
    const periods = [
        ['M',1000],
        ['D', 500],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1]
    ];
    let roman = "";

    for(let i = 0; i< periods.length; i++){
        if(input >= periods[i][1]){
            let checker = parseInt(input / periods[i][1]);
            let remended = input % periods[i][1];
            for(let j = 0; j < checker; j++){
                roman+=periods[i][0];
            }
            if(remended){
                roman+=convertToRoman(remended);
            }
            break;
        }
    }
    return roman;
}

//console.log(convertToRoman(15));

const singletonProvider = (function singleton(props){
    let instance;
    function createInstance(){
       return new Object({...props, version:Math.floor(Math.random() * 10000)});
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = Object.seal(createInstance());
            }
            return instance;
        }
    }
})({name:'arnab'});

// let obj1 = singletonProvider.getInstance();
// let obj2 = singletonProvider.getInstance();
// console.log(obj1);
// console.log(obj2);
// obj2.name = 'xyx';
// console.log(obj1);
// console.log(obj2);



// getter setter

let obj = {
    set name(val) {
        this.nameVal = val;
    },
    get name() {
       return this.nameVal;
    }
};

// a = []

// obj.name = a.length;
// console.log(obj.name);

// prototype javascript

function a() {
    let data = 0;
    this.getValue = function(){
        console.log(typeof data);
        console.log(data);
    }
};

a.prototype.setData = () => {
    console.log(typeof data);
    data = 1;
}
a.prototype.getData = () => {
    console.log(data);
}

let z = new a();

// z.setData();
// z.getData();
// z.getValue();

// promise

function myDelayedResponse(obj, delay, process = 0){
    let p;
   
    if(process > 0)
    myDelayedResponse(obj, delay, process--).then((res) =>{
        p = new Promise((resolve, error) => {
            setTimeout(() => {
                resolve(obj);
            },delay)
        });
    });
    else
    p = new Promise((resolve, error) => {
        setTimeout(() => {
            resolve(obj);
        },delay)
    });

    return p;
}

//myDelayedResponse("Hi This is a test", 1000, 2).then(console.log);

// anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(str) {
    let op = [];
    for(let e = 0; e < str.length; e++){
        let anagrams = {};
        let checker = str[e].split('');
        
        anagrams[str[e]] = 'TRUE';
        let filteredList = str;

        for(let i = 0; i < checker.length; i++){
            let charCheck = checker[i];
            filteredList = filteredList.filter((e) => e.indexOf(charCheck) > -1);
        }
        op.push(filteredList);
    }
    return op;
};

Input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// console.log(groupAnagrams(Input));

/**
 * There are n number of boxes available. few balls are placed in some of the boxes. find minimum number of moves to arrange them in a set of continuous non empty boxes.
 * @param {array} balls 
 */
function arrangeBalls(balls){
    let numberOfBalls = balls.length;
    let maxNumberOfMoves = balls.length - 1;
    let minMoves = maxNumberOfMoves;
    let reduced = 0;
    let sortedBalls = balls.sort((a,b) => {
        return a - b;
    } );

    // for(let i = 0; i< (numberOfBalls - moves); i++){
    //     let emptyBoxTillNext = (sortedBalls[i+1] - sortedBalls[i]) - 1;
    //     if(emptyBoxTillNext > 0){
    //         let availableItems = (numberOfBalls - moves) - (i+1);
    //         console.log(sortedBalls[i], emptyBoxTillNext, '('+numberOfBalls+' - '+moves+')'+' - ('+i+'+1)=', availableItems);
    //         moves+= (availableItems >= emptyBoxTillNext) ? emptyBoxTillNext : availableItems;
    //     }
    // }
    for(j = 0; j < sortedBalls.length - 1 ; j++){
       let moves = 0;
        for(let i = j; i< j + (numberOfBalls - moves); i++){
            // let index = (i+j) > sortedBalls.length ? (i+j)%sortedBalls.length : (i+j);
            let emptyBoxTillNext = (sortedBalls[i+1] - sortedBalls[i]) - 1;
            if(emptyBoxTillNext > 0){
                let availableItems = j + (numberOfBalls - moves) - (i+1);
                console.log(
                 '\n(i: '+i+', j: '+j+') Value: '+sortedBalls[i],
                 '\nAvailable Slots: '+emptyBoxTillNext,
                 '\nAvailable Items: '+j+' + ('+numberOfBalls+' - '+moves+')'+' - ('+i+'+1)=', availableItems);

                moves+= (availableItems >= emptyBoxTillNext) ? emptyBoxTillNext : availableItems;
            }
        }
        if(moves > 0 && moves < minMoves) minMoves = moves;
        console.log('Itr:'+j, moves );
    }


    console.log(balls, minMoves);

}

 //arrangeBalls([1,2,4, 7, 9])
// arrangeBalls([1,2000,14000, 7, 9]);
//arrangeBalls([4,7,12,2, 9]);
// arrangeBalls([4,7,8,12,2, 9]);

