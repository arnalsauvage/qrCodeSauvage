let boutonTelechargerImageQrCode = document.getElementById("downloadLink");

boutonTelechargerImageQrCode.addEventListener("click", function(){
    const image = document.querySelector("img");
    boutonTelechargerImageQrCode.href = image.src;
    boutonTelechargerImageQrCode.download = "monQrCode.png";
  //  boutonTelechargerImageQrCode.click();
});

function makeCode () {
    let elText = document.getElementById("text");

    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }
    qrCode.makeCode(elText.value);
    let bouton = document.getElementById("boutonQrcode");
    bouton.style.backgroundColor = "#050505";
    bouton.style.color = "#505050";
}

function modifTexteAencoder(){
    let bouton = document.getElementById("boutonQrcode");
    bouton.removeAttribute("style");
}