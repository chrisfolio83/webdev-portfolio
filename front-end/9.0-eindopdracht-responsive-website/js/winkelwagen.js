// VARIABELEN klaarzetten

var prijs1aanwezig = 0,
    prijs2aanwezig = 0,
    prijs3aanwezig = 0,
    prijs4aanwezig = 0,
    prijs5aanwezig = 0,
    prijs6aanwezig = 0,
    prijs7aanwezig = 0,
    prijs8aanwezig = 0,
    prijs9aanwezig = 0,
    prijs10aanwezig = 0;

var boek1btn = document.getElementById("boek1btn");
var boek2btn = document.getElementById("boek2btn");
var boek3btn = document.getElementById("boek3btn");
var boek4btn = document.getElementById("boek4btn");
var boek5btn = document.getElementById("boek5btn");
var boek6btn = document.getElementById("boek6btn");
var boek7btn = document.getElementById("boek7btn");
var boek8btn = document.getElementById("boek8btn");
var boek9btn = document.getElementById("boek9btn");
var boek10btn = document.getElementById("boek10btn");

var showboek1 = $('#wwbookitem1');
var showboek2 = $('#wwbookitem2');
var showboek3 = $('#wwbookitem3');
var showboek4 = $('#wwbookitem4');
var showboek5 = $('#wwbookitem5');
var showboek6 = $('#wwbookitem6');
var showboek7 = $('#wwbookitem7');
var showboek8 = $('#wwbookitem8');
var showboek9 = $('#wwbookitem9');
var showboek10 = $('#wwbookitem10');

var prullenbak1 = document.getElementById('prullenbak1');
var prullenbak2 = document.getElementById('prullenbak2');
var prullenbak3 = document.getElementById('prullenbak3');
var prullenbak4 = document.getElementById('prullenbak4');
var prullenbak5 = document.getElementById('prullenbak5');
var prullenbak6 = document.getElementById('prullenbak6');
var prullenbak7 = document.getElementById('prullenbak7');
var prullenbak8 = document.getElementById('prullenbak8');
var prullenbak9 = document.getElementById('prullenbak9');
var prullenbak10 = document.getElementById('prullenbak10');

var boek1aanwezig = window.localStorage.getItem('boek1');
var boek2aanwezig = window.localStorage.getItem('boek2');
var boek3aanwezig = window.localStorage.getItem('boek3');
var boek4aanwezig = window.localStorage.getItem('boek4');
var boek5aanwezig = window.localStorage.getItem('boek5');
var boek6aanwezig = window.localStorage.getItem('boek6');
var boek7aanwezig = window.localStorage.getItem('boek7');
var boek8aanwezig = window.localStorage.getItem('boek8');
var boek9aanwezig = window.localStorage.getItem('boek9');
var boek10aanwezig = window.localStorage.getItem('boek10');

prijs1aanwezig = +window.localStorage.getItem('prijs1');
prijs2aanwezig = +window.localStorage.getItem('prijs2');
prijs3aanwezig = +window.localStorage.getItem('prijs3');
prijs4aanwezig = +window.localStorage.getItem('prijs4');
prijs5aanwezig = +window.localStorage.getItem('prijs5');
prijs6aanwezig = +window.localStorage.getItem('prijs6');
prijs7aanwezig = +window.localStorage.getItem('prijs7');
prijs8aanwezig = +window.localStorage.getItem('prijs8');
prijs9aanwezig = +window.localStorage.getItem('prijs9');
prijs10aanwezig = +window.localStorage.getItem('prijs10');


var totaalprijs = document.getElementById('totaalprijs');
var totaal = prijs1aanwezig + prijs2aanwezig + prijs3aanwezig + prijs4aanwezig + prijs5aanwezig + prijs6aanwezig + prijs7aanwezig + prijs8aanwezig + prijs9aanwezig + prijs10aanwezig;


//==========================
// BOEK-item1

