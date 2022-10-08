/*  Kysymyksiä löytyy haulla "???" 
    HUOM! En muistanut käyttää tehtävissä let/const/var avainsanoja lähes ollenkaan


Tehtävä 1.1
Tee funktio, joka saa parametrina kokonaisluvun. Jos luku on suurempi kuin 100, funktio
palauttaa: ”syötit luvun, joka on suurempi kuin 100”. Jos luku on 100 tai pienempi,
palautetaan “” 


Tehtävä 1.2
Muuta tehtävää 1 siten, että se palauttaa ”syötit luvun joka on pienempi kuin 100”
tapauksessa, jossa käyttäjä argumentin arvo on pienempi kuin sata.


Tehtävä 1.3
Muuta tehtävää 2 siten, että funktio palauttaa tekstin ”luku on 100” jos käyttäjä syöttää
luvun 100. */

funktio123=(luku) => {

    if (luku < 100) {
        return "syötit luvun joka on pienempi kuin 100"
    } else if (luku > 100) {
        return "syötit luvun, joka on suurempi kuin 100"
    } else if (luku == 100) { 
        return "luku on 100"   
    } else {
    return "Jotain meni pieleen. Yritä uudelleen."
    }
}

/*console.log("testaus123:")
console.log(funktio123(99))
console.log(funktio123(100))
console.log(funktio123(101))
console.log(funktio123("ilmapallo")) 


 Tehtävä 1.4
a) Tee funktio, jonka parametreina ovat tunnit, minuutit ja sekunnit ja se palauttaa
kokonaisajan sekunteina. Esimerkiksi, jos argumenteiksi annetaan 0 tunneiksi, 1
minuuteiksi 1 ja 1 sekunneiksi, palauttaa funktio 61 sekuntia.
Kokeile ohjelmaasi myös seuraavalla syötteellä: tunnit=20, minuutit=2 ja sekunnit=300.
Jos ohjelmasi ei toimi, korjaa se.*/

funktio4a = (tunnit,minuutit,sekunnit) => {
    tulos = tunnit * 60 * 60 + minuutit * 60 + sekunnit
    return tulos
}

/*console.log("testaus4a:")
console.log(funktio4a(0,1,1))
console.log(funktio4a(1,2,3))
console.log(funktio4a(20,2,300))
console.log(funktio4a("Tupu","Hupu","Lupu"))
console.log(funktio4a(0,1))

b) Tee funktio, jonka parametrina on valuutan määrä markoissa ja se palauttaa määrän
euroissa.*/

funktio4b = (markat) => {
    // 1 markka = 0.16818793 euroa
    kurssi = 0.16818793
    eurotTarkka = markat * kurssi
    eurot = eurotTarkka.toFixed(2)
    return eurot
}

console.log("testaus4b:")
console.log(funktio4b(1))
console.log(funktio4b(1000))
console.log(funktio4b(15)) 

/* c) Tee funktio, jonka parametrina on valuutan määrä euroissa ja se palauttaa määrän
markoissa.*/

funktio4c = (eurot) => {
    // 1 euro = 5.94573 markkaa    
    kurssi = 5.94573
    markatTarkka = eurot * kurssi
    // ??? tällainen toFixed komento löytyi googlesta, pyöristääkö se matikkasääntöjen mukaan?
    markat = markatTarkka.toFixed(2)
    return markat
}

/* console.log("testaus4c:")
console.log(funktio4c(1))
console.log(funktio4c(1000))
console.log(funktio4c(15))
console.log(funktio4c("100"))
console.log(funktio4c("kekkonen"))


Tehtävä 1.5
Tee funktio, jonka parametrit ovat viikonpäivän numeron ja joka palauttaa viikonpäivän,
esim. jos argumentti on 1, palautetaan “maanantai”.*/

funktio5=(luku) => {
    console.log ("luku:",luku)
    if (luku<=0 || luku >7) return "luku ei kelpaa!"
    switch (luku) {
        case 1:
            return "maanantai"
        case 2:
            return "tiistai"
        case 3:
            return "keskiviikko"
        case 4:
            return "torstai"
        case 5:
            return "perjantai"
        case 6:
            return "lauantai"
        case 7:
            return "sunnuntai"
        default:
            return "päivää ei tunnistettu"
    }
}

/* console.log("testaus5:")
console.log(funktio5(2))
console.log(funktio5(8))
console.log(funktio5(-5))
console.log(funktio5("Pekka"))


Tehtävä 1.6
Tee funktio, joka saa syötteenä iän ja palauttaa seuraavat tekstit riippuen iästä:
    1-17 “olet alaikäinen”
    18-33 “olet nuori”
    34-50 “olet keski-ikäinen”
    51- “olet vanha” */

