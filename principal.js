var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdimc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdimc.textContent = "Peso Inválido!";
}

if (altura <= 0 || altura >= 1000) {
    alturaEhValido = false;
    tdimc.textContent = "Altura inválida";

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdimc.textContent = imc;
    }
}
//console.log(imc);
