// Dados do formulário login 
const formularioLogin = document.getElementById('formLogin');
const txtEmailLogin = document.getElementById('email-Login');
const txtSenhaLogin = document.getElementById('senha-Login');

// formulário Cadastro
const formularioCadastro = document.getElementById('formCadastro')
const txtNome = document.getElementById('nome-Cadastro');
const txtEmail = document.getElementById('email-Cadastro');
const txtTelefone = document.getElementById('telefone-Cadastro');
const txtSenha1 = document.getElementById('senha1-Cadastro');
const txtSenha2 = document.getElementById('senha2-Cadastro');


// Dados token
let token;

// OLHO senha login
const olhoLogin = document.getElementById('olho-login');
const olhoSenha1 = document.getElementById('olho-Senha');
const olhoSenha2 = document.getElementById('olho-Senha2');

console.log(olhoLogin);

// Evento do olho no formulário 
olhoLogin.addEventListener('click', () => {
    if(txtSenhaLogin.type === 'password'){

        txtSenhaLogin.type = 'text';
        olhoLogin.src ='imagens/icon/olho.png';

    }else{
        txtSenhaLogin.type = 'password';
        olhoLogin.src ='imagens/icon/olho_2.png';
    }
});

olhoSenha1.addEventListener('click', () => {
    if(txtSenha1.type === 'password'){

        txtSenha1.type = 'text';
        olhoSenha1.src ='imagens/icon/olho.png';

    }else{
        txtSenha1.type = 'password';
        olhoSenha1.src ='imagens/icon/olho_2.png';
    }
});


olhoSenha2.addEventListener('click', () => {
    if(txtSenha2.type === 'password'){

        txtSenha2.type = 'text';
        olhoSenha2.src ='imagens/icon/olho.png';

    }else{
        txtSenha2.type = 'password';
        olhoSenha2.src ='imagens/icon/olho_2.png';
    }
});


// Função de login
async function login(){
    // Verificando se os campos estão preenchidos
    if(txtEmailLogin.value.trim() == "" || txtSenhaLogin.value.trim() ==""){
        return alert(`Todos os campos devem ser preenchidos.`);
    }
    try{
         // Chamando api do Node.js
        const resposta = await fetch(
            "http://127.0.0.1:3000/cliente/login",
            {
                method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                // Pegando os valores dos campos input
                body: JSON.stringify({
                    email: txtEmailLogin.value,
                    senha: txtSenhaLogin.value
                }),
            }
        );
        // colocado os dados json em uma variavel
        const dado = await resposta.json();
        // LOGIN responder 200
        if(resposta.ok){
            localStorage.setItem(
                'token',
                dado.token
            );

            txtEmailLogin.value = "";
            txtSenhaLogin.value = "";

            alert("Login realizado com sucesso! ");
            window.location.replace('avaliacao.html');
        }else{
            txtEmailLogin.value = "";
            txtSenhaLogin.value = "";
            alert('Usuário ou senha incorretos');
        }
    }catch(error){
       console.error(`Não foi possível requisitar a API -> ${error}`);
       alert("Não foi possível conectar com servidor.");
    }
}

formularioLogin.addEventListener('submit',(event)=>{
    event.preventDefault();
    login();
});


// Formulario de cadastro
async function cadastro(){
    // Verificando se os campos estão preenchidos
    if(txtNome.value.trim() == "" || txtEmail.value.trim() =="" ||
    txtTelefone.value.trim() == "" || txtSenha1.value.trim() == "" ||
    txtSenha2.value.trim() == ""
    ){
        return alert(`Todos os campos devem ser preenchidos.`);
    }
    if(txtSenha1.value.trim() != txtSenha2.value.trim()){
        return alert(`As senhas não coincidem. Verifique e insira senhas iguais.`);
    }
    try{
         // Chamando api do Node.js
        const resposta = await fetch(
            "http://127.0.0.1:3000/cliente/",
            {
                method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                // Pegando os valores dos campos input
                body: JSON.stringify({
                    nome: txtNome.value,
                    email: txtEmail.value,
                    telefone: txtTelefone.value,
                    senha: txtSenha1.value
                }),
            }
        );
        // colocado os dados json em uma variavel
        const dado = await resposta.json();
        // LOGIN responder 200
        if(resposta.ok){

            txtNome.value = "";
            txtEmail.value = "";
            txtTelefone.value = "";
            txtSenha1.value = "";
            txtSenha2.value = "";

            alert("Cadastro  realizado com sucesso! ");
        }else{
            alert("Erro ao cadastra.")
        }
    }catch(error){
       console.error(`Não foi possível requisitar a API -> ${error}`);
       alert("Não foi possível conectar com servidor.");
    }
}

formularioCadastro.addEventListener('submit', (event) =>{
    event.preventDefault();
    cadastro();
});

