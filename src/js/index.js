var campoDolar = document.getElementById("valorDol");
var campoEuro = document.getElementById("valorEuro");
var campoLibra = document.getElementById("valorLibra");
var campoResultadoDolar = document.getElementById("valorConvertidoDolar");
var campoResultadoEuro = document.getElementById("valorConvertidoEuro");
var campoResultadoLibra = document.getElementById("valorConvertidoLibra");


function ConverterDolar() {
  var valorDigitado = parseFloat(campoDolar.value);
  var valorEmDolar = valorDigitado * 5.23;
  if (isNaN(valorEmDolar) || valorEmDolar <= 0) {
    alert("Valor incorreto!")
  } else {
    var valorConvertido = "O resultado em dolar é R$ " + valorEmDolar.toFixed(2);
    campoResultadoDolar.innerHTML = valorConvertido;
  }
}

function ConverterEuro() {
  var valorDigitado = parseFloat(campoEuro.value);
  var valorEmEuro = valorDigitado * 6.01;
  if (isNaN(valorEmEuro) || valorEmEuro <= 0) {
    alert("Valor incorreto!")
  } else {
    var valorConvertido = "O resultado em euro é R$ " + valorEmEuro.toFixed(2);
    campoResultadoEuro.innerHTML = valorConvertido;
  }
}

function ConverterLibra() {
  var valorDigitado = parseFloat(campoLibra.value);
  var valorEmLibra = valorDigitado * 5.24;
  if (isNaN(valorEmLibra) || valorEmLibra <= 0) {
    alert("Valor incorreto!")
  } else {
    var valorConvertido = "O resultado em libra é R$ " + valorEmLibra.toFixed(2);
    campoResultadoLibra.innerHTML = valorConvertido;
  }
}

