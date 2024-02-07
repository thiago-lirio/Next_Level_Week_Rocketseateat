//Variável das perguntas e respostas, essa variável é um array[] que contém um objeto com tres propriedades
const perguntas = [
  {
    pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
    respostas: [
      "Selecionar vários elementos do DOM",
      "Selecionar um único elemento do DOM",
      "Modificar o estilo de um elemento",
    ],
    correta: 1,
  },
  {
    pergunta: "O que significa 'NaN' em JavaScript?",
    respostas: [
      "Não é um Número",
      "Novo Array Numérico",
      "Número Aleatório Negativo",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "Não há diferença",
      "O primeiro compara apenas o valor, o segundo compara valor e tipo de dados",
      "O primeiro compara apenas o tipo de dados, o segundo compara valor e tipo de dados",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: ["const myVar = 10;", "let myVar = 10;", "var myVar = 10;"],
    correta: 0,
  },
  {
    pergunta: "O que o método 'push()' faz em um array em JavaScript?",
    respostas: [
      "Remove o último elemento do array",
      "Adiciona um elemento ao final do array",
      "Inverte a ordem dos elementos no array",
    ],
    correta: 1,
  },
  {
    pergunta: "O que é uma função de callback em JavaScript?",
    respostas: [
      "Uma função que é executada imediatamente",
      "Uma função que é passada como argumento para outra função e é executada após algum evento",
      "Uma função que nunca é executada",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o operador lógico 'OU' em JavaScript?",
    respostas: ["&&", "||", "!!"],
    correta: 1,
  },
  {
    pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
    respostas: ["10", "55", "Erro"],
    correta: 1,
  },
  {
    pergunta: "Como você converte uma string em um número em JavaScript?",
    respostas: ["parseInt()", "toString()", "toUpperCase()"],
    correta: 0,
  },
  {
    pergunta: "O que o método 'split()' faz em JavaScript?",
    respostas: [
      "Combina dois arrays",
      "Divide uma string em substrings com base em um separador especificado e retorna um novo array",
      "Remove o último elemento do array",
    ],
    correta: 1,
  },
];

//Atribui a variável template a tag template através do query selector
const template = document.querySelector("template");
//Atribui a variável quiz, a tag que contém o id quiz através do query selector
const quiz = document.querySelector("#quiz");

//Foi criado um laço para repetir as perguntas e as respostas a quantidade existente no array perguntas
//Para cada item do array perguntas ele executa a tarefa
for (const item of perguntas) {
  //Atribui a variável quizItem a função de clonar um nó contendo todo o conteúdo da variável template. A variavel template contem toda a tag Template do HTML
  const quizItem = template.content.cloneNode(true);
  //É inserido na tag h3 da variavel quizItem o conteúdo igual ao atributo pergunta de cada item.
  quizItem.querySelector("h3").textContent = item.pergunta;
  //Em seguida é necessário apresentar as respostas na tela
  //É feito um laço de resposta dentro do laço pergunta para apresentar a quantidade de respostas existentes no arrray resposta de cada pergunta
  for (let resposta of item.respostas) {
    //É atribuído a variável dt a função de clonar o nó filho dt da tag dl contendo todo o conteúdo da variável quizItem
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    //É inserido na tag span da variavel resposta o conteúdo igual ao atributo resposta de cada item.
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta- " + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;
      if (estaCorreta) {
      } else {
      }
    };

    //Mostra na tela as respostas
    quizItem.querySelector("dl").appendChild(dt);
  }
  //Apaga a primeira resposta, pois aparece a resposta exemplo criada para ser um clone
  quizItem.querySelector("dl dt").remove();
  //Mostra as perguntas na tela
  quiz.appendChild(quizItem);
}
