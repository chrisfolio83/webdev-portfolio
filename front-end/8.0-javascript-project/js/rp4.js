// deze functie laadt de jQuery responsive imagemap plugin
$(document).ready(function (e) {
    $('img[usemap]').rwdImageMaps();
});


/* 	======================================================================
    	Preload images
    =========================================================================== */
    new Image().src='../images/rp4-av-mouseover.png';   
    new Image().src='../images/rp4-cpu-mouseover.png';
    new Image().src='../images/rp4-csi-mouseover.png';
    new Image().src='../images/rp4-gb-mouseover.png';
    new Image().src='../images/rp4-gpio-mouseover.png';
    new Image().src='../images/rp4-hdmi-mouseover.png';
    new Image().src='../images/rp4-normal.png';
    new Image().src='../images/rp4-ram-mouseover.png';
    new Image().src='../images/rp4-sddsi-mouseover.png';
    new Image().src='../images/rp4-usbc-mouseover.png';
    new Image().src='../images/rp4-usb-mouseover.png';
    
   

window.onload = function () {     // zorgt ervoor dat het script pas echt gaat draaien nadat de webpagina geladen is
    
    /* 	======================================================================
    	Variables
    =========================================================================== */
    var d = document;                   // afkorting voor luie typers
    var imagesFolder = '../images/';      // handig voor wanneer het pad verandert
    
    // alle variabelen declareren om de eventlisteners aan te hangen
    var rp4avBtn = d.getElementById("rp4av");
    var rp4sddsiBtn = d.getElementById("rp4sddsi");
    var rp4csiBtn = d.getElementById("rp4csi");
    var rp4gbBtn = d.getElementById("rp4gb");
    var rp4gpioBtn = d.getElementById("rp4gpio");
    var rp4hdmiBtn = d.getElementById("rp4hdmi");
    var rp4ramBtn = d.getElementById("rp4ram");
    var rp4usbcBtn = d.getElementById("rp4usbc");
    var rp4usbBtn = d.getElementById("rp4usb");
    var rp4cpuBtn = d.getElementById("rp4cpu");

    // in deze elementen wordt de data van de array geïnjecteerd
    var rp4sub = d.getElementById("rp4sub");
    var rp4txt = d.getElementById("rp4txt");

    
    /* 	======================================================================
    	Functions
    =========================================================================== */
    
    // graceful degredation opheffen indien javascript wordt geladen
    d.getElementById("extraRp4").className="degrade";
    
    // deze functie verandert de afbeelding bij een mouseover
    function swapImage(welkObj, fileNaam) {
        welkObj.src = imagesFolder + fileNaam;
    }
    
    // deze functie injecteert de juiste header in de h2, vanuit de database/array, na een click-event
    function swapH2(item) {
        rp4sub.textContent = item.title;
    }

    // deze functie injecteert de juiste paragraaftekst in de p, vanuit de database/array, na een click-event
    function swapP(item) {
        rp4txt.textContent = item.text;
    }


    /* 	======================================================================
    	Event Binding & Initialisation
    =========================================================================== */

    // eventlisteners op het av-jack-onderdeel
    rp4avBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-av-mouseover.png");
    });
    rp4avBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4avBtn.addEventListener('click', function (e) {
        swapH2(rp4item9);
        swapP(rp4item9);
    });


    // eventlisteners op het sd-dsi-onderdeel
    rp4sddsiBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-sddsi-mouseover.png");
    });
    rp4sddsiBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4sddsiBtn.addEventListener('click', function (e) {
        swapH2(rp4item7);
        swapP(rp4item7);
    });


    // eventlisteners op het csi-onderdeel
    rp4csiBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-csi-mouseover.png");
    });
    rp4csiBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4csiBtn.addEventListener('click', function (e) {
        swapH2(rp4item10);
        swapP(rp4item10);
    });


    // eventlisteners op het gigabit-onderdeel
    rp4gbBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-gb-mouseover.png");
    });
    rp4gbBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4gbBtn.addEventListener('click', function (e) {
        swapH2(rp4item1);
        swapP(rp4item1);
    });


    // eventlisteners op het gpio-onderdeel
    rp4gpioBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-gpio-mouseover.png");
    });
    rp4gpioBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4gpioBtn.addEventListener('click', function (e) {
        swapH2(rp4item8);
        swapP(rp4item8);
    });


    // eventlisteners op het hdmi-onderdeel
    rp4hdmiBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-hdmi-mouseover.png");
    });
    rp4hdmiBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4hdmiBtn.addEventListener('click', function (e) {
        swapH2(rp4item3);
        swapP(rp4item3);
    });


    // eventlisteners op het ram-onderdeel
    rp4ramBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-ram-mouseover.png");
    });
    rp4ramBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4ramBtn.addEventListener('click', function (e) {
        swapH2(rp4item6);
        swapP(rp4item6);
    });


    // eventlisteners op het usbc-onderdeel
    rp4usbcBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-usbc-mouseover.png");
    });
    rp4usbcBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4usbcBtn.addEventListener('click', function (e) {
        swapH2(rp4item4);
        swapP(rp4item4);
    });


    // eventlisteners op het usb-onderdeel
    rp4usbBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-usb-mouseover.png");
    });
    rp4usbBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4usbBtn.addEventListener('click', function (e) {
        swapH2(rp4item2);
        swapP(rp4item2);
    });


    // eventlisteners op het cpu-onderdeel
    rp4cpuBtn.addEventListener('mouseover', function (e) {
        swapImage(rp4image, "rp4-cpu-mouseover.png");
    });
    rp4cpuBtn.addEventListener('mouseout', function (e) {
        swapImage(rp4image, "rp4-normal.png");
    });
    rp4cpuBtn.addEventListener('click', function (e) {
        swapH2(rp4item5);
        swapP(rp4item5);
    });


} // Einde window.onload