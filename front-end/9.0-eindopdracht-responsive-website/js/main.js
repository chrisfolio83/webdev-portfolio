//===============================================================================
// BEGIN - Image carrousel code

// ###### Gebruikers Globale Variabelen ######
var showDelay = 3000; // msec
var showRestartDelay = 1500; // msec
var fadeDelay = 5000; // msec
var fadeSpeed = 1000; // msec

// ###### Prive Globale Variabelen AFBLIJVEN!!! ######

var _totaal_fotos;
var _current_foto;
var _current_foto_nr = 1;
var _new_foto;


// functies
// pas als het document geladen is mogen de scripts worden uitgevoerd

$(document).ready(function () {
    initRoteerImages();
}); // einde document ready

// initialiseren carrousel
function initRoteerImages() {
    // hoeveel fotos zijn er
    _totaal_fotos = $('.foto').length; // length is het aantal items in de array
    // wat is de default style
    $('.foto img').css({
        left: '100%'
    });
    // toon de huidige foto
    _current_foto = $('.foto:nth-child(' + _current_foto_nr + ') img');
    // _current_foto = $('.foto:nth-child(1) img');
    _current_foto.animate({
        left: 0
    }, 0)
    // start de slideshow (na de delay!)
    $('#foto_sub').text(_current_foto.attr('title'));

    setTimeout(function () {
        setInterval(roteerImages, fadeDelay)
    }, showDelay - fadeDelay);
}

// animatie caroussel
function roteerImages() {
    _current_foto_nr++;
    if (_current_foto_nr > _totaal_fotos) {
        _current_foto_nr = 1;
    }
    _new_foto = $('.foto:nth-child(' + _current_foto_nr + ') img');
    _new_foto.animate({
        left: 0
    }, fadeSpeed);
    _current_foto.animate({
        left: '-100%'
    }, fadeSpeed, function () {
        _current_foto.css({
            left: '100%'
        });
        _current_foto = _new_foto;
    });
};
// EINDE - Image carrousel code
//===============================================================================




//===============================================================================
// BEGIN code animeren en interactiviteit Cuisine-logo

// Vul de global variabele root met dit tijdlijn Object (hoofd tijdlijn) 
var cuisineLogo = document.getElementsByClassName("animateLogo");


var mainTimeline = new TimelineMax({ // create new timeline in GSAP
    delay: 0, // global delay in animation?
    repeat: 0, // global repeat in animation?
});

function getMovieClipTimeline() { // create a custom function that builds and returns a textTimeline
    var movieClipTimeline = new TimelineMax( // initialise movieClipTimeline with an TimeLine(Max) instance with options
        {
            delay: 0, // main delay in movieClipTimeline animation
            repeat: 0, // main repeat in movieClipTimeline animation
            yoyo: false // yoyo the textTimeLine animation?
        }
    );

    movieClipTimeline
        .to( // From Tween start chained on previous
            cuisineLogo, // Logo element
            2, // duration in sec
            { //fromVars start
                rotation: 360, // Y from	
                ease: Bounce.easeOut // easing type
            }, // fromVars end								
        ); // from Tween end (and chain terminated)

    return movieClipTimeline; // return the timeLine (not played yet!)
} // end of the custom function

mainTimeline // still an empty timeline
    .add(getMovieClipTimeline()) // now add the moviecliptimeline...

// EINDE code animeren en interactiviteit Cuisine-logo
//===============================================================================



// =======================================================
/* === BEGIN recepten-filter code === */

/* filter op broodbeleg */
var allesBtn = document.getElementById('allesbtn');

if (allesBtn) {
    allesBtn.addEventListener('change', function (e) {
        $(".all").show();
    });
}

/* filter op broodbeleg */
var broodbelegBtn = document.getElementById('broodbelegbtn');

if (broodbelegBtn) {
    broodbelegBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".broodbeleg").show();
    });
}

/* filter op deegwaren */
var deegwarenBtn = document.getElementById('deegwarenbtn');

if (deegwarenBtn) {
    deegwarenBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".deegwaren").show();
    });
}

/* filter op gevogelte */
var gevogelteBtn = document.getElementById('gevogeltebtn');

if (gevogelteBtn) {
    gevogelteBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".gevogelte").show();
    });
}

/* filter op snack */
var snackBtn = document.getElementById('snackbtn');

if (snackBtn) {
    snackBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".snack").show();
    });
}

/* filter op soep */
var soepBtn = document.getElementById('soepbtn');

if (soepBtn) {
    soepBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".soep").show();
    });
}

/* filter op vis */
var visBtn = document.getElementById('visbtn');

if (visBtn) {
    visBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".vis").show();
    });
}

/* filter op vlees */
var vleesBtn = document.getElementById('vleesbtn');

if (vleesBtn) {
    vleesBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".vlees").show();
    });
}

/* filter op koken */
var kokenBtn = document.getElementById('kokenbtn');

if (kokenBtn) {
    kokenBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".koken").show();
    });
}

/* filter op bakken */
var bakkenBtn = document.getElementById('bakkenbtn');

if (bakkenBtn) {
    bakkenBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".bakken").show();
    });
}

/* filter op braden */
var bradenBtn = document.getElementById('bradenbtn');

if (bradenBtn) {
    bradenBtn.addEventListener('change', function (e) {
        $(".all").hide();
        $(".braden").show();
    });
}
/* === EINDE recepten-filter code === */
