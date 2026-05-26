// Pegando o token 
const token = localStorage.getItem('token');

// Casp não tenha o token e vai realocar para página
if(!token){
    alert('Você precisa estar logado.');
    window.location.href = 'login.html';
}

// Pegando os ids do formulário de avaliação
const formAvaliacao = document.getElementById('formAvaliacao');
const comentario = document.getElementById('comentario');
const estrelas = document.querySelectorAll('.estrela');
const texto = document.getElementById('nota-text');

let nota = 0;

estrelas.forEach((estrela, index) => {

    estrela.addEventListener('click', (event) => {
        const largura = estrela.clientWidth;
        const cliqueX = event.offsetX;

        if(cliqueX < largura / 2){
            nota = index + 0.5;
        }else{
            nota = index + 1;
        }
        atualizarEstrelas();
    });
});

function atualizarEstrelas(){

    estrelas.forEach((estrela, index) => {
        estrela.classList.remove('cheia','meia');
        const numero = index + 1;
        if(numero <= nota){
            estrela.classList.add('cheia');
        }else if(numero - 0.5 === nota){
            estrela.classList.add('meia');
        }
    });

    texto.innerText = `Nota: ${nota}`;
}


async function avaliacao(){
    
    // Vendo se os valores estão nulo 
    if(nota === 0){
        return alert('Escolha uma nota.');
    }
    if(comentario.value.trim() === ""){
        return alert('Digite um comentário.');
    }

    try{
        // Chamando api do Node.js
        const resposta = await fetch(
            "http://127.0.0.1:3000/avaliacao",
            {
                method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                // Pegando os valores dos campos input
                body: JSON.stringify({
                   estrela: nota, 
                   comentario: comentario.value
                }),
            }
        );
        // colocado os dados json em uma variavel
        const dado = await resposta.json();

        // Verificando se o login ainda está válido
        if(resposta.status === 401){
            localStorage.removeItem('token');
            alert('Faça login novamente.');
            window.location.href = 'login.html';
            return;
        }

        // LOGIN responder 200
        if(resposta.ok){
            nota = 0;
            comentario.value = "";
            atualizarEstrelas();

            alert("Obrigado pela avaliação! 😁");
            window.location.replace('index.html');
        }else{
            alert('Erro ao avaliar.');
            console.log('Erro -> ', dado.mensagem)
        }
    }catch(error){
       console.error(`Não foi possível requisitar a API -> ${error}`);
       alert("Não foi possível conectar com servidor.");
    }
}

formAvaliacao.addEventListener('submit',(event)=>{
    event.preventDefault();
    avaliacao();
});