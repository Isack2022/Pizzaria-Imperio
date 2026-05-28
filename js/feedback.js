// Pegando o id da div
const lista = document.getElementById('lista-avaliacoes');

// Tela de carregamento
const loading = document.getElementById('loading');
function mostrarLoading(){
    loading.style.display = 'flex';
}

function esconderLoading(){
    loading.style.display = 'none';
}


async function carregarAvaliacoes() {
    try {
        //chamando a função de mostrar loadig 
        mostrarLoading();
        const resposta = await fetch(
            'https://node-pizzaria.onrender.com/avaliacao'
        );

        const dados = await resposta.json();

        // Incrementando o html 
        lista.innerHTML = '';

        dados.forEach(avaliacao => {
            // Trazendo as informações do banco de dados
            lista.innerHTML += `
                <div class="card-avaliacao">
                    <h3>${avaliacao.estrela} ⭐</h3>
                    <p>${avaliacao.comentario}</p>
                </div>
            `;

        });

    } catch(error) {
        console.error(`Não foi possível requisitar a API -> ${error}`);
        alert("Não foi possível carregar os feedbacks.");
    }finally{
        esconderLoading();
    }
}

carregarAvaliacoes();