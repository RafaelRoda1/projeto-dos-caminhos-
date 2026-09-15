import { aleatorio, nomes, afirmacoesAleatorias } from './aleatorio.js';

// Banco de Perguntas
const perguntasPorCaminho = {
  consumo: [
    {
      pergunta: "Em 2049, com que frequência você pensa sobre a origem das coisas que compra?",
      opcoes: [
        { texto: "Raramente ou nunca", pontos: 0, afirmacao: "comprava sem refletir sobre a origem das coisas." },
        { texto: "Às vezes, quando o assunto chama atenção", pontos: 1, afirmacao: "começou a notar o impacto dos seus produtos." },
        { texto: "Sempre busco saber se a marca é sustentável", pontos: 2, afirmacao: "priorizou marcas totalmente sustentáveis." }
      ]
    },
    {
      pergunta: "O que você costuma fazer com roupas ou objetos que não usa mais?",
      opcoes: [
        { texto: "Jogo no lixo comum", pontos: 0, afirmacao: "descartava objetos no lixo comum." },
        { texto: "Guardo no armário até acumular", pontos: 1, afirmacao: "acumulava itens sem uso no armário." },
        { texto: "Doou, vendo em brechó ou reutilizo", pontos: 2, afirmacao: "promoveu a economia circular doando e reutilizando." }
      ]
    },
    {
      pergunta: "Como você lida com sacolas plásticas nas compras?",
      opcoes: [
        { texto: "Uso várias sacolas plásticas sem pensar", pontos: 0, afirmacao: "usava sacolas plásticas em excesso." },
        { texto: "Tento reaproveitar as sacolas em casa depois", pontos: 1, afirmacao: "reaproveitava as sacolas plásticas em casa." },
        { texto: "Sempre levo minha própria sacola retornável (ecobag)", pontos: 2, afirmacao: "adotou o uso constante de ecobags." }
      ]
    }
  ],
  energia: [
    {
      pergunta: "Qual é o seu principal meio de transporte no dia a dia?",
      opcoes: [
        { texto: "Carro ou moto individual para tudo", pontos: 0, afirmacao: "utilizava transporte individual poluente." },
        { texto: "Transporte público ou carona compartilhada", pontos: 1, afirmacao: "optou por transportes coletivos ou compartilhados." },
        { texto: "A pé, de bicicleta ou veículos elétricos", pontos: 2, afirmacao: "priorizou a mobilidade ativa e não poluente." }
      ]
    },
    {
      pergunta: "Como é o consumo de energia elétrica na sua casa?",
      opcoes: [
        { texto: "Luzes e eletrônicos ficam ligados em cômodos vazios", pontos: 0, afirmacao: "deixava aparelhos e luzes ligados sem necessidade." },
        { texto: "Tento apagar quando lembro", pontos: 1, afirmacao: "tentava economizar energia quando lembrava." },
        { texto: "Sempre desligo tudo que não estou usando", pontos: 2, afirmacao: "gerenciou o uso de energia com máxima eficiência." }
      ]
    }
  ],
  natureza: [
    {
      pergunta: "Quanto tempo da sua semana você passa em contato direto com a natureza?",
      opcoes: [
        { texto: "Quase nenhum, fico só em ambientes fechados", pontos: 0, afirmacao: "ficava distante de ambientes naturais." },
        { texto: "De vez em quando, no fim de semana", pontos: 1, afirmacao: "visitava áreas verdes ocasionalmente." },
        { texto: "Frequento parques ou áreas verdes com frequência", pontos: 2, afirmacao: "manteve uma forte conexão diária com a natureza." }
      ]
    },
    {
      pergunta: "Qual é a sua atitude ao ver lixo no chão em uma praça ou praia?",
      opcoes: [
        { texto: "Ignoro, afinal não fui eu que joguei", pontos: 0, afirmacao: "ignorava resíduos descartados no chão." },
        { texto: "Fico incomodado, mas não recolho", pontos: 1, afirmacao: "se incomodava com o lixo, mas não agia." },
        { texto: "Recolho o lixo e jogo na lixeira mais próxima", pontos: 2, afirmacao: "recolhia ativamente o lixo encontrado em locais públicos." }
      ]
    }
  ]
};

