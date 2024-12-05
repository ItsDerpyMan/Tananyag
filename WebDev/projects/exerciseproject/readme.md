# ECMAScript (javaScript) alapok

## Szerepe a weben

### "Weblapokosítás" |JS 1.0 - ESS
*	Kisléptekben fejlődött 
*	Egyszerű feladatokat nagyon bonyolultan lehetett megoldani vele
*	Nehézkesen indult el, kevesen használták eleinte

### Könyvtárak | JQuery
*	igyekeztek a nyelv tulajdonságaiból adódó nehézségeket egyszerűsíteni
*	Rengetek új (sokszor különböző) szintaxis kelett megtanulni: Pl.:  $()
--> JQuery színtaxis
*	népszerűek az egyszerűségük miatt
*	Felhasználás: Pl.: Bootstrap

### Dinamikus weboldalak létrehozása | ES6
* Nagy frissítés keretében modern eszközöket kap a nyelv:
	* Újragondolták  a változókat és a függvényeket
	* Új adatszerkezetek jelentek meg
	* Új beépített függvények
* A különböző könyvtárak funkciónalításának nagyrészét átvettek

### Frontend keretrendszerek  | Angular 
*	A modern eszközöknek köszönhetően, az eddiginél összetettebb "könyvtárak " jelennek meg 
*	Nem csak a ES-be, de gyakran már a HTML-be és a CSS-be is bele nyúlnak
*	Manapság szinte már naponta jelennek meg új keretrendszerek (2020-as évekre igaz) Pl. NextJs, React, ...
*	Első úttörő: Google Angular (kezd eltünni => Flutter Web)
*	Jelenleg a legnagyobbak: React, Vue.js, (Svelte), Angular
### backend keretrendszerek | Express.js 
*	A Node.js segítségével megszünik a böngészőtől való függés
*	Megjelennek olyan keretrendszerek amelyek a Node.js képességeire építve
már önálló szerver futattására képesek: 
		* Express.js 
		* Vite 
* megjelennek a csak ES-alapú stack-ek (frontend + backend)
		* MEAN, MEVN, MERN
		* MongoDB, Express.js, Node.js
### Weben túl... | Electron.js
* Node.js  és a chromium alapján elérhetővé váltak olyan alkalmazások amelyek tisztán ES-ből állnak, mégis képesek egy lightweight böngészőben úgy viselkedni, hogy mintha asztali vagy mobil alkalmazások lennének. 
* Pl.: Discord, VSCode, Figma,

## Szintaktika és tulajdonságok
###  Tulajdonságok 
* C alapú programozási nyelv 
* Script nyelv
* Gyengén tipusos - RunTime-on az interpreter eldönti a változó tipusát Pl.: Py, Js
* értelmezett (interpreter) programozási nyelv

### Szemantika
* A JS-ben a ';' opcionalis karakter
*  (use srrict) parancs régen modern JS módba kapcsolat a böngészet

### Változók és típusok
1. `let`: Más nyelvekben létező normális, módosítható változó.
 Pl.: `let num = 1;`
2.  `var`:  "enyhén" különc viselkedés változó. SOSE HASZNÁLD!
3.  `const`: Általános konstans változó 

### Ada##### Hf.: Milyen JS rendszerek vannak? És azok mit tudnak. 3-3 front-backEnd
* React - frontend könyvtár JSX használ JS kommunikációhoz
* Vue.js - Frontend keretrendszer, bizonyos funkciókhoz JSX hasznlál
* Svelte - lightweight compiled vDom
* Mocha 

típusok
* Mível, hogy gyengén típusos nyelv, kiírni nem szükséges mert RunTime-on ellesz döntve. 
* Fajtái: String, int, char, .. És egyébb variációi
1. Számok
	1. Number
		* Egész és valós szamokat is tarol
		* 53 biten tud ábrázolni
		* Vannak speciális számok: Nan ( NotaNumber), Infinity, -infinity
		* képes különböző számrendszerek ábrázolására
		| 2-es | 8-as | 16-os |
		| --- | --- | ---- |
		| 0b |3o | 2x |
	2. Bigint 
		* Csak egészeket tudd tárolni 
		* 64 bitten ábrázol 
		* Csak BigInt-el hajlandó műveletet végezni. 
		* Jelölése: A szám után egy `n` karaktert írunk. Pl.: 102n
