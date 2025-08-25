class view{
	constructor(controller,model){
		this.btn_salvar =  document.querySelector("#adicionar");
		this.lista_contatos = document.querySelector('#lista_contatos');
		this.var =  document.querySelector("#pessoa");
		this.var_1 = document.querySelector("#Telefone");
		this.model = model;
		this.controller = controller;
		this.btn_salvar.onclick =this.verificar_salvar.bind(this);
		this.imprimir =document.querySelector('#try_catch');
	}
	limpar(){
		this.var.value='';
		this.var_1.value='';
	}
	contar(){
		this.imprimir.style.color = '#ddd';
		this.imprimir.innerHTML = (this.var.value.length+this.var_1.value.length + ' - Caracteres Digitados');
	}
	verificar_salvar(){
		try{
			let Nome = this.var.value;
			let Telefone = this.var_1.value;
			if (Nome,Telefone==false)throw'Campos Vazios, Por favor complete ';
			controlador.Criar_novo_contato(0,Nome,Telefone);
			this.Desenhar();
	 		this.limpar();
		}catch(erro){
			this.imprimir.style.color = 'red';
			this.imprimir.innerHTML = erro;
		}
	}
	deletar(item){
		controlador.Apagar_contato(item);
		this.Desenhar();
	}
	relacionamento(codigo){
		controlador.relacionamento(codigo);
		this.Desenhar();
	}
	Desenhar(){ 
		this.imprimir.innerHTML = '';
		this.lista_contatos.innerHTML = "";
		this.model.database.forEach(function(contatos) {
			let container = document.createElement('tr');
			let paragrafo = document.createElement('td');
			let paragrafo_2 = document.createElement('td');
			let paragrafo_3 = document.createElement('td');
			let btn_remover = document.createElement('button');
			let btn_relacionamento = document.createElement('button');
			let paragrafo_text = document.createTextNode(contatos.status());	
			let text_btn = document.createTextNode('Remover');
			let text_btn_relacionamento = document.createTextNode('Já peguei');

			btn_remover.appendChild(text_btn);
			btn_relacionamento.appendChild(text_btn_relacionamento);	
            
			paragrafo.appendChild(paragrafo_text);
			paragrafo_2.appendChild(btn_remover);
			paragrafo_3.appendChild(btn_relacionamento);

			container.setAttribute('class','caixa');

			btn_remover.onclick = function(){
				views.deletar(contatos)
			};
			btn_relacionamento.onclick = function() {
				views.relacionamento(contatos.codigo)
			}

			container.appendChild(paragrafo);
			container.appendChild(paragrafo_2);
			container.appendChild(paragrafo_3)


			document.querySelector('#lista_contatos').appendChild(container);
		});
	}
}