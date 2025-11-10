// // 01 reverse a string
// // Demonstrates reversing strings using built-in methods and a helper function.
// const str1 = 'Ashish Pawar'
// // convert to lowercase, split into chars, reverse array, join back to string
// console.log(str1.toLowerCase().split('').reverse().join(''));
// // reverse while preserving original case
// console.log(str1.split('').reverse().join(''));

// function reverseString(str){
//     // split string into array of characters, reverse array and join back
//     return str.split('').reverse().join('')
// }
// console.log(reverseString('Rajat'));

// // -----------------------------------------------

// // 02 check palindrome
// // Check whether a string reads the same forwards and backwards.
// const str2 = 'madam'
// // create reversed version and compare
// const str2Palindrome = str2.split('').reverse().join('')
// console.log(str2 === str2.split('').reverse().join('')); // true if palindrome
// console.log(str2Palindrome);

// function palindrome(str){
//     // reverse the string and compare to original
//     let reverse = str.split('').reverse().join('')
//     return str === reverse
// }
// console.log(palindrome('madam'));

// // ------------------------------------------------

// // 03 Factorials
// // Iterative and recursive ways to compute factorial.
// let numb1 = 1
// // multiply down from 5 to 2 to compute 5!
// for (let i = 5; i > 1; i--) {
//     numb1 *= i
//     // console.log(numb1);
// }
// console.log(numb1); // prints iterative factorial result

// function factorial(n){
//     // base case: 0! is 1
//     if(n === 0) return 1
//     // recursive case: n! = n * (n-1)!
//     return n * factorial(n-1)
// }
// console.log(factorial(5)); // prints recursive factorial result

// // ------------------------------------------------

// // 04 check if a number is prime
// // Return true if num is prime, false otherwise.
// function isPrime(num){
//     if(num < 2) return false // 0 and 1 are not prime
//     // only need to test divisors up to sqrt(num)
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if(num % i === 0) return false // divisible => not prime
//     }
//     return true // no divisors found => prime
// }
// console.log(isPrime(11))

// // -----------------------------------------------

// // 05 Find the largest number in an array/list
// const arr1 = [12,13,23,56,44,4,55,12]
// // spread the array into Math.max to get the largest value
// const arrLargest = Math.max(...arr1)
// console.log(arrLargest);

// // -----------------------------------------------

// // 06 Sum of elements in an array
// const arr2 = [1,2,3,4,5,6]
// // use reduce to accumulate a running total (initial value 0)
// let sum = arr2.reduce((a, b)=> a + b, 0)
// console.log(sum);

// // -----------------------------------------------

// // 07 Find second largest element
// const arr3 = [10,30,20,60,40,50,80,90,70]
// // create a Set to remove duplicates, spread into array, sort descending
// let sorted = [...new Set(arr3)].sort((a,b)=>b-a)
// // second item in descending-sorted unique array is second largest
// console.log(sorted[1]);
// // also show ascending-sorted unique values
// console.log([...new Set(arr3)].sort((a,b)=>a-b));

// // -----------------------------------------------

// // 08 Count vowels in a string
// function countVowels(str){
//     // match returns array of vowels; use case-insensitive and global flags
//     // note: if no vowels, match returns null; current code assumes at least one vowel
//     return str.match(/[aeiou]/gi).length
// }
// console.log(countVowels('Ashish Pawar'))

// // -----------------------------------------------

// // 09 Fibonacci series up to n terms
// // Generates first n Fibonacci numbers starting from [0,1].
// function fibonacci(n){
//     let series = [0,1]
//     for (let i = 2; i < n; i++) {
//         // next term is sum of previous two terms
//         series.push(series[i-1] + series[i-2])
//     }
//     return series
// }
// console.log(fibonacci(10));

// // -----------------------------------------------

// // 10 Find duplicate elements in an array/list
// const arr4 = [1,3,2,5,6,1,3,2,3]
// // filter items whose first index is not the current index => duplicates
// let duplicates = arr4.filter((item, index) => arr4.indexOf(item) !== index)
// // use Set to remove repeated duplicate entries and show unique duplicates
// console.log([...new Set(duplicates)]);
// console.log([...new Set(duplicates)].sort((a,b)=>a-b));

// // -----------------------------------------------

// // 11 Find the frequency of each element in an array
// const arr5 = [1,1,2,2,2,2,3,3,3,3,3,3,3,3,4]
// // build an object mapping value -> count
// let freq = {}
// arr5.forEach(num => freq[num] = (freq[num] || 0) + 1)
// console.log(freq); // e.g. { '1': 2, '2': 4, '3': 8, '4': 1 }

// // -----------------------------------------------

// // 12 Remove duplicates from an array
// const arr6 = [1,2,5,3,5,2,6,5,4,4,4]
// // use Set to de-duplicate and sort the result
// let unique = [...new Set(arr6)].sort()
// console.log(unique);

// // -----------------------------------------------

// // 13 Sort an array in ascending order
// const arr7 = [5, 3,9,6, 8, 1]
// // sort with numeric comparator to avoid lexicographic sort
// arr7.sort((a,b)=>a-b)
// console.log(arr7);

// // -----------------------------------------------

// // 14 Linear search (Search an element in array and return index)
// // Returns index of target or -1 if not found.
// function linearSearch(arr, target){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === target) return i
//     }
//     return -1
// }
// console.log(linearSearch([2,1,3,5], 1));

// // -----------------------------------------------

// // 15 Find missing number from sequence 1 to n
// // Use formula sum(1..n) = n*(n+1)/2 and subtract actual sum to find the missing value.
// const arr8 = [1,2,3,5]
// let n = 5
// let missing = (n * (n + 1)) / 2 - arr8.reduce((a,b)=>a+b, 0)
// console.log(missing);

// // -----------------------------------------------

// console.log(fn)
// var fn = function(){
//     console.log('hi');
    
// }
// console.log(typeof fn);
