// ======================
// BOAS-VINDAS
// ======================

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         alert('🍕 Bem-vindo à Pizzaria Império!');
//     }, 500);
// });


// ======================
// SETAS DO CARDÁPIO
// ======================

const categorias = document.querySelectorAll('.categoria');

categorias.forEach((categoria) => {

    const linha = categoria.querySelector('.linha-cards');
    const esquerda = categoria.querySelector('.esquerda');
    const direita = categoria.querySelector('.direita');

    if(esquerda && linha){
        esquerda.addEventListener('click', () => {

            linha.scrollBy({
                left: -1000,
                behavior: 'smooth'
            });

        });
    }

    if(direita && linha){
        direita.addEventListener('click', () => {

            linha.scrollBy({
                left: 1000,
                behavior: 'smooth'
            });

        });
    }

});








