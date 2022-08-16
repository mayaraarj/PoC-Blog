const URL_BASE = 'http://localhost:3000/comments';

async function requererTodos() {
    let respostaServidor = await fetch(URL_BASE);
    // Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
    let comments = await respostaServidor.json();

    // Retorno os valores para aplicação.
    return comments;
}

async function cadastrarUm(novoComentario) {
   
        // Configuro o pedido como método POST e o copor da minha requisição (o que vou enviar para o servidor?)
        let configuracoesCabecalho = {
            method: 'POST',
            body: JSON.stringify(novoComentario)
        }
        // Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
        let respostaServidor = await fetch(`${URL_BASE}`, configuracoesCabecalho);
        // Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
        let comentarioCriado = await respostaServidor.json();
    
        // Retorno os valores para aplicação.
        return comentarioCriado;
    }


async function deletarUmComentarioPorID(idComentario) {
 
 let configuracoesCabecalho = {
    method: 'DELETE',
}
// Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
let respostaServidor = await fetch(`${URL_BASE}/${idComentario}`, configuracoesCabecalho);

// Retorno boleano se conseguiu remover o item ou não...
return (respostaServidor.status == 200)
}


async function substituirUm(idComentario,novoComentario) {
 // Configuro o pedido como método PUT e o corpo da minha requisição (o que vou enviar para o servidor?)
 let configuracoesCabecalho = {
    method: 'PUT',
    body: JSON.stringify(novoComentario)
}
// Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
let respostaServidor = await fetch(`${URL_BASE}/${idComentario}`, configuracoesCabecalho);
// Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
let novoComentario = await respostaServidor.json();

// Retorno os valores para aplicação.
return novoComentario;
}
