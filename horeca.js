//iets checken
var rekening_check = false;
var breakCheck1 = false;

//de prijzen per product.
const fris_price = 1.00;
const bier_price = 1.75;
const wijn_price = 2.00;
const bitterballen_price1 = 2.00; //schaal van 8 stuks
const bitterballen_price2 = 3.00; //schaal van 16 stuks

//het te betalen bedrag.
var fris_cost = 0;
var bier_cost = 0;
var wijn_cost = 0;
var bitterballen_cost1 = 0; //schaal van 8 stuks
var bitterballen_cost2 = 0; //schaal van 16 stuks

//het standaard aantal producten dat je koopt.
var aantal_fris = 0;
var aantal_bier = 0;
var aantal_wijn = 0;
var aantal_bitterballen1 = 0; //schaal van 8 stuks
var aantal_bitterballen2 = 0; //schaal van 16 stuks

//tijdelijke var opslag 
var tijdelijke_opslag1 = 0;

//tekst bij de rekening kopjes
const het_aantal = "------------&lt; <b> de aantallen gekochte producten </b> &gt;------------------";
const de_rekening = "--------------&lt; <b> het te betalen bedrag </b> &gt;------------------";
const het_totaal = "---------------";
const de_ppp = "---------&lt; <b> prijs per product </b> &gt;---------";

//functies vooraf aanspreken
prijsweergave_menu();

// ----- uitleg woorden, functies, etc. ------
//bestelling = neemt de bestelling op en veranderd het eerder opgegeven aantal fris en telt het nieuwe opgegeven aantal fris erbij op
//bestelling2 (verouderd)= neemt de bestelling op en veranderd het eerder opgegeven aantal fris in het nieuwe opgegeven aantal
//verouderd = oudere versie bijv. geen mogelijkheid tot bestellen bitterballen

function prijsweergave_menu(){ //de standaard prijs van het product weergeven op de menu pagina

  if (fris_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_fris").innerHTML =
    "Fris €" + fris_price.toFixed(2).replace('.', ',');
  }

  //de standaard prijs van het product weergeven op de site
  if (bier_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bier").innerHTML =
    "Bier €" + bier_price.toFixed(2).replace('.', ',');
  }

  //de standaard prijs van het product weergeven op de site
  if (wijn_price != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_wijn").innerHTML =
    "Wijn €" + wijn_price.toFixed(2).replace('.', ',');
  }

  if (bitterballen_price1 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bitterballen1").innerHTML =
    "Bitterballen schaal 6 stuks €" + bitterballen_price1.toFixed(2).replace('.', ',');
  }

  if (bitterballen_price2 != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("menu_bitterballen2").innerHTML =
    "Bitterballen schaal 18 stuks €" + bitterballen_price2.toFixed(2).replace('.', ',');
  }
}

