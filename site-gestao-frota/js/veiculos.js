var modal = document.getElementById('myModal');
var modal_2 = document.getElementById('myModal_2');
var modal_3 = document.getElementById('myModal_3');
var modal_4 = document.getElementById('myModal_4');
var modal_5 = document.getElementById('myModal_5');
var span = document.getElementsByClassName("close")[0];
var span_2 = document.getElementsByClassName("close")[1];
var span_4 = document.getElementsByClassName("close")[2];
var span_5 = document.getElementsByClassName("close")[3];
var span_3 = document.getElementsByClassName("close")[4];



span.onclick = function() {
  modal.style.display = "none";
}
span_2.onclick = function() {
  modal_2.style.display = "none";
}
span_3.onclick = function() {
  modal_3.style.display = "none";
}
span_4.onclick = function() {
  modal_4.style.display = "none";
}
span_5.onclick = function() {
  modal_5.style.display = "none";
}

class manu {
  constructor(veiculo, tipo, data) {
    this.veiculo = veiculo;
    this.tipo = tipo;
    this.data = data;
  }
}

class Frota {
  constructor(nome, foto, cod, tipo, categoria, marca, ano, passageiros) {
    this.nome = nome;
    this.foto = foto;
    this.cod = cod;
    this.tipo = tipo;
    this.categoria = categoria;
    this.marca = marca;
    this.ano = ano;
    this.passageiros = passageiros;
  }
}
class abastecer {
  constructor(data, cod_veicu, litro) {
    this.data = new Date();
    this.cod_veicu = cod_veicu;
    this.litro = litro;
  }
}
class finalizado{
  constructor(nome,tipo,saida,data_entrada,Cidade,Estado){
    this.nome = nome;
    this.tipo = tipo;
    this.saida = saida;
    this.data_entrada = data_entrada;
    this.Cidade = Cidade;
    this.Estado = Estado;
  }
}
var Guardar_informa_Frota = localStorage.getItem("Guardar_informa_Frota");
Guardar_informa_Frota = (Guardar_informa_Frota) ? JSON.parse(Guardar_informa_Frota) : [];

var veiculos_servicos = localStorage.getItem("veiculos_servicos");
veiculos_servicos = (veiculos_servicos) ? JSON.parse(veiculos_servicos) : [];

var servic_finalizad = localStorage.getItem('servic_finalizad');
servic_finalizad = (servic_finalizad) ? JSON.parse(servic_finalizad) : [];

var manuntenca = localStorage.getItem('manuntenca');
manuntenca = (manuntenca) ? JSON.parse(manuntenca) : [];

var gasolina = localStorage.getItem('gasolina');
gasolina = (gasolina) ? JSON.parse(gasolina) : [];

var reparars = localStorage.getItem('reparars');
reparars = (reparars) ? JSON.parse(reparars) : [];


var Veiculo_1 = new Frota("Marcopolo G7 1800 DD 15M", 'img/veiculo_1.jpg', "1", "Ônibus leito", "Rodoviaro", "Marcopolo", "2014", "60");
var Veiculo_2 = new Frota("Neo Bus N10 6X4", 'img/veiculo_2.jpg', "2", "Convencional", "Intermunicipal", "Marcopolo", "2010", "46");
var Veiculo_3 = new Frota("Marcopolo G6 1050", 'img/veiculo_3.jpg', "3", "Convencional", "Intermunicipal", "Marcopolo", "2010", "46");
var Veiculo_4 = new Frota("G6 1800 DD  ", 'img/veiculo_4.jpg', "4", "Ônibus leito", "Rodoviaro", "Marcopolo", "2014", "50");
var Veiculo_5 = new Frota("Flecha Azul CMA", 'img/veiculo_5.jpg', "5", "Convencional", "Intermunicipal", "Marcopolo", "2010", "46");
var Veiculo_6 = new Frota("Marcopolo G7 1200 6X2", 'img/veiculo_6.jpg', "6", "Convencional", "Intermunicipal", "Marcopolo", "2010", "46");
var Veiculo_7 = new Frota("Marcopolo G7 Toco", 'img/veiculo_7.jpg', "7", "Convencional", "Intermunicipal", "Marcopolo", "2010", "46");
var Veiculo_8 = new Frota("Marcopolo G7 1200 6X4", 'img/veiculo_8.jpg', "8", "Ônibus leito", "Rodoviaro", "Marcopolo", "2014", "50");


Guardar_informa_Frota.push(Veiculo_1);
Guardar_informa_Frota.push(Veiculo_2);
Guardar_informa_Frota.push(Veiculo_3);
Guardar_informa_Frota.push(Veiculo_4);
Guardar_informa_Frota.push(Veiculo_5);
Guardar_informa_Frota.push(Veiculo_6);
Guardar_informa_Frota.push(Veiculo_7);
Guardar_informa_Frota.push(Veiculo_8);