funktio6 = (luku) => {
    console.log ("luku:",luku)
    if (isNaN(luku)) return "ilmoita ikä numerona"
    if (luku<0) return "luku ei kelpaa!"
    else if (luku>=0 && luku<18) return "olet alaikäinen"
    else if (luku>=18 && luku<33) return "olet nuori"
    else if (luku>=33 && luku<51) return "olet keski-ikäinen"
    else if (luku>=0) return "olet vanha"
    // tätä ei taida tarvita:
    else return "Jotain meni pieleen. Yritä uudelleen."
}

/* console.log("testaus6:")
console.log(funktio6(1))
console.log(funktio6(-1))
console.log(funktio6(1000))
console.log(funktio6(15.3))
console.log(funktio6(33))
console.log(funktio6(32.9999999))
console.log(funktio6("100"))
console.log(funktio6("kekkonen")) 


Tehtävä 1.7
Tee funktio, joka saa syötteenä etunimen, sukunimen ja iän. Funktio palauttaa
merkkijonon muodossa ”Terve etunimi sukunimi, olet ikä vuotias”.*/

funktio7 = (etunimi,sukunimi,ikä) => {
    // ??? Pythonilla laittaisin titlecasen: etunimi.title() ja sukunimi.title(), onko javascriptissä vastaavaa?
    merkkijono = "Terve " + etunimi + " " + sukunimi + ", olet " + ikä + "-vuotias."
    return merkkijono
}

/* console.log("testaus7:")
console.log(funktio7("aku","ankka",10))
console.log(funktio7("yabba","dabba","doo"))


Tehtävä 1.8
Tee funktio, joka saa syötteenä syntymävuoden ja suosikkinumeron. Jos syntymävuosi on
1970 ja suosikkinumero 77, niin palautetaan teksti: ”Olet onnenpekka”. Tee tehtävä
yhdellä JOS (IF) lauseella.*/

funktio8 = (syntymävuosi,suosikkinumero) => {
    // "==" ei tarkista tyyppiä, "===" tarkistaa tyypin, esim. kun verrataan stringiä "1" numeroon 1
    if (syntymävuosi === 1970 && suosikkinumero === 77) return "Olet onnenpekka!"
}

/* console.log("testaus8:")
console.log("2016 ja 4: " + funktio8("2016",4))
console.log("1970 ja 77: " + funktio8("1970",77))


Tehtävä 1.9
Tee funktio, joka palauttaa luvut 7-131 (lista/taulukko)*/

funktio9 = () => {
    lista = []
    for (luku=7;luku<=131;luku++){
        lista.push(luku)
    }
    return lista
}

/* console.log("testaus9:")
console.log(funktio9())
console.log(funktio9("kekkonen"))
console.log(funktio9(1,2,3))


Tehtävä 1.10
a) Tee funktio, joka palauttaa lukujen 7-131 summan.
*/

funktio10a = () => {
    const lista = funktio9()
    const summa = lista.reduce(
        (edellinenArvo, nykyinenArvo) => edellinenArvo + nykyinenArvo
    )
    return(summa)
}

/* console.log("testaus10a:")
console.log(funktio10a())

b) Tee funktio, joka saa syötteenä positiiviset luvut a ja b ja palauttaa lukuvälin summan.
Huomaa, että ohjelman tulee tarkistaa, että b>a.
Tee molemmat tehtävät käyttäen sekä for-rakennetta että reduce-funktiota. */

funktio10b = (a,b) => {
    // Ilman tätä if-lauseketta tulokseksi tulee aakkosjärjestyksessä ensimmäinen, jos syöttää merkkijonoja:
    if (isNaN(a) || isNaN(b)) return "a:n ja b:n täytyy olla numeroita"
    else if(a < b) {
        let lista = []
        for (luku=a;luku<=b;luku++){
            lista.push(luku)
        }
        const summa = lista.reduce(
            (edellinenArvo, nykyinenArvo) => edellinenArvo + nykyinenArvo
        )
        return(summa)
    }
    else return "a:n täytyy olla pienempi kuin b"
}

/* console.log("testaus10b:")
console.log(funktio10b(3,9))
console.log(funktio10b(3,1))
console.log(funktio10b("Tiku","Taku"))
console.log(funktio10b("Taku","Tiku"))


Tehtävä 1.11: ei tarvitse tehdä


Tehtävä 1.12
Tee funktio, joka palauttaa parilliset luvut väliltä 0-100.
Tee tehtävä käyttäen for-rakennetta tai reduce-funktiota.*/