function rekening_weergave(){ //geeft de rekening weer op de website
  // prijsweergave_rekening(); 

  fris_cost = fris_price * aantal_fris;  //de berekening voor het te betalen bedrag van een product

  if (fris_cost != null && fris_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag1").innerHTML =
    aantal_fris + "x Fris ("+ fris_price.toFixed(2).replace('.', ',') +")";
  } else if (fris_cost == 0) {
    document.getElementById("bedrag1").innerHTML =
    "";
  }

  if (fris_cost != null && fris_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP1").innerHTML =
  "€" + fris_cost.toFixed(2).replace('.', ',');
  } else if (fris_cost == 0) {
    document.getElementById("kostenP1").innerHTML =
    "";
  }

  bier_cost = bier_price * aantal_bier;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (bier_cost != null && bier_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("bedrag2").innerHTML =
  aantal_bier + "x bier ("+ bier_price.toFixed(2).replace('.', ',') +")";
  } else if (bier_cost == 0) {
    document.getElementById("bedrag2").innerHTML =
    "";
  }

  if (bier_cost != null && bier_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP2").innerHTML =
  "€" + bier_cost.toFixed(2).replace('.', ',');
  } else if (bier_cost == 0) {
    document.getElementById("kostenP2").innerHTML =
    "";
  }

  wijn_cost = wijn_price * aantal_wijn;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (wijn_cost != null && wijn_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("bedrag3").innerHTML =
  aantal_wijn + "x wijn ("+ wijn_price.toFixed(2).replace('.', ',') +")";
  } else if (wijn_cost == 0) {
    document.getElementById("bedrag3").innerHTML =
    "";
  }

  if (wijn_cost != null && wijn_cost != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP3").innerHTML =
  "€" + wijn_cost.toFixed(2).replace('.', ',');
  } else if (wijn_cost == 0) {
    document.getElementById("kostenP3").innerHTML =
    "";
  }

  bitterballen_cost1 = bitterballen_price1 * aantal_bitterballen1;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (bitterballen_cost1 != null  && bitterballen_cost1 != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag4").innerHTML =
    aantal_bitterballen1 + "x bitterballen schaal 8 stuks ("+ bitterballen_price1.toFixed(2).replace('.', ',') +")";
  } else if (bitterballen_cost1 == 0) {
    document.getElementById("bedrag4").innerHTML =
    "";
  }

  if (bitterballen_cost1 != null && bitterballen_cost1 != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP4").innerHTML =
  "€" + bitterballen_cost1.toFixed(2).replace('.', ',');
  } else if (bitterballen_cost1 == 0) {
    document.getElementById("kostenP4").innerHTML =
    "";
  }

  bitterballen_cost2 = bitterballen_price2 * aantal_bitterballen2;  //de berekening voor het te betalen bedrag van een product

  //de te betalen prijs van het product weergeven op de site
  if (bitterballen_cost2 != null  && bitterballen_cost2 != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag5").innerHTML =
    aantal_bitterballen2 + "x bitterballen schaal 16 stuks ("+ bitterballen_price2.toFixed(2).replace('.', ',') +")";
  } else if (bitterballen_cost2 == 0) {
    document.getElementById("bedrag5").innerHTML =
    "";
  }

  if (aantal_bitterballen2 != null && aantal_bitterballen2 != 0) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP5").innerHTML =
  "€" + aantal_bitterballen2.toFixed(2).replace('.', ',');
  } else if (aantal_bitterballen2 == 0) {
    document.getElementById("kostenP5").innerHTML =
    "";
  }

  var totaal_cost = fris_cost + bier_cost + wijn_cost + bitterballen_cost1 + bitterballen_cost2;

  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("het_totaal").innerHTML =
    het_totaal;
  }
  
  //de te betalen totaal prijs van de producten weergeven op de site
  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
    document.getElementById("bedrag6").innerHTML =
    "<b> Totaal </b>";
  }

  if (totaal_cost != null) { //deze funtie zorgt ervoor dat het element met het id tussen "...." verandert in de tekst eronder. 
  document.getElementById("kostenP6").innerHTML =
  "€" + totaal_cost.toFixed(2).replace('.', ',');
  } else if (totaal_cost != null) {
    document.getElementById("kostenP6").innerHTML =
    "";
  }
}

