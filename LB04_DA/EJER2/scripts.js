const entradaTemperatura = document.getElementById("entradaTemperatura");
const escalaOrigen = document.getElementById("escalaOrigen");
const escalaDestino = document.getElementById("escalaDestino");
const botonConvertir = document.getElementById("botonConvertir");
const botonLimpiar = document.getElementById("botonLimpiar");
const resultado = document.getElementById("resultado");
const historial = document.getElementById("historial");

function convertirACelsius(valor, desde) {
    switch (desde) {
        case "celsius": return valor;
        case "fahrenheit": return (valor - 32) * 5/9;
        case "kelvin": return valor - 273.15;
    }
}

function convertirDesdeCelsius(valor, hacia) {
    switch (hacia) {
        case "celsius": return valor;
        case "fahrenheit": return (valor * 9/5) + 32;
        case "kelvin": return valor + 273.15;
    }
}

function convertirTemperatura() {
    const valor = parseFloat(entradaTemperatura.value);

    if (isNaN(valor)) {
        resultado.textContent = "Ingresa un número válido, polfa";
        resultado.style.color = "red";
        return;
    }

    const enCelsius = convertirACelsius(valor, escalaOrigen.value);
    const convertido = convertirDesdeCelsius(enCelsius, escalaDestino.value);

    const simbolos = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    };

    resultado.textContent = `${valor} ${simbolos[escalaOrigen.value]} = ${convertido.toFixed(2)} ${simbolos[escalaDestino.value]}`;
    resultado.style.color = "#2e4053";

    const item = document.createElement("li");
    item.textContent = resultado.textContent;
    historial.appendChild(item);
}

function limpiarCampos() {
    entradaTemperatura.value = "";
    resultado.textContent = "";
    historial.innerHTML = "";
}

// Eventos
botonConvertir.addEventListener("click", convertirTemperatura);
botonLimpiar.addEventListener("click", limpiarCampos);
