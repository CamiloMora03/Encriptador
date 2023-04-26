const textArea = document.querySelector("#mensaje");
const mensaje = document.querySelector(".alterText");
const copia = document.querySelector("#copiar");
const limpia = document.querySelector("#limpiar");
const resultArea = document.querySelector(".resultadoMensaje");
copia.style.display = "none";
limpia.style.display = "none";
const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
function validarTexto() {
    let textoEscrito = document.querySelector("#mensaje").value;
    let validador = textoEscrito.match(/^[a-z]*$/);
    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

function btnEncriptar() {
    if (!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        document.querySelector(".resultadoMensaje").value = textoEncriptado;
        mensaje.style.display = "none";
        resultArea.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "inline";
        limpia.style.display = "inline";
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada) {

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    document.querySelector(".resultadoMensaje").value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(
                matrizCodigo[i][1],
                matrizCodigo[i][0]
            );
        }
    }
    return stringDesencriptada;
}

function copiar() {
    document.querySelector(".resultadoMensaje").select();
    navigator.clipboard.writeText(document.querySelector(".resultadoMensaje").value);
    document.querySelector(".resultadoMensaje").value = "";
    alert("Texto Copiado");
}
function limpiar() {
    document.querySelector(".resultadoMensaje").value = "";
}