function bestelling(){ //neemt de bestelling op
  rekening_check = false;
  while (rekening_check == false) { //doorgaan met vragen na invoeren bestelling
    breakCheck1 = false;
    var bestelling = prompt("Welke bestelling wilt u toevoegen?").toLowerCase(); //een popup met de vraag wat je wil hebben
    
    if (bestelling == "fris") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      tijdelijke_opslag1 = parseInt(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      if (!(isNaN(tijdelijke_opslag1))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag1 >= 0) {
          aantal_fris = aantal_fris + tijdelijke_opslag1;
        } else if ((aantal_fris >= Math.abs(tijdelijke_opslag1))){
          aantal_fris = aantal_fris + tijdelijke_opslag1;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal fris dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        }        
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }
      

    } else if (bestelling == "bier") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      tijdelijke_opslag1 = parseInt(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      if (!(isNaN(tijdelijke_opslag1))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag1 >= 0) {
          aantal_bier = aantal_bier + tijdelijke_opslag1;
        } else if ((aantal_bier >= Math.abs(tijdelijke_opslag1))){
          aantal_bier = aantal_bier + tijdelijke_opslag1;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal bier dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        } 
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }

    } else if (bestelling == "wijn") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      tijdelijke_opslag1 = parseInt(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      if (!(isNaN(tijdelijke_opslag1))) { //checken of de tijdelijke opslag een int bevat
        if (tijdelijke_opslag1 >= 0) {
          aantal_wijn = aantal_wijn + tijdelijke_opslag1;
        } else if ((aantal_wijn >= Math.abs(tijdelijke_opslag1))){
          aantal_wijn = aantal_wijn + tijdelijke_opslag1;
        } else {
          alert("U geeft een negatief aantal op wat minder is dan het aantal wijn dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
        }        
      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }

    } else if (bestelling == "snack" || bestelling == "bitterballen") { //checken wat er besteld word en daarna doorgaan met de volgende vraag
      tijdelijke_opslag1 = parseInt(prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?", "8")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

      if (!(isNaN(tijdelijke_opslag1))) {
        if (tijdelijke_opslag1 == 8) {
          tijdelijke_opslag1 = parseInt(prompt("Hoeveel bitterbalschalen van 8 bitterballen wilt u bestellen?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

          if (!(isNaN(tijdelijke_opslag1))) {
            if (tijdelijke_opslag1 >= 0) {
              aantal_bitterballen1 = aantal_bitterballen1 + tijdelijke_opslag1;
            } else if ((aantal_bitterballen1 >= Math.abs(tijdelijke_opslag1))){
              aantal_bitterballen1 = aantal_bitterballen1 + tijdelijke_opslag1;
            } else {
              alert("U geeft een negatief aantal op wat minder is dan het aantal bitterballen (schaal 8 stuks) dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
            }

          } else {
            alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
          }

                    
        } else if (tijdelijke_opslag1 == 16) {
          tijdelijke_opslag1 = parseInt(prompt("Hoeveel bitterbalschalen van 16 bitterballen wilt u bestellen?", "0")); //een popup met de vraag hoeveel je wil hebben van een bepaald product

          if (!(isNaN(tijdelijke_opslag1))) {
            if (tijdelijke_opslag1 >= 0) {
              aantal_bitterballen2 = aantal_bitterballen2 + tijdelijke_opslag1;
            } else if ((aantal_bitterballen2 >= Math.abs(tijdelijke_opslag1))){
              aantal_bitterballen2 = aantal_bitterballen2 + tijdelijke_opslag1;
            } else {
              alert("U geeft een negatief aantal op wat minder is dan het aantal bitterballen (schaal 16 stuks) dat u heeft besteld - het aantal dat u wilt eraf wilt hebben");
            }

          } else {
            alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
          }

        } else {
          alert("U kunt alleen een keuze maken tussen een schaal met 8 of 16 bitterballen. De snacks zijn niet toegevoegd aan de bestelling.");
        }

      } else {
        alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
      }
      

    }else if (bestelling == "stop") { //als stop word opgegeven bij de prompt bestilling word de rekening weergeven
      if (aantal_fris == 0 && aantal_bier == 0 && aantal_wijn == 0 && aantal_bitterballen1 == 0 && aantal_bitterballen2 == 0) { //checken of er iets is besteld
        var doorgaan_vraag = prompt("u heeft geen bestelling opgenomen. Wilt u toch de rekening zien? (Y/N)");

        if (doorgaan_vraag == "Y") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
          rekening_weergave();
          rekening_check = true;
        } else if (doorgaan_vraag == "N") { // checken of je door wil gaan naar de rekening als je niks hebt ingevuld en anders stoppen met de bestelling
          rekening_check = false;
          breakCheck1 = true;
          break;
        }
        break;
      } else { 
        rekening_weergave();
        rekening_check = true;  
      }
         

    }else { //bij een ongeldige invoer melding geven
      alert("U heeft een ongeldige invoer gedaan. Dit kan niet worden toegevoegd aan uw bestelling"); //melding bij ongeldige invoer
    }
  }
  
}