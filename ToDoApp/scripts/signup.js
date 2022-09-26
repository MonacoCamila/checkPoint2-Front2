
function signup(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    console.log(firstName, lastName, email, password, password2);

    const data = {
        firstName, 
        lastName,
        email,
        password,
        password2
    }

    // 2. Fazer o cadastro do usuário na API

    fetch('https://ctd-fe2-todo-v2.herokuapp.com/v1/usuarios',{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).then(() => {
        //redirecionando para a pagina de login
        window.location.href = 'index.html';
    }).catch(err => {
        console.log(err);
    })

}