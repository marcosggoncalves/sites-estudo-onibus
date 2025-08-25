    class estaticas{
    constructor(estaticas_pessoas,estaticas_vendas,estaticas_canceladas){
    this.estaticas_pessoas = estaticas_pessoas;
    this.estaticas_vendas = estaticas_vendas;
    this.estaticas_vendas_canceladas = this.estaticas_canceladas; 
  }
  executa(){
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= recebe_dados.estaticas_vendas) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
 executa_2(){
    var elem = document.getElementById("myBar_2"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= recebe_dados.estaticas_vendas) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  executa_3(){
    var elem = document.getElementById("myBar_3");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= recebe_dados.estaticas_pessoas) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  executa_4(){
     var elem = document.getElementById("myBar_4");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 0) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
  resumo_final(){
    document.querySelector("#c_f").innerHTML ="Compras Finalizadas: "+ this.estaticas_vendas;
    document.querySelector("#c_a").innerHTML ="Compras em andamentos: "+ this.estaticas_vendas;
    document.querySelector("#c_r").innerHTML ="Clientes Registrados: "+ this.estaticas_pessoas;
    document.querySelector("#c_c").innerHTML ="Compras Canceladas: "+ 0;
  }
  calc(){
   var valor_saldo = 0;
   var x  = recebe_dados.estaticas_vendas * 500000;
   valor_saldo = x;
   document.querySelector("#c_m").innerHTML =" Saldo Caixa: "+" R$ "+valor_saldo;
  }
}

var recebe_dados = new estaticas(usuarios.length,compra.length,0);


function move() {
  recebe_dados.executa();
  recebe_dados.executa_2();
  recebe_dados.executa_3();
  recebe_dados.executa_4();
  recebe_dados.resumo_final();
  recebe_dados.calc(usuarios.length);
}


 