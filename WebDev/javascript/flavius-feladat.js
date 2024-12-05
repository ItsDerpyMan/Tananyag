let n = parseInt(prompt("Emberke száma"));
let k = parseInt(prompt("lépésszám"));

let array = [];
for (let i = 0; i < n; i++)  {
    array.push(i+1);
}
console.log(`Emberek: `+array);

let i = 0;
while (i < array.length) {
    i += k;
    if (i >= array.length ) {
        i -= array.length;
    }
    array.splice(i, 1);
    if (i == array.length) {
        i = 0;
    }
    console.log(array);
}

console.log(array);

let tomb = [1,2,3,4];
tomb.splice(3,1 );
console.log(tomb)