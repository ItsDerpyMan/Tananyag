//Array literal tombok:
let literalUresTomb = [];
let literalStringTomb = ['a', 'b', 'c'];
let literalNumberTomb = [1,2,3];
let literalBooleanNumber = [true, false, true];
let literalMixTomb = [true, 1, 'abc', [1, 'Alma'], {id: 1}];
console.log(literalUresTomb);
console.log(literalStringTomb);
console.log(literalNumberTomb);
console.log(literalBooleanNumber);
console.log(literalMixTomb);

//Array konstruktor
let array = new Array(3);
array.push(1);
console.log(array)

let fruits = ['Banana', 'Apple', 'Mango']
console.log(fruits)
fruits.unshift('kiwi')
fruits.shift('Tomato')
console.log(fruits)

let anotherFruits = fruits.shift()
console.log(anotherFruits)
console.log(fruits)

let AnotherAnotherFruit = fruits.pop()
console.log(AnotherAnotherFruit)
console.log(fruits)

let MyfavoriteGyumolcs = ['ZoldAlma', 'Kebab', 'GranatAlma']
MyfavoriteGyumolcs.splice(1, 0, 'ZoldAlma')
console.log(MyfavoriteGyumolcs)
MyfavoriteGyumolcs.splice(2,1, 'Kebab')
console.log(MyfavoriteGyumolcs)

let count = 0;
let arr = [];
do {
    let inp = prompt('Adj meg egy számot: ');
    onp = parseInt(inp)    
    arr.push(inp);
        count++
    
}while (count < 10)

let arraylenght = arr.length
//Sum
let sum = 0;
for (let n = 0; n < arraylenght; n++) {
    sum += arr[n];
}
console.log(sum)

//min
let min = 1000;
let minindex = 0;
for (let n = 0; n < arraylenght; n++) {
    if (arr[n] < min) {
        min = arr[n]
        minindex = n
    }
}
console.log(min)
//max
let max = 0;
let maxindex = 0;
for (let n = 0; n < arraylenght; n++) {
    if (arr[n] > max) {
        max = arr[n]
        maxindex = n
    }
}
console.log(max)
//avg
let avg = sum / arraylenght;
//Smallest and the highest number square sum 
let Agyfasz = Math.pow(arr[minindex]) + Math.pow(arr[maxindex])
console.log(Agyfasz)