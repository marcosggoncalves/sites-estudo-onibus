class tratar_model{
    constructor(){
        this.database = new Array(); 
    }
    salvar(item){
        this.database.push(item);
    }
    apagar(item){
        this.database.splice(this.database.indexOf(item),1);
    }
    Buscar(codigo){
        return this.database.find(function(contatos) {
            return contatos.codigo == codigo;
        });
    }    
}