<!-- dit zijn de extra editor-knoppen die worden weergegeven wanneer gebruiker is ingelogd -->
<form action="<?=$_SERVER['PHP_SELF']?>" method="get" class="inlineknop">
    <button type="submit" name="id" value="<?=$_GET['id']?>" class="btn btn-info">bericht aanpassen</button>
    <input  type="hidden" name="do" value="edit">   
</form>
<form action="<?=$_SERVER['PHP_SELF']?>" method="get" class="inlineknop">
    <button type="submit" name="id" value="<?=$_GET['id']?>" class="btn btn-info">bericht verwijderen</button>
    <input  type="hidden" name="do" value="delete">                    
</form>