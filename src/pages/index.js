function pegarTiposdeCaracteres(){
 const uppercase = document.querySelector('#include_uppercase').checked;
 const lowercase = document.querySelector('#include_lowercase').checked;   /* CRIAR UMA CONST PARA VERIFICAR AS CONDIÇOES DA SENHA  */
 const number = document.querySelector('#include_number').checked;
 const special = document.querySelector('#include_special').checked;

    const tiposDeCaracteres = [];  /* ARRAY QUE ARMAZENA AS CONDIÇOES DA SENHA  array principal*/

    if (uppercase) {
        tiposDeCaracteres.push ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if (lowercase) {
        tiposDeCaracteres.push ('abcdefghijklmnopqrstuvwxyz')   /* SE FOR IGUAL A TRUE VAI INSERIR OS CARACTERES DESEJADOS PARA O ARRAY! */
    }

    if (number) {
        tiposDeCaracteres.push ('0123456789')
    }

    if (special) {
        tiposDeCaracteres.push ('!@#$%&*()?/[=+_-')
    }
 
    return tiposDeCaracteres;
}

function tiposDeCaracteresAleatorios(tiposDeCaracteres) {

const aleatorio = Math.floor(Math.random() * tiposDeCaracteres.length);  /* arrendonda e pega um numero aleatorio do array! */

tiposDeCaracteres[aleatorio]

return tiposDeCaracteres[aleatorio][Math.floor(  Math.random () * tiposDeCaracteres[aleatorio].length)];    /* pega o conteudo da posição do array da variavel acima aleatorio */

}

function pegarTamanhoDaSenha() {

   const tamanho = document.querySelector('#size').value;
    if(isNaN(tamanho) || tamanho < 6 || tamanho > 128 ) {
      
       message('tamanho de senha inválido, selecione entre 6 e 128!!!', '#b35')

    }

   return tamanho
}

function gerarSenha(tamanho, tiposDeCaracteres) {

let SenhaGerada = "";

while(SenhaGerada.length < tamanho) {
    SenhaGerada += tiposDeCaracteresAleatorios(tiposDeCaracteres)
}

return SenhaGerada;

}

function message(text, background){

    Toastify({  
        text: text,
        duration: 2000,
        style: {
            background: background,
            color:'#000',
            boxShadow:'none',
            
        }
       }).showToast();

}


/*  VERIFICAR SE ESTA INDO PRA DENTRO DO ARRAY!, verifica oque esta sendo imprimido*/ 
document.querySelector('#generate').addEventListener('click', function(){

   const tamanho = pegarTamanhoDaSenha()
   const tiposDeCaracteres = pegarTiposdeCaracteres()

   if(!size) {
    return;
   }


    if(!tiposDeCaracteres.length){
        message ('selecione pelo menos um tipo de caracter para sua senha!', '#fff')
        return;
    }

    const senhaGerada = gerarSenha(tamanho, tiposDeCaracteres)

    document.querySelector ('#password_container').classList.add('show')
   document.querySelector('#password').textContent= senhaGerada
}); 

document.querySelector('#copy').addEventListener('click', function() {

    navigator.clipboard.writeText(document.querySelector('#password').textContent) 
    message('Senha copiada com sucesso!', '#54ec8e')
})

