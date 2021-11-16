//Anonymous Functions
//1.odd Numbers
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let getOddNum = function () {
  let oddNumbers = array.filter((x) => x % 2 !== 0);
  console.log(oddNumbers);
};

getOddNum();

//2.Title case
let arr = ["ENgineer", "sandip", "sanap"];

let titleCase = function () {
  let lowerArr = arr.map((name) => name.toLowerCase());
  for (var i = 0; i < lowerArr.length; i++) {
    let newArr = lowerArr[i].charAt(0).toUpperCase() + lowerArr[i].slice(1);
    console.log(newArr);
  }
};
titleCase();

//3.add numbers in array:
let array = [1, 2, 3, 4, 5];
let addArrayNums = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
};

addArrayNums(array);

//4.Rotate array K times

var array = [1, 2, 3, 4, 5, 6, 7];

var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
  console.log(nums);
};

rotate(array, 1);

//5.Palindromes
const random = ["madam", 12321, "abcba", "acs"];
const newArr = [];

const palindrome = function (abc) {
  for (let i = 0; i < abc.length; i++) {
    let rev = String(abc[i]).split("").reverse().join("");
    if (rev == abc[i]) {
      newArr.push(abc[i]);
    }
  }
  console.log(newArr);
};
palindrome(random);

//6.Remove duplicates
const arr1 = [1, 2, 3, 3, "a", 1, "a", "b"];

const fun = function (duplicateArray) {
  let newArr = [...new Set(duplicateArray)];
  console.log(newArr);
};

fun(arr1);

// IIFE Function
//1.Odd NO
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (array) {
  let oddNumbers = arr.filter((number) => number % 2 !== 0);
  console.log(oddNumbers);
})(array);

//2.Title caps
let arr = ["ENgineer", "sandip", "sanap"];

(function () {
  let lowerArr = arr.map((name) => name.toLowerCase());
  for (var i = 0; i < lowerArr.length; i++) {
    let newArr = lowerArr[i].charAt(0).toUpperCase() + lowerArr[i].slice(1);
    console.log(newArr);
  }
})();

//3.sum of numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];

(function () {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  console.log(sum);
})();

//4.Palindromes
const random = ["madam", 12321, "abcba", "kaak"];
const newArr = [];

(function (abc) {
  for (let i = 0; i < abc.length; i++) {
    let rev = String(abc[i]).split("").reverse().join("");
    if (rev == abc[i]) {
      newArr.push(abc[i]);
    }
  }
  console.log(newArr);
})(random);

//5.remove duplicates

const arr1 = [1, 2, 3, 3, "a", 1, "a", "b"];

(function (duplicateArray) {
  let newArr = [...new Set(duplicateArray)];
  console.log(newArr);
})(arr1);

//6.Rotate an Array K times
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function () {
  return {
    rotate1: function (nums, k) {
      for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
      }
      console.log(nums);
    },
  };
})();

rotate.rotate1(array, 1);

//Arrow Function
//1. Title Case
let array = ["nEngineer", "sandip ", "sanap"];

let titleCase = (arr) => {
  let lowerArr = arr.map((name) => name.toLowerCase());
  for (var i = 0; i < lowerArr.length; i++) {
    let newArr = lowerArr[i].charAt(0).toUpperCase() + lowerArr[i].slice(1);
    console.log(newArr);
  }
};

titleCase(array);

//2.// add numbers in array:
const array = [1, 2, 3, 10];
let addArr = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
};

addArr(array);

//3.// Prime function
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);

//4.// Palindrome Array
const random = ["madam", 12321, "abcba", "acs"];
const newArr = [];
const palindrome = (abc) => {
  for (let i = 0; i < abc.length; i++) {
    let rev = String(abc[i]).split("").reverse().join("");
    if (rev == abc[i]) {
      newArr.push(abc[i]);
    }
  }
  console.log(newArr);
};
palindrome(random);
