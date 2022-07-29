/*Crie uma função chamada converterEmHoras que receba um número em
minutos como parâmetro e irá exibir a quantidade em horas.*/

function converterEmHoras(minutos) {

    const horas = (minutos / 60);
    console.log("A quantidade de minutos transformado em hora(s) foi de " + horas + " horas");
}

converterEmHoras(120);