// boek1 - toevoegen aan winkelmandje
if (boek1btn) {
    boek1btn.addEventListener('click', function () {
        localStorage.setItem('boek1', 'ordered1');
        localStorage.setItem('prijs1', 20);
        $('#artikel1besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek1 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek1aanwezig == 'ordered1') {
        showBook1();
    }
}


// boek1 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak1) {
    prullenbak1.addEventListener('click', function () {
        localStorage.removeItem('boek1');
        localStorage.removeItem('prijs1');
        showboek1.addClass('hidebook1');
        window.location.reload();
    }, false)
}


// boek1 - tonen functie
function showBook1() {
    showboek1.removeClass('hidebook1');
}
// EINDE boekitem1 script
// ==========================



//==========================
// BOEK-item2

// boek2 - toevoegen aan winkelmandje
if (boek2btn) {
    boek2btn.addEventListener('click', function () {
        localStorage.setItem('boek2', 'ordered2');
        localStorage.setItem('prijs2', 19);
        $('#artikel2besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek2 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek2aanwezig == 'ordered2') {
        showBook2();
    }
}


// boek2 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak2) {
    prullenbak2.addEventListener('click', function () {
        localStorage.removeItem('boek2');
        localStorage.removeItem('prijs2');
        showboek2.addClass('hidebook2');
        window.location.reload();
    }, false)
}


// boek2 - tonen functie
function showBook2() {
    showboek2.removeClass('hidebook2');
}
// EINDE boekitem2 script
// ==========================



//==========================
// BOEK-item3

// boek3 - toevoegen aan winkelmandje
if (boek3btn) {
    boek3btn.addEventListener('click', function () {
        localStorage.setItem('boek3', 'ordered3');
        localStorage.setItem('prijs3', 20);
        $('#artikel3besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek3 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek3aanwezig == 'ordered3') {
        showBook3();
    }
}


// boek3 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak3) {
    prullenbak3.addEventListener('click', function () {
        localStorage.removeItem('boek3');
        localStorage.removeItem('prijs3');
        showboek3.addClass('hidebook3');
        window.location.reload();
    }, false)
}


// boek3 - tonen functie
function showBook3() {
    showboek3.removeClass('hidebook3');
}
// EINDE boekitem3 script
// ==========================



//==========================
// BOEK-item4

// boek4 - toevoegen aan winkelmandje
if (boek4btn) {
    boek4btn.addEventListener('click', function () {
        localStorage.setItem('boek4', 'ordered4');
        localStorage.setItem('prijs4', 29);
        $('#artikel4besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek4 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek4aanwezig == 'ordered4') {
        showBook4();
    }
}


// boek4 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak4) {
    prullenbak4.addEventListener('click', function () {
        localStorage.removeItem('boek4');
        localStorage.removeItem('prijs4');
        showboek4.addClass('hidebook4');
        window.location.reload();
    }, false)
}


// boek4 - tonen functie
function showBook4() {
    showboek4.removeClass('hidebook4');
}
// EINDE boekitem4 script
// ==========================


//==========================
// BOEK-item5

// boek5 - toevoegen aan winkelmandje
if (boek5btn) {
    boek5btn.addEventListener('click', function () {
        localStorage.setItem('boek5', 'ordered5');
        localStorage.setItem('prijs5', 32);
        $('#artikel5besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek5 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek5aanwezig == 'ordered5') {
        showBook5();
    }
}


// boek5 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak5) {
    prullenbak5.addEventListener('click', function () {
        localStorage.removeItem('boek5');
        localStorage.removeItem('prijs5');
        showboek5.addClass('hidebook5');
        window.location.reload();
    }, false)
}


// boek5 - tonen functie
function showBook5() {
    showboek5.removeClass('hidebook5');
}
// EINDE boekitem5 script
// ==========================

//==========================
// BOEK-item6

// boek6 - toevoegen aan winkelmandje
if (boek6btn) {
    boek6btn.addEventListener('click', function () {
        localStorage.setItem('boek6', 'ordered6');
        localStorage.setItem('prijs6', 29);
        $('#artikel6besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek6 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek6aanwezig == 'ordered6') {
        showBook6();
    }
}


// boek6 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak6) {
    prullenbak6.addEventListener('click', function () {
        localStorage.removeItem('boek6');
        localStorage.removeItem('prijs6');
        showboek6.addClass('hidebook6');
        window.location.reload();
    }, false)
}


// boek6 - tonen functie
function showBook6() {
    showboek6.removeClass('hidebook6');
}
// EINDE boekitem6 script
// ==========================



//==========================
// BOEK-item7

// boek7 - toevoegen aan winkelmandje
if (boek7btn) {
    boek7btn.addEventListener('click', function () {
        localStorage.setItem('boek7', 'ordered7');
        localStorage.setItem('prijs7', 29);
        $('#artikel7besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek7 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek7aanwezig == 'ordered7') {
        showBook7();
    }
}


// boek7 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak7) {
    prullenbak7.addEventListener('click', function () {
        localStorage.removeItem('boek7');
        localStorage.removeItem('prijs7');
        showboek7.addClass('hidebook7');
        window.location.reload();
    }, false)
}


// boek7 - tonen functie
function showBook7() {
    showboek7.removeClass('hidebook7');
}
// EINDE boekitem7 script
// ==========================


//==========================
// BOEK-item8

// boek8 - toevoegen aan winkelmandje
if (boek8btn) {
    boek8btn.addEventListener('click', function () {
        localStorage.setItem('boek8', 'ordered8');
        localStorage.setItem('prijs8', 27);
        $('#artikel8besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek8 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek8aanwezig == 'ordered8') {
        showBook8();
    }
}


// boek8 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak8) {
    prullenbak8.addEventListener('click', function () {
        localStorage.removeItem('boek8');
        localStorage.removeItem('prijs8');
        showboek8.addClass('hidebook8');
        window.location.reload();
    }, false)
}


// boek8 - tonen functie
function showBook8() {
    showboek8.removeClass('hidebook8');
}
// EINDE boekitem8 script
// ==========================


//==========================
// BOEK-item9

// boek9 - toevoegen aan winkelmandje
if (boek9btn) {
    boek9btn.addEventListener('click', function () {
        localStorage.setItem('boek9', 'ordered9');
        localStorage.setItem('prijs9', 25);
        $('#artikel9besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek9 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek9aanwezig == 'ordered9') {
        showBook9();
    }
}


// boek9 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak9) {
    prullenbak9.addEventListener('click', function () {
        localStorage.removeItem('boek9');
        localStorage.removeItem('prijs9');
        showboek9.addClass('hidebook9');
        window.location.reload();
    }, false)
}


// boek9 - tonen functie
function showBook9() {
    showboek9.removeClass('hidebook9');
}
// EINDE boekitem9 script
// ==========================


//==========================
// BOEK-item10

// boek10 - toevoegen aan winkelmandje
if (boek10btn) {
    boek10btn.addEventListener('click', function () {
        localStorage.setItem('boek10', 'ordered10');
        localStorage.setItem('prijs10', 14);
        $('#artikel10besteld').removeClass('showbesteldtekst')
    }, false);
}


// boek10 - tonen in winkelwagen
if (document.getElementById("winkelwagen")) {
    if (boek10aanwezig == 'ordered10') {
        showBook10();
    }
}


// boek10 - verwijderen uit winkelwagen wanneer prullenbak-icon wordt geklikt
if (prullenbak10) {
    prullenbak10.addEventListener('click', function () {
        localStorage.removeItem('boek10');
        localStorage.removeItem('prijs10');
        showboek10.addClass('hidebook10');
        window.location.reload();
    }, false)
}


// boek10 - tonen functie
function showBook10() {
    showboek10.removeClass('hidebook10');
}
// EINDE boekitem10 script
// ==========================




// ##################################################################################################
// ###                                                                                            ###
// ###         IIFE only I could turnnn back tiiiime..                                            ###
// ###                i would go less verbose, but at least it's working now!                     ###
// ###                                                                                            ###
// ##################################################################################################

// conditional IIFE om totaalprijs correct weer te geven
if (totaalprijs) {
    (function () {
        totaalprijs.innerHTML = '&euro;' + totaal + ",-";
    })();
}
