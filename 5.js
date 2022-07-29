/*5. Crie uma função chamada podeDirigir que receba como parâmetro da
idade em formato número, e exiba no console “Você pode dirigir” caso o
valor seja maior ou igual a 18. Caso contrário irá exibir “Você não pode
dirigir”*/

function podeDirigir(idade){
    
    if(idade>=18)
    {
        console.log("Apto a dirigir")
    }
    else{
        console.log("Não pode dirigir")
    }
}

podeDirigir(17);