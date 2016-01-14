$b_pierre = document.getElementById("b_pierre");
$b_feuille = document.getElementById("b_feuille");
$b_ciseau = document.getElementById("b_ciseau");
$b_lezard = document.getElementById("b_lezard");
$b_spock = document.getElementById("b_spock");
$continuer = document.getElementById("continuer");
$rejouer = document.getElementById("rejouer");


$score1 = document.getElementById("score1");
$score2 = document.getElementById("score2");
$score3 = document.getElementById("score3");

$affichage1 = document.getElementById("affichage1");
$affichage2 = document.getElementById("affichage2");
$affichage3 = document.getElementById("affichage3");
$affichage4 = document.getElementById("affichage4");
$affichage5 = document.getElementById("affichage5");

/* init des variables **********************************************/
var score_humain = 0 ;
var score_IA = 0 ;
var choix_humain = 0 ;
var choix_IA = 0 ;

function getRandom() { return Math.random(); }

/* affichage score des 2 joueurs ****************/
function afficherScore() {
    $score1.innerHTML = "Joueur : " + score_humain ;
    $score2.innerHTML = "Sheldon : " + score_IA ; }

/* affichage graphique de mon choix de signe ************************/
function affichermonchoix(){ 

	/* affiche ou pas les signes possible */
	switch (choix_humain) {
		case 0 : 
		figure00.style.display = "block" ; figure01.style.display = "none" ; figure02.style.display = "none" ; 
		figure03.style.display = "none" ; figure04.style.display = "none" ; figure05.style.display = "none" ; 
		$affichage1.innerHTML = "?" ; $affichage3.innerHTML = "Choisis bien ton signe..." ; 
		$continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 1 : 
		figure00.style.display = "none" ; figure01.style.display = "block" ; figure02.style.display = "none" ; 
		figure03.style.display = "none" ; figure04.style.display = "none" ; figure05.style.display = "none" ; 
		$affichage1.innerHTML = " Pierre " ; $affichage3.innerHTML = "" ; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 2 : 
		figure00.style.display = "none" ; figure01.style.display = "none" ; figure02.style.display = "block" ; 
		figure03.style.display = "none" ; figure04.style.display = "none" ; figure05.style.display = "none" ; 
		$affichage1.innerHTML = " Feuille " ;$affichage3.innerHTML = "" ; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 3 : 
		figure00.style.display = "none" ; figure01.style.display = "none" ; figure02.style.display = "none" ; 
		figure03.style.display = "block" ; figure04.style.display = "none" ; figure05.style.display = "none" ; 
		$affichage1.innerHTML = " Ciseaux " ;$affichage3.innerHTML = "" ; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 4 : 
		figure00.style.display = "none" ; figure01.style.display = "none" ; figure02.style.display = "none" ; 
		figure03.style.display = "none" ; figure04.style.display = "block" ; figure05.style.display = "none" ; 
		$affichage1.innerHTML = " Lézard " ;$affichage3.innerHTML = "" ; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 5 : 
		figure00.style.display = "none" ; figure01.style.display = "none" ; figure02.style.display = "none" ; 
		figure03.style.display = "none" ; figure04.style.display = "none" ; figure05.style.display = "block" ; 
		$affichage1.innerHTML = " Spock " ;$affichage3.innerHTML = "" ; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ; 	}

	/* affiche ou efface les signes une fois choisis **************************/
	if (choix_humain > 0 ) {
		figure00.style.display	= "none" ;
		b_pierre.style.display	= "none" ;
		b_feuille.style.display = "none" ;
		b_ciseau.style.display	= "none" ;
		b_lezard.style.display	= "none" ;
		b_spock.style.display	= "none" ; 	
	} else {
		figure00.style.display	= "block" ;
		b_pierre.style.display	= "block" ;
		b_feuille.style.display = "block" ;
		b_ciseau.style.display	= "block" ;
		b_lezard.style.display	= "block" ;
		b_spock.style.display	= "block" ; 	
	}
	
	afficherScore() ;
 }		