for (var i = 0; i < Guardar_informa_Frota.length; i++) {
  var div = document.createElement("DIV");
  var t = document.createElement("P");
  var z = document.createElement("IMG");
  var v = document.createTextNode(Guardar_informa_Frota[i].nome);
  var btn = document.createElement("BUTTON");
  btn.id = Guardar_informa_Frota[i].cod;
  var btnt = document.createTextNode("Situação");
  z.setAttribute("src", Guardar_informa_Frota[i].foto);

  div.appendChild(z);
  div.appendChild(t);
  div.appendChild(btn);
  t.appendChild(v);
  btn.appendChild(btnt);
  btn.onclick = function(e) {
    modal.style.display = "block";
    var cod = this.id;
    var busao = Guardar_informa_Frota.find(function(busao) {
      return busao.cod == this.id;
    }, this);

    document.getElementById('Name Veiculo:').innerHTML = 'Escolha uma opção para veiculo : ' + busao.nome;

    document.querySelector('#serv').onclick = function() {;
      veiculos_servicos.push(busao);
      localStorage.setItem("veiculos_servicos", JSON.stringify(veiculos_servicos));
      document.getElementById('success').style.display = 'block';
      document.getElementById('mens').innerHTML ='Veiculo colocado em serviço';
      setTimeout(function(){location.reload();}, 1000);
    }
    document.querySelector('#manu').onclick = function() {
      manuntenca.push(busao);
      localStorage.setItem("manuntenca", JSON.stringify(manuntenca));
       document.getElementById('success').style.display = 'block';
      document.getElementById('mens').innerHTML ='Veiculo colocado em manuntenca';
      setTimeout(function(){location.reload();}, 1000);
  
    }
    document.querySelector('#inf').onclick = function() {
      modal_3.style.display = "block";
      document.getElementById('img').src = busao.foto;
      document.getElementById('nme').innerHTML = 'Nome Veiculo:' + busao.nome;
      document.getElementById('cd').innerHTML = 'Cod Veiculo:' + '#' + busao.cod;
      document.getElementById('tip').innerHTML = 'Tipo Veiculo:' + busao.tipo;
      document.getElementById('categ').innerHTML = 'Categoria Veiculo:' + busao.categoria;
      document.getElementById('marca').innerHTML = 'Marca Veiculo:' + busao.marca;
      document.getElementById('an').innerHTML = 'Ano Veiculo:' + busao.ano;
      document.getElementById('passageir').innerHTML = 'Capacidade Veiculo:' + busao.passageiros;
    }
    document.querySelector('#abas').onclick = function() {

      modal_2.style.display = "block";

      document.querySelector('#cal').onclick = function() {
        var litro = document.forms['abastecer']['litrs'].value;
        var registra = new abastecer('', busao.cod, litro);

        gasolina.push(registra);
        localStorage.setItem("gasolina", JSON.stringify(gasolina));
        alert(busao.nome + " Veiculo Abastecido " + litro + 'L' + ' Registrado cm sucesso');
      }
    }
  }

  document.getElementById("Frota").appendChild(div);
}


if (veiculos_servicos.length > 0) {
  for (var i = 0; i < veiculos_servicos.length; i++) {
    var div = document.createElement("DIV");
    var t = document.createElement("P");
    var z = document.createElement("IMG");
    var v = document.createTextNode(veiculos_servicos[i].nome);
    var btn = document.createElement("BUTTON");
    btn.id = veiculos_servicos[i].cod;
    var btnt = document.createTextNode("Finalizar serviço");

    z.setAttribute("src", veiculos_servicos[i].foto);

    div.appendChild(z);
    div.appendChild(t);
    div.appendChild(btn);
    t.appendChild(v);
    btn.appendChild(btnt);

    btn.onclick = function(e) {
      var cod = this.id;
      var busao = veiculos_servicos.find(function(busao) {
        return busao.cod == this.id;
      }, this);
      document.forms['serviço_finalizado']['veiculos_1'].value = busao.nome;
       modal_5.style.display = "block";
       document.querySelector("#finaliza").onclick = function(){
       var v = document.forms['serviço_finalizado']['veiculos_1'].value;
       var t = document.forms['serviço_finalizado']['Viagem'].value;
       var ds = document.forms['serviço_finalizado']['data_saida'].value;
       var de = document.forms['serviço_finalizado']['data_entrada'].value;
       var cs = document.forms['serviço_finalizado']['Cidade'].value;
       var es = document.forms['serviço_finalizado']['Estado'].value;

       if (v,t,ds,de,cs,es == '') {
         document.getElementById('errd').style.display = 'block';
        document.getElementById('mend').innerHTML ='Campos vazios';
       }else{
          var Servi = new finalizado(v,t,ds,de,cs,es);
          servic_finalizad.push(Servi);
          localStorage.setItem('servic_finalizad', JSON.stringify(servic_finalizad));
          veiculos_servicos.splice(veiculos_servicos.indexOf(busao), 1);
          localStorage.setItem("veiculos_servicos", JSON.stringify(veiculos_servicos));
          alert("Serviço finalizado");
          location.reload();
       }
       }
    
      
    }
    document.getElementById("Frota_serviço").appendChild(div);
  }
} else {
  document.getElementById("situação_frota").innerHTML = "Nenhum serviço em andamento !!! ";
}

