let tokenJwt;

//executa automaticamente ao chamar a pagina tarefas.html

onload = function(){

    //busca o token no storage 
    tokenJwt = localStorage.getItem('token');

    if(!tokenJwt) {
        //caso o token nao esteja no storage
        this.window.location = 'index.html';
    } else {
        //caso o token esteja valido 
        //buscar dados do usuario
        buscaDadosUsuario();

    }
}

async function buscaDadosUsuario() {

    try{

        let resposta = await fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/getMe', {
                method: 'GET',
                headers:{
                    'authorization': tokenJwt
                }
            });

            if(resposta.status==200 || resposta.status==201) {
            let respostaJs = await resposta.json();
            console.log(respostaJs);
            }
            
            manipulaDadosUsuario(respostaJS);
            
            else {
                throw "ocorreu algum erro"
            } 
                  

            
    } catch (error){
        alert(error)
        console.log(error);    

}

let manipulaDadosUsuario = (dadosRecebidos)=>{
    console.log(dadosRecebidos);

    let nomeUsuario = document.getElementById("nomeUsuario");

    //nomeUsuario
    nomeUsuario.innerText = `${dadosRecebidos.firstName} ${dadosRecebidos.lastName}`;

}




















/*window.onload = () => {
    getUser();
    getTarefas();
};

function getUser() {
    //pegando infos do usuario logado
    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/users/getMe', {
        method: 'GET',
        headers:{
            authorization: localStorage.getItem('token')
        }
    }).then((response) => {
        return response.json()
    }).then((data) => {
        localStorage.setItem('usuario', JSON.stringify(data))

        const usuario = JSON.parse(localStorage.getItem('usuario'))

        document.getElementById('novaTarefa').textContent = 'Nova Tarefa';
        
    }).catch((error) => {
        console.log(error)
    })
}

function getTarefas() {
    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/tasks', {
        method: 'GET',
        headers:{
            authorization: localStorage.getItem('token')
        }
    }).then((response) => {
        return response.json()
    }).then ((tarefas) => {
        console.log(tarefas)

        const lista = tarefas.map((tarefa)=>{
            return // // 
        })

        document.getElementById('conteudo').innerHTML = lista.join('');
    }).catch((err) => {
        console.log(err)
    })

}*/