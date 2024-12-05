{
    // 2. Írj egy programot, amely megszámolja, hogy
    //  hányszor fordul elő az "alma" szó egy szavakat tartalmazó tömbben.

    let array = [
        'alma', 'alma', 'alma', 'alma', 'alma',
        'korte', 'szilva', 'barack', 'meggy', 'szolo',
        'cseresznye', 'narancs', 'citrom', 'eper', 'mogyoro',
        'dinnye', 'tomeg', 'hal', 'kave', 'tea',
        'viz', 'sor', 'kenyer', 'sajt', 'tojás',
        'fokhagyma', 'hagym', 'paprika', 'só', 'bors',
        'rizs', 'tészta', 'alma'
    ];
    let word = 'alma'
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (word === array[i]) {
            counter++
        }
    }
    console.log(word, counter)
}
{
    // 4. Írj egy programot, amely előállít egy adott szám szorzótábláját (1-től 10-ig).
    // A szorzatokat mentsd el egy tömbbe, és a végén írasd ki a tömböt.

    //bekérek egy számot
    let num;
    let inp = prompt("Adj meg egy számot: ");
    num = parseInt(inp);

    // létrehozok egy tömböt és 10x push-om a tömbre a szorzatokat
    let array = [];
    for (let i = 1; i <= 10; i++) {
        array.push((num * i))
    }
    //console.log
    console.log(array);
}
{
// 6.: Írj egy programot, amely egy számokat tartalmazó tömböt növekvő sorrendbe rendez.
let array = [12,5,4,8,1,3,9,7];

for ( let i = 0; i < array.length;){
    let num;
    if(array[i] > array[i + 1]) {
        num = array.splice(i, 1)
        array.splice(i + 1, 0)
    }
    
}
console.log(array)
}
{
    // 7. feladat
    let array = ['alma', 'anna', "ananannanana","görög", "kutya"]
    let selectedarray = []
    for (let i = 0; i < array.length; i++) {
        if (IsPalindrom(array[i]) == true) {
            selectedarray.push(array[i])
        }
    }
    console.log(array)
    console.log(selectedarray)


    // vizsgálja hogy Palindrom-e vagy nem
    function IsPalindrom(string) {
        //megnézzi hogy a bekért érték semmi-e 
        if (string == null) { return false;}
        // Két értéket nézzünk. Az egyik a szavunk balszélső karakterét, a másik a jobb szélsőt. 
        // Ezeket csökkentve vagy növelve egymáshoz közelítjük.
        // Miközben változtatjuk ezt a két szélső értéket, vizsgáljuk hogy ezeken az értékeken egyenlő-e az szavunk betűi.
        // Ha igen akkor egy Palindrom a szavunk 
        // Ha nem akkor nem (:
        for (let i = 0; i < string.length / 2; i++) {
            if (string[i] !== string[string.length - 1 - i]) {
                return false;
            }

        }
        return true;
    }
}


{
    // 8. Feladat

    // 8. Írj egy programot, amely egy tömb utolsó elemét az első helyre teszi, 
    //  és a többi elemet elcsúsztatja eggyel hátrébb. 

    // létrehoz egy tömböt
    let array = ["Kar", "Láb", "Fej", "has", "nyak", "barack"]
    console.log(array)

    // Az utsó elemet eltárolja
    let last = array.pop();
    // Beilleszti az első helyre
    array.splice(0, 0, last);

    console.log(array)
}
{
    // 9. Készíts egy programot, amely egy adott hosszúságú Fibonacci-sorozatot generál.
    let array = [0, 1]
    let sequence = 0;

    while (sequence < 10) {
        array.push(array[array.length - 2] + array[array.length - 1 ])
        sequence++
    }

    console.log(array)
}
