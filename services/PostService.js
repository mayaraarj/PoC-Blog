
async function requererTodos() {
// Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
let respostaServidor = await fetch(URL_BASE);
// Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
let publicacoes = await respostaServidor.json();

// Retorno os valores para aplicação.
return publicacoes;
}

async function cadastrarUm(novaPublicacao) {
// Configuro o pedido como método POST e o copor da minha requisição (o que vou enviar para o servidor?)
let configuracoesCabecalho = {
    method: 'POST',
    body: JSON.stringify(novaPublicacao)
}
// Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
let respostaServidor = await fetch(`${URL_BASE}`, configuracoesCabecalho);
// Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
let publicacaoCriada = await respostaServidor.json();

// Retorno os valores para aplicação.
return publicacaoCriada;
}

async function deletarUm(idPublicacao) {
 // Configuro o pedido como método PUT e o copor da minha requisição (o que vou enviar para o servidor?)
 let configuracoesCabecalho = {
    method: 'DELETE',
}
// Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
let respostaServidor = await fetch(`${URL_BASE}/${idPublicacao}`, configuracoesCabecalho);

// Retorno boleano se conseguiu remover o item ou não...
return (respostaServidor.status == 200)
}


async function atualizarUm(idPublicacao,novaPublicacao) {
 // Configuro o pedido como método PUT e o copor da minha requisição (o que vou enviar para o servidor?)
 let configuracoesCabecalho = {
    method: 'PUT',
    body: JSON.stringify(novaPublicacao)
}
// Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
let respostaServidor = await fetch(`${URL_BASE}/${idPublicacao}`, configuracoesCabecalho);
// Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
let publicacaoSubstituta = await respostaServidor.json();

// Retorno os valores para aplicação.
return publicacaoSubstituta;
}