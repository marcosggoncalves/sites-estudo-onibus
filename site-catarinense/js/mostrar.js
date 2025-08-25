 
let noticias = new Array();
let edital = new Array();
let edital_finalizados = new Array();

function redirecionar(){
	window.location.href = ('index.html');
}

class news{
	constructor(img,postagem){
		this.img = img;
		this.postagem = postagem;
	}
	erros(){
		document.getElementById('erros').style.display = 'block';
		document.getElementById('confirm').style.display = 'none';
		document.getElementById('erros').innerHTML = ('Não há editais disponivel ');
		window.setTimeout('redirecionar()', 10000);
	}
	confirm(){
		document.getElementById('confirm').style.display = 'block';
		document.getElementById('erros').style.display = 'none';
		document.getElementById('confirm').innerHTML = (edital.length + " Edital  Disponivel");
		window.setTimeout('redirecionar()', 10000);
	}
	confirm_2(){
		document.getElementById('confirm').style.display = 'block';
		document.getElementById('erros').style.display = 'none';
		document.getElementById('confirm').innerHTML = (edital_finalizados.length +" Edital Finalizado");
		window.setTimeout('redirecionar()', 10000);
		}
}


let n1 = new news('img/info1.jpg','03/01/2018');
let n2 = new news('img/info2.jpg','03/01/2018');
let n3 = new news('img/info3.jpg','03/01/2018');
let n4 = new news('img/info4.jpg','03/01/2018');
let acoes = new news();

noticias.push(n1,n2,n3,n4);

document.querySelector('#ed').onclick = function(){
	if (edital.length == false) {
	   acoes.erros();
	}else{
	   acoes.confirm();		
	}
}
document.querySelector('#ed_2').onclick = function(){
	if (edital_finalizados.length == false) {
		acoes.erros();
	}else{
		acoes.confirm_2();
	}
}
function aleatorio() {
	return Math.round(Math.random()*1);

}

noticias.sort(aleatorio);

for (let i = 0; i < noticias.length; i++) {
	let div = document.createElement('DIV');
	let foto = document.createElement('IMG');
	let text = document.createElement('P');
	let le = document.createTextNode("Postado em: " + noticias[i].postagem);

	foto.setAttribute('src',noticias[i].img);

	text.appendChild(le);

	div.appendChild(foto);
	div.appendChild(text);

	document.getElementById('quadro').appendChild(div);
}