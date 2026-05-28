// Pegando o token 
const token = localStorage.getItem('token');

// Casp não tenha o token e vai realocar para página de login
if(!token){
    alert('Você precisa estar logado.');
    window.location.href = 'login.html';
}

// Pegando os ids do formulário de avaliação
const formAvaliacao = document.getElementById('formAvaliacao');
const comentario = document.getElementById('comentario');
const estrelas = document.querySelectorAll('.estrela');
const texto = document.getElementById('nota-text');


// Tela de carregamento
const loading = document.getElementById('loading');
function mostrarLoading(){
    loading.style.display = 'flex';
}

function esconderLoading(){
    loading.style.display = 'none';
}

let nota = 0;

estrelas.forEach((estrela, index) => {
    // Verificando o click do mouse
    estrela.addEventListener('click', (event) => {
        // Pegando a largura da estrela
        const largura = estrela.clientWidth;
        // Pegando o click do mouse
        const cliqueX = event.offsetX;

        // Se estiver para esquerda é meio, mas se não estiver é 1
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
        // Verificando se a estrela vai ser cheia ou meia
        estrela.classList.remove('cheia','meia');
        const numero = index + 1;
        if(numero <= nota){
            estrela.classList.add('cheia');
        }
        // Se a nota tive o valor meio(0,5) vai ser a estrela meia
        else if(numero - 0.5 === nota){
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
        mostrarLoading();
        // Chamando api do Node.js
        const resposta = await fetch(
            "https://node-pizzaria.onrender.com/avaliacao",
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

            alert("Obrigado pela sua avaliação! 😁");
            window.location.replace('index.html');
        }else{
            alert('Erro ao avaliar.');
            console.log('Erro -> ', dado.mensagem)
        }
    }catch(error){
       console.error(`Não foi possível requisitar a API -> ${error}`);
       alert("Não foi possível conectar com servidor.");
    }finally{
        esconderLoading();
    }
}

formAvaliacao.addEventListener('submit',(event)=>{
    event.preventDefault();
    avaliacao();
});