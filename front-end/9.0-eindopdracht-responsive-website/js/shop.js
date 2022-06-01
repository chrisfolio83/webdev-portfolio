/* === BEGIN shop-filter code === */

/* filter op alles */
var allesBtn = document.getElementById('allesbtn');

allesBtn.addEventListener('click', function() {
   $(".all").show();    
});


/* filter op jamie */
var jamieBtn = document.getElementById('jamiebtn');

jamieBtn.addEventListener('click', function() {
   $(".all").hide(); 
    $(".jamie").show();
});


/* filter op nigella */
var nigellaBtn = document.getElementById('nigellabtn');

nigellaBtn.addEventListener('click', function() {
   $(".all").hide(); 
    $(".nigella").show();
});


/* filter op gordon */
var gordonBtn = document.getElementById('gordonbtn');

gordonBtn.addEventListener('click', function() {
   $(".all").hide(); 
    $(".gordon").show();
});


/* filter op yotam */
var yotamBtn = document.getElementById('yotambtn');

yotamBtn.addEventListener('click', function() {
   $(".all").hide(); 
    $(".yotam").show();
});


/* filter op NL */
var nlBtn = document.getElementById('nlbtn');

nlBtn.addEventListener('click', function() {
   $(".all").hide(); 
    $(".nl").show();
});


/* filter op EN */
var enBtn = document.getElementById('enbtn');

enBtn.addEventListener('click', function() {
   $(".all").hide(); 
    $(".en").show();
});