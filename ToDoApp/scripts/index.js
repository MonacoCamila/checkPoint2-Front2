
function login(event) {
  console.log('iniciando login')
  event.preventDefault();

  //pegar infos do formulario 
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const botaoLogin = document.getElementById('botaoLogin');
  
  const data ={
      email,
      password
  }

  let loginUsuario = {
    email:'',
    password:''
  }

  // variaveis de controle para validacoes do form login 
  let emailValido = false;
  let passwordValido = false;
  let minPasswordCaracteres = 4;
  let loginUsuarioJson = '';  

  botaoLogin.innerText = 'bloqueado';
  //add um evento de click no botao login
  botaoLogin.addEventListener('click',(evento)=> {

    //busca valores atualizados do login 
    emailLogin = document.getElementById('email');
    passwordLogin = document.getElementById('password');

    // retira os espacos vazios 
    function normalizaUsandoTrim(textoRecebido) {
        return  textoRecebido.trim()
    }

    if(validaLogin()){
        evento.preventDefault();

        //normalizando os inputs do Login 

        emailLogin = normalizaUsandoTrim(emailLogin.value);
        passwordLogin = normalizaUsandoTrim(passwordLogin.value);

        // atribui as informacoes normalizadas ao objeto JS 

        loginUsuario.email = emailLogin;
        loginUsuario.password = passwordLogin;

        // converte o objeto JS para o Json 

        loginUsuarioJson = JSON.stringify(loginUsuario)
        console.log("objeto usuario em Json\n")
        console.log(loginUsuarioJson);

    } else{
        console.log('login invalido');
    }

  });

  // verifica se ambas informacoes estao validas 

  function validaLogin(){
    if(emailValido && passwordValido){

    //ativa o botao de login 
    botaoLogin.innerText = 'Acessar';
    botaoLogin.removeAttribute('disabled');
    return true;


  } else {
    console.log('login invalido');
  }

}
  
//fazer login do usuario na API  

console.log('chamando fetch')

fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login', {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify(data)

  }).then((response) => {
      let token = response.json().jwt;
      console.log('token', token); 
      localStorage.setItem('token', token);
      window.location.href = 'tarefas.html';

  }).catch((error) => {
      console.log(error);
  })

   

}

document.querySelector('form').addEventListener('submit', login);

