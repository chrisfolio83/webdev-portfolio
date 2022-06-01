<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="favicon.ico">

	<!-- de pagina-titel uit de variabele halen en weergeven -->
	<title><?= $page_title ?></title>

    <link href="<?= CSS_URL . '/bootstrap.css' ?>" rel="stylesheet">
    <link href="<?= CSS_URL . '/main.css' 	   ?>" rel="stylesheet">
</head>

<body>
    <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <?php require_once(INC . "/inloggen.php")?>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Web Developer</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/">Home</a></li>
                    <li><a href="<?= PAGE_URL . 'over_mij.php' ?>">Over Mij</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <!--/.navbar-collapse -->
        </div>
    </div>