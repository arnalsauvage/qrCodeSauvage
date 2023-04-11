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
}

function modifTexteAencoder(){
    remetBoutonNormal("boutonQrcode");
    remetBoutonNormal("btnUrlTest");
}