<?php
// nieuwe formatcontroller laden
$format         = new FormatController();
// nieuw berichtmodel laden
$bericht        = new BerichtModel();

// het GET-id leesbaarder maken
$id = $_GET['id'];

?><div class="container">    
    <div class="row container">
        <form action="<?= $_SERVER['PHP_SELF'] . '?id=' . $id ?>" method="post">
            <!-- laat de titel zien en maak de eerste letter een hoofdletter-->
            <h1><?=  ucfirst($bericht->getTitel($id)) . ' - aanpassen'  ?></h1>
            <!-- laat de publicatiedatum zien en formatteer deze naar Nederlandse weergave -->
            <p><?=  $format -> formatDate( $bericht -> getPubDate($id) )  ?></p>

            <h3>Titel</h3>
            <!-- de titel ophalen in de textarea zodat deze kan worden aangepast -->
            <textarea class="form-control bericht-titel" name="titel-aangepast" required><?=  ucfirst( $bericht -> getTitel($id) )  ?></textarea>

            <h3>Inhoud</h3>
            <!-- de content ophalen in de textarea zodat deze kan worden aangepast -->
            <textarea class="form-control bericht-inhoud" name="inhoud-aangepast" required><?=  ucfirst($bericht -> getContent($id) )  ?></textarea>
            
            <!-- het GET-id wordt meegegeven zodat de query op het juiste bericht van toepassing is -->
            <button type="submit"  name="id" value="<?=  $id  ?>" class="btn btn-info">opslaan</button>
            <!-- het hidden-field zorgt ervoor dat er nog een extra POST-array-waarde 'opslaan' wordt meegegeven zodat de controller weet wat er moet gebeuren-->
            <input type="hidden" name="post" value="opslaan">
            
            <!-- ga terug naar de view-mode van het huidige bericht obv het GET-id -->
            <a href="?id=<?=  $id  ?>" class="annuleren">annuleren</a>
        </form>                
    </div>        
</div>