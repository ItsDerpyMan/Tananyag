// console.log(document.getElementById('container'))
// let container = document.getElementById('container')
// container.textContent = "Sziasztok!"
// let numbersArray = [1, 2, 3]
//listakészítés
// renderList(numbersArray, container);
// function renderList(data, containerElement){
//     let ul = document.createElement("ul");
//     for(const item of data){
//         ul.appendChild(createListElement(item))
//     }
//     containerElement.appendChild(ul)
// }
// function createListElement(data){
//     const li = document.createElement('li');
//     li.textContent = data;
//     return li;
// }
//órai feladat

let kincstar = []

function arrayWithRandomNumbers(){
    let array = [];
    for(let i = 0; i < 20; i++){
        array.push(Math.floor(Math.random() * 10000)+1)
    }
    return array;
}

console.log(arrayWithRandomNumbers(kincstar));
let telekincstar = arrayWithRandomNumbers(kincstar)

function sumNumbers(array){
    sum = 0
    for(const item of array){
        sum += item;
    }
    return `A kincstár összértéke: ${sum}`
}

console.log(sumNumbers(telekincstar));

function maxValue(array){
    max = 0
    for(let item of array){
        if(item > max){
            item = max
        }
        else{
            return "no item found"
        }
    }
    return `legtöbbet érő érték: ${max}`;
}

console.log(maxValue(telekincstar))


//Kell egy új element
//az elementhez appendChield()-al hozzá adjuk a tömböt
// function createElement(data){
//     let ul = document.createElement("ul")
//     for(const item of data){
//         div.appendChild(createListElement(item))
//     }
// }