//******************************Runtime of the code************************
/*
const nemo = ["nemo"];
const everyone = [
    "dory",
    "bruce",
    "marlin",
    "nemo",
    "gill",
    "bloat",
    "nigel",
    "squirt",
    "darla",
    "hank",
];

const large = new Array(1000).fill("nemo");
// console.log(large);

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log(`Found Nemo!`);
        }
    }
    let t1 = performance.now();
    console.log(`Call to findNemo tooK ${t1 - t0} milliseconds`);
}

findNemo(large);
*/

//***************************************O(n)****************************************
/*
const nemo = ["nemo"];
const everyone = [
    "dory",
    "bruce",
    "marlin",
    "nemo",
    "gill",
    "bloat",
    "nigel",
    "squirt",
    "darla",
    "hank",
];

const large = new Array(1000).fill("nemo");

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "nemo") {
            console.log(`Found Nemo!`);
        }
    }
}

findNemo(large); //O(n)-----> Linear Time. Here n is the input. As the input grows the oparations grows proportionally.
*/

//***********************************O(1)**************************************
/*
const boxes = [1, 2, 3, 4, 5, 6];

function firstTwoBoxes() {
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)
}

firstTwoBoxes(boxes); //O(2) or O(1)------->Constant Time. As the input grows the operations remain constant.
*/

//***************************Big-O Calculation Exercise-1***********************************
/*
function funChallengeOne(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) {//O(n)
        anotherFunction(); //O(n)
        let stranger = true; //O(n)
        a++; //O(n)
    }
    return a; //O(1)
}
funChallenge(); //O(3+4n) or O(n)
*/

//***************************Big-O Calculation Exercise-2***********************************
/*
function funChallengeTwo(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)

  for (let i = 0; i < input; i++) {//O(n)
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)
  }

  for (let j = 0; j < input; j++) {//O(n)
    let p = j * 2; //O(n)
    let q = j * 4; //O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}
funChallengeTwo(); // O(4+7n) or O(n)
*/

//*********************BIG O Rule Book******************************

//Rule-1: Worst Case
//Rule-2: Remove Constant
//Rule-3: Different Terms Of Inputs
//Rule-4: Drop Non Dominants

//*************************************Rule No-1: Worst Case*****************************

//In the everyone array the nemo word might be the first word. In this case the BIG O is O(1). Because there is break keyword after the console.log(). But the first rule is we always care about what is the worst case. In this case we have to assume that nemo is the last word of the array. So, the BIG O is O(n).
/*
const everyone = [
    "dory",
    "bruce",
    "marlin",
    "dory",
    "gill",
    "bloat",
    "nigel",
    "squirt",
    "darla",
    "nemo",
];

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        // console.log("Running");
        if (array[i] === "nemo") {
            console.log(`Found Nemo!`);
            break;
        }
    }
}

findNemo(everyone);
*/

//*********************************************Rule-2: Remove Constant****************************
//By following this rules we have remove all of the constant.
/*
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    //printing the first item
    console.log(items[0]); //O(1)

    //printing the first half
    let middleIndex = Math.floor(items.length / 2);
    let index = 0;

    while (index < middleIndex) {  //O(n/2)
        console.log(items[index]);
        index++;
    }

    //saying hi 100 times
    for (let i = 1; i <= 100; i++) { //O(100)
        console.log("hi");
    }
}

printFirstItemThenFirstHalfThenSayHi100Times([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) //Big O(1+n/2+100)-------->O(n)
*/

//*********************************************Rule-3: Different Terms Of Inputs****************************
//In this case we can see there are two for loops one after another. So normally we would think that the BIG O is O(n+n)----->O(2n)------>O(n). But this is not the right BIG O. Just becasue there are two for loops one after another doesn't mean that they are looping over the same items. In this case first loops is looping over boxes1 array and the second loop is looping over boxes2 array. They both are different array. So, the BIG O is O(m+n).
/*
function compressBoxesTwice(boxes1, boxes2) {
  boxes1.forEach((box) => {
    //O(m)
    console.log(box);
  });

  boxes2.forEach((box) => {
    //O(n)
    console.log(box);
  });
}
compressBoxesTwice(["box1"], ["box2"]); //BIG O(m+n)
*/

//*******************************O(n^2) Quadratic*************************************
//if we see two for loops one after another we use addition ex: O(n+n)----------> O(2n). But if there are two nested for loops we use multiplication instead of addition ex: O(n*n)-----> O(n^2)
//Log all pairs of the array
/*
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(array) {
  for (let i = 0; i < boxes.length; i++) {
    //O(n)
    for (let j = 0; j < boxes.length; j++) {
      //O(n)
      console.log(boxes[i], boxes[j]);
    }
  }
}
logAllPairsOfArray([boxes]); //O(n*n)-------------->O(n^2)
*/

//*********************************************Rule-4: Drop Non Dominants****************************
//By following this rule we remove the non dominant. If we see the code below we can see that the final BIG O is O(n+n^2). But we remove the n and take the n^2. Because if we assume n=5, then the value of n is 5, but the value of n^2 is 25. So, here n is non dominant. That is why we remove n and take the n^2.
/*
function printAllNumbersThenAllPairsSum(array) {
  // print all numbers
  array.forEach((item) => {
    //O(n)
    console.log(item);
  });

  //   print all pairs sum
  console.log("----------------------------------------------");
  array.forEach((firstNumber) => {
    //O(n*n)------------>O(n^2)
    array.forEach((secondNumber) => {
      console.log(firstNumber + secondNumber);
    });
  });
}
printAllNumbersThenAllPairsSum([1, 2, 3, 4, 5]); //BIG O(n+n^2)------------->O(n^2)
*/