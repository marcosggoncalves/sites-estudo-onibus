
 // Texto Automatico

var texto_Marcos = "Front-end | Back-end";
var Lopes;

var contador = 0;
function digitar() {
  Lopes = document.getElementById("trabalho");
  window.setTimeout(function() { inserir(texto_Marcos[contador]) }, 280);
}

function inserir(letra) {
  Lopes.innerHTML += letra;
  contador++;
  if(contador < texto_Marcos.length)
    window.setTimeout(function() { inserir(texto_Marcos[contador]) }, 280);
}
window.onload = digitar;



