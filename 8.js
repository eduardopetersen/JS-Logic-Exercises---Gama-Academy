/*8. Crie uma função chamada tabuada que irá receber um número inteiro
como parâmetro e exibir no console a tabuada desse número 1 ao 10.*/

function tabuada(number) {
    let a = 1;
    while(a<=11) {
        console.log(number + "x" + a + "=" + (a*number));
        a++
    }
}

tabuada(5);