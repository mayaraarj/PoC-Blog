
async function requererTodos() {
// Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
let respostaServidor = await fetch(URL_BASE);
// Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
let profiles = await respostaServidor.json();

// Retorno os valores para aplicação.
return profiles;
}

async function requererPorId(idProfile) {
 // Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
 let respostaServidor = await fetch(`${URL_BASE}/${idProfile}`);
 // Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
 let profile = await respostaServidor.json();

 // Retorno os valores para aplicação.
 return profile;
}


async function cadastrarUmPerfil(novoPerfil) {
        // Configuro o pedido como método POST e o copor da minha requisição (o que vou enviar para o servidor?)
        let configuracoesCabecalho = {
            method: 'POST',
            body: JSON.stringify(novaPublicacao)
        }
        // Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
        let respostaServidor = await fetch(`${URL_BASE}`, configuracoesCabecalho);
        // Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
        let novoPerfil = await respostaServidor.json();
    
        // Retorno os valores para aplicação.
        return novoPerfil;
}

async function deletarUm(idProfile) {
// Configuro o pedido como método PUT e o copor da minha requisição (o que vou enviar para o servidor?)
let configuracoesCabecalho = {
    method: 'DELETE',
}
// Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
let respostaServidor = await fetch(`${URL_BASE}/${idProfile}`, configuracoesCabecalho);

// Retorno boleano se conseguiu remover o item ou não...
return (respostaServidor.status == 200)
}


async function atualizarUm(idProfile, novoPerfil) {
       // Configuro o pedido como método PUT e o copor da minha requisição (o que vou enviar para o servidor?)
       let configuracoesCabecalho = {
        method: 'PATCH',
        body: JSON.stringify(novaPublicacao)
    }
    // Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
    let respostaServidor = await fetch(`${URL_BASE}/${idProfile}`, configuracoesCabecalho);
    // Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
    let novoPerfil = await respostaServidor.json();
    // Retorno os valores para aplicação.
    return novoPerfil;
}


async function substituirUm() {
    let configuracoesCabecalho = {
        method: 'PUT',
        body: JSON.stringify(novoPerfil)
    }
    // Recebo a resposta do servidor - Autorização, status, o que ele irá retorna em seguida, etc... 
    let respostaServidor = await fetch(`${URL_BASE}/${novoPerfil}`, configuracoesCabecalho);
    // Recebo o corpo convertido em json... caso não tenha interesse pela conversão respostaServidor.body...
    let novoPerfil = await respostaServidor.json();
    // Retorno os valores para aplicação.
    return novoPerfil;
}