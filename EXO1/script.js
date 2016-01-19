$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100) ;

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Trop petit !";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "Trouvé, Bravo !";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Trop grand !";
    }
	$proposition.innerHTML ="" ;
}




$bouton.onclick = verifier;