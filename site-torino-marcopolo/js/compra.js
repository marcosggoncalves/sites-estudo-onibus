
class veiculo{
	constructor(nome,preco,foto,fabricante,parcelamento,carroceria,sobre){
		this.nome = nome;
		this.preco = preco;
		this.foto = foto;
		this.fabricante = fabricante;
		this.parcelamento = parcelamento;
		this.carroceria = carroceria;
		this.sobre = sobre;
	}
}
class Clientes{
	constructor(Nome,Empresa,CPF,Telefone,veiculo,preco,compras){
		this.Nome = Nome;
		this.Empresa = Empresa;
		this.CPF = CPF;
		this.Telefone = Telefone;
		this.veiculo = veiculo;
		this.preco = preco;
		this.compras = [];
	}
}

var ve_1 = new veiculo('New Torino 2017',900.000,'img/2.jpg','Marcopolo S.A',48,'A escolha do cliente',"Em 2007, é lançada uma nova versão do modelo Marcopolo Torino 2007, Torino GV-U, inspirada no Gran Viale e no Ciferal Citmax, que é encarroçada somente em chassis de motor dianteiro e central. Em 2013 ganha uma pequena atualização, com mudanças no acabamento interno New Torino.");
var ve_2 = new veiculo('New Torino 2007',350.000,'img/2010.jpg','Marcopolo S.A',24,'A escolha do cliente',"Em 2007, é lançada uma nova versão do modelo Marcopolo Torino 2007, Torino GV-U, inspirada no Gran Viale e no Ciferal Citmax, que é encarroçada somente em chassis de motor dianteiro e central. Em 2013 ganha uma pequena atualização, com mudanças no acabamento interno New Torino.");	
var ve_3 = new veiculo('New Torino 2014',500.000,'img/2017.jpg','Marcopolo S.A',50,'A escolha do cliente',"Em 2007, é lançada uma nova versão do modelo Marcopolo Torino 2007, Torino GV-U, inspirada no Gran Viale e no Ciferal Citmax, que é encarroçada somente em chassis de motor dianteiro e central. Em 2013 ganha uma pequena atualização, com mudanças no acabamento interno New Torino.");

veiculos.push(ve_1,ve_2,ve_3);


document.getElementById('foto').src = 'img/tela.gif';

function busca(argument) {
	return argument.nome == buscas;
}

var pega = '';

 function verificar(a){
	if (a=veiculos.find(busca)) {
		pega = a;
		document.getElementById('foto').src = a.foto;
		document.forms['compra']['veiculo'].value = a.nome;
		document.forms['compra']['Preço'].value = a.preco;
		document.forms['compra']['Fabricante'].value = a.fabricante;
		document.forms['compra']['parcelamento'].value = a.parcelamento +' vezes' ;
		document.forms['compra']['carroceria'].value = a.carroceria ;
	}else{
		document.getElementById('err').style.color = 'red';
		document.getElementById('err').innerHTML = 'veiculo não disponivel na loja';
		document.getElementById('foto').style.display = 'none';
	
	}
} 
document.querySelector('#itens').addEventListener('change', function(evt){
 buscas = evt.target.value;
 verificar(buscas);
});
document.querySelector('#Reservar').onclick = function(){
	let veic = document.forms['compra']['veiculo'].value;
	let valor = document.forms['compra']['Preço'].value;
	let name = document.forms['cliente']['name'].value;
	let empresa = document.forms['cliente']['empresa'].value;
	let cpf = document.forms['cliente']['cpf'].value;
	let telefone = document.forms['cliente']['telefone'].value;
	
	try{
		if (name,empresa,cpf,telefone == '') throw 'Campos Vazios ...'
		var novo = new Clientes(name,empresa,cpf,telefone,veic,valor);
		novo.compras.push(pega);
		pedidos.push(novo);
		localStorage.setItem("pedidos", JSON.stringify(pedidos));
		alert('Pedido realizado com sucesso');
		location.reload();
	}catch(err){
		alert(err);
	}
}