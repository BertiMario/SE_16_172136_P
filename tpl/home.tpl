<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Case</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link rel="stylesheet" href="/css/stile.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"> 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="/scripts/script.js"> </script>
</head>
<!--Carico la lista dei primi al caricamento della pagina-->
<body onload="caricaMenu(1)">
<!--nav bar ----------------------------------------------------------------------------------------->
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav navbar-right">
        <li><a href=""><span class="glyphicon glyphicon-log-in"></span> LogOut</a></li>
      </ul>
    </div>
  </div>
</nav>
  <!-- parte centrale --------------------------------------------------------------------------------->
<div class="container">
	<div class="row">
  		<div id="pagina" class="col-sm-12">
        <!-- div di visualizzazione del menu-->
			<div id="menu" class="row" style='display:block'>
				<p id="menu"></p><!--qui javascript carica il menu-->
			</div> 
        <!-- div di confema di selezione di un piatto-->
			<div  id="menuConfirm" class="row" style='display:none'>
				<div class="col-md-2 col-sm-2 col-xs-2"></div>
				<div class="col-md-8 col-sm-8 col-xs-8">
					<div class="media">
					    <div class="media-left">
                            <p id="pImgTitleDesc"> </p> <!--qui javascript carica l'immagine-->
					      
					    </div>
					    <div class="media-body">
					      <h4 class="media-heading">
					      	<p id="pTitleDesc"></p> <!--qui javascript carica il nome del piatto-->
					      </h4>
					      <p id="pDesc">  </p> <!--qui javascript carica la descrizione-->
						  <p id="pBtnConferma">   </p> <!--qui javascript carica il bottne di conferma-->
					    </div>
					 </div>
				</div>
			</div>   
        <!-- div di visualizzazione del riepilogo a fine ordine-->
			<div  id="menuRiepilogo" class="row" style='display:none'>
					<p id="riepilogoOrdine"> </p> <!--qui javascript carica il riepilogo-->
                <form method="post" action="index.js">
						  <input type="submit" class="btn btn-info" value="Conferma e Invia ordine">
						  <input type="button" class="btn btn-info" value="Cambia ordinazione" onclick="caricaMenu(1);hideMenuConfirm();">
                    </form>
						</div>
					 </div>

			</div> 
    <!-- div dei bottoni di selezione tra primi/secondi...-->
		  	<div id="progressBar" class="row">
				<div id="vuoto" class="col-sm-1 col-xs-1"></div>
				<input type="button" id="primi" class="col-sm-2 col-xs-2 divButton" value="Primi" onclick="caricaMenu(1),hideMenuConfirm()">
				<input type="button" id="secondi" class="col-sm-2 col-xs-2 divButton" value="Secondi" onclick="caricaMenu(2),hideMenuConfirm()">
				<input type="button" id="contorni" class="col-sm-2 col-xs-2 divButton" value="Contorni" onclick="caricaMenu(3),hideMenuConfirm()">
				<input type="button" id="dessert" class="col-sm-2 col-xs-2 divButton" value="Dessert" onclick="caricaMenu(4),hideMenuConfirm()">
				<input type="button" id="conferma" class="col-sm-2 col-xs-2 divButton" value="Riepilogo" onclick="confermaOrdine();">
				<div id="vuoto" class="col-sm-1"></div>
			</div>
		</div>
 	</div>
</div>
</body>
</html>