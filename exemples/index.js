function fermerDiv() {
    var divASupprimer = document.getElementById("abonnez-vous");
    divASupprimer.style.display = "none";
}

function ajoutCoeur() {
    var ajoutCouleur = document.getElementById("favorite")

    if (ajoutCouleur.textContent === "favorite_outline") {
        ajoutCouleur.textContent = "favorite";
        ajoutCouleur.style.color = "red";
    } else {
        ajoutCouleur.textContent = "favorite_outline";
        ajoutCouleur.style.color = "";
    }
}