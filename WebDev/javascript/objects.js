let person = {
    name: "Jhon",
    age: 30,
    isStudent: false
};
person.height = 180
person.age = 32
delete person.f_color
person["f_color"] = "black"
console.log(person.name);
console.log(person["age"]);
let user = new Object();
user.name = "Elek"
user.age = 22
user.isStudent = true
console.log(user);
let newUser = {
    name: "Bob",
    greet: ()=>{
        console.log(`Hello, my name is ${newUser.name}`)
    }
}
newUser.greet();
for(let key in user){
    console.log(key)
}

for(let key in user){
    console.log(`${key} - ${user[key]}`);
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//Shallow copy
// let obj1 = {
//     name: "Jhon",
//     details: {age: 30, city:"Miskolc"}
// }
// console.log(obj1)
// console.log("---")
// let obj2 = Object.assign(obj1)
// obj2.age = 32;
// console.log(`Az első objektum:`, obj1)
// console.log(`Az első objektum:`, obj2)

// //Deep Copy
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.detail.age = 20;
// console.log(`Az első objektum`, obj1);
// console.log(`A másolt objektum`, obj2);

// // structuredClone()
// let obj2 = structuredClone(obj1)
// //Map
// let obj = {};
// let map = new Map();
// let keyObj = {id: 1};
// let keyFunc = ()=>{};
// let keyNum = 42;
// obj[keyObj] = "Object Value";
// map.set(keyObj, "Map value");
// console.log(obj["[object Object]"])
// console.log(map.get(keyObj))
// map.set(map.get[keyFunc])
// map.set(map.get[keyNum])

console.log("-----")
//Órai munka: email, név, telefon, város, születési év
// do{
nev = prompt("Add meg a neved: ")
szulev = prompt("Add meg a születési éved: ")
email = prompt("Add meg az emailed: ")
telefon = prompt("Add meg a telefonszámod: ")
varos = prompt("Add meg a városod nevét: ")
// let felhasznalo = {
//     name: nev,
//     birthyear: szulev,
//     email: email,
//     phone: telefon,
//     town: varos
// }
// end = prompt("Vége a hozzá adásnak ha nem ír ide semmit: ")
// }while(end !== "");
// adatbazis = []
// adatbazis.push(felhasznalo)
// console.log(adatbazis)

// console.log("---")
//fügvény

breaker = prompt("Leave blank to stop")

/**
 * Gets values and puts them into an array
 * @param {String} name Users name
 * @param {String} birthyear Users year of birth
 * @param {String} email Users email
 * @param {String} phone Users phone number
 * @param {String} town Useres hometown
 * @param {String} breaker Breaks if given empyt string as input
 * @returns All of the inputed users
 */
function userDatabase(name, birthyear, email, phone, town, breaker){
    database = [];
    do{
    name: nev
    birthyear: szulev
    email: email
    phone: telefon
    town: varos
    }while(breaker !== " ")
    database.push(userDatabase)
return database;
}