
// TASK 1:

// Create a function that should receive an array, and return an array in reverse order. Result should be stored in a variable

// SOLUTION

var numbers = [1, 2, 3, 4, 5];


var arr = function(array) {
    
    var newArray = [];

    for(i = 0; i < array.length; i++) {
        newArray[i] = array[array.length - i - 1];
    }
    return newArray;
}

console.log(arr(numbers));

// var a = arr(numbers);
// console.log(a);

// TASK 2: 

// Create a function that should receive parameter of any type, and console log the type of received data

// SOLUTION

function dataType(data) {
    console.log(typeof data);
}

dataType('Something');
dataType(9);
dataType(true);
dataType({name: 'John'});

// TASK 3: 

// Create a function that should receive an array of at least five names, and return the length of the longest name in the array (hint - you can get the length of an string the same way as for array). Result should be stored in a variable

// SOLUTION

var names = ['John', 'Mike', 'Ann', 'Jonas', 'Jo'];

var nameLength = function(firstNames) {
    var longestName = [];
    longestName = firstNames[0];

    for (i = 0; i < firstNames.length; i++) {
        if (firstNames[i].length < firstNames[i + 1].length) {
            longestName = firstNames[i + 1];
        }
    }
    
    return longestName.length;
}

console.log(nameLength(['John', 'Mike', 'Ann', 'Jonas', 'Jo']));






// TASK 4: 

// Create a function that should receive an array of numbers, find the second lowest and second greatest number, and console log result

// TASK 5:

// Create two functions. First one should receive two parameters, an array of numbers, and a single number. Then it should call the second function, and pass the same array and number into it. The second function should, based on an array and number provided, find all numbers in an array which are bigger then a provided number, and create an array of those numbers. Then it should console log result.

// TASK 6:

// Create three functions. 

// First one should receive an array and return the lowest number in the array.
// Second one should receive an array and return the highest number if an array.

// Third function should receive first two functions, and should multiply the result of the first function with the result of the second function. Then it should console log the result.

// TASK 7:

// Create a function that should receive an array and the second function.

// Array should be:

// [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]

// After array is received you should find all numbers from array which are unique, and create a new array out of them.

// Then, the second function that is passed in the first one should be called, and it should receive this new array we created. It should then delete the biggest number in the array, and console log the result (array).
