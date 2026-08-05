// Banco de Perguntas e Pontuações (0 = Ruim, 1 = Médio, 2 = Bom)
const perguntasPorCaminho = {
  consumo: [
    {
      pergunta: "Com que frequência você pensa sobre a origem das coisas que compra?",
      opcoes: [
        { texto: "Raramente ou nunca", pontos: 0 },
        { texto: "Às vezes, quando o assunto chama atenção", pontos: 1 },
        { texto: "Sempre busco saber se a marca é sustentável", pontos: 2 }
      ]
    },
    {
      pergunta: "O que você costuma fazer com roupas ou objetos que não usa mais?",
      opcoes: [
        { texto: "Jogo no lixo comum", pontos: 0 },
        { texto: "Guardo no armário até acumular", pontos: 1 },
        { texto: "Doou, vendo em brechó ou reutilizo", pontos: 2 }
      ]
    },
    {
      pergunta: "Como você lida com sacolas plásticas nas compras?",
      opcoes: [
        { texto: "Uso várias sacolas plásticas sem pensar", pontos: 0 },
        { texto: "Tento reaproveitar as sacolas em casa depois", pontos: 1 },
        { texto: "Sempre levo minha própria sacola retornável (ecobag)", pontos: 2 }
      ]
    },
    {
      pergunta: "Qual é o seu critério principal ao comprar um produto novo?",
      opcoes: [
        { texto: "Compro por impulso ou só pelo preço baixo", pontos: 0 },
        { texto: "Avalio se realmente preciso, mas às vezes exagero", pontos: 1 },
        { texto: "Priorizo durabilidade, necessidade e impacto ambiental", pontos: 2 }
      ]
    },
    {
      pergunta: "Como você descarta embalagens e resíduos na sua rotina?",
      opcoes: [
        { texto: "Misturo tudo no mesmo lixo", pontos: 0 },
        { texto: "Separo o lixo apenas quando é fácil/conveniente", pontos: 1 },
        { texto: "Separo o lixo reciclável do orgânico diariamente", pontos: 2 }
      ]
    },
    {
      pergunta: "Em relação ao desperdício de alimentos, como é sua atitude?",
      opcoes: [
        { texto: "Acabo jogando muita comida fora toda semana", pontos: 0 },
        { texto: "Tento aproveitar as sobras, mas nem sempre consigo", pontos: 1 },
        { texto: "Planejo minhas refeições e aproveito tudo integralmente", pontos: 2 }
      ]
    }
  ],
  energia: [
    {
      pergunta: "Qual é o seu principal meio de transporte no dia a dia?",
      opcoes: [
        { texto: "Carro ou moto individual para tudo", pontos: 0 },
        { texto: "Transporte público ou carona compartilhada", pontos: 1 },
        { texto: "A pé, de bicicleta ou veículos elétricos/não poluentes", pontos: 2 }
      ]
    },
    {
      pergunta: "Como é o consumo de energia elétrica na sua casa?",
      opcoes: [
        { texto: "Luzes e eletrônicos ficam ligados em cômodos vazios", pontos: 0 },
        { texto: "Tento apagar quando lembro, mas esqueço com frequência", pontos: 1 },
        { texto: "Sempre desligo tudo que não estou usando e economizo", pontos: 2 }
      ]
    },
    {
      pergunta: "Quanto tempo dura o seu banho em média?",
      opcoes: [
        { texto: "Mais de 15 minutos", pontos: 0 },
        { texto: "Entre 8 e 15 minutos", pontos: 1 },
        { texto: "Menos de 8 minutos, fecho a torneira ao me ensaboar", pontos: 2 }
      ]
    },
    {
      pergunta: "Como você usa aparelhos como ar-condicionado ou aquecedores?",
      opcoes: [
        { texto: "Deixo ligado por horas na potência máxima", pontos: 0 },
        { texto: "Uso em dias de extremo calor/frio com moderação", pontos: 1 },
        { texto: "Evito ao máximo, preferindo ventilação natural/roupas adequadas", pontos: 2 }
      ]
    },
    {
      pergunta: "Você deixa aparelhos eletrônicos em modo 'Stand-by' (luzinha acesa na tomada)?",
      opcoes: [
        { texto: "Sim, deixo tudo ligado na tomada direto", pontos: 0 },
        { texto: "Tiro alguns da tomada, mas a maioria fica ligado", pontos: 1 },
        { texto: "Tiro da tomada os aparelhos que não estou utilizando", pontos: 2 }
      ]
    },
    {
      pergunta: "Você costuma reaproveitar a água da chuva ou da máquina de lavar?",
      opcoes: [
        { texto: "Nunca pensei sobre isso", pontos: 0 },
        { texto: "Já pensei, mas raramente coloco em prática", pontos: 1 },
        { texto: "Sim, reuso a água para lavar calçadas, quintal ou plantas", pontos: 2 }
      ]
    }
  ],
  natureza: [
    {
      pergunta: "Quanto tempo da sua semana você passa em contato direto com a natureza?",
      opcoes: [
        { texto: "Quase nenhum, fico só em ambientes fechados", pontos: 0 },
        { texto: "De vez em quando, no fim de semana", pontos: 1 },
        { texto: "Frequento parques, praças ou áreas verdes com frequência", pontos: 2 }
      ]
    },
    {
      pergunta: "Qual é a sua atitude ao ver lixo no chão em uma praça ou praia?",
      opcoes: [
        { texto: "Ignoro, afinal não fui eu que joguei", pontos: 0 },
        { texto: "Fico incomodado, mas não recolho", pontos: 1 },
        { texto: "Recolho o lixo e jogo na lixeira mais próxima", pontos: 2 }
      ]
    },
    {
      pergunta: "Como é a sua relação com plantas ou hortas?",
      opcoes: [
        { texto: "Não tenho nenhuma planta em casa e não me interesso", pontos: 0 },
        { texto: "Gosto de ter plantas, mas costumo esquecer de cuidar", pontos: 1 },
        { texto: "Cuido de plantas/horta e valorizo o cultivo próprio", pontos: 2 }
      ]
    },
    {
      pergunta: "Qual é a sua postura em relação aos animais e à biodiversidade?",
      opcoes: [
        { texto: "Não me importo muito com a preservação animal", pontos: 0 },
        { texto: "Acho bonito, mas não faço nada ativo para apoiar", pontos: 1 },
        { texto: "Respeito os animais e busco proteger a fauna local", pontos: 2 }
      ]
    },
    {
      pergunta: "Você costuma conversar ou compartilhar conteúdos ambientais com amigos?",
      opcoes: [
        { texto: "Nunca falo sobre esse tipo de assunto", pontos: 0 },
        { texto: "Às vezes, quando o assunto surge na conversa", pontos: 1 },
        { texto: "Sempre incentivo outras pessoas a cuidarem do planeta", pontos: 2 }
      ]
    },
    {
      pergunta: "Você pesquisa sobre os problemas ambientais da sua cidade ou região?",
      opcoes: [
        { texto: "Não acompanho essas notícias", pontos: 0 },
        { texto: "Vejo apenas o que passa no jornal de forma rápida", pontos: 1 },
        { texto: "Procuro me informar ativamente sobre as causas ambientais locais", pontos: 2 }
      ]
    }
  ]
};

