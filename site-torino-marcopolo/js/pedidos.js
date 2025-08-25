pedidos.forEach(function(pedido){
	var container = document.createElement('tr');
	var paragrafo = document.createElement('td');
	var paragrafo_2 = document.createElement('td');
	var paragrafo_3 = document.createElement('td');
	var paragrafo_4 = document.createElement('td');
	var paragrafo_5 = document.createElement('td');
	var paragrafo_6 = document.createElement('td');
	var paragrafo_text = document.createTextNode(pedido.Nome);
	var paragrafo_text_2 = document.createTextNode(pedido.Empresa);
	var paragrafo_text_3 = document.createTextNode(pedido.veiculo);
	var paragrafo_text_4 = document.createTextNode(pedido.preco);
	var paragrafo_text_5 = document.createTextNode(pedido.CPF);
	var paragrafo_text_6 = document.createTextNode(pedido.Telefone);


	paragrafo.appendChild(paragrafo_text);
	paragrafo_2.appendChild(paragrafo_text_2);
	paragrafo_3.appendChild(paragrafo_text_3);
	paragrafo_4.appendChild(paragrafo_text_4);
	paragrafo_5.appendChild(paragrafo_text_5);
	paragrafo_6.appendChild(paragrafo_text_6);

	container.appendChild(paragrafo);
	container.appendChild(paragrafo_2);
	container.appendChild(paragrafo_3);
	container.appendChild(paragrafo_4);
	container.appendChild(paragrafo_5);
	container.appendChild(paragrafo_6);

	document.querySelector('#Pedidos').appendChild(container);

})
var total_vendas = 0;
pedidos.forEach(function(soma){
	total_vendas += soma.preco++;
})

document.forms['dados']['t_v'].value = total_vendas + '00,000';	
document.forms['dados']['t_c'].value = pedidos.length + ' Clientes';
document.forms['dados']['t_e'].value = parseInt((total_vendas/450)*pedidos.length) + ' Dias prazos de entregas';	
document.forms['dados']['t_b'].value = total_vendas/2 +'000'+ ' Faturamento empresarial';

document.querySelector('#limpar').onclick = function(){
	let auxiliar = confirm('Deseja finalizar todos pedidos');
	if (auxiliar) {
		localStorage.removeItem('pedidos');
		location.reload();
		alert('Procedimento concluido com sucesso');
	}else{
		alert('Procedimento cancelado');
	}
	
}