// Variáveis de Estado
let caminhoAtual = "";
let indicePergunta = 0;
let pontuacaoTotal = 0;
let nomeSorteado = "";
let resumoEscolhas = "";

// Referências do DOM
const caminhosContainer = document.getElementById("caminhos-container");
const quizContainer = document.getElementById("quiz-container");
const resultadoContainer = document.getElementById("resultado-container");
const tituloCaminho = document.getElementById("titulo-caminho");
const textoPergunta = document.getElementById("texto-pergunta");
const containerOpcoes = document.getElementById("opcoes-container");
const mensagemFinal = document.getElementById("mensagem-final");

// Event Listeners
document.getElementById("card-consumo").addEventListener("click", () => iniciarCaminho("consumo"));
document.getElementById("card-energia").addEventListener("click", () => iniciarCaminho("energia"));
document.getElementById("card-natureza").addEventListener("click", () => iniciarCaminho("natureza"));
document.getElementById("btn-voltar").addEventListener("click", voltarInicio);
document.getElementById("btn-reiniciar").addEventListener("click", voltarInicio);

function iniciarCaminho(caminho) {
  caminhoAtual = caminho;
  indicePergunta = 0;
  pontuacaoTotal = 0;
  resumoEscolhas = "";

  // Sorteia o nome do personagem
  nomeSorteado = aleatorio(nomes);

  caminhosContainer.classList.add("escondido");
  resultadoContainer.classList.add("escondido");
  quizContainer.classList.remove("escondido");

  carregarPergunta();
}

function carregarPergunta() {
  const listaPerguntas = perguntasPorCaminho[caminhoAtual];
  const dadosPergunta = listaPerguntas[indicePergunta];

  tituloCaminho.innerText = `Caminho: ${caminhoAtual.toUpperCase()}`;

  // Substituição dinâmica usando .replace()
  let enunciadoComNome = dadosPergunta.pergunta.replace(/você/g, nomeSorteado).replace(/Você/g, nomeSorteado);
  textoPergunta.innerText = `${indicePergunta + 1}. ${enunciadoComNome}`;

  containerOpcoes.innerHTML = "";

  dadosPergunta.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.innerText = opcao.texto;
    botao.classList.add("btn-opcao");
    botao.onclick = () => proximaPergunta(opcao.pontos, opcao.afirmacao);
    containerOpcoes.appendChild(botao);
  });
}

function proximaPergunta(pontos, afirmacao) {
  pontuacaoTotal += pontos;
  resumoEscolhas += `${afirmacao} `;
  indicePergunta++;

  const listaPerguntas = perguntasPorCaminho[caminhoAtual];

  if (indicePergunta < listaPerguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  quizContainer.classList.add("escondido");
  resultadoContainer.classList.remove("escondido");

  let nivel = "";
  if (pontuacaoTotal <= 2) {
    nivel = "🔴 Nível: Precisa Melhorar";
  } else if (pontuacaoTotal <= 4) {
    nivel = "🟡 Nível: No Caminho Certo!";
  } else {
    nivel = "🟢 Nível: Consciência Exemplar!";
  }

  // Seleciona uma mensagem motivacional aleatória
  const afirmacaoExtra = aleatorio(afirmacoesAleatorias);

  mensagemFinal.innerHTML = `
    <strong>${nivel}</strong><br><br>
    <em>História de ${nomeSorteado}:</em> Em relação ao tema <strong>${caminhoAtual}</strong>, ${nomeSorteado} ${resumoEscolhas}<br><br>
    <strong>Reflexão:</strong> ${afirmacaoExtra}
  `;
}

function voltarInicio() {
  quizContainer.classList.add("escondido");
  resultadoContainer.classList.add("escondido");
  caminhosContainer.classList.remove("escondido");
}