let caminhoAtual = "";
let indicePergunta = 0;
let pontuacaoTotal = 0;

// Função para iniciar um caminho
function iniciarCaminho(caminho) {
  caminhoAtual = caminho;
  indicePergunta = 0;
  pontuacaoTotal = 0; // Reseta os pontos ao começar
  
  document.getElementById("caminhos-container").classList.add("escondido");
  document.getElementById("quiz-container").classList.remove("escondido");
  
  carregarPergunta();
}

// Carrega a pergunta atual na tela
function carregarPergunta() {
  const listaPerguntas = perguntasPorCaminho[caminhoAtual];
  const dadosPergunta = listaPerguntas[indicePergunta];

  document.getElementById("titulo-caminho").innerText = caminhoAtual.toUpperCase();
  document.getElementById("texto-pergunta").innerText = `${indicePergunta + 1}. ${dadosPergunta.pergunta}`;

  const containerOpcoes = document.getElementById("opcoes-container");
  containerOpcoes.innerHTML = "";

  dadosPergunta.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.innerText = opcao.texto;
    botao.classList.add("btn-opcao");
    botao.onclick = () => proximaPergunta(opcao.pontos);
    containerOpcoes.appendChild(botao);
  });
}

// Avança para a próxima pergunta e soma os pontos
function proximaPergunta(pontos) {
  pontuacaoTotal += pontos;
  indicePergunta++;
  
  const listaPerguntas = perguntasPorCaminho[caminhoAtual];

  if (indicePergunta < listaPerguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

// Exibe a tela final calculando se o nível é Ruim, Médio ou Bom
function mostrarResultado() {
  document.getElementById("quiz-container").classList.add("escondido");
  document.getElementById("resultado-container").classList.remove("escondido");

  const mensagem = document.getElementById("mensagem-final");
  const maxPontos = perguntasPorCaminho[caminhoAtual].length * 2; // Máximo de pontos possível (12)

  let nivel = "";
  let conselho = "";

  // Avaliação baseada na pontuação total acumulada
  if (pontuacaoTotal <= 4) {
    nivel = "🔴 Nível: Precisa Melhorar";
    conselho = "Seus hábitos atuais geram um impacto considerável no planeta. Mas a boa notícia é que pequenos passos diários, como reduzir o desperdício e desligar luzes, já fazem uma enorme diferença. Que tal começar uma mudança hoje?";
  } else if (pontuacaoTotal <= 8) {
    nivel = "🟡 Nível: No Caminho Certo!";
    conselho = "Você já possui uma boa noção e pratica hábitos sustentáveis no seu dia a dia. Com um pouco mais de atenção aos pequenos detalhes, suas atitudes serão ainda mais transformadoras!";
  } else {
    nivel = "🟢 Nível: Consciência Exemplar!";
    conselho = "Parabéns! Suas atitudes mostram um profundo respeito e cuidado com o meio ambiente. Continue sendo esse exemplo inspirador para as pessoas ao seu redor!";
  }

  mensagem.innerHTML = `<strong>${nivel}</strong><br><br>${conselho}`;
}

// Volta para a tela principal
function voltarInicio() {
  document.getElementById("quiz-container").classList.add("escondido");
  document.getElementById("resultado-container").classList.add("escondido");
  document.getElementById("caminhos-container").classList.remove("escondido");
}