/* affiche ou pas les signes possible sheldon ******************************/	
function afficherchoixIA(){ 

	/* teste fin de partie et efface bouton ******************************/
	if (score_humain > 4 || score_IA > 4) { 
		$affichage3.innerHTML = "La partie est finie" ;
		figure00.style.display	= "none" ;
		figure06.style.display	= "none" ;
		b_pierre.style.display	= "none" ;
		b_feuille.style.display = "none" ;
		b_ciseau.style.display	= "none" ;
		b_lezard.style.display	= "none" ;
		b_spock.style.display	= "none" ; 
		choix_humain=6 ; choix_IA=6 ;
		$rejouer.style.display = "block" ; $rejouer.onclick  = rejouer ; 
		affichermonchoix() ;afficherchoixIA() ; afficherScore();
	}
	
	/* determine aléatoirement un signe sheldon  **************************/
	if (choix_humain != 0) {	choix_IA = Math.random();
	
	if 		(choix_IA < 0.20) { $affichage3.innerHTML = "" ; choix_IA = 1;  }
	else if (choix_IA < 0.40) { $affichage3.innerHTML = "" ; choix_IA = 2; }
	else if (choix_IA < 0.60) { $affichage3.innerHTML = "" ; choix_IA = 3; }
	else if (choix_IA < 0.80) { $affichage3.innerHTML = "" ; choix_IA = 4; }
	else if (choix_IA < 1) { choix_IA =  5 ;}
	}

	/*** affiche ou efface les bouton IA *******************************/
	switch (choix_IA) {
		case 0 : 
		figure06.style.display = "block" ; figure07.style.display = "none" ; figure08.style.display = "none" ; 
		figure09.style.display = "none" ; figure10.style.display = "none" ; figure11.style.display = "none" ; 
		$affichage2.innerHTML = "J'attends..." ;$continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 1 : 
		figure06.style.display = "none" ; figure07.style.display = "block" ; figure08.style.display = "none" ; 
		figure09.style.display = "none" ; figure10.style.display = "none" ; figure11.style.display = "none" ; 
		$affichage2.innerHTML = "Pierre" ;$affichage3.innerHTML = ""; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 2 : 
		figure06.style.display = "none" ; figure07.style.display = "none" ; figure08.style.display = "block" ; 
		figure09.style.display = "none" ; figure10.style.display = "none" ; figure11.style.display = "none" ; 
		$affichage2.innerHTML = " Feuille " ;$affichage3.innerHTML = ""; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 3 : 
		figure06.style.display = "none" ; figure07.style.display = "none" ; figure08.style.display = "none" ; 
		figure09.style.display = "block" ; figure10.style.display = "none" ; figure11.style.display = "none" ; 
		$affichage2.innerHTML = " Ciseaux " ;$affichage3.innerHTML = ""; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 4 : 
		figure06.style.display = "none" ; figure07.style.display = "none" ; figure08.style.display = "none" ; 
		figure09.style.display = "none" ; figure10.style.display = "block" ; figure11.style.display = "none" ; 
		$affichage2.innerHTML = " Lézard " ;$affichage3.innerHTML = ""; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
		case 5 : 
		figure06.style.display = "none" ; figure07.style.display = "none" ; figure08.style.display = "none" ; 
		figure09.style.display = "none" ; figure10.style.display = "none" ; figure11.style.display = "block" ; 
		$affichage2.innerHTML = " Spock " ;$affichage3.innerHTML = ""; $continuer.style.display = "none" ;$rejouer.style.display = "none" ;break ;
	}
	
	afficherScore() ; }	
	
