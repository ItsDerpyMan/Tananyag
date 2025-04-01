## Adatszerkezet 2 

## Objektum
Az objektum a többi programozási myevnem ismert objektumhoz hasonlóan működik.
Felípétés kulcs-érték párokkal amit egymástól `;`-al választunk el
## Létrehozása
1. Objektumliteral
    * Az egyik leggyakoribb modja az objektumok létrehozásának
2. Objektum konstruktoral
    * Ritkábban használt de előfordulhat
## Objektum tulajdonságok és metódusok
1. Hozzáférési pont (`.`) és a szögletes zárójelek (`[]`) segítségével lehet elérni
2. Tulajdonság törlése `delete`-el történik
3. Az objektumon belül lehet fügvényt használni
## Objektum bejárása
`for..in`: Vissza adja egy adott adatszerkezetben a kulcsot (objektum és map)
## Objektum kulcsok, értékek és bejegyzések lekérése
`Object.keys()`: Az összes kulcsot ami az adatszerkezetben van egy tömbként.
`Object.vales()`: Az összes érték ami az adatszerkezetben van egy tömbként.
`Object.entries()`: Az összes bejegyzést adja meg. Minden kulcs-érték párt egy tömben helyez el és ezeket egy tömben adja vissza.
## Objektumok másolása és összehasonlítása
### Shallow copy és Deep copy
1. Shallow copy:
    * Csak a legfelső szintű objektumot másolja
    * A belső objektumba refrenciák maradnak
    * Ha egy ilyen módom másolt objektum modosítod az eredeti is módosul
2. Deep copy:
    * Rekurzívan lemásolja az objektum összes beágyazott elemét
    * Az eredeti és a másolat független egymástol
    * JS-ben nincs beépített `deep copy` funkció, de többféleképpen megoldható:
        * JSON.pars + JSON.stringify: Egyszerű, de nem működik függvényekel és undefind értékeket tartalmazó objektummal
        * Lodash könyvtár `_.cloneDeep()` függvények ez nagyon megbízható.
        * Rekurzi másolás manuális vagy `structuredClone()` használata, ez csak modern bömgészőkben működik
## Map
A Map az objektumhoz hasonloan kulcs-érték párokat tárol. Annyi kulönbséggel hogy ennek az adatszerkezetnek van mérete.
### Kulcsrugalmas
1. Az objektum csak sztring vagy symbol tipusú kulcsokot támogat
2. A Map bármilyen típusú kulcsot támogat (pl.: objektum, függvény, számok, stringek, stb...)
### Map függvények
1. Létrehozása `new Map()` konstruktor segítségével történek
2. `set(key,value)`: Hozzá ad egy kulcs-érték párt a Map-hez
3. `get(key)`: Vissza adja az adott kulcshoz tartozó értéket
4. `.has(key)`: Megvizsgálja hogy a kulcs az benne van-e a Map-ben (Boolean)
5. `delete`: Törli az adott kulcsot és a hozzá tartozó értéket
6. `.clear()`: Felszabadítja a teljes Map-et. (A Map teljes tartalmát törli)
7. `size`: Vissza adja a Map méretét
## Map bejárása:
`for...of`: Működése a Set-nel le van írva
`.keys()`: Vissza adja az összes kulcsot egy tömben
`.values`: Vissza adja az összes ertéket egy tömben
`.entries()`: Vissza a daj a kulcs-érték párokat úgy mint az Objektumnál