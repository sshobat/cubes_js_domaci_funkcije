
// TASK 1:

// Create a function that should receive an array, and return an array in reverse order. Result should be stored in a variable

// SOLUTION
(function() {

    var numbers = [1, 2, 3, 4, 5];

    var arr = function(array) {
        
        var newArray = [];
    
        for(i = 0; i < array.length; i++) {
            newArray[i] = array[array.length - i - 1];
        }
        return newArray;
    }
    
    //zar ne bi trebalo da je već storovano u varijabli, ako smo koristili function expression?

    var a = arr(numbers);
    console.log(a);

})();


// TASK 2: 

// Create a function that should receive parameter of any type, and console log the type of received data

// SOLUTION

(function() {

    function dataType(data) {
        console.log(typeof data);
    }
    
    dataType('Something');
    dataType(9);
    dataType(true);
    dataType({name: 'John'});
})();

// TASK 3: 

// Create a function that should receive an array of at least five names, and return the length of the longest name in the array (hint - you can get the length of an string the same way as for array). Result should be stored in a variable

// SOLUTION

(function() {

    var names = ['John', 'Mike', 'Ann', 'Jonas', 'Jo'];

    var longestNameLength = function(arr) {

        var nameLength = arr[0].length;
        
        for(var i = 0; i < arr.length; i++) {

            if(nameLength < arr[i].length) {
                nameLength = arr[i].length;
            }
        }

        return nameLength;
    }

    var name = longestNameLength(names);

    console.log(name);

})();

// TASK 4: 

// Create a function that should receive an array of numbers, find the second lowest and second greatest number, and console log result

(function() {

    var numbers = [4, 22, 33, 55, 89, 91, 1, 2000];

    function numComparation(arr) {
        var lowest = arr[0];
        var greatest = arr[0];
        var secondLowest = arr[0];
        var secondGreatest = arr[0];

        for(var i = 0; i < arr.length; i++) {

            if (lowest > arr[i]) {
                secondLowest = lowest;
                lowest = arr[i];
            }

            if (greatest < arr[i]) {
                secondGreatest = greatest;
                greatest = arr[i];
            }
        }

        console.log("The second greatest number in the array is " + secondGreatest, " and second lowest is " + secondLowest + ".");
    }

    numComparation(numbers);

})();


// TASK 5:

// Create two functions. First one should receive two parameters, an array of numbers, and a single number. Then it should call the second function, and pass the same array and number into it. The second function should, based on an array and number provided, find all numbers in an array which are bigger then a provided number, and create an array of those numbers. Then it should console log result.

(function() {

    var numbers = [4, 22, 33, 55, 89, 91, 1, 2000, 3, 2, 5, 6];
    var number = 5;

    function first(arr, num) {
        second(arr, num);
    }

    function second(array, singleNumber) {
        var bigerNumbers = [];

        for(var i = 0; i < array.length; i++) {
            if(array[i] > singleNumber) {
                bigerNumbers[bigerNumbers.length] = array[i];
            }
        }
        console.log(bigerNumbers)
    }

    first(numbers, number);

})();

// TASK 6:

// Create three functions. 

// First one should receive an array and return the lowest number in the array.
// Second one should receive an array and return the highest number if an array.

// Third function should receive first two functions, and should multiply the result of the first function with the result of the second function. Then it should console log the result.

(function() {

var numbers = [6000, 4, 22, 33, 55, 89, 91, 83, 2000, 3, 2, 5, 6, 5000];

function first(arr) {
    var lowestNum = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if(lowestNum > arr[i]) {
            lowestNum = arr[i];
        }
        
    }
    return lowestNum;
}

function second(arr) {
    var greatestNum = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if(greatestNum < arr[i]) {
            greatestNum = arr[i];
        }
        
    }
    return greatestNum;
}

function third(calculateLowest, calculateGreatest) {
    var product = calculateLowest(numbers) * calculateGreatest(numbers);
    
    console.log("The product of the lowest and the greatest number from the numbers arrays is: " + product);
}

third(first, second);

})();

// TASK 7:

// Create a function that should receive an array and the second function.

// Array should be:

// [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64]

// After array is received you should find all numbers from array which are unique, and create a new array out of them.

// Then, the second function that is passed in the first one should be called, and it should receive this new array we created. It should then delete the biggest number in the array, and console log the result (array).

(function() {

var numbers = [15, 35, 46, 23, 15, 17, 23, 24, 35, 12, 72, 64, 35, 22, 64];

function one(data, secondFn) {

    var uniqueNum = [];
    
    for (var i = 0; i < data.length; i++) {
        var v = true; //zašto mora da bude unutar petlje, a ne može pre petlje?
        for (var j = 0; j < data.length; j++) {
            if (i === j) {
                continue;
            } else if (data[i] === data[j]) {
                v = false;
                break;
            }
        }

        if (v) {
            uniqueNum[uniqueNum.length] = data[i];
        }

    }
    console.log(uniqueNum);

    secondFn(uniqueNum);
}

function two(arr) {

    var biggest = arr[0];

    for(i = 0; i < arr.length; i++) {
        if (biggest < arr[i]) {
            biggest = arr[i];
        }
    }
    
    delete arr[arr.indexOf(biggest)];

    console.log(arr)

}

one(numbers, two);

})();