/* vérifie les 2 tirages ************************************************************************************************************************/	
function verification() {  

	if (choix_humain == choix_IA ) 			{ $affichage3.innerHTML = "Egalité, on recommence... " ; 		affraz(); 	}
	if (choix_humain == 3 && choix_IA == 2) { $affichage3.innerHTML = "Les ciseaux coupent la feuille.";	score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 2 && choix_IA == 1) { $affichage3.innerHTML = "La feuille bat la pierre." ;			score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 1 && choix_IA == 4) { $affichage3.innerHTML = "La pierre écrase le lézard." ;   	score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 4 && choix_IA == 5) { $affichage3.innerHTML = "Le lézard empoisonne Spock." ;   	score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 5 && choix_IA == 3) { $affichage3.innerHTML = "Spock écrabouille les ciseaux.";		score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 3 && choix_IA == 4) { $affichage3.innerHTML = "Les ciseaux décapitent le lézard.";	score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 4 && choix_IA == 2) { $affichage3.innerHTML = "Le lézard mange la feuille." ;		score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 2 && choix_IA == 5) { $affichage3.innerHTML = "La feuille repousse Spock." ;		score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 5 && choix_IA == 1) { $affichage3.innerHTML = "Spock détruit la pierre." ;			score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}
	if (choix_humain == 1 && choix_IA == 3) { $affichage3.innerHTML = "La pierre bat les ciseaux." ;		score_humain++ ; $affichage4.innerHTML = "Tu gagnes." ;}

	if (choix_IA == 3 && choix_humain == 2) { $affichage3.innerHTML = "Les ciseaux coupent la feuille.";	score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 2 && choix_humain == 1) { $affichage3.innerHTML = "La feuille bat la pierre." ;			score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 1 && choix_humain == 4) { $affichage3.innerHTML = "La pierre écrase le lézard." ;   	score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 4 && choix_humain == 5) { $affichage3.innerHTML = "Le lézard empoisonne Spock." ;   	score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 5 && choix_humain == 3) { $affichage3.innerHTML = "Spock écrabouille les ciseaux.";		score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 3 && choix_humain == 4) { $affichage3.innerHTML = "Les ciseaux décapitent le lézard.";	score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 4 && choix_humain == 2) { $affichage3.innerHTML = "Le lézard mange la feuille." ;		score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 2 && choix_humain == 5) { $affichage3.innerHTML = "La feuille repousse Spock." ;		score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 5 && choix_humain == 1) { $affichage3.innerHTML = "Spock détruit la pierre." ;			score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	if (choix_IA == 1 && choix_humain == 3) { $affichage3.innerHTML = "La pierre bat les ciseaux." ;		score_IA++ ; $affichage5.innerHTML = "Je gagne." ;}
	
	$score3.innerHTML = "Debug : " + choix_humain + " " + choix_IA ; afficherScore() ;
	
	$continuer.style.display = "block" ; $continuer.onclick  = continuer ;  }

/* remise a zero des indices et affiche *****************************/	
function affraz(){  choix_humain = 0 ;  choix_IA = 0 ; affichermonchoix() ;afficherchoixIA() ; afficherScore() ; } 

/* demande au joueur de continuer **********************************/
function continuer(){  affraz() ;  afficherScore(); $affichage4.innerHTML = "" ; $affichage5.innerHTML = "" ; $score3.innerHTML = "" ; } 

/* demande au joueur de rejouer ***********************************/
function rejouer(){ 
	choix_humain=0 ;  choix_IA=0 ; score_IA=0 ; score_humain=0 ;affichermonchoix() ;afficherchoixIA() ; afficherScore(); 
	$affichage4.innerHTML = "" ; $affichage5.innerHTML = "" ; } 

/* demande au joueur choix signes ********************************/
function valider1() { choix_humain =  1 ; affichermonchoix() ; afficherchoixIA() ; verification() ; }
function valider2() { choix_humain =  2 ; affichermonchoix() ; afficherchoixIA() ; verification() ; }
function valider3() { choix_humain =  3 ; affichermonchoix() ; afficherchoixIA() ; verification() ; }
function valider4() { choix_humain =  4 ; affichermonchoix() ; afficherchoixIA() ; verification() ; }
function valider5() { choix_humain =  5 ; affichermonchoix() ; afficherchoixIA() ; verification() ; }

	
afficherScore() ;
affichermonchoix() ; 
afficherchoixIA() ;

$continuer.onclick  = continuer ;	
$rejouer.onclick  = rejouer ;	

$b_pierre.onclick  = valider1 ;
$b_feuille.onclick = valider2 ;
$b_ciseau.onclick  = valider3 ;	
$b_lezard.onclick  = valider4 ;	
$b_spock.onclick   = valider5 ;	