2. Szövegek
	1. String
		* Szöveget tárol 
		* +-al összefüz
		* Indexelhető -> Karaktereket ad vissza (Ezek is szövegnek számítanak a JS-ben)
		* jelölése '' vagy ""
		* Template literal: `` ( Windows: Alt gr+7 | Mac + ű )
		```
		pl. let number = 3
		console.log(`A változó értéke: ${number}`)
		```
3. Logikai változó 
	1. Boolean 
		* hagyományos logikai változó 
		* Az értékei true es false lehet
		* (A logikai `és` és a logikai `vagy` igazság tábláját tudni kell )
4. Speciális változók
	1. Undefined
		* Ha nincs kezdeti értéke a változónak, akkor nem tudjuk megállapítani a típusát sem
		* A program futásánál fog értéket kapni, nincs init.-al
		* Mindig oda kell figyelni, hogy a megfelelő módon használjuk!!!!
	2. Null
		* A változónak hivatkozott valamire, de az megszünt.
		* Nem érkezetb e adat, pl. API-on keresztül.
	3. Symbol 
		* Speciális String
		* Minden példánya telyesen egyedi
		* Jól használható kulcsként
		Pl.: Symbol(1) === Symbol(1) -> Hamis
## összehasonlító műveletek 
	* Kisebb és nagyobb: `< és >`
	* `<= és =>`
	* `==`: Értékében egyenlő pl. 1 == 1 --> true, 1 == 2 --> false 
	* `===`: Értékében és típusában is egyenlő. pl.: 1 === "1" ---> false
	* `!=`: Nem (értékében) egyenlő pl. 5 != "5" --> hamis 
	* `!=`: Nem értékében és tipusában egyenlő pl. 5 != "5" --> igaz
## Tipus operátorok
* `Typeof`: Egy változó tipusával tér vissza
* `instanceof`: Igaz értéket add vissza, ha az objektum egy objektumtipus példánya 

# Vezérlés 

## iterációk (Ciklusok)
1. For ciklus 
```
for (ciklus_változó; logikai_feltétel; lépésszám) {
	utasítás(ok)
}
```
* A biztos lefutások száma: nulla 
* Logikai érték vezérelt ciklus
* feladatta általában bejárás

2. While ciklus  
```
while(logikai_feltétel) {
	utasítás(ok)
}
```
* A biztos lefutások száma: nulla
* logikai érték vezérelt
* addig fut amig a logikai feltétel igaz
3. do while 
```
do {
	utasítások(ok)
}while(logikai_feltétel)
```
* biztos lefutások száma: 1
* logikai érték vezérelt 
* elenőrzött 

 # Array
 Def: Egy olyan adatszerkezet melyben egyszer bármilyen típus tárolható
 ## Létrehozás
 1. Literal: 
	* Jelölése: []
	* használati gyakorisága az esetek 99.99%-a
2. Array konstruktor
	* Ne Használd mert: 
	```
	let array = new Array(3)
	out: [empty*3]
	```
	* Az array konstruktorban meg adott érték a tömb mérete és mivel nincs bemeneti érték ezért ezek üresen jönnek létre és utolag nehéz kezelni öket.
 ## A feladata:
 Alap esetben a JS array a szervel oldali kommunikációt képvisel valamint a dinamikus adat áramlást ezért a hossza dinamikussan tud változni.
 ## Array függvények: 
 1. `.push(<>érték)`: a tömb végére ileszt egy új elemet ezzel növelve a tömb a méretét
 2. `.lenght:` a tömb elemének a száma
 3. `.unshift(<érték>)`: a tömb elejére szúr be értékeket ezzel módosítva a tömb hosszát.
 4. `.shift()`: A tömb elejéről szedi ki az értéket és adja vissza.
 5. `.pop()`: A tömb utolsó elemét adja vissza és távolítja el.
 6. `.splice(<index>, <törlendő darabszám, index>, <érték>)`: 
	* az adott indexre való beszúrás. 
	* az adott indexről való törlés.
7. `.ToString()`: A tömböt szöveggé alakítja. Az adatokat veszővel elválasztva.
8. `.join(<Char>)`:  szöveggé alakítja a tömböt és a <Char> elválasztva kiírja az értékeket 