// kiiratás 
// let numberVar = 5; -> number
// let numberVar = 5,5; -> number
// let numberVarBigInt = 5n; -> BigInt
// console.log(typeof numberVar);
// let stringVar = "Pista"; -> string
// console.log(typeof stringVar);
// let booleanVar = true -> bool
// console.log(typeof booleanVar);
// let undefinedVar;
// console.log(typeof undefinedVar) -> undefined

// let nullVar = null;
// console.log(typeof nullVar); -> object
// Ez nem működik null esetén, szóval nem lehet így vizsgálni.
// console.log(nullVar instenceof null);
// console.log(nullVar === null) -> true

// let symbolVar1 = Symbol(1);
// let symbolVar2 = Symbol(1);
// console.log(typeof symbolVar1)
// console.log(symbolVar1 === symbolvar2)
// console.log(symbolVar1 == symbolvar2)

// adat bekérés
// let inputNumber = number(prompt('kérlek adj meg egy számot'))
// console.log(inputNumber);

// // [0-8]
// for (let i = 0; i < 9; i++) {
//     console.log(i);
// }

// //  i += 2 === i = i + 2
// for (let i = 1; i < 100; i+= 2) {
//     console.log(i);
// }

// While loop
// [0-8]
let i = 0;
while (i < 9) {
    console.log(i);
    i++
}
// [0-99]
i = 0
while (i < 100) {
    console.log(i);
    i++
}
1.
console.log("\n 1. feladat \n")
for (let i = 1; i < 21; i++) {
    console.log(i)
}
console.log("\n 2. feladat \n")
for (let i = 1; i < 31; i += 2) {
    console.log(i)
}
console.log("\n 3. feladat \n")
for (let i = 30; i < 101; i += 7) {
    console.log(i)
}
console.log("\n 4. feladat \n")
for (let i = 112; i > 2; i -= 11) {
    console.log(i)
}
console.log("\n 5. feladat \n")
for (let i = -90; i < 91; i += 15) {
    console.log(i)
}


console.log("\n 6. feladat \n")

for (let i = 10; i < 100; i++) {
    let egesz = Math.floor(i / 10);
    let tort = i % 10;
    if (egesz + tort === 10) {
        console.log(i)
    }
}

console.log("\n 7. feladat \n")
let n = 0;
while (n < 18) {
    for (let i = 0; i < 19; i++) {
        if (n + i === 18) { 
            console.log(`${n}---${i}`);
            n++;
        } 
    }
} 
// console.log("\n 12. feladat \n")
// let input;
// let str = " ";
// do{
//     input = Number.prompt("Hello: ")
//     str + " " + input
// }while(input != "0")
// console.log(`${str}`)

