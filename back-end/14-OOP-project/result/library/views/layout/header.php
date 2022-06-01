<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="favicon.ico">
    
	<!-- de pagina-titel uit de variabele halen en weergeven -->
	<title><?= $page_title ?></title>
    
    <!-- laad bootstrap-styles -->
    <link href="<?=  CSS_URL  ?>/bootstrap.css" rel="stylesheet">
    <!-- laad custom-/extra-styles -->
    <link href="<?=  CSS_URL  ?>/custom.css"    rel="stylesheet">
</head>

<body>      
	<div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">


            <!--------------------------------------->
            <!--   laat het LOGIN-gedeelte zien    --> 
            <!--------------------------------------->
            
            <?php   require_once 'inloggen.php'    ;

                // eventueel mijn DEV-tools laten zien:
                // $dev = new DevController();
                // $dev->myDevTools();
            ?>
            
            <!--------------------------------------->
            

            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Web Developer</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">

                    <!-- maak een nieuwe maincontroller-instance aan -->
                    <?php $main = new MainController(); ?>
                    
                    <!-- roep de activemenu-functie aan vanuit de maincontroller -->
                    <li<?=  $main->activeMenu('index')   ?>>
                        <a href="<?=  WEB_URL  ?>/index.php">Home</a>
                    </li>

                    <!-- roep de activemenu-functie aan vanuit de maincontroller -->
                    <li<?=  $main->activeMenu('over_mij') ?>>
                        <a href="<?=  WEB_URL  ?>/pages/over-mij.php">About</a>
                    </li>

                    <!-- roep de activemenu-functie aan vanuit de maincontroller -->
                    <li<?=  $main->activeMenu('contact')  ?>>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!--/.navbar-collapse -->
        </div>
    </div>