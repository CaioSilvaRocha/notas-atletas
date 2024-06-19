// FUNÇÕES

function calcularMediaNotasEspecificas(matrizObjetos){

    // Acessa todos os objetos da matriz
    for(let posicaoObjeto = 0; posicaoObjeto < matrizObjetos.length; posicaoObjeto++){

        // Ordena as notas das matrizes sem função no parâmetro
        let notasOrdenadasSemFuncaoParametro = matrizObjetos[posicaoObjeto].notas.sort();

        // Define a primeira mensagem de resultado
        let mensagemResultado1 = `Atleta: ${matrizObjetos[posicaoObjeto].nome}\nNotas Obtidas: ${notasOrdenadasSemFuncaoParametro}\n`;

        // Ordena as notas das matrizes com função no parâmetro
        let notasOrdenadasComFuncaoParametro = matrizObjetos[posicaoObjeto].notas.sort(function(numero1, numero2){
            return numero1 - numero2
        });

        // Obtém as notas específicas para o cálculo da média
        let notasEspecificas = notasOrdenadasComFuncaoParametro.slice(1, 4);

        // Calcula o somatório das notas específicas
        let somatorioNotasEspecificas = notasEspecificas.reduce(function(somatorio, nota){
            return somatorio + nota
        }, 0)

        // Calcula a média das notas específicas
        let mediaNotasEspecificas = somatorioNotasEspecificas / notasEspecificas.length

        // Define a segunda mensagem de resultado
        let mensagemResultado2 = `Média Válida: ${mediaNotasEspecificas}\n`;

        // Une e exibe as mensagens de resultado de acordo com as condições do problema
        let mensagemResultadoFinal = mensagemResultado1 + mensagemResultado2;

        console.log(mensagemResultadoFinal)
    }
}

// DADOS DE ENTRADA

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
]

// FUNCIONAMENTO DO CÓDIGO

calcularMediaNotasEspecificas(atletas);