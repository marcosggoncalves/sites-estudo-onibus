// ponto de inicio do sistema , e  para preencher_formulario
class informacoes_cliente{
		constructor(nome,cpf,rg,email,telefone,forma_pagamento,parcelamento,endereco,cep,bairro,cidade,estado,total,pais) {
		this.nome = nome;
		this.cpf = cpf;
		this.rg = rg;
		this.email = email;
		this.telefone = telefone;
		this.forma_pagamento = forma_pagamento;
		this.parcelamento = parcelamento;
		this.endereco = endereco;
		this.cep = cep;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
		this.total = total;
		this.pais = pais;
	}
	confirma(){
		var doc = new jsPDF({
		  format: [110,300]
		})
		alert(this.nome + ",Obrigado pela sua compra ,Será gerado uma nota fiscal..");
		doc.setTextColor(120)
		doc.setFontSize(12)
		doc.text('Nota Fiscal Compra Efetuada', 20, 20)
		doc.text('Dados Cadastrais ', 10, 30)
		doc.text('Nome Completo: '+this.nome, 10, 40)
		doc.text('CPF:'+this.cpf, 10, 50)
		doc.text('RG: '+this.rg, 10, 60)
		doc.text('Email:'+this.email, 10, 70)
		doc.text('Telefone:'+this.telefone, 10, 80)
		doc.text('=====================================', 10, 90)
		doc.text('Dados Pagamento', 10, 100);
		doc.text('Forma Pagamento: '+this.forma_pagamento, 10, 110)
		doc.text('Parcelamento:'+this.parcelamento+" Vezes sem Juros %", 10, 120)
		doc.text('Valor Parcelas: '+"R$ "+this.total+",00", 10, 130)
		doc.text('=====================================', 10, 140)
		doc.text('Dados Envio', 10, 150)
		doc.text('Endereço: '+this.endereco, 10, 160)
		doc.text('Cep: '+this.cep, 10, 170)
		doc.text('Bairro:'+this.bairro, 10, 180)
		doc.text('Cidade: '+this.cidade, 10, 190)
		doc.text('Estado:'+this.estado, 10, 200)
		doc.text('Pais:'+this.pais, 10, 210)
		doc.text('=====================================', 10, 220)
		doc.text('Informações do Veiculo', 10, 230)
		doc.text('Nome Veiculo:Marcopolo Paradiso G7 LD 1600', 10, 240)
		doc.text('Valor Veiculo:R$ 500,000.00 ',10, 250)
		doc.text('Eixos do Veiculo:6x4',10, 260)
		doc.text('Ano do Veiculo: 2017',10, 270)
		doc.text('Modelo do Veiculo:2018', 10, 280)
		doc.save(this.nome + 'Nota_Fiscal.pdf');
	}
}
	

var compra = localStorage.getItem("compra");
compra = (compra) ? JSON.parse(compra) : [];

 // vetor um funcionalidade de gurdar as compras;

	// preencher_formulario  e validar 

var addBtn = document.querySelector("#form_compra").onclick = function(evt){
	
	try {
		var Nome = document.querySelector("#nome").value;
		var CPF = document.querySelector("#Cpf").value;
		var RG = document.querySelector("#rg").value;
		var EMAIL = document.querySelector("#email").value;
		var TELEFONE = document.querySelector("#Telefone").value;
		var ENDERECO = document.querySelector("#endereço").value;
		var CEP = document.querySelector("#Cep").value;
		var BAIRRO = document.querySelector("#Bairro").value;
		var CIDADE = document.querySelector("#Cidade").value;
		var ESTADO = document.querySelector("#Estado").value;
		var PAIS = document.querySelector("#Pais").value;

		if (Nome,CPF,RG,EMAIL,TELEFONE,ENDERECO,CEP,BAIRRO,CIDADE,ESTADO,PAIS == "") throw"Todos os Campos estão vazio, Por Favor insira seus dados , Para que possa ser processado sua compra..";
		if (isNaN(CPF,RG,TELEFONE,CEP)) throw "não é um número válido";

		var pega = document.forms["macho"]["email"].value;
		var verificar = pega.indexOf("@");
		var verificar_2 = pega.lastIndexOf(".");

		if (verificar < 1 || verificar_2 < verificar + 2 || verificar_2 + 2 >= pega.length){
			throw "Digite um e-mail válido!  Exemplo : xxxxxxxx@gmail.com";
		}
		var menu =+prompt("Escolha Uma Opção: "+"\n"+"1-Finalizar Compra"+"\n"+"2- Cancelar Compra"+"\n"+"3-Revisar dados de compra");
		switch(menu){
			case 1:
				var compra_novo = new informacoes_cliente(Nome,CPF,RG,EMAIL,TELEFONE,recebe_pagamento,recebe_parcelamento,ENDERECO,CEP,BAIRRO,CIDADE,ESTADO,valor_parcelas,PAIS);
				var method = "push";
				compra[method](compra_novo);
				localStorage.setItem("compra",JSON.stringify(compra));
				compra_novo.confirma()
				setTimeout(finalizar_compra, 3000);
			break;	
			case 2:
				 alert("Compra Cancelada com Sucesso....");		
				 location.reload();
			break;
			case 3:
				alert("Revise seus dados...");
			break;
			default:
				alert("Escolha Uma Opção para finalizar");
			break;
		} 
		} catch(resultado) {
		alert(resultado + ".");
	}
}

var recebe_pagamento;
var recebe_parcelamento;
var valor_parcelas;

document.querySelector('#Pagamento').addEventListener('change', function(evt){
   recebe_pagamento = evt.target.value;
});
document.querySelector('#Parcelamento').addEventListener('change', function(evt){
  recebe_parcelamento = evt.target.value;

   var valor = 500000;
   var parcelas;
   parcelas = (valor / recebe_parcelamento);
   valor_parcelas = parseInt(parcelas);
});


function finalizar_compra() {
    alert('Sua compra foi finalizada com sucesso,Sua página Será reniciada  em menos de  3 Segundos , para sua segurança...');
    location.reload();
}
