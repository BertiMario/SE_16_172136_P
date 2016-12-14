var primi = ["Pasta Pomodoro", "Pasta Pesto", "Tortellini", "Passato Verdure"]; //array dei primi
var secondi = ["Bistecca","Pesce","Pollo","Cotoletta"];//array dei secondi
var contorni = ["Insalata","Patate Forno","Patate Lesse"];//array dei contorni
var dessert = ["Gelato","Macedonia"];//array dei dessert
var ordine = ["none","none","none","none"];//array ordine

//funzione che visualizza il div menu 
function hideMenuConfirm()
{
	document.getElementById('menuConfirm').style.display='none';
	document.getElementById('menu').style.display='block';
	document.getElementById('menuRiepilogo').style.display='none';
}

//funzione che visualizza il div menu per la conferma del piatto
function blockMenuConfirm()
{
	document.getElementById('menuConfirm').style.display='block';
	document.getElementById('menu').style.display='none';
	document.getElementById('menuRiepilogo').style.display='none';
}


//funzione che visualizza il div riepilogo ordine
function blockMenuRiepilogo()
{
	document.getElementById('menuRiepilogo').style.display='block';
	document.getElementById('menu').style.display='none';
	document.getElementById('menuConfirm').style.display='none';
}

//funzione che carica il menu //param -> tipo del piatto, (primi,secondi,dessert,..)
function caricaMenu(typePiatto)
{
var text = "";
var i;
var ca="pippo";

if(typePiatto==2)
	piatti=secondi;
else
	if(typePiatto==3)
		piatti=contorni;
	else
		if(typePiatto==4)
			piatti=dessert;
		else
			piatti=primi;

	for (i = 0; i < piatti.length; i++) {
		text=text+"<div class='col-md-2 col-sm-3 col-xs-3'><div class='panel panel-primary' onclick='caricaDesc("+i+","+typePiatto+");blockMenuConfirm();'>"
		text=text+"<div class='panel-heading'></div><div class='panel-body'><img src='img/"+piatti[i]+".jpg' class='img-responsive' style='with:100%' alt='Image'></div>"
		text=text+"<div class='panel-footer'>"+piatti[i]+"</div></div></div>";
	}
	document.getElementById("menu").innerHTML = text;
}

//funzione che carica la descrizione e l'immagine di un piatto dato se è primo,secondo,.. e la pos del piatto nel'array
function caricaDesc(pos,typePiatto)
{
	var code = "";
	var titleDesc = "";
	var desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

	if(typePiatto==2)
		titleDesc=secondi[pos];
	else
		if(typePiatto==3)
			titleDesc=contorni[pos];
		else
			if(typePiatto==4)
				titleDesc=dessert[pos];
			else
				titleDesc=primi[pos];
	tipo=typePiatto+1;

	if(tipo<=4)
		code+="<input type='button' class='btn btn-info' value='Conferma Piatto' onclick='confermaPiatto("+pos+","+tipo+");caricaMenu("+tipo+");hideMenuConfirm();'>";
	else
		code+="<input type='button' class='btn btn-info' value='Conferma Piatto' onclick='confermaPiatto("+pos+","+tipo+");caricaRiepilogo();blockMenuRiepilogo();'>";

 	code+="<input type='button' class='btn btn-info' value='Scegli altro Piatto' onclick='hideMenuConfirm()'>";
    

    immag="<img src='/img/"+titleDesc+".jpg' alt='"+titleDesc+".jpg' class='media-object' style='width:60px'>"

	document.getElementById("pTitleDesc").innerHTML = titleDesc;
	document.getElementById("pDesc").innerHTML = desc;
    document.getElementById("pImgTitleDesc").innerHTML = immag;
	document.getElementById("pBtnConferma").innerHTML = code;

}
//funzione che carica il riepilogo dell'ordine che si sta per effettuare 
function caricaRiepilogo()
{
	var text = "";
	for (i = 0; i < ordine.length; i++) {
			text=text+"<div class='col-md-2 col-sm-3 col-xs-3'><div class='panel panel-primary'>";
			text=text+"<div class='panel-heading'></div><div class='panel-body'><img src='img/"+ordine[i]+".jpg' class='img-responsive' style='with:100%' alt='Image'></div>";
			text=text+"<div class='panel-footer'>"+ordine[i]+"</div></div></div>";
		}

	document.getElementById("riepilogoOrdine").innerHTML = text;
}

//funzione carica il piatto da confermare una volta selezionato dal menu
function confermaPiatto(pos,typePiatto)
{
	typePiatto--;

	if(typePiatto==2)
		ordine[1]=secondi[pos];
	else
		if(typePiatto==3)
			ordine[2]=contorni[pos];
		else
			if(typePiatto==4)
				ordine[3]=dessert[pos];
			else
				ordine[0]=primi[pos];
}

//funzione che controlla se un ordine è stato creato prima di visualizzare l'ordine
function confermaOrdine()
{
	if(ordine[0]!="none" || ordine[1]!="none" || ordine[2]!="none" || ordine[3]!="none")
	{
		caricaRiepilogo();
		blockMenuRiepilogo();
	}
	else
	{
		alert("Nessun ordine presente");
	}
}