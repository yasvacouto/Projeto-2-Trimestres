const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da faculdade você se depara com uma nova tecnologia, um chat que consegue responder todas as perguntas que uma pessoa pode ter, ele também gera imagens e áudios super realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso me dá medo!",
                afirmacao: "Fico com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Quero saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da faculdade decidiu fazer várias aulas sobre esta tecnologia e como ela funciona. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Usa uma ferramenta de busca na internet que utiliza IA para que ela auxilie a encontrar informações interresantes para o trabalho e explique em uma linguagem que faça com que a professora e os outros alunos consigam entender.",
                afirmacao: "Conseguiu usar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com os outros alunos, pesquisas na internet e conhecimentos adquiridos nas aulas sobre o tema.",
                afirmacao: "Sentiu mais confiança em usar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas e auxiliar em estudos e pesquisas para novas descobertas.",
                afirmacao: "Impulsiona a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que irão perder seus empregos para máquinas e defende a importância de proteger os trabalhadores, e fazer com que nem tudo seja substituído por tecnologia.",
                afirmacao: "Sua preocupação com as pessoas fez os colegas se animarem a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "No final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. O que fazer agora?",
        alternativas: [
            {
                texto: "Criar a imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou que muitas pessoas não sabem ainda usar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design usando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos usando geradores de imagem e no momento conseguiu ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na próxima semana, o andamento do trabalho está atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao da IA. O que fazer? ",
        alternativas: [
                          
            afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            }
            {
                texto: "O chat pode ser uma tecnologia muito avançada, porém é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";  
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();