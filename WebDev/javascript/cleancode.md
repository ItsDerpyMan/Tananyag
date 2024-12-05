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
    