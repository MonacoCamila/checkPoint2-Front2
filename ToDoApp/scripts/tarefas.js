window.onload = () => {
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

}