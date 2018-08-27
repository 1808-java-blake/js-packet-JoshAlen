// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.

function fib(n){
 if(n <= 1){ return 1; }
 return fib(n-1) + fib(n-2);
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

function bubbleSort(numArray){
  let flag;
  do {
    flag = false;
    for(let i = 0; i < numArray.length; i++){
      if((numArray[i] && numArray[i + 1]) && (numArray[i] > numArray[i + 1])){
        let temp = numArray[i];
        numArray[i] = numArray[i + 1];
        numArray[i + 1] = temp;
        flag = true;
      }
    }
  } while(flag)
  return numArray;
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr){
  return someStr.split('').reverse().join('');
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function factorial(someNum){
  if(someNum > 0){
    return (someNum * factorial(someNum -1));
  }
  return 1;
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

function substring(someStr, length, offset){
        let temp = someStr.slice(offset, offset + length + 1);
        if(temp === ""){
            alert("length or offset is out of range. Try again!");
        }
        return temp;
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

function isEven(someNum){
  return "02468".includes(someNum.toString().slice(-1));
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

function isPalindrome(someStr){
    let temp = someStr.split("").reverse().join("");
    temp.replace(" ", "");
    if(someStr === temp){
        return true;
    }
    return false;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function printShape(shape, height, character){
  
  let str = "\n";
  
  switch(shape){
      case "triangle":
      case "Triangle":
          
          for(let i = 1; i <= height; i++){
              str = str + character.repeat(i) + "\n";
          }
          return str;

      case "diamond":
      case "Diamond":
          let middle = Math.ceil(height / 2);
          console.log(" ".repeat(middle) + character);

          for(let i = 1; i < middle * 2 - 1; i += 2){
            let whiteSpace = " ".repeat((height - (i - 1)) / 2 )
            let str = whiteSpace + character.repeat(i + 2) + whiteSpace;
            console.log(str);
           }

          for(let i = middle * 2 - 1; i > 2; i -=2){
            let whiteSpace = " ".repeat((height - (i - 1)) / 2 )
            let str = whiteSpace + character.repeat(i - 2) + whiteSpace;
            console.log("  " + str);
          }
          
          break;
      default:
          for(let i = 0; i < height; i++){
              console.log(character.repeat(height));
          }
  }
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function traverseObject(someObj){
    let str = "\n";
    for(let key in someObj){
      str += `${key}: ${someObj[key]} \n`;
    }
    return str;
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function deleteElement(someArr){
  console.log(someArr.length);
  someArr[2] = undefined;
  console.log(someArr.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

function spliceElement(someArr){
  console.log(someArr.length);
  someArr.splice(2, 1);
  console.log(someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
//  var john = new Person("John", 30);

function Person(name, age){
  this.name = name;
  this.age = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
//  var john = getPerson("John", 30);

function getPerson(name, age){
  return {name: name, age: age};
}