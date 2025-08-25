	  // Imprimir Texto no parte sobre o onibus 

var texto_Marcos = "O Marcopolo Paradiso é uma carroceria de ônibus rodoviários, apropriados para médias e longas distâncias, fabricada pela empresa gaúcha Marcopolo. Foi produzido desde o lançamento, em 1984, sobre vários chassis de motor traseiro ou central: Mercedes-Benz, Volvo, Scania e Volkswagen. O modelo foi e é produzido em diferentes versões (alturas) e teve reformulações ao longo do tempo.";
var local_imprimir;
var contador = 0;

function digitar() {
  local_imprimir = document.getElementById("sobre_onibus");
  window.setTimeout(function() { inserir(texto_Marcos[contador]) }, 22);
}

function inserir(letra) {
  local_imprimir.innerHTML += letra;
  contador++;
  if(contador < texto_Marcos.length)
    window.setTimeout(function() { inserir(texto_Marcos[contador]) }, 22);
}
window.onload = digitar;