if (manuntenca.length > 0) {
  for (var i = 0; i < manuntenca.length; i++) {
    var div = document.createElement("DIV");
    var t = document.createElement("P");
    var z = document.createElement("IMG");
    var v = document.createTextNode(manuntenca[i].nome);
    var btn = document.createElement("BUTTON");
    btn.id = manuntenca[i].cod;
    var btnt = document.createTextNode("Remover");

    z.setAttribute("src", manuntenca[i].foto);

    div.appendChild(z);
    div.appendChild(t);
    div.appendChild(btn);
    t.appendChild(v);
    btn.appendChild(btnt);

    btn.onclick = function(e) {

       var cod = this.id;
        var busao = manuntenca.find(function(busao) {
          return busao.cod == this.id;
        }, this);

      modal_4.style.display = "block";
       document.forms['Manuntenção']['veiculos'].value = busao.nome;
      document.querySelector('#saida').onclick = function() {
        var veiculo_repar = document.forms['Manuntenção']['veiculos'].value;
        var tipo = document.forms['Manuntenção']['peças'].value;
        var data = document.forms['Manuntenção']['data'].value ;

        if (veiculo_repar, tipo, data == "") {
           document.getElementById('err').style.display = 'block';
           document.getElementById('men').innerHTML ='Campos vazios';
        } else {
          var rep = new manu(veiculo_repar, tipo, data);
          reparars.push(rep);
          localStorage.setItem("reparars", JSON.stringify(reparars));
          manuntenca.splice(manuntenca.indexOf(busao), 1);
          localStorage.setItem("manuntenca", JSON.stringify(manuntenca));
          alert("Veiculo reparado");
          location.reload();
        }
      }
    }
    document.getElementById("Frota_manu").appendChild(div);
  }
} else {
  document.getElementById("situação_frota_2").innerHTML = "Nenhum veiculo em manuntenção !!!";
}

if (servic_finalizad.length >0) {
  for (var i = 0; i < servic_finalizad.length; i++) {
    var div = document.createElement("DIV");
    div.setAttribute('class','sbre_2')
    var t = document.createElement("P");
    var d = document.createElement("P");
    var c = document.createElement("P");
    var b = document.createElement("P");
    var a = document.createElement("P");
    var p = document.createElement("P");
    var v = document.createTextNode('Veiculo: '+servic_finalizad[i].nome);
    var q = document.createTextNode('Tipo: '+servic_finalizad[i].tipo);
    var e = document.createTextNode('Saida: '+servic_finalizad[i].saida);
    var r = document.createTextNode('Entrada: '+servic_finalizad[i].data_entrada);
    var m = document.createTextNode('Cidade: '+servic_finalizad[i].Cidade);
    var n = document.createTextNode('Estado: '+servic_finalizad[i].Estado);


    div.appendChild(t);
    div.appendChild(d);
    div.appendChild(c);
    div.appendChild(b);
    div.appendChild(a);
    div.appendChild(p);


    t.appendChild(v);
    d.appendChild(q);
    c.appendChild(e);
    b.appendChild(r);
    a.appendChild(m);
    p.appendChild(n);
    document.getElementById("Frota_realizad").appendChild(div);
  }
}else{ 
  document.getElementById("situação_frota_3").innerHTML = "Nenhum serviço finalizado !!!";
}
for (var i = 0; i < reparars.length; i++) {
  var cnt = document.createElement('tr');
  var t_1 = document.createElement('td');
  var t_2 = document.createElement('td');
  var t_3 = document.createElement('td');
  var t_4 = document.createTextNode(reparars[i].veiculo);
  var t_5 = document.createTextNode(reparars[i].tipo);
  var t_6 = document.createTextNode(reparars[i].data);

  cnt.appendChild(t_1);
  cnt.appendChild(t_2);
  cnt.appendChild(t_3);
  cnt.appendChild(t_4);
  cnt.appendChild(t_5);
  cnt.appendChild(t_6);

  t_1.appendChild(t_4);
  t_2.appendChild(t_5);
  t_3.appendChild(t_6);

  document.getElementById('itens').appendChild(cnt);

}