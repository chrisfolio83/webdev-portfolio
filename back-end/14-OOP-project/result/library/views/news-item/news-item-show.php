<?php 
// nieuw berichtmodel laden
$bericht    = new BerichtModel();
// nieuwe formatcontroller laden
$format     = new FormatController();
// nieuwe newscontroller laden
$news       = new NewsController();

// meer leesbare weergave van het GET-id
$id = $_GET['id'];

// checken of er POST-waarden zijn die het bericht moeten aanpassen/aanmaken
$news->CRUD();

?><div class="container">    
    <div class="row container">
        <!-- de titel met hoofdletter weergeven -->
        <h1><?=  ucfirst(               $bericht -> getTitel(   $id ) )?></h1>
        <!-- de publicatiedatum formatten en weergeven  -->
         <p><?=  $format -> formatDate( $bericht -> getPubDate( $id ) )?></p>
        <!-- de inhoud met hoofdletter weergeven -->
         <p><?=  ucfirst(               $bericht -> getContent( $id ) )?></p>

<?php  
// toon de editor-knoppen wanneer van toepassing
$news -> showEditorButtons()  
?>        
        <!-- terug naar root/home -->
        <br><a href="/">Terug</a>
    </div>        
</div>