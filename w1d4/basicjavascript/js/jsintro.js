/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}




/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

/*Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/
function isVowel(x) {
    return ("aeiouAEIOU".indexOf(x) != -1);

}

/*Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
        */
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function multiply(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}

/* Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
*/
function reverse(str) {
    return str.split("").reverse().join("");
}
/*Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*/
function findLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
}
/*Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*/
function filterLongWords(arr, k) {
    let longestArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (k < arr[i].length) {
            longestArr.push(arr[i]);
        }
    }
    return longestArr;
}

const a = [1, 3, 5, 3, 3];
document.writeln("array a: " + a + "<br/>");

/*multiply each element by 10; */
function multiply10(n) {
    return n * 10;
}
const x = a.map(multiply10)
document.writeln("multiply each element by 10 with map: " + x + "<br/>");

/* return array with all elements equal to 3; */
const equal3elements = a.filter(function (elem, i, a) {
    return elem == 3;
});
document.writeln("return array with all elements equal to 3 with filter: " + equal3elements + "<br/>")

/*return the product of all elements;*/
function product(a, b) {
    return a * b;
}
const produceElements = a.reduce(product);
document.writeln("return the product of all elements with reduce: " + produceElements + "<br/>")


const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length
    && Object.keys(o1).every(p => o1[p] === o2[p]);

   
function myFunctionTestForArray(expected, found) {
const result= objectsEqual(expected, found)
     if (result==true) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of isVowel(f) is false" + myFunctionTest(false, isVowel("f")));
console.log("Expected output of sum([1,2,3,4]) is 10" + myFunctionTest(10, sum([1, 2, 3, 4])));
console.log("Expected output of multiply([1,2,3,4])  is 24" + myFunctionTest(24, multiply([1, 2, 3, 4])));
console.log("Expected output of reverse is 'ratset gaj'" + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of (hi, hello, wonderful) is wonderful" + myFunctionTest("wonderful", findLongestWord(["hi", "hello", "wonderful"])))
console.log("Expected output of filterLongWords([hello, javascript, html, css], 4) is [hello, javascript]" + myFunctionTestForArray(["hello", "javascript"], filterLongWords(["hello", "javascript", "html", "css"], 4)));
