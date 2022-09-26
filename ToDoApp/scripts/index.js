async function login(event) {
  event.preventDefault();

  //pegar infos do formulario 
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const botaoLogin = document.getElementById('botaoLogin');
  
  const data ={
      email,
      password
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


  //fazer login do usuario na API  

  const response = await fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/login', {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify(data)
  }).then((response) => {
      return response.json();
  }).catch((error) => {
      console.log(error);
  })

  console.log (response);

  //salvar o token retornado no browser
  localStorage.setItem('token, response.jwt');

  //redirecionar para a lista de tarefas
  window.location.href = 'tarefas.html';

}

/*Validações necessárias:

repetir a senha deve corresponder à senha (register)

nenhum campo vazio (register e login)

devem finalmente preparar o objeto normalizado em ambos os casos. Exemplo para register:        
      {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string"
      }


Desenvolver o signup.js (script que deve estar ligado em signup.html)
Aqui, você deve usar um evento para lançar o POST correspondente à API, processo através do qual se realiza a criação de um usuário, exibindo finalmente a resposta no console.

Desenvolver o index.js (script que deve estar ligado em index.html)
Aqui, você deve usar um evento para lançar o POST correspondente à API. Neste caso, o processo refere-se à situação em que um usuário efetua login na aplicação, finalmente exibindo a resposta no console.

Nesta fase do projeto, você conseguirá: 
a) capturar, manipular, normalizar e validar os dados informados pelo usuário, nas telas de login e cadastro; 
b) consumir a API To-Do, cadastrando um novo usuário e realizando o login com o usuário cadastrado; 
c) exibir as informações retornadas pela API no console da sua aplicação;
d) armazenar o token jwt de acesso retornado pela API ao fazer o login, usando os recursos de armazenamento do HTML e JS.


*/










