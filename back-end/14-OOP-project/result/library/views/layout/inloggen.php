<?php
// maak een nieuwe newscontroller-instance aan
$login  =   New LoginController();
// maak een nieuwe maincontroller-instance aan
$main   =   New MainController();


// indien er is ingelogd..
if ($login->isIngelogd()){
// ..laat dan een bericht zien met gebruikersnaam (opgehaald uit SESSION-array) erin
// De ucfirst()-method maakt de eerste letter uppercase
// Toon tevens de uitloggen- en nieuw-bericht-knoppen
?>
<div class="when-ingelogd-container">
    <p class="welkomtekst">Welkom <?= ucfirst(trim($_SESSION['gebruikersnaam'])) ?>!</p>
    <form name="logoutform" method="post" action="<?= $main->phpAction() ?>">
        <button type="submit" class="btn btn-info when-ingelogd-btn">uitloggen</button>            
        <input type="hidden" name="logout">
    </form>  
    <form name="logoutform" method="post" action="?id=999999999&do=new">
        <button type="submit" class="btn btn-info when-ingelogd-btn">nieuw bericht</button>           
    </form> 
</div>  

<?php
} else {   
// en anders: echo het inlog formulier (met daarin een aangepaste $phpaction obv wel/niet GET-id opgenomen)
?>
<form class="navbar-form navbar-right" method="post" action="<?= $main->phpAction() ?>" name="inlogform">
        <div class="form-group">
            <input type="text" placeholder="Gebruikersnaam" class="form-control" name="gebruikersnaam" required>
        </div>
        <div class="form-group">
            <input type="password" placeholder="Wachtwoord" class="form-control" name="wachtwoord" required>
        </div>
        <button type="submit" class="btn btn-info">Inloggen</button>
</form>
<?php
}