// JavaScript Document
var static = new Array();


class Veiculos{
	constructor(nome,classe,passageiros,foto,indentifica,ano,preco){
		this.nome = nome;
		this.classe = classe;
		this.passageiros = passageiros;
		this.foto = foto
		this.indentifica = indentifica;
		this.ano = ano;
		this.preco = preco;
	}
}

let veicul_1 = new Veiculos("Marcopolo DD 1800 15M",'Leito','36','img/3.jpg',001,2017,250);
let veicul_2 = new Veiculos("Marcopolo LD 1600",'Semi-Leito','52','img/2.jpg',002,2010,200);
let veicul_3 = new Veiculos("Marcopolo 1050 Toco",'Covencional','42','img/1.jpg',003,2012,100);


static.push(veicul_1,veicul_2,veicul_3);

static.forEach(function(itens){
	var Nome = document.createElement('li');
	var link = document.createElement('a');
	var text_li = document.createTextNode(itens.nome);
	
	Nome.appendChild(link);
	link.appendChild(text_li);
	
	document.querySelector("#veiculos").appendChild(Nome);

	link.onclick = function(){
		document.querySelector('#imagem').src = itens.foto;
	}
	
});

document.querySelector('#imagem').src = 'img/motta 3.jpg';
for (let i = 0; i < 3; i++) {
	let div = document.createElement('DIV');
	div.setAttribute('class','veiculos_quadro');
	let foto = document.createElement('IMG');
	let text = document.createElement('h1');
	let text_2 = document.createElement('p');
	let text_3 = document.createElement('p');
	let text_4 = document.createElement('p');
	let text_5 = document.createElement('p');
	let text_6 = document.createElement('p');
	let le = document.createTextNode(static[i].nome);
	let le_2 = document.createTextNode("Classe Rodoviaria: "+static[i].classe);
	let le_3 = document.createTextNode("Passageiros Quantidade: "+static[i].passageiros);
	let le_4 = document.createTextNode("Valor aluguel veiculo:"+static[i].preco + ',00');
	let le_5 = document.createTextNode("indentificação Veiculo:"+static[i].indentifica);
	let le_6 = document.createTextNode("Ano Compra Veiculo: "+static[i].ano);

	foto.setAttribute('src',static[i].foto);

	text.appendChild(le);
	text_2.appendChild(le_2);
	text_3.appendChild(le_3);
	text_4.appendChild(le_4);
	text_5.appendChild(le_5);
	text_6.appendChild(le_6);

	div.appendChild(foto);
	div.appendChild(text);
	div.appendChild(text_2);
	div.appendChild(text_3);
	div.appendChild(text_4);
	div.appendChild(text_5);
	div.appendChild(text_6);

	document.getElementById('quadro').appendChild(div);
}

class email{
	constructor(nome,email,assunto){
		this.nome = nome;
		this.email = email;
		this.assunto = assunto;
	}
	confirmar(){
		alert('Email Enviado com sucesso.');
	}
	limpar(){
		 document.forms['contato']['nome'].value ='';
		 document.forms['contato']['email'].value ='';
		 document.forms['contato']['assunto'].value ='';
	}
}
var emails = localStorage.getItem('emails');
emails = (emails) ? JSON.parse(emails):[];

document.querySelector('#enviar').onclick = function(){
	let campo_1 = document.forms['contato']['nome'].value;
	let campo_2 = document.forms['contato']['email'].value;
	let campo_3 = document.forms['contato']['assunto'].value;

	try{
		if (campo_1,campo_2,campo_3 == '') throw 'Campos Vazios';
		let Novo_email = new email(campo_1,campo_2,campo_3);
		emails.push(Novo_email);
		localStorage.setItem('emails',JSON.stringify(emails));
		Novo_email.confirmar();
		Novo_email.limpar();
	}
	  catch(err){
	  	alert(err);
	}
}