funktio12 = () => {
    lista = []
    // ??? täytyy vielä tutkia miten tämä tehdään reduce-funktiolla   
    for (luku=0;luku<=100;luku++) {
        // tämä if-lauseke toimii sekä "==" ja "===", täytyy opetella näiden ero
        if (luku % 2 === 0) {
            lista.push(luku)
        }
    }
    return lista
}

/* console.log("testaus12:")
console.log(funktio12()) 


Tehtävä 1.13
Tee funktio, joka palauttaa parillisten kulujen summan lukuväliltä 0-1000.
Tee tehtävä käyttäen joko for-rakennetta tai reduce-funktiota.*/

funktio13 = () => {
    let summa = 0
    for (luku=0;luku<=1000;luku++) {
        if (luku % 2 === 0) {
            summa += luku
        } 
    }
    return summa
}

/* console.log("testaus13:")
console.log(funktio13())


Tehtävät 1.14 ja 1.15: ei tarvitse tehdä


Tehtävä 1.16
Tee funktio, joka saa syötteenä painon (kg), pituuden (m) ja palauttaa painoindeksin.
Painoindeksi voidaan laskea jakamalla paino pituuden neliöllä. 
BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater*/

funktio16 = (paino,pituus) => {    
    BMI = (paino/(Math.pow(pituus,2)))
    // ??? Onko helpompi tapa tehdä tämä, tuli vähän raskaan näköinen funktio kun halusin lisätä nuo lausekkeet
    if (isNaN(paino) || isNaN(pituus)) return "Ilmoita paino kilogrammoina ja pituus metreinä (esim. 80.5,1.82)"
    else if (BMI.toFixed(2) < 10 || BMI > 60) return "Tarkista syöttämäsi luvut ja yritä uudelleen."
    else if (BMI.toFixed(2) < 18.5) return "Painoindeksisi on " + BMI.toFixed(2) + ". Olet alipainoinen"
    else if (BMI.toFixed(2) < 25) return "Painoindeksisi on " + BMI.toFixed(2) + ". Olet normaalipainoinen"
    else if (BMI.toFixed(2) < 30) return "Painoindeksisi on " + BMI.toFixed(2) + ". Olet ylipainoinen"
    else if (BMI.toFixed(2) >= 30) return "Painoindeksisi on " + BMI.toFixed(2) + ". Olet vaikeasti ylipainoinen"
}

/* console.log("testaus16:")
console.log(funktio16(66,1.70))
console.log(funktio16(45,1.70))
console.log(funktio16(115,1.85))
console.log(funktio16(1.70,66))
console.log(funktio16(25,2.25))
console.log(funktio16("tiku","taku"))


Tehtävä 1.17
Kirjoita funktio, joka saa syötteenä vuosiluvun ja palauttaa merkkijonon “on” tai “ei” sen
mukaan onko vuosi karkausvuosi.
Karkausvuosia ovat pääsääntöisesti 4:llä jaolliset vuosiluvut. Vuosi ei kuitenkaan ole
karkausvuosi, jos vuosiluku on jaollinen 100:lla. Mutta, jos vuosiluku on jaollinen 400:lla,
vuosi on aina karkausvuosi.
Ohje: Vuodet 1996 ja 2000 ovat karkausvuosia, vuodet 1800 ja 1997 eivät ja Esimerkiksi vuodet 1700, 
1800 ja 1900 eivät olleet karkausvuosia, 
mutta 1600 ja 2000 olivat.*/

funktio17 = (vuosiluku) => {
    if (isNaN(vuosiluku) || vuosiluku <= 0) return "Ilmoita vuosi muodossa \"2022\"."
    else if (vuosiluku % 400 == 0) return "on"
    else if (vuosiluku % 100 == 0) return "ei"
    else if (vuosiluku % 4 == 0) return "on"
    else return "ei"
}

/* console.log("testaus17:")
console.log(funktio17(2025))
console.log(funktio17(2032))
console.log(funktio17(1800))
console.log(funktio17(2000))
console.log(funktio17("1700"))
console.log(funktio17(11))
console.log(funktio17("kekkonen"))


Tehtävä 1.18
Tee funktio, joka saa syötteenä luvun. Mikäli syöte ei ole 1 funktio palauttaa ” Syöte ei ole
1” .*/

funktio18 = (luku) => {
    if (luku != 1) return "Syöte ei ole 1"
    else return ""
}

/* console.log("testaus18:")
console.log(funktio18("kekkonen"))
console.log(funktio18("1"))
console.log(funktio18(1))
console.log(funktio18(5))


Tehtävä 1.19
Muuta seuraavan pseudokoodin mukainen ohjelma funktioksi. Keksi itse funktion
parametrit.*/

funktio19 = (asteikko, lukema) => {
    if (asteikko == "C" || asteikko == "c" || asteikko == "F" || asteikko == "f") {
        if (lukema <= 100 && lukema > -101) {
            if (asteikko == "C" || asteikko == "c") return 9 / 5 * (lukema + 32)
            else return 5 / 9 * (lukema - 32)
        }
        else return "lukema virheellinen"
    }    
    else return "asteikko tuntematon"   
 }

 /* console.log("testaus19:")
 console.log(funktio19("C", 10))
 console.log(funktio19("c", 1000))
 console.log(funktio19("f", -25))
 console.log(funktio19("kekkonen", 20))


Tehtävä 1.20
Muuta seuraavan pseudokoodin mukainen ohjelma funktioksi funktio. Keksi itse funktion
parametrit.*/

funktio20 = (litrat, kilometrit) => {
    if (litrat > 0) {
        if (kilometrit > 0) return litrat * 100 / kilometrit
        else return "virhesyöttö"
    }
    else return "virhesyöttö"
}

/* console.log("testaus20:")
console.log(funktio20(50,225))
console.log(funktio20(5,8))
console.log(funktio20(-1,0))
console.log(funktio20(0,0))


Tehtävä 1.21
Laadi funktio, joka saa syötteenä henkilön nimen.. Jos nimi on Pekka, palautetaan
funktiosta ”Minunkin mielestäni Pekka on kiva”. Sama logiikka pätee, jos syötteenä on
Liisa tai Jorma. Jos syötetään jotain muuta, palautetaan funktiosta ”En tunne henkilöä”.
Toteuta ohjelma sekä ehtolausein että switch-case rakenteen avulla.*/

funktio21a = (nimi) => {
    if ((nimi == "Pekka") || (nimi == "Liisa") || (nimi == "Jorma")) return "Minunkin mielestäni " + nimi + " on kiva"
    else return "En tunne henkilöä"
}

/* console.log("testaus21a:")
console.log(funktio21a("Pekka"))
console.log(funktio21a("Liisa"))
console.log(funktio21a("jorma"))
console.log(funktio21a("kekkonen"))
console.log(funktio21a(100)) */

funktio21b = (nimi) => {
    switch (nimi) {
    case ("Pekka"): 
        return "Minunkin mielestäni " + nimi + " on kiva"
    case ("Liisa"): 
        return "Minunkin mielestäni " + nimi + " on kiva"
    case ("Jorma"): 
        return "Minunkin mielestäni " + nimi + " on kiva"
    default:
        return "En tunne henkilöä"
    }
}

/* console.log("testaus21b:")
console.log(funktio21b("Pekka"))
console.log(funktio21b("Liisa"))
console.log(funktio21b("jorma"))
console.log(funktio21b("kekkonen"))
console.log(funktio21b(100))


Tehtävä 1.22
Seuraavat lauseet ovat tosia:
    Lause A on ”Pekka on vakosamettihousuinen mies”.
    Lause B on ”Rauni ei ole vihainen”.
    Lause C on ”Harri on yhdeksän”.
    Lause D on ”Sataa”.
Ovatko seuraavat väittämät tosia?
a) (!D || !C && !B)                 epätosi
b) (D && !B || !A)                  epätosi
c) (!D || A)                        tosi
d) (B && !A)                        epätosi
e) (D && !B || !A) || (!D || A)     tosi
f) (!(!C && !B) && (!D || B))       tosi


Tehtävä 1.23 */

funktio23 = () => {
    let pituus = 0.3
    let leveys = 0.5
    let korkeus = 0.5
    let kuormienMaara = 1
    let kokonaispaino = 0
    for(i=0; i<50; i++) {
        const kuutioDm = (10*pituus) * (10*leveys) * (10*korkeus)
        const paino = 2.5 * kuutioDm
        kokonaispaino += paino
        if(kokonaispaino > 10500){
            reissujenMaara++;
            kokonaispaino = paino
        }
        pituus *= 1.02
        leveys *= 1.03
        korkeus *= 1.015
    }
}

/* console.log("testaus23:")
console.log(funktio23())

ANNA-SOFIAN RATKAISU:
oletetaan että palat saa osiin, koska kuormat tulee kokonaan täyteen lukuunottamatta viimeistä)

const ajokerrat = () => {
    let pituus = 0.3
    let leveys = 0.5
    let korkeus = 0.5
    let tilavuusYht = pituus * leveys * korkeus
    for (let i=1; i<50; i++) {
        pituus *= 1.02
        leveys *= 1.03
        korkeus *= 1.015
        tilavuusYht += pituus * leveys * korkeus
    }
    return Math.ceil(2500 * tilavuusYht / 10500)
}

console.log(ajokerrat())

MIKON RATKAISU:
kts. kuvaruutukaappaus ohjelmointi-kansiossa */