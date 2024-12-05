# Clean Code elvek
1. Általános konvekciók 
    * leíró változónevek: megmonondja mire használod
    * Akkor jó a változó neved, ha nem enged mást értelmezni mint amire használod
2. Kommentelés
    * Csak akkor kommentelsz ha szükséges a kód megértéséhez
    * Ez csak akkor működik ha az elnevezések egyértelműen leírják a működést más esetben
    * A több kevesebb: Minnél több a komment annál átláthatatlanabb a kód
3. Szerkezet tagolás
    * A kódot igyekezzünk program egyszégekre bontani.
    * Mivel a kód felülről lefelé halad ezért a sorrend nagyon fontos
        1. Változók
        2. Függvények
        3. Művelet végzés
        4. Kiíratás
    * A kód egyes részeit a funkcióik szerint érdemes csoportosítani
    * A fő program végrehajtás legtöbb esetben a program végén helyezkedik el.
4. A whitespace a kódban
    * A szerkezeti egységek elválasztására használjuk.
    * Az optimalizáló szoftverek eltávolítják ezeket így a kód méret nem fog növekedni.
5. Mire gondolt a költő?
    * A kód során a változó és a függvény nevek ne legyenek félrevezetőek.
    * Igyekezzünk izeket használni vagy valamilyen akcióra utaló elnevezéseket használni.
6. Töröld ami nem kell
    * Kis lépésekben programozunk: a felmerülő igényekre dinamikusan tudunk reagálni.
    * Csak akkor vezetsz be új funkciókat ha tényleg szükséges.
7. Ne imsételd magad
    * A duplikált sorok növelik a hibázási arányt
    * A bugok és a rossz működés leggyakoribb oka a kód ismétlés
8. Ésszerű funkciónalitás
    * A kilométeres függvénydefiníciók könnyen zsúfoltá teszik a kódot ezzel átláthatatlanná
    * Ha a függvény többet csinál mint amire a neve utal akkor a felesleges részt egy másik függvénybe kell szervezni.
    * Rövid max 4-5 soros függvény törzsek az általános programozásban (Web esetén ez lehet 5-20 sor).
9. Mágikus értékek
    * Van valami hasznuk de senki nem tudja mi a legtöbb esetben ezek számok és szövegek
    * Helyettük inkább használjunk erre a célre is beszédes változókat amiből kiderül mire is valók
10. Újrafelhasználhatóság
    * Ha már egy funckiót megírtunk korábban akkor azt ujra fel lehet használni.
## Elönyök
* Egyszerűen lehet kód módosításokat végezni
* Kisebb hibaarány 
* csapatmunka kompatiblis
* Nagyibb teljesítmény a kisebb kódrészek miatt
* Más projektekbe is fel lehet használni a jól megírt komponenseket és modulokat
* A saját stílusodhoz tudod alakítani
## Hátrányai
* időigényesebb
* fokozott koncentrációt igényel
* Szellemileg sokkal kimerítőbb
* Ha nem gyakorolja az ember nem effektív

# NevezékTan
A változó neve amit használni akarok a `number Of students`-ból fog jönni
1. Snake Case
    * A változó szavai egymástól aláhuzásjellel vannak elválasztva
    * pl.: `number_Of_students`
    * használati esetek: Python, fájlok elnevezésére tökéletes választás
2. Kebab Case
    * A változó szavai egymástól kötőjellel vannak elválasztva
    * pl.: `number-of-students`
    * használati esetek: FrontEnd-Js rendszerek pl.: Vue.js, URL
3. Camel Case
    * A változó szavait egyben írjuk ée és ,minden új szó esetén nagy kezdőbetűvel van az első szó kivételével
    * pl.: `numberOfStudents`
    * Használati esetek: Js, C#, Java
4. Pascal Case
    * A változó szavait egyben írjuk le és minden szó első betüje nagy 
    * pl.: `NumberOfStudents`
    * Használati esetek: C# (osztályok és függvények), Js(osztályok)