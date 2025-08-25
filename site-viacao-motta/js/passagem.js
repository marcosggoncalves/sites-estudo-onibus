var passagens = new Array();

var reservas = localStorage.getItem('reservas');
reservas = (reservas) ?  JSON.parse(reservas) : [];

class passagem{
	constructor(foto,saida,entrada,preco,Quantidade){
		this.foto = foto;
		this.saida = saida;
		this.entrada = entrada;
		this.preco = preco;
		this.Quantidade = Quantidade;
	}
}


let destino = new passagem('img/passa.jpg','14/02/2018','16/02/2018',20,56);
let destino_2 = new passagem('img/passa.jpg','14/02/2018','16/02/2018',50,36);
let destino_3 = new passagem('img/passa.jpg','14/02/2018','16/02/2018',90,26);

passagens.push(destino,destino_2,destino_3);

passagens.forEach(function(itens){
	var div = document.createElement('div');
	var ibagem = document.createElement('img');
	ibagem.setAttribute('src',itens.foto);
	var saida = document.createElement('p');
	var entrada = document.createElement('p');
	var preco = document.createElement('p');
	var Quantidade = document.createElement('p');
	var text_saida = document.createTextNode('Data Saida: '+itens.saida);
	var text_entrada = document.createTextNode('Data Chegada: '+itens.entrada);
	var text_preco = document.createTextNode('Preço passagem: '+itens.preco+',00');
	var text_Quantidade = document.createTextNode('Lugares Disponiveis: '+itens.Quantidade);
	div.setAttribute('class','itens_passagens');

	saida.appendChild(text_saida);
	entrada.appendChild(text_entrada);
	preco.appendChild(text_preco);
	Quantidade.appendChild(text_Quantidade);
	
	div.appendChild(ibagem);
	div.appendChild(saida);
	div.appendChild(entrada);
	div.appendChild(preco);
	div.appendChild(Quantidade);

	div.onclick = function(){
		reservas.push(itens);
		localStorage.setItem('reservas',JSON.stringify(reservas));
		location.reload();

	};
	document.querySelector("#passagens").appendChild(div);	
});

function passagens_reservas(){
	if (reservas.length == 0) {
		document.getElementById('reservass').style.color = '#fff';
	}else{
		document.getElementById('reservass').style.color = '#ffdd21';
	}	
	document.querySelector('#reservass').innerHTML = "Passagens Reservadas: "+ reservas.length;
}

passagens_reservas();
