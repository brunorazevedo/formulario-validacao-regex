const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)


//Envio do formulario
form.addEventListener('submit', event =>{
    event.preventDefault(); // previnindo recarregamento da pagina
    
    const username = event.target.username.value // armazenando valor do input
    const isAvalueUsername = testUsername(username) // validando regex

    if(isAvalueUsername){
        feedback.textContent = 'O username válido é =)' // alterando contéudo do paragrafo  caso o input for válido
        return
    }
   
    feedback.textContent ='O username deve conter de 6 a 12 caracteres e deve conter apenas letras' // alterando contéudo do paragrafo  caso o input não for válido
    
})

// Validação em tempo real do input
// Já pegando o username direto pelo id criado no HTML dentro do contexto do form

form.username.addEventListener('keyup', event =>{ // keyup para pegar as teclas digitadas
    const isAValidUsername = testUsername(event.target.value) // validação regex

    if(isAValidUsername){
        form.username.setAttribute('class', 'sucess') // se for valido os dados digitados no input acrescentar a class sucess criada no css // setAttribute para substituir qualquer classe já existente
        return
    }

    form.username.setAttribute('class', 'error') // se não for valido os dados digitados no input acrescentar a class error // setAttribute para substituir qualquer classe já existente
})