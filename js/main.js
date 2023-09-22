const soma = document.querySelector('#somar')
const subtrai = document.querySelector('#subtrair')
const braco = document.querySelector('#braco')

const controle = document.querySelectorAll('.controle-ajuste')
console.log(controle)

//funcao anonima em js aq
soma.addEventListener("click", () => {manipulaDados("somar")})
subtrai.addEventListener("click", () => {manipulaDados("subtrair")})

function manipulaDados(operacao){
    if(operacao === "subtrair"){
        braco.value =  parseInt(braco.value) -1
    }else{
        braco.value =  parseInt(braco.value) +1
    }
}
