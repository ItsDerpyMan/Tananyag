# DOM (Document Object Model)
* A DOM egy interface, amely lehetővé teszi a fejlesztők számára, hogy programból módosítsák a HTML és XML dokumentumokat
* a böngésző a html kódot egy `fa struktúra alakítja`
## Miért Fontos?
* A weboldalak interaktívvá tétele
Pl.: dinamikus tartalomkezelés, animációk
## DOM szerkezete és működése
1. DOM felépítése
    * Root(gyökér): `document`
    * Csomopontok(Nodes)
    * Element nodes: html elemek (main, body, head)
    * Attribute Nodes: html attribútumok
    * Text nodes: szövegek a HTML-ben
2. DOM manipuláció alapfogalmak:
    * Lekérdezés DOM-ból
    * Elem létrehozása és módosítása
    * Attribútumok kezelése
    * Események kezelése
### Lekérdezés a DOM-ból
1. `Document.getelementBy('id')`: Vissza adja azt az objektumot aminek az id-ja megfelel a zarojelben megadott értéknek
2. `document.getElementsByClassName('className')`: Egy tombot ad vissza amely az osszes olyan elemet tartalmazza ami az adott class attributummal rendelkezik
3. `document.getElementsByTagName('TagNam')`: Egy tombot ad vissza amely az osszes olyan elemet tartalmazza ami az adott elem nevvel egyezik
4.  `document.querrySelector(cssSelector)`: Az elso olyan elemet adja vissza ami az adott CSS selectorral (class, id, tag) rendelkezik
5. `document.querrySelectorAll('cssSelector') `: Az osszes olyan elemet adja vissza ami az adott CSS selectorral (class, id, tag) rendelkezik
### Elem létrehozása és módosítása
1. `.innerHTML`: A text node módosítását végzi úgy, hogy az adott HTML-s szabványnak megfelelo Tag erteket végrehajtja
2. `.innerText`: A text node modositasát végzi és csak string ertékeket tud meg jeleníteni
3. `.textContent`: A text node modositasát végzi és csak string ertékeket tud meg jeleníteni
4. `document.createEelement('Elementname')`: Az adott elem nevvel rendelkező tag-et hozza létre
### Elem elhejezése a DOM fában
1. `appendChiled(element)`:
   * Csak egy darab DOM elemet tud hozzáadni
   * Csak Node-t (HTML element vagy text) fogad el, szöveget külön nem
2. `append(element1, element2 ... elementn)`:
   * Több elemet és szöveget is hozzáadhat a DOM fához egyszerre
   * Mivel elfogad közvetlenül szöveget ezért nem kell Node-hoz rendelni
   * Nem használjuk az a formáját amiben szöveget szúr be
   * Mindig az adott szülőelem végére szúrja be
3. `prepend(element)`:
   * Egy element szúr be a tárolóelem elejére
   *  Kb az appendChiled()-hoz hasonlóan működik.
4. `insertBefore()`:
   * Egy elem beszúrása egy másik elé
### Az Attribútumok kezelése
1. `getAttribute(attributeName)`: Vissza adja az adott attributumnévhez tartozó értéket
2. `setAttribute(attributeName, value)`: Ha létetik az attribute akkor felülírja ha nem létezik be állítja
3. `removeAttribute(attributeNamr)`: Töröl egy adott attributumot egy elemről
4. `hasAttribute(attributeName)`: Boolean értéket ad vissza attól függően hogy az adott attributum létezik-e?
5. `classList.Add()`: Az ellem osztályainak a módosítását végzi azzal hogy értékeket ad hozzá
6. `classList.remove()`: Az elem osztályainak a módosítását úgy végzi azzal hogy értékeket vesz le belőle
7. `style`: CSS tulajdonságok módosítása