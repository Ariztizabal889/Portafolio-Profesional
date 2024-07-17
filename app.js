let Number=0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function encrypt() {
    const text = document.getElementById("text").value.toLowerCase();
    document.getElementById("result").value = encryptText(text);
}

function decrypt() {
    const text = document.getElementById("text").value.toLowerCase();
    document.getElementById("result").value = decryptText(text);
}

function encryptText(text) {
    Number=1;
    Mensaje()
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    return encryptedText;
}

function decryptText(text) {
    Number=2;
    Mensaje()
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
    return decryptedText;
}

function copyResult() {
    const result = document.getElementById("result");
    result.select();
    result.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado: " + result.value);
    Number=3;
    Mensaje()
}

function Mensaje(){
    if(Number==0){
        asignarTextoElemento('p', 'Ningún mensaje fue encontrado \nIngresa el texto que desees encriptar o desencriptar ')
    }
    if(Number==1){
        asignarTextoElemento('p', 'El mensaje Cifrado es ')

    }
    if(Number==2){
        asignarTextoElemento('p', 'El mensaje Desifrado es ')
    }
    if(Number==3){
        asignarTextoElemento('p', 'El mensaje fue copiado ')
    }

}
console.log(Mensaje())