let render = (data)=>{ // Data - items a ser renderizados  
    let renderHtml =  document.querySelector("#frota");
    let renderCountResult = document.querySelector("#countResult");

    if(data.length > 0){

        // Limpar estrutura

        renderHtml.innerHTML = null;
        // Mostrar quantidade encontrada.
        renderCountResult.innerHTML = data.length;

        data.forEach(veiculo => {
            // Container principal - pai
            let card  = document.createElement('div');
        
            // Container titulo
            let cardTitulo = document.createElement('div');
            let titulo = document.createElement('h1');
            let tituloTexto = document.createTextNode(veiculo.titulo);
        
            titulo.appendChild(tituloTexto);
        
            // Container descrição
            let cardDescricao = document.createElement('div');
            let descricao = document.createElement('p');
            let descricaoTexto = document.createTextNode(veiculo.descricao);
        
            descricao.appendChild(descricaoTexto);
        
            // Container Imagem
        
            //Contador Imagem
            let index = 0;
        
            let cardImg = document.createElement('div');
            let img = document.createElement('img');
        
            img.setAttribute('src',veiculo.foto[index]);
        
            // Container button
            let cardButton = document.createElement('div');
            let button = document.createElement('button');
            let textButton = document.createTextNode('Próxima Imagem');
        
            button.appendChild(textButton);

            button.onclick = ()=>{
                if(index < veiculo.foto.length){
                    // Renderizar imagem
                    img.setAttribute('src',veiculo.foto[index]);
                    //Contador
                    index ++; 
                }else{
                    index = 0;
                }
            }
        
            //Atribuir elementos para a div pai
            card.appendChild(cardImg);
            card.appendChild(cardTitulo);
            card.appendChild(cardDescricao);
            card.append(cardButton);
        
            // Atribuir classes css
            card.setAttribute('class','card-carro');
            cardTitulo.setAttribute('class','card-carro-titulo');
            cardDescricao.setAttribute('class','card-carro-descricao');
            cardImg.setAttribute('class','card-carro-img');
            cardButton.setAttribute('class','card-carro-btn');
        
            // Atribuir elementos em seus pais
            cardImg.appendChild(img);
            cardTitulo.appendChild(titulo);
            cardDescricao.appendChild(descricao);
            cardButton.appendChild(button);
        
            // Renderizar na tela da aplicação
            renderHtml.appendChild(card);
        });
    }else{
        renderHtml.innerHTML = "Veiculo não encontrada.";
        renderCountResult.innerHTML = 0;
    }
}

let filter = (search)=>{
    render(veiculos.filter(carro => carro.titulo.toLowerCase().indexOf(search.toLowerCase()) > -1));
}

// Renderizar veiculos
render(veiculos);