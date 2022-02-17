class Usuario{
    constructor(codigo, nome){
        this.codigo = codigo
        this.nome = nome
    }
};

function funcao_Usuario(){
    
    var variavel_array = [];   
    
    var variavel_quantidade_entrada = parseInt(prompt("Quantos usuários deseja cadastrar ?"));
    
    for (let index = 1; index <= variavel_quantidade_entrada; index++) {
        alert("Cadastrar usuario: " + String(index))
        let nome = prompt("Informe o nome do usuário: ")
        let codigo = prompt("Informe o codigo do usuário: ")
        if (nome != "" && codigo != "" ) {

            let variavelDeClasseUsuario = new Usuario(codigo, nome)
            
            variavel_array.push(variavelDeClasseUsuario)

        }else {
            alert("O codigo e o nome não foram informados!!")
            break   
        }

    }

    for (let index = 0; index < variavel_array.length; index++) {
        const usuariosCadastrados = variavel_array[index];
        alert(String(usuariosCadastrados.codigo) + " "  + String(usuariosCadastrados.nome))
    }  
  
    console.log(variavel_array);

}
