<?php  
// nieuwe formatcontroller laden
$format = new FormatController();

// het GET-id leesbaarder maken
$id = $_GET['id'];

?><div class="container">    
    <div class="row container">

        <h1>Nieuw bericht</h1>
        <!-- de huidige datum-tijd in de juiste notatie laden -->
        <p><?=  $format->formatDate()  ?></p>
        <!-- action obv huidige pagina en GET-id -->
        <form action="<?=  $_SERVER['PHP_SELF'] . '?id=' . $id  ?>" method="post">

            <h3>Titel</h3>
            <textarea class="form-control bericht-titel" name="titel-nieuw" required></textarea>
            
            <h3>Inhoud</h3>
            <textarea class="form-control bericht-inhoud" name="inhoud-nieuw" required></textarea>
            
            <!-- het GET-id wordt meegegeven zodat de query op het juiste bericht van toepassing is -->
            <button type="submit"  name="id" value="<?=  $id  ?>" class="btn btn-info">opslaan</button>
            
            <!-- het hidden-field zorgt ervoor dat er nog een extra POST-array-waarde 'opslaan' wordt meegegeven zodat de controller weet wat er moet gebeuren-->
            <input type="hidden" name="post" value="opslaan">

            <!-- terug naar root/home -->
            <a href="/" class="annuleren">annuleren</a>
        </form>                
    </div>        
</div>