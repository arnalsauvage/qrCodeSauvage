let boutonTelechargerImageQrCode = document.getElementById("downloadLink");

boutonTelechargerImageQrCode.addEventListener("click", function(){
    const image = document.querySelector("img");
    boutonTelechargerImageQrCode.href = image.src;
    boutonTelechargerImageQrCode.download = "monQrCode.png";
  //  boutonTelechargerImageQrCode.click();
});

function rendLeBoutonSombre(idBouton) {
    let bouton = document.getElementById(idBouton);
    bouton.style.backgroundColor = "#050505";
    bouton.style.color = "#505050";
}

function remetBoutonNormal(idBouton) {
    let bouton = document.getElementById(idBouton);
    bouton.removeAttribute("style");
}

function makeCode () {
    let elText = document.getElementById("text");

    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }
    qrCode.makeCode(elText.value);
    rendLeBoutonSombre("boutonQrcode");

    console.log("Appel ajax : " + elText.value);
    console.log(elText.value);
    // On fait un appel ajax à store.php pour logger l'adresse
    let url = "store.php";
    let params = "url=" + elText.value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let retour = xhr.responseText;
            console.log("Retour d'appel ajax ok : " + retour);
            if (retour === "ok") {
            }
        }
    }
    xhr.send(params); // Ajout du corps de la requête
}

function modifTexteAencoder(){
    remetBoutonNormal("boutonQrcode");
    remetBoutonNormal("btnUrlTest");
}