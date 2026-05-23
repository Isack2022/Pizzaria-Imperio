// ======================
// BOAS-VINDAS
// ======================

window.addEventListener('load', () => {

    setTimeout(() => {

        alert('🍕 Bem-vindo à Pizzaria Império!');

    }, 500);

});


// ======================
// BOTÕES HEADER
// ======================

const botoes =
document.querySelectorAll('.header-buttons button');

botoes.forEach(botao => {

    botao.addEventListener('click', () => {

        const texto =
        botao.textContent;

        if(texto === 'Cardápio'){

            alert('🍕 Nosso cardápio será aberto!');

        }

        else if(texto === 'Login'){

            alert('🔐 Área de Login');

        }

        else if(texto === 'Cadastro'){

            alert('📝 Área de Cadastro');

        }

    });

});


// ======================
// SCROLL SUAVE
// ======================

const sobreNos =
document.querySelector('.menu-central a');

sobreNos.addEventListener('click', (event) => {

    event.preventDefault();

    const secao =
    document.querySelector('.secao-2');

    secao.scrollIntoView({

        behavior: 'smooth'

    });

});


// ======================
// EFEITO NAS IMAGENS
// ======================

const imagens =
document.querySelectorAll('.midia img');

imagens.forEach(imagem => {

    imagem.addEventListener('mouseenter', () => {

        imagem.style.transform =
        'scale(1.05)';

        imagem.style.transition =
        '0.3s';

    });

    imagem.addEventListener('mouseleave', () => {

        imagem.style.transform =
        'scale(1)';

    });

});






// PEGAR TODAS AS CATEGORIAS

const categorias =
document.querySelectorAll('.categoria');

categorias.forEach(categoria => {

    const linha =
    categoria.querySelector('.linha-cards');

    const esquerda =
    categoria.querySelector('.esquerda');

    const direita =
    categoria.querySelector('.direita');

    // SETA ESQUERDA

    esquerda.addEventListener('click', () => {

        linha.scrollBy({
            left: -800,
            behavior: 'smooth'
        });

    });

    // SETA DIREITA

    direita.addEventListener('click', () => {

        linha.scrollBy({
            left: 800,
            behavior: 'smooth'
        });

    });

});