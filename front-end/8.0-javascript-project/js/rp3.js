// deze functie laadt de jQuery responsive imagemap plugin
$(document).ready(function (e) {
    $('img[usemap]').rwdImageMaps();
});


/* 	======================================================================
    	Preload images
    =========================================================================== */
    new Image().src='../images/rp3-av-mouseover.png';    
    new Image().src='../images/rp3-cpu-mouseover.png';
    new Image().src='../images/rp3-csi-mouseover.png';
    new Image().src='../images/rp3-gpio-mouseover.png';
    new Image().src='../images/rp3-hdmi-mouseover.png';
    new Image().src='../images/rp3-lan-mouseover.png';
    new Image().src='../images/rp3-microusb-mouseover.png';
    new Image().src='../images/rp3-normal.png';
    new Image().src='../images/rp3-sddsi-mouseover.png';
    new Image().src='../images/rp3-usbgb-mouseover.png';



window.onload = function () {     // zorgt ervoor dat het script pas echt gaat draaien nadat de webpagina geladen is
    
    /* 	======================================================================
    	Variables
    =========================================================================== */
    var d = document;                 // afkorting voor luie typers
    var imagesFolder = '../images/';    // handig voor wanneer het pad verandert

    // alle variabelen declareren om de eventlisteners aan te hangen
    var rp3csiBtn = d.getElementById("rp3csi");
    var rp3avBtn = d.getElementById("rp3av");
    var rp3gpioBtn = d.getElementById("rp3gpio");
    var rp3cpuBtn = d.getElementById("rp3cpu");
    var rp3hdmiBtn = d.getElementById("rp3hdmi");
    var rp3lanBtn = d.getElementById("rp3lan");
    var rp3microBtn = d.getElementById("rp3micro");
    var rp3usbgbBtn = d.getElementById("rp3usbgb");
    var rp3sddsiBtn = d.getElementById("rp3sddsi");

    // in deze elementen wordt de data van de array geïnjecteerd
    var rp3sub = d.getElementById("rp3sub");
    var rp3txt = d.getElementById("rp3txt");


    /* 	======================================================================
    	Functions
    =========================================================================== */

    // graceful degredation opheffen indien javascript wordt geladen
    d.getElementById("extraRp3").className="degrade";
    
    // deze functie verandert de afbeelding bij een mouseover
    function swapImage(welkObj, fileNaam) {
        welkObj.src = imagesFolder + fileNaam;
    }

    // deze functie injecteert de juiste header in de h2, vanuit de database/array, na een click-event
    function swapH2(item) {
        rp3sub.textContent = item.title;
    }

    // deze functie injecteert de juiste paragraaftekst in de p, vanuit de database/array, na een click-event
    function swapP(item) {
        rp3txt.textContent = item.text;
    }


    /* 	======================================================================
    	Event Binding & Initialisation
    =========================================================================== */

    // eventlisteners op het csi-onderdeel
    rp3csiBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-csi-mouseover.png");
    });
    rp3csiBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3csiBtn.addEventListener('click', function (e) {
        swapH2(rp3item9);
        swapP(rp3item9);
    });


    // eventlisteners op het av-jack-onderdeel
    rp3avBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-av-mouseover.png");
    });
    rp3avBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3avBtn.addEventListener('click', function (e) {
        swapH2(rp3item8);
        swapP(rp3item8);
    });


    // eventlisteners op het gpio-onderdeel
    rp3gpioBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-gpio-mouseover.png");
    });
    rp3gpioBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3gpioBtn.addEventListener('click', function (e) {
        swapH2(rp3item7);
        swapP(rp3item7);
    });


    // eventlisteners op het cpu-onderdeel
    rp3cpuBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-cpu-mouseover.png");
    });
    rp3cpuBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3cpuBtn.addEventListener('click', function (e) {
        swapH2(rp3item5);
        swapP(rp3item5);
    });


    // eventlisteners op het hdmi-onderdeel
    rp3hdmiBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-hdmi-mouseover.png");
    });
    rp3hdmiBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3hdmiBtn.addEventListener('click', function (e) {
        swapH2(rp3item3);
        swapP(rp3item3);
    });


    // eventlisteners op het lan-onderdeel
    rp3lanBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-lan-mouseover.png");
    });
    rp3lanBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3lanBtn.addEventListener('click', function (e) {
        swapH2(rp3item2);
        swapP(rp3item2);
    });


    // eventlisteners op het micro-usb-onderdeel
    rp3microBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-microusb-mouseover.png");
    });
    rp3microBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3microBtn.addEventListener('click', function (e) {
        swapH2(rp3item4);
        swapP(rp3item4);
    });


    // eventlisteners op het usb-/gigabit-onderdeel
    rp3usbgbBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-usbgb-mouseover.png");
    });
    rp3usbgbBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3usbgbBtn.addEventListener('click', function (e) {
        swapH2(rp3item1);
        swapP(rp3item1);
    });


    // eventlisteners op het sd-/dsi-onderdeel
    rp3sddsiBtn.addEventListener('mouseover', function (e) {
        swapImage(rp3image, "rp3-sddsi-mouseover.png");
    });
    rp3sddsiBtn.addEventListener('mouseout', function (e) {
        swapImage(rp3image, "rp3-normal.png");
    });
    rp3sddsiBtn.addEventListener('click', function (e) {
        swapH2(rp3item6);
        swapP(rp3item6);
    });


} // Einde window.onload