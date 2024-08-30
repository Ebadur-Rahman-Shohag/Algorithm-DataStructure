//TODO:***************************Arrays Introduction*****************************************
const stringsArray = ["a", "b", "c", "d"];

// 4*4= 16 bytes of storage

//Access a value from an array
// console.log(stringsArray[2]); //O(1)

// push
stringsArray.push("e"); //O(1)

//pop
stringsArray.pop(); //O(1)

// unshift()-- insert a value
stringsArray.unshift("x"); //O(n)
/*
Why O(n) not O(1)?

Before unshift() the array was: ["a", "b", "c", "d"]
// index:                         0    1    2    3  
after unshift() the array is: ["x","a", "b", "c", "d"]
// index:                       0   1    2    3    4
we can clearly see that after adding 'x' in the begining of the array the indexes of the array changes. And for changing the indexes we have to iterate over all the element of the array. That is why the Big O is O(n) not O(1)
*/

//splice()
stringsArray.splice(2, 0, "alien"); //O(n/2)-------->O(n)

/*
Why O(n) not O(1)?

Before splice() the array was: ["x, "a", "b", "c", "d"]
// index:                        0   1    2    3    4
after splice() the array is: ["x","a", "alien", "b", "c", "d"]
// index:                      0   1      2      3    4    5
we can clearly see that after adding 'alien' in the middle of the array the indexes of the array changes. And for changing the indexes we have to iterate over half the element of the array. That is why the Big O is O(n) not O(1)
*/

console.log(stringsArray);

//TODO:******************************Static array vs Dynamic array********************************************

//***static Array

// Memory Allocation
// (1) Compile-Time Allocation: The memory for a static array is allocated at compile time, meaning the size of the array must be known before the program runs. The size is fixed and cannot be changed once the array is crated.
// (2) Contiguous Memory Block: Elements are stored in contiguous memory locations, Which allows for efficient indexing.

//Time Complexity
// (1) Access Time: O(1)
// (2) Insertion at a specific position: O(n)
// (3) Deletion: O(n)
// (4) Appending: Not applicable as the size is fixed.

// Drawbacks
// (1) Inflexibility: Wasted memory if the array is too large, or insufficient memory if the array is too small.
// (2) Memory Allocation Failure: On systems with limited memory, large static array may lead to memory allocation failures at compule-time.

// ***Dynamic Array

// Memory Allocation
// (1) Runtime Allocation: The size of a dynamic array can be determined during the program's execution. The array can grow or shrink as needed.
// (2) Contiguous Memory Block With Reallocation: Initially memory is allocated contiguously. If the array needs to grow beyond its current capacity, a larger block of memory is allocated, and the existing elements are copied to the new block.

//Time Complexity
// (1) Access Time: O(1)
// (2) Insertion at the End: O(1)
// (3)Insertion at a specific position: O(n)
// (4) Deletion: O(n)

// Drawbacks
// (1) Resizing Overhead: When the array grows, reallocation and copying elements can be expensive (O(n) time), especially if the array grows frequently.
// (2) Memory Waste: Dynamic arrays often allocate more memory than needed to accommodate future growth, leading to potential memory waste.

//Code Example

// Creating a static array with C++
// int arr[5] = {1,2,3,4,5}

// Creating a dynamic array with JavaScript
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
