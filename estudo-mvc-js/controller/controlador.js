class Controller{
  constructor(model) {
    this.model = model;
  }
  Criar_novo_contato(codigo,nome,telefone) {
    let contatos = new Contatos(this.model.database.length,nome,telefone);
    this.model.salvar(contatos);
  }
  relacionamento(codigo){
  	let novo_contato = this.model.Buscar(codigo);
    novo_contato.relacao = true;
  }
  Apagar_contato(codigo){
  	this.model.apagar(codigo);
  }
}
