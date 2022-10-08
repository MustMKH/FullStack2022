/*  Tehtävät 5 ja 10-13 vielä tekemättä (hae: "!!!")
    Tutustu slice-komentoon (kts. "Anna-sofian ratkaisu")


Tehtävä 2.1
Tee ohjelma, joka tallentaa yhden viikon viikonpäivät ja niitä vastaavat työtunnit
taulukkoon. Voit keksiä päiville haluamasi työtunnit, rehellinen pitää kuitenkin olla.*/

funktio1a = (maTunnit, tiTunnit, keTunnit, toTunnit, peTunnit) => {
    const tuntilista = [ 
        { viikonpäivä: "Maanantai", tunnit: maTunnit},
        { viikonpäivä: "Tiistai", tunnit: tiTunnit},
        { viikonpäivä: "Keskiviikko", tunnit: keTunnit},
        { viikonpäivä: "Torstai", tunnit: toTunnit},
        { viikonpäivä: "Perjantai", tunnit: peTunnit},
    ]
    return tuntilista
}

// vai haluttiinko vain tällainen?

funktio1b = (maTunnit, tiTunnit, keTunnit, toTunnit, peTunnit) => {
    const tuntitaulukko = { 
        Maanantai: maTunnit,
        Tiistai: tiTunnit,
        Keskiviikko: keTunnit,
        Torstai: toTunnit,
        Perjantai: peTunnit}
    return tuntitaulukko
}

/* console.log("testaus1:")
console.log(funktio1a(7,7,10,1,0))
console.log(funktio1b(7,7,10,1,0))


Tehtävä 2.2
Tee tehtävän 2.1 ohjelmaan lisäominaisuus, joka laskee työtuntien keskiarvon
a) for-rakenteen (forEach, for-silmukka tai for of) avulla
*/

funktio2a = (maTunnit, tiTunnit, keTunnit, toTunnit, peTunnit) => {
    const tuntilista = funktio1a(maTunnit, tiTunnit, keTunnit, toTunnit, peTunnit);
    var count = 0, tuntienSumma = 0;
    for (var key in tuntilista) {
        tuntienSumma += tuntilista[key].tunnit;
                count += 1;
    }
    return {tuntilista: tuntilista, keskiarvo: tuntienSumma/count}
}

/* console.log("testaus 2a:")
console.log(funktio2a(7,7,10,1,0))

funktio2a = (maTunnit, tiTunnit, keTunnit, toTunnit, peTunnit) => {
    const tuntilista = funktio1a(maTunnit, tiTunnit, keTunnit, toTunnit, peTunnit)
    var count = 0, tuntienSumma = 0;
    for (var key in tuntilista) {
        if (tuntilista.hasOwnProperty(key)) { // nämä if lausekkeet ovat turhia
            if (tuntilista[key].hasOwnProperty("tunnit")) {
                tuntienSumma += tuntilista[key].tunnit
                count += 1;
            }
        }
    }
    return tuntienSumma/count 
} */

/* console.log("testaus2a:")
console.log(funktio2a(7,8,10,7,7))

b) reduce -funktiolla */

funktio2b = (maTunnit, tiTunnit, keTunnit, toTunnit, peTunnit) => {
    var tuntilista = [
        { viikonpäivä: "Maanantai", tunnit: maTunnit},
        { viikonpäivä: "Tiistai", tunnit: tiTunnit},
        { viikonpäivä: "Keskiviikko", tunnit: keTunnit},
        { viikonpäivä: "Torstai", tunnit: toTunnit},
        { viikonpäivä: "Perjantai", tunnit: peTunnit},
    ]
    var lista = Object.values(tuntilista)
    var summa = (edellinen, nykyinen) => ({tunnit: edellinen.tunnit + nykyinen.tunnit})
    var keskiarvo = lista.reduce(summa).tunnit / lista.length
    return {tuntilista: tuntilista, keskiarvo: keskiarvo}
}

/* console.log("testaus2b:")
console.log(funktio2b(7,8,10,7,7))


Tehtävä 2.3
Lisää ohjelmaan 2.2 minimin ja maksimin selvittävä osuus.
a) for-rakenteen (forEach, for-silmukka tai for of) avulla */

taulukko3a = funktio1a(7,8,10,7,7)
minimi = taulukko3a[0].tunnit
maksimi = taulukko3a[0].tunnit
taulukko3a.forEach(merkintä => {
    minimi = Math.min(minimi, merkintä.tunnit)
    maksimi = Math.max(maksimi, merkintä.tunnit)
})

/* console.log("testaus3a:")
console.log(taulukko3a, minimi, maksimi)

b) reduce -funktiolla */

taulukko3b = funktio1a(7,8,10,7,7)
minimi = taulukko3b.reduce((edellinen, merkintä) => Math.min(edellinen, merkintä.tunnit), taulukko3b[0].tunnit)
maksimi = taulukko3b.reduce((edellinen, merkintä) => Math.max(edellinen, merkintä.tunnit), taulukko3b[0].tunnit)

/* console.log("testaus3b:")
console.log(taulukko3b, minimi, maksimi)


Tehtävä 2.4
Tee ohjelma, jonka lähtökohtana ovat 12 kuukauden palkkatulot kuukausittain.
Kuukausipalkkaa korotetaan 50 %:lla. Ohjelma luo uuden taulukon, josta löytyvät korotetut
palkat.*/

funktio4 = (palkka) => {
    korotetutPalkat = [palkka]
    for (let indeksi = 0; indeksi < (12-1); indeksi++) {
        palkka = palkka * 1.5
        korotetutPalkat.push(palkka)
    }
    return korotetutPalkat
} 

/*console.log(funktio4(1000))


Tehtävä 2.5 Alla esimerkkejä, tee vielä itse !!!
Tee ohjelma, jonka lähtökohtana ovat 12 kuukauden bruttopalkat kuukausittain ja
veroprosentti. Ohjelma luo uuden taulukon ja laskee nettotulot vähentäen jokaisen
kuukauden bruttopalkasta verot.

/* - - - forEach - - -
saa parametrina funktion
month tässä on paikallisesti määräytynyt funktio???/*

taxCalc = (incomelist2) => {
	incomelist2.forEach((month => {
		var net = month.income - (month.income/month.tax)
		var netMonth = {name:month.name, income:net}
		netMonths.push(netMonth)
	}))
}

/* - - - map - - - 

incomes.map...

const vuodenPalkkaVeroilla = (palkka, veroprosentti) => {
	if (!Array.isArray(palkka)) return "Anna palkkatiedot taulukkona!"
	return palkka.map((kk) => kk - kk * (veroprosentti * 0.01))
}

map-operaatio luo automaattisesti uuden listan ja palauttaa sen

- - - for loop - - -

tämä on pakko tehdä taulukolla, jos tekee näin (vrt. tuple Pythonissa) */

/* const bruttoPalkat = {
	1: [3000, 20],
	2: [3200, 23],
	3: [3120, 22],
	4: [3050, 21],
	5: [2999, 20],
	6: [3020, 21],
	7: [3800, 29],
	8: [2500, 18],
	9: [2900, 20],
	10: [3200, 23],
	11: [3090, 21],
	12: [2908, 20],
}

const nettoTulot = (taulukko) => {
	let nettoPalkat = {}
	for (let i = 1; i < 13; i++) {
		nettoPalkat[i] = taulukko[i][0] - taulukko [i][0] * (taulukko[i][1] / 100)
	}
	return nettoPalkat
}

console.log(nettoTulot(bruttoPalkat)) */

/*Tehtävä 2.6
Tee ohjelma, joka järjestää taulukon luvut [1,4,100,2,5,4] suuruusjärjestykseen. Käytä
JavaScriptin sort-funktiota oletustoteutuksella (ei omaa compare-funktiota)*/

funktio6 = () => {
    const taulukko = [1,4,100,2,5,4]
    taulukko.sort(function(a, b) {
        return a - b
    })
    return taulukko
}

/* console.log("testaus6:")
console.log(funktio6())

Tehtävä 2.7
Tee ohjelma, joka järjestää taulukon merkkijonot [“1”,”4”,”100”,”2”,”5”,”4”]
aakkosjärjestykseen. Käytä JavaScriptin sort-funktiota oletustoteutuksella (ei omaa
compare-funktiota) */

funktio7 = () => {
    const taulukko = ["1","4","100","2","5","4"]
    taulukko.sort()
    return taulukko
}

/* console.log("testaus7:")
console.log(funktio7())

Tehtävä 2.8
Selitä lyhyesti miten miten JavaScriptin sort-funktio toimii ja mitä tarkoittaa parametrina
annettava compare-funktio.

VASTAUS:
Sort() järjestää muuttaa listan alkiot merkkijonoiksi ja järjestää ne aakkosjärjestykseen (oletus). 
Compare-funktion avulla määritellään sorttauksen järjestys, esim. nouseva järjestys, kuten
tehtävässä 2.6.  

Tehtävä 2.9
Sinulla on [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}]. Luo taulukko, jossa taulukon
objektit on järjestetty arvojen(values) mukaiseen järjestykseen. */

funktio9 = () => {
    // !!! ei onnistunut ihan niin kuin piti, taulukko syötetty väärässä muodossa funktioon
    const taulukko = {"ma": 44, "pe": 100, "ke": 21, "ti": 66, "la": 22}
    const lista = []
    for (var alkio in taulukko) {
        lista.push([alkio, taulukko[alkio]])
    }
    lista.sort(function(a, b) {
        return a[1] - b[1]
    })
    return lista
}

/* console.log("testaus9:")
console.log(funktio9()) */

// HEIKIN RATKAISU:

/* const järjestäOlio = () => {
    const päivät = [{ma:44},{pe:100},{ke:21},{ti:66},{la:22}]
    return päivät.sort((a,b) => {
        if (Object.values(a)[0] < Object.values(b)[0]) return -1
        if (Object.values(a)[0] === Object.values(b)[0]) return 0
        if (Object.values(a)[0] > Object.values(b)[0]) return -1
    })
} */

// TOMIN RATKAISU:

/* const objektiJärjestäjä = () => {
    const objektit = [{"ma":44},{"pe":100},{"ke":21},{"ti":66},{"la":22}]
    return objektit.sort((a,b) => Object.values(a) - Object.values(b))
}

console.log("Järjestettynä arvojen mukaan:", objektiJärjestäjä()) */


/* Tehtävä 2.10 !!!
Sinulla on [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}]. Luo taulukko, jossa taulukon
kentät on järjestetty päivien(avaimet) mukaiseen järjestykseen periaatteella
ma<ti<ke<to<pe<la<su. */

// ANNA-SOFIAN RATKAISU:

/* const jarjPaivat = taulukko.slice().sort((a, b) => {
    const paivat = ["ma", "ti", "ke", "to", "pe", "la", "su"]
    return paivat.indexOf(Object.keys(a)[0]) - paivat.indexOf(Object.keys(b)[0])
}) */


/* Tehtävä 2.11 !!!
Sinulla on [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}]. Luo taulukko, jossa on
mukana objektit, joissa on parillinen arvo.*/ 

// BARBARAN RATKAISU:

/* const objektiLista = [
    {ma:44}
]

const parillisetArvot = (taulukko) => {
    let uusiObjektiLista = []
    taulukko.reduce((acc, arvo) => {
        if (Object.values(arvo) % 2 === 0) {
            return uusiObjektiLista.push(arvo)

        } else {
            return acc
        }
    }, taulukko [0])
    return uusiObjektiLista
} */

// parempi luoda ensin tyhjä lista [ ].concat([arvo]) => acc


/* Tehtävä 2.12 !!!
Sinulla on [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}]. Luo taulukko, jossa on
mukana objektit, joiden avaimen toinen kirjain on e.

- - - Esimerkki: regExp - - -

const daysC = [
	{"ma": 44}, //. . .
]

let regExp = /e/
const daysWithE = E

for(i=0;i<daysC.length;i++) {
	let match = regExp.test(Object,keys(daysC[i]).toString().charAt(1))
	if(match) { daysWithE.push(daysC[i]) }
}

console.log("2.12 päivät joiden toinen kirjain E: ")
console.log(daysWithE) 


Tehtävä 2.13 !!!
Sinulla on [{"ma":44}, {"pe":100}, {"ke":21}, {"ti": 66},{"la":22}]. Tee ohjelma, joka muuttaa objektin
listaksi niin, että [{“ma”:44},{“pe”:100},...]. Ohje: käytä esim. Objectin keys ja values -
funktioita.*/