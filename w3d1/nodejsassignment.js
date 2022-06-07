function findOddNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if ((i % 2) != 0) {
            result.push(array[i]);
        }
    }
    return result;
};

function findEvenNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) == 0) {
            result.push(array[i]);
        }
    }
    return result;
};

function findDivisible4(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 4) == 0) {
            result.push(array[i]);
        }
    }
    return result;
};

function findOddNumbersSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) != 0) {
            sum += array[i];
        }
    }
    return sum;
};

function findEvenNumbersSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 2) == 0) {
            sum += array[i];
        }
    }
    return sum;
};

function findDivisible4NumbersSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 4) == 0) {
            sum += array[i];
        }
    }
    return sum;
};

function findUniqueNumbers(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (result.indexOf(array[i]) == -1) {
            result.push(array[i])
        }
    }
    return result;
};

function findTypeOfArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(typeof arr[i]);
    }
    return result;
};

function destructureArray(array) {
    let result = {};
    for (let i = 0; i < array.length; i++) {
        result[typeof array[i] + i] = array[i];
    }
    return result;
};

function firstOddNumberIndex(arr) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) return i;
    }
};

function stringToArray(string) {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result.push(string.charAt(i));
    }
    return result;
};

function arrayToString(array) {
    let str = "";
    for (let i = 0; i < array.length; i++) {
        str += array[i];
    }
    return str;
};

function objectToArray(object) {
    let objentries = Object.entries(object);
    let objArr = [];
    for (let [key, value] of objentries) {
        let x;
        if (Array.isArray(value)) {
            value = value.reduce((accumulator, element) => {
                return accumulator += element;

            }, '');
            x = key + "" + value;
            objArr.push(x);
        }
        else if (typeof (value) == 'object') {
            value = convertObjectToArray(value)
            for (let y of value) {
                objArr.push(key + "" + y);
            }
        } else{
            x = key + "" + value;
            objArr.push(x);
        }
    }
    return objArr;
}


function minifyObject(array){
    let result = [];
    for(let item of array){
        for(let key in item){
            if(key == "a"){
                result.push({[key]:item[key]});
            }
        }
    }
    return result;
};

function findOldestPersonAge(array){
    let oldestAge = 0;
    for(let person of array){
        if(person.age > oldestAge){
            oldestAge = person.age;
            oldestName = person.name;
        }
    }
    return oldestAge;
};

function findYoungestPersonName(array){
    let youngestName = "";
    let youngestAge = 0;
    for(let person of array){
        if(person.age < youngestAge){
            youngestAge = person.age;
            youngestName = person.name;
        }
    }
    return youngestName;
};

function findBetween(array){
    for(let person of array){
        if(person.age >= 16 && person.age <=17){
            return person;
        }
    }
}


module.exports = {
    findOddNumbers: findOddNumbers,
    findEvenNumbers: findEvenNumbers,
    findDivisible4: findDivisible4,
    findOddNumbersSum: findOddNumbersSum,
    findEvenNumbersSum: findEvenNumbersSum,
    findDivisible4NumbersSum: findDivisible4NumbersSum,
    findUniqueNumbers: findUniqueNumbers,
    findTypeOfArray: findTypeOfArray,
    destructureArray: destructureArray,
    firstOddNumberIndex: firstOddNumberIndex,
    stringToArray: stringToArray,
    arrayToString: arrayToString,
    objectToArray: objectToArray,
    minifyObject:minifyObject,
    findOldestPersonAge:findOldestPersonAge,
    findYoungestPersonName:findYoungestPersonName,
    findBetween:findBetween
}