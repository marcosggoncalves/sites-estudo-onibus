class usuario{
constructor(Nome,Senha,email){
        this.Nome = Nome;
        this.Senha = Senha;
        this.email = email;
    }
    final(){
        localStorage.setItem("usuarios",JSON.stringify(usuarios));
        alert("Usuario Cadastrado com sucesso !!! ");
        window.location.href = "login.html";
    }
}

var Marcos = new usuario("Marcos Lopes",99510796,"marcoslopes5687@gmail.com");
var usuarios = localStorage.getItem("usuarios");


usuarios = (usuarios) ? JSON.parse(usuarios) : [];
usuarios.push(Marcos);


function procurar_usuario(usuari){
    return usuari.Nome == document.getElementById("usuario").value;
}

function procurar_senha(senha){
    return senha.Senha == document.getElementById("senha").value;
}

function verificar(usua,senh){
    if((usuari = usuarios.find(procurar_usuario))  && (senha = usuarios.find(procurar_senha))){
        if (usuari.Nome != Marcos.Nome) {
            alert(" Você Entrou " + usuari.Nome + " , Será redirecionado para outra página...");
            window.location.href = "compra.html";
        }else{
            alert("Administrador Seja bem vindo...");
            window.location.href = "admin.html";
        }
    }else{
        alert("Usuario Não Cadastrado");
    }
}
function add() {
    
    try{

        var nome = document.querySelector('#usuario').value;
        var senha = document.querySelector("#senha").value;
        var email = document.querySelector("#email").value;

        if (nome,senha,email == "") throw "Campos Vazios ....";
        var pessoa_nova = new usuario (nome,senha,email);
        usuarios.push(pessoa_nova);
        pessoa_nova.final();
        
        }catch(resultado){
            alert(resultado);
        }
    }
 
