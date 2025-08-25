class Contatos{ 
	constructor(codigo,nome,telefone){
		this.codigo = codigo;
		this.nome = nome;
		this.telefone = telefone;
		this.relacao = false; 
	}
	status(){
		if (this.relacao) {
			return 'Nome: '+this.nome +' Tel: '+this.telefone + ' - Peguei com força';
		}else{
			return 'Nome: '+this.nome +' Tel: '+this.telefone + ' -Não Peguei'; 
		}
	}
}