
var pagNumber = 2;

function pickTextObject() {
    choiceTreeArray = choiceTree.split("-");
    var textObject = plotSophie[`textSophie${choiceTreeArray[1]}`];
    return textObject
}

function pickScene() {
    hoiceTreeArray = choiceTree.split("-");
    var sceneObject = plotScene[`textSophie${choiceTreeArray[1]}`];
    return sceneObject
}

function nextText(escolhas) {
    var textObject = pickTextObject();
    var sceneObject = pickScene();
    console.log(sceneObject)
    var index = "pag" + pagNumber;
    var pagina = document.getElementById("text")

    if (textObject[index][0] == "<") {
        pagina.innerHTML = `<article>${textObject[index]}</article>`;
    } else {
        pagina.innerHTML = `<article><p>${textObject[index]}</p></article>`;
    }

    nextScene(sceneObject, index)
    pagNumber++

    var ultimaPagina = (textObject["pag" + pagNumber] == undefined);
    var theEnd = isTheEnd(textObject[index]);
    isLastPage(ultimaPagina, theEnd, escolhas);

};

function nextScene(sceneObject, index) {
    if (sceneObject[index] != undefined) {

        // document.querySelector('#scene').classList.toggle('fade');
        var mainElem = document.getElementById("scene");
        mainElem.innerHTML = `<img src='${sceneObject[index][1]}'>`
        // mainElem.src = sceneObject[index][1];

    }
}

function isLastPage(ultimaPagina, theEnd, escolhas) {
    if (theEnd) {
        var playAgain_btn = document.getElementById("nextText_btn");
        var path = "../../index.html"
        playAgain_btn.innerHTML = `<button><a href=${path}> Jogue de novo </a> </button>`;
    } else if (ultimaPagina) {
        var choices = document.getElementById("choices");
        if (escolhas.length == 2) {
            choices.innerHTML =
                `
                <article>
                <p>A - ${escolhas[0]}</p>
                <p>B - ${escolhas[1]}</p>
                </article>
            `
        } else if (escolhas.length == 3) {
            choices.innerHTML =
                `
                <article>
                <p>A - ${escolhas[0]}</p>
                <p>B - ${escolhas[1]}</p>
                <p>C - ${escolhas[2]}</p>
                </article>
            `
        }
        var nextText_btn = document.getElementById("nextText_btn");
        nextText_btn.innerHTML = "<button onclick=janelaDeEscolha()>Escolher</button>";
    }
}

function isTheEnd(text) {
    if (text.indexOf("Fim -") == -1) {
        var theEnd = false
    } else {
        var theEnd = true;
    }
    return theEnd;
}

function janelaDeEscolha() {
    var escolha = prompt("Qual será sua escolha?");
    while (escolha.toUpperCase() != "A" && escolha.toUpperCase() != "B") {
        var escolha = prompt("Escolha inválida.\nQual será sua escolha? (A ou B)");
    }
    var nextChapter_btn = document.getElementById("nextText_btn");
    if (escolha.toUpperCase() == "A") {
        choiceTree = choiceTree + 1;
        var path = `./${choiceTree}.html`
    } else {
        choiceTree = choiceTree + 2;
        var path = `./${choiceTree}.html`
    }
    nextChapter_btn.innerHTML = `<button><a href=${path}> Prox pag </a> </button>`;
}

var plotSophie = {
    textSophie1: {
        pag2: "Sophie retornou para seu quarto logo após receber o desafio para preparar as suas coisas: uns 2 livros, alguns pergaminhos pergaminhos, um mapa da floresta, caneta e tinteiro, e é claro uma bússola. Essa viagem definiria seu destino. Talvez ela até conseguiria que sua mãe fosse aceita novamente por seu povo. Talvez.",
        pag3: "Com uma respiração profunda, ela saiu pelo portão em direção à floresta de Jade. O caminho não foi o problema, haviam estradas que percorriam os arredores da floresta, mas pouquissimas trilhas dentro daquele labirinto verde. Qualquer um poderia se perder ali dentro, mas Sophie não era qualquer um. Em suas veias corria o sangue de um dos povos da floresta.",
        pag4: "Ao continuar o seu caminho, Sophie sentiu uma presença estranha, obscura. Algo que não pertencia àquele lugar, e deciciu investigar.",
        pag5: "Nas sombrar de um salgueiro, ela viu alguém em uma armadura desgastada e cheia arranhões. Quase todo o corpo da criatura era coberto ou por metal ou tecido, era difícil distinguir a sua natureza. Isso é até que Sophie viu os dois olhos que brilhavam dentro do capacete. Não era humano, ou pelo menos não mais. Ele parecia mais com um... morto-vivo.",
        pag6: "O morto-vivo continuou encarando em sua direção, e sua espada relusiu a pouca luz que conseguiu adentrar os dendos galhos do sagueiro.",
        pag7: "O que ela deve fazer?",
    },
    textSophie11: {
        pag1: "Sophie decide atacar o morto-vivo.",
        pag2: "Ela lançou um feitiço na direção dele e ele foi ao chão. Contudo, antes de Sophie poder respirar aliviada, ele se levanta e muda o seu rumo.",
        pag3: "Sophie acreditou ter se livrado do cavaleiro fantasma e suspirou. Aparições não eram coisa boa, definitivamente também não era um bom jeito de iniciar dua missão.",
        pag4: "Sophie acreditava que ter visto o fantasma era um mau agouro, mas ela teria que continuar sua missão mesmo assim. Então ela continuou sua jornada até o coração da floresta, onde diziam ser o pequeno reino das pixies de Jade.",
        pag5: "Pixies eram criaturinhas belas como os elfos e as fadas, a natureza delas não era nem boa nem má, mas se tem algo que elas adoravam era pregar peças em todo e qualquer forasteiro. Além disso elas tinham uma a habilidade de apenas aparecer quando quisessem ser vistas, o que tornaria a missão de sophie mais difícil.",
        pag6: "Apesar de tudo isso, ela conseguiu encontrar o reino das pequeninas, as quais receberam ela com flores e festa. As coisas pareciam ir bem para o pequeno reino, tanto que todas estavam celebrando a prosperidade e cantando louvores para sua rainha, Feyre, enquanto Sophie era levada até a sala do trono.",
        pag7: "A sala do trono foi montada em cima de galhos que permitiam que uma pixia ficasse na altura dos olhos de um humano. Lá a raina estava sentada em seu trono dourado, e em sua cabeça estava a sua tiara, que para uma pessoa normal seria mais parecido com um anél.",
        pag8: "<p class='speaker'>Feyre<p><p>O meu reino te da as boas vindas, maga. Como pode ver estamos passando por uma linda época de prosperidade, venha, dança e cante conosco.</p>",
        pag9: "<p class='speaker'>Sophie<p><p>Muito obrigada por essa honra vossa alteza, mas eu vim até aqui pois tenho uma missão a cumprir.</p>",
        pag10: "A rainha pareceu ficar curiosa, e Sophie falou sobre sua missão. Como a rainha adorava apostas, ela disse que primeiro, a maga deveria provar o seu valor passando por três tarefas. A primeira seria se livrar do monstro que não permitia que elas entrassem na gruta mais ao norte, a segunda seria consseguir uma garrafa de hidromel dos anões das montanhas de Darunia. A primeira missão seria fácil, mas Sophie ainda não tinha nem ideia de como passaria pela segunda.",
        pag11: "Enquanto isso, uma pixie a levava para a gruta.",
        pag12: "<p class='speaker'>Pixie<p><p>Aqui está a gruta, senhorita Sophie. Não esqueça de trazer algo da criatura como prova de que ela forá eleminada.</p>",
        pag13: "Sophie acentiu com a cabeça e a pixie partiu. Agora ela teria que descobrir que tipo de criatura ela estava prestes a enfrentar.",
        pag14: "Dentro da gruta a única fonte de luz era uma pequena fogueira, que iluminava perfeitamente uma pilha de pequenos ossos, mas sophie não conseguiu identificar o autor de tudo aquilo até que uma voz rouca e grave perguntou 'quem está ai?'",
        pag15: "<p class='speaker'>???</p><p>Eu perguntei quem está ai.</p>",
        pag16: "A criatura se aproximou da fogueira, e finalmente Sophie viu o seu rosto. Era algo anômalo, um rosto cheio de escamas, com um formato como se fosse algo entre dragão e humano. Os olhos eram de dragão, os dentes também, mas o corpo era algo no meio.",
        pag17: "O que ela deve fazer?",

    },
    textSophie111: {
        pag1: "Sophie decide atacar a criatura.",

        pag2: "Ela não se orgulhou disso, mas lançou um feitiço na criatura deformada sem nem dar algum tipo de aviso. Apesar das garras e das presas, ela se sentiu como se tivesse atacado alguém que não tinha nem armas para lutar. Sua capa ficou suja de sangue, e figurativamente, suas mãos também.",

        pag3: "Sophie retirou um dos chifres da criatura para dar à rainha das fadas, mas antes de voltar, ela fez um pequeno enterro para essa criatura. Afinal ela não poderia deixar seu corpo ali apodrecendo em uma gruta, pelo menos ele tinha o direito de voltar para o solo. Após colocar o monstro para descansar, ela retornou para o reino das Pixies.",

        pag4: "As pequenas fadinhas voltaram a celebrar quando viram o chifre do falecido. A rainha parabenizou Sophie pelo seu ato, ela disse também que aquela criatura estava atormentando seu povo há muito tempo, e separou uma quantia de ouro para dar à Sophie como recompensa por um trabalho bem feito.",

        pag5: "A rainha estava de tão bom humor que até deu uma dica para Sophie sobre como conseguir o Hidromel, ela disse que os elfos de Jade tinham algumas garrafas com eles, um pequeno souvenir dos últimos anões que passaram por ali.",

        pag6: "Mas era estranho elfos terem a posse de bebidas de anões, e mais estranho ainda que anões tinham passado por lá. Ambos elfos e anões eram raças extremamente orgulhosas, quando os dois se juntavam nada de bom poderia acontecer. Sophie tentava adivinhar se os anões viraram prisioneiros ou se finalmente essas duas raças estavam se acertando, enquanto uma outra pixie guiava ela até os elfos. Esses pensamentos todos apenas para não tentar advinhar o que eles fariam com ela, uma mestiça.",

        pag7: "Sophie foi recebida por olhares gélidos e silêncio. Quando ela pediu para passar, os elfos que guardavam o portão disseram que aqueles que tinham mesmo que uma gota de sangue humano correndo em suas veias seria preso. Mesmo assim Sophie insistiu que precisava de uma audiência.",

        pag8: "Talvez por sorte do destino ou graça de alguma divindade, a princesa Frida estava passando por perto quando viu a comoção na entrada de seu reino e foi averiguar.",

        pag9: "<p class='speaker'>Frida</p><p>O que está acontecendo aqui?</p>",

        pag10: "<p class='speaker'>Guarda Élfico 1</p><p>Uma meia humana deseja entrar em seu reina, vossa alteza.</p>",

        pag11: "<p class='speaker'>Frida</p><p>Pois deixem-na entrar. Metade dela pode ser humana, mas a outra metade é nossa irmã.</p>",

        pag12: "Os guardas deram passagem e Sophie foi ao encontro da princesa. Ela era um perfeito exemplo da beleza élfica, orelhas pontudas, olhos verdes como esmeraldas, pele branca como a lua, mas bochechas e lábios corados como rosas; seus cabelos eram loiros quase pareados, arrumados em um conjunto de tranças complicado, mas delicado. Sua voz era doce, suas palavras eram gentis, e seus gestos eram graciosos. Até então Sophie achava que princesas assim só existiam em contos de fadas, mas ali estava Frida.",

        pag13: "<p class='speaker'>Frida</p><p>Eu não sei que propósito a trouxe até aqui, mas você deveria se apressar. Caso você ainda esteja aqui quando meu irmão retornar... eu temo pela sua vida.</p>",

        pag14: "<p class='speaker'>Sophie</p><p>Vossa alteza, eu desejo apenas pegar uma garrafa de hidromel de Darunia. Preciso de apenas uma e então me vou.</p>",

        pag15: "A princessa acentiu, e levou para o palácio. Ninguém ousava contrarias a princesa, mas todos olhavam para Sophie como se fosse uma criatura de outro mundo, e tudo por causa de sua descendência. Não havia nada que ela pudesse fazer a respeito disso. Talvez, quando ela se tornasse uma maga elemental, aí talvez esses olhares mudariam.",

        pag16: "No palácio, Frida pediu para uma de suas servas pegar o hidromel. Enquanto elas esperavam, Fida e Sophie trocaram algumas palavras. Pela primeira vez, Shopie não se sentiu desprezado ao falar com um elfo.",

        pag17: "Infelizmente, tudo que é bom tem que acabar. E foi isso que aconteceu com o momento de Sophie e Frida quando o príncipe invadiu a sala que as duas estavam, seus passos eram pesados e seus olhos mostravam que ela já ouvirá sobre a convidada mestiça.",

        pag18: "<p class='speaker'>Callon</p><p>O que significa isso, minha irmã? Uma mertiça aqui e você recebe ela de braços abertos enquanto estamos no meio de um conflito com aquelas fadas.</p>",

        pag19: "<p class='speaker'>Frida</p><p>Meu irmão, não é o que parece. Sophie quer apenas o hidromel deixado pelos anões.</p>",

        pag20: "<p class='speaker'>Callon</p><p>Claro, essa é uma desculpa muito boa. Não dê ouvidos a ela, Frida. Ela está apenas tomando vantagem da sua gentileza.</p>",

        pag21: "<p class='speaker'>Callon</p><p>Agora diga a verdade, garota. Quem te enviou até aqui?</p>",

        pag22: "O que Sophie deve fazer?",
    },
    textSophie1111: {
        pag1: "Sophie diz que foi enviada pelas pixies.",

        pag2: "Sophie repete sua história, dessa vez para o irmão de Frida. Apesar dele não confiar nela, Frida lhe faz um apelo para que deixe Sophie ir. Já que Frida não estava ferida, ele cedeu e ordenou que ela fosse embora, e nunca mais voltesse. Antes de Sophie partir, Frida tenta lhe alertar de algo, mas Callon a detem.",

        pag3: "Quando Sophie retornou para o reino das pixies, elas tornaram as festejar e a lhe dar os parabens. Apesar do hambiente alegre ao seu redor, algo que não saia de sua cabeça era o que Callon falou sobre o conflito com as fadas. Era estranho elfos e fadas se desentenderem tanto assim.",

        pag4: "<p class='speaker'>Feyre<p><p>Agora sim podemos celebrar direito! Você foi incrível, querida. Vamos, beba conosco.</p>",

        pag5: "Era estranho pixies terem um copo grande o suficiênte para Sophie, mas elas tinham.Sophie não querendo fazer uma desfeita, aceitou e tomou um gole.A bebida era extremamente doce, mas a rainha parecia contente.",

        pag6: "<p class= 'speaker'> Feyre </p><p>Muito bem, agora para o seu terceiro desafio... eu quero que você jogue xadrez comigo.</p>",

        pag7: "<p class='speaker'>Feyre</p><p>Case você vença, você leva a minha tiara, mas se você perder... minha flor, você terá que passar o resto dos seus dias conosco.</p>",

        pag8: "Sophie aceitou a proposta apesar do risco. O jogo começou, a cada rodada vinham duas pixies mover as peças da rainha, e mais outras para encher o copo de Sophie. A bebida era doce, doce de mais, parecia ter mais açúcar do que álcool. Sophie começou a se sentir atordoado, mas o jogo continuou, até que finalmente a rainha disse:",

        pag9: "Xeque-mate.",

        pag10: "Fim - Doce derrota",
    },
    textSophie1112: {
        pag1: "Sophie diz que ninguém a enviou.",
        pag2: "Callon olhou desconfiado para Sophie, e tomou a irmã pelo braço, puxando-a para longe da maga. O príncipe chamou pelos guardas, que por sua vez levaram Sophie para o calabouço. Ela não ofereceu resistência, para uns isso era prova de culpa, mas para outros era a prova de que ela não deseja ferir seu povo.",
        pag3: "<p class='speaker'>Callon<p><p>Perdoe-me, minha irmã. Mas foi necessário. Ninguém vem até uma floresta em território élfico para procurar uma bebida nativa das montanhas dos anões.</p>",
        pag4: "<p class='speaker'>Callon<p><p>Algum dia você irá me agradecer.</p>",
        pag5: "Sophie foi condenada a passar o resto de seus dias na prisão, condenada por ser espiã do inimigo, enviada para enfraquecer as defesas élficas de dentro para fora.",
        pag6: "Embora essa tenha sido sua sentença, acredita-se que Frida continuou acreditando em sua inocência, e também continuou a visitar a aprendiz. Por mais que tenha sido um destino cruel para Sophie, ela conseguiu conquistar a amizade de Frida, e ser tratada de igual para igual era tudo que a aprendiz sempre quis.",
        pag7: "Fim - Pisão doce e amarga",
    },
    textSophie112: {
        pag1: "Sophie decide não atacar a criatura.",

        pag2: "< p class= 'speaker' > Sophie</p><p>Eu me chamo Sophie, sou aprendiz de mago.</p>",

        pag3: "<p class='speaker'>???</p><p>E o que uma aprendiz de mago faz aqui, Sophie?</p>",

        pag4: "<p class='speaker'>Sophie</p><p>Eu venho em nome da rainha das pixies, Feyre, para...",

        pag5: "<p class='speaker'>Aaron</p><p>Para me matar.</p>",

        pag6: "<p class='speaker'>Sophie</p><p>Sim... De acordo com ela você tem atormentado as pixies.</p>",

        pag7: "<p class='speaker'>???</p><p>Ha! Atormentado elas, elas que me atormentam.</p>",

        pag8: "<p class='speaker'>Sophie</p><p>Eu gostaria de ouvir o seu lado da hitória, ... er.</p>",

        pag9: "<p class='speaker'>???</p><p>Você pode me chamar de Aaron.</p>",

        pag10: "<p class='speaker'>Aaron</p><p>Essas mosquinhas são tão ruins quanto qualquer outra criatura nessa floresta. Elfos, fadas, pixies, humanos- são todos iguais. Não podem ver alguém diferente que o fazem de alvo.</p>",

        pag11: "<p class='speaker'>Sophie</p><p>Eu acho que entendo o que você quer dizer- Sophie sentou-se perto do fogo.</p>",

        pag12: "<p class='speaker'>Aaron</p><p>Claro, elfo com cheiro de humano. Você também é um meio-sangue.</p>",

        pag13: "<p class='speaker'>Sophie</p><p>Sim... É por isso que eu preciso da coroa da rainha, eu preciso passar nesse teste, eu preciso virar uma maga elemental. Talvez assim a minha mãe possa voltar para casa e talvez eu possa ser aceita pelos elfos também.</p>",

        pag14: "AAron suspirou ao olhar para Sophie, seu olhar dizia tudo, ele achava que essa era uma tarefa impossível. Ele não acreditava que os elfos a aceitariam mesmo se ela fosse uma maga elemental, nem se ela fosse a maga mais poderosa do mundo, mas ele conseguia entender de onde vinha o sentimento, então, com um grunido, quebrou um de seus chifres e deu a ela.",

        pag15: "<p class='speaker'>Aaron</p><p>Leve isso com você. Vai precisar de uma prova que eu morri, não?</p>",

        pag16: "Sophie se moveu para dar-lhe um abraço. Quando os braços finos e delicados da aprendiz o envolveram, o corpo de Aaron ficou rígido como se havia muito que ele não recebia um. Mesmo assim ele tentou retribuir, dando um tapinha nas costas dela com o mínimo de força que ele conseguisse colocar em suas garras.",

        pag17: "<p class='speaker'>Sophie</p><p>Muito obrigada Aaron, eu não vou me esquecer disso.</p>",

        pag18: "<p class='speaker'>Aaron</p><p>Tá, tá. Vá logo. A rainha das pestes deve estar esperando.</p>",

        pag19: "<p class='speaker'>Sophie</p><p>Provavelmente. E eu preciso me preparar para o segundo desafio. A rainha quer que eu consiga uma garrafa de hidromel de Darunia para ela.</p>",

        pag20: "<p class='speaker'>Aaron</p><p>Mas uma viagem até Darunia levaria no mínimo algumas semanas.</p>",

        pag21: "<p class='speaker'>Aaron</p><p>Ah, eu vou me arrepender disso, mas alguns dias atrás um grupo de anões passou pela floresta. Com certeza eles são mais divertidos que os elfos.</p>",

        pag22: "Aaron entregou para Sophie a garrafa de hidromel daruniano, e novamente ela retribuiu com um abraço. Os dois podiam ser completamente diferentes em aparência, mas no fundo os dois tinham o mesmo desejo: pertencer a um grupo. Humanos ou elfos, no caso de Sophie. Humanos ou dragões para Aaron.",

        pag23: "Ambos sabiam que esse era um sonho quase impossível, mas se o outro conseguisse, traria esperança para o que sobrasse.",

        pag24: "E com isso, Sophie retornou para o reino das Pixies com o chifre em mãos.",

        pag25: "Quando Sophie chegou, as pixies tornaram a festejar e a lhe dar os parabens. Apesar do hambiente alegre ao seu redor, ela não conseguia tirar da cabeça que as pixies estavam tratando tão mal Aaron simplesmente por ele ser mestiço, e ela se perguntava se as fadinhas iriam mandar matá-la também.",

        pag26: "<p class='speaker'>Feyre<p><p>Agora sim podemos celebrar direito! Você foi incrível, querida. Vamos, beba conosco.</p>",

        pag27: "Era estranho pixies terem um copo grande o suficiênte para Sophie, mas elas tinham. Sophie não querendo fazer uma desfeita, aceitou e tomou um gole. A bebida não tinha um teor alcoolico muito forte, e era doce na medida certa. Certemente era algo que agradava seu paladar, mas o medo das pixies terem colocado uma recompensa em sua cabeça a afastou do copo.",

        pag28: "<p class='speaker'>Feyre<p><p>Muito bem, agora para o seu terceiro desafio... eu quero que você jogue xadrez comigo.</p>",

        pag29: "<p class='speaker'>Feyre<p><p>Case você vença, você leva a minha tiara, mas se você perder... minha flor, você terá que passar o resto dos seus dias conosco.</p>",

        pag30: "Os riscos eram altos, mas Sophie aceitou. As suas peças eram brancas, então ela deu início a partida. Cada turno parecia demorar mais e mais, Sophie estava cada vez mais cuidadosa com seus movimentos, enquanto isso a rainha parecia apenas impaciênte.",

        pag31: "Vendo que Sophie estava nervosa, uma pixie preparou um chá e levou para ela.",

        pag32: "<p class='speaker'>Pixie<p><p>Tome esse chá, vai te ajudar a se acalmar.</p>",

        pag33: "O que Sophie deve fazer?"
    },
    textSophie1121: {
        pag1: "Sophie decidiu aceitar o chá.",
        pag2: "Já no primeiro gole, Sophie se sente mais calma, mais relaxada, mais focada. A pixie sentou em seu ombro e continuou assistindo a partida de lá.",
        pag3: "Aquele chá estava fazendo maravilhas, Sophie estava comendo práticamente uma peça da rainha por turno, mas também cada vez mais ela se sentia sonolenta e pesada. Finalmente faltava apenas um movimento para Sophie ganhar, só mais um e ela teria a tiara, mas quando ela foi fazer seu movimento, sua visão escureceu e seu corpo caiu no chão.",
        pag4: "<p class='speaker'>Feyre<p><p>Xeque-mate.</p>",
        pag5: "Fim - Bons sonhos",
    },
    textSophie1122: {
        pag1: "Sophie decidiu recusar o chá.",

        pag2: "A aprendiz respirou fundo e continuou pensando calmamente nas suas jogadas, a cada turno a rainha ficava mais impaciênte, até que ela deixou o caminho aberto para uma peça de Sophie comer o rei. Se isso foi acidente ou não, Sophie não sabia, mas ela tinha vencido.",

        pag3: "<p class='speaker'>Sophie<p><p>Xeque-mate.</p>",

        pag4: "Sophie sorriu, e a rainha aceitou sua derrota. A pixie removeu sua pequena coroa e colocou-a na mão de Sophie, no momento que a jóia tocou a sua mão, apareceu um brilho verde em seu braço esquerdo, ela tinha conseguido, finalmente ela tinha se tornado uma maga elemental.",

        pag5: "<p class='speaker'>Feyre<p><p>Parabéns, querida. Você venceu. Pode ir agora.</p>",

        pag6: "Sophie estava louca para sair do reino das pixies e ir até a gruta contar para Aaron, e depois ir até os elfos e mostrar a sua marca. Ela mal conseguia se conter de tanta animação enquanto deixava o pequeno reino para trás.",

        pag7: "Sophie decidiu olhar novamente para sua marca, só para observar, mas não havia nada lá. Não havia mais nenhum brilho verde em seu braço, e a runa da terra não estava lá.",

        pag8: "Não, Sophie pensou. Ela tinha que voltar no reino das pixies e dizer para a rainha que não tinha funcionado, ela devia ter outra tiara que fosse a certa.",

        pag9: "Mas quando Sophie retornou ao reino, ela não encontrou nada. Nenhuma pixie, nenhum canto, nenhuma festa, ela encontrou apenas árvores, arbustos e folhas.",

        pag10: "Fim - Ilusão verde",
    },
    textSophie12: {
        pag1: "Sophie decide não atacar o morto-vivo.",

        pag2: "Sophie fica parada encarando o morto-vivo, e ele faz o mesmo com ela. Após perceber que Sophie não tinha intenção de atacá-lo, ele guardou sua espada.",

        pag3: "Sophie se aproximou.",

        pag4: "<p class='speaker'>Sophie<p><p>Olá?</p>",

        pag5: "Não houve resposta.",

        pag6: "<p class='speaker'>Sophie<p><p>O que você está fazendo aqui nessa floresta?</p>",

        pag7: "Mais uma vez não houve resposta. Então o cavaleiro fez um gesto para que Sophie o seguisse, e ela o fez. Durante a caminhada, Sophie tentou puxar assunto, perguntar quem ele era, para onde ele a estava levando, mas não obteve sucesso em nenhuma de suas tentativas.",

        pag8: "Quando eles pararam, ele apontou para uma passagem entre duas árvores, e então gesticulou 'pequenas' e 'asas' para Sophie.",

        pag9: "<p class='speaker'>Sophie<p><p>...Pixies? Se eu seguir por aqui vou encontrar o reino das pixies? Ela pergutnou</p>",

        pag10: "O cavaleiro apenas acentiu com a cabeça e foi embora, sumindo entre as árvores. Era estranho que ele soubesse que ela estava procurando o reino das pixies, mas pelo menos ele tinha ajudado ela a encontrar o caminho.",

        pag11: "Pixies eram criaturinhas belas como os elfos e as fadas, a natureza delas não era nem boa nem má, mas se tem algo que elas adoravam era pregar peças em todo e qualquer forasteiro. Além disso elas tinham uma a habilidade de apenas aparecer quando quisessem ser vistas, o que tornaria a missão de sophie mais difícil.",

        pag12: "Ao entrar no reino das pequeninas, elas a receberam com flores e festa. As coisas pareciam ir bem para o pequeno reino, tanto que todas estavam celebrando a prosperidade e cantando louvores para sua rainha, Feyre, enquanto Sophie era levada até a sala do trono.",

        pag13: "A sala do trono foi montada em cima de galhos que permitiam que uma pixia ficasse na altura dos olhos de um humano. Lá a raina estava sentada em seu trono dourado, e em sua cabeça estava a sua tiara, que para uma pessoa normal seria mais parecido com um anél.",

        pag14: "<p class='speaker'>Feyre<p><p>O meu reino te da as boas vindas, maga. Como pode ver estamos passando por uma linda época de prosperidade, venha, dança e cante conosco.</p>",

        pag15: "<p class='speaker'>Sophie<p><p>Muito obrigada por essa honra vossa alteza, mas eu vim até aqui pois tenho uma missão a cumprir.</p>",

        pag16: "A rainha pareceu ficar curiosa, e Sophie falou sobre sua missão. Como a rainha adorava apostas, ela disse que primeiro, a maga deveria provar o seu valor passando por três tarefas. A primeira seria se livrar do monstro que não permitia que elas entrassem na gruta mais ao norte, a segunda seria consseguir uma garrafa de hidromel dos anões das montanhas de Darunia. A primeira missão seria fácil, mas Sophie ainda não tinha nem ideia de como passaria pela segunda.",

        pag17: "Enquanto isso, uma pixie a levava para a gruta.",

        pag18: "<p class='speaker'>Pixie<p><p>Aqui está a gruta, senhorita Sophie. Não esqueça de trazer algo da criatura como prova de que ela forá eleminada.</p>",

        pag19: "Sophie acentiu com a cabeça e a pixie partiu. Agora ela teria que descobrir que tipo de criatura ela estava prestes a enfrentar.",

        pag20: "Dentro da gruta a única fonte de luz era uma pequena fogueira, que iluminava perfeitamente uma pilha de pequenos ossos, mas sophie não conseguiu identificar o autor de tudo aquilo até que uma voz rouca e grave perguntou 'quem está ai?'",

        pag21: "<p class='speaker'>???</p><p>Eu perguntei quem está ai.</p>",

        pag22: "<p class='speaker'>Sophie</p><p>Eu me chamo Sophie, sou aprendiz de mago.</p>",

        pag23: "<p class='speaker'>???</p><p>Mago. Guillain disse que você viria.</p>",

        pag24: "<p class='speaker'>Sophie</p><p>Quem é Guillain?</p>",

        pag25: "<p class='speaker'>???</p><p>Alguém que é uma boa amizade para pessoas como nós.</p>",

        pag26: "<p class='speaker'>Sophie</p><p>Como nós, o que você quer dizer com isso?</p>",

        pag27: "A criatura se aproximou da fogueira, e finalmente Sophie viu o seu rosto. Era algo anômalo, um rosto cheio de escamas, com um formato como se fosse algo entre dragão e humano. Os olhos eram de dragão, os dentes também, mas o corpo era algo no meio.",

        pag28: "<p class='speaker'>Sophie</p><p>Ah, entendo, você também é...</p>",

        pag29: "<p class='speaker'>???</p><p>Mestiço, sim. Aaron foi o nome que minha mãe me deu.</p>",

        pag30: "<p class='speaker'>Sophie</p><p>Aaron... Eu fui enviada pela rainha Feyre para te matar. Ela disse que você tem atormentado as pixies, mas por quê?</p>",

        pag31: "<p class='speaker'>???</p><p>Ha! Atormentado elas, elas que me atormentam.</p>",

        pag32: "<p class='speaker'>Aaron</p><p>Essas mosquinhas são tão ruins quanto qualquer outra criatura nessa floresta. Elfos, fadas, pixies, humanos- são todos iguais. Não podem ver alguém diferente que o fazem de alvo.</p>",

        pag33: "<p class='speaker'>Sophie</p><p>Sim... É por isso que eu preciso da coroa da rainha, eu preciso passar nesse teste, eu preciso virar uma maga elemental. Talvez assim a minha mãe possa voltar para casa e talvez eu possa ser aceita pelos elfos também.</p>",

        pag34: "AAron suspirou ao olhar para Sophie, seu olhar dizia tudo, ele achava que essa era uma tarefa impossível. Ele não acreditava que os elfos a aceitariam mesmo se ela fosse uma maga elemental, nem se ela fosse a maga mais poderosa do mundo, mas ele conseguia entender de onde vinha o sentimento, então, com um grunido, quebrou um de seus chifres e deu a ela.",

        pag35: "<p class='speaker'>Aaron</p><p>Leve isso com você. Vai precisar de uma prova que eu morri, não?</p>",

        pag36: "Sophie se moveu para dar-lhe um abraço. Quando os braços finos e delicados da aprendiz o envolveram, o corpo de Aaron ficou rígido como se havia muito que ele não recebia um. Mesmo assim ele tentou retribuir, dando um tapinha nas costas dela com o mínimo de força que ele conseguisse colocar em suas garras.",

        pag37: "<p class='speaker'>Sophie</p><p>Muito obrigada Aaron, eu não vou me esquecer disso.</p>",

        pag38: "<p class='speaker'>Aaron</p><p>Tá, tá. Vá logo. A rainha das pestes deve estar esperando.</p>",

        pag39: "<p class='speaker'>Sophie</p><p>Provavelmente. E eu preciso me preparar para o segundo desafio. A rainha quer que eu consiga uma garrafa de hidromel de Darunia para ela.</p>",

        pag40: "<p class='speaker'>Aaron</p><p>Mas uma viagem até Darunia levaria no mínimo algumas semanas.</p>",

        pag41: "<p class='speaker'>Aaron</p><p>Ah, eu vou me arrepender disso, mas alguns dias atrás um grupo de anões passou pela floresta. Com certeza eles são mais divertidos que os elfos.</p>",

        pag42: "Aaron entregou para Sophie a garrafa de hidromel daruniano, e novamente ela retribuiu com um abraço. Os dois podiam ser completamente diferentes em aparência, mas no fundo os dois tinham o mesmo desejo: pertencer a um grupo. Humanos ou elfos, no caso de Sophie. Humanos ou dragões para Aaron.",

        pag43: "Ambos sabiam que esse era um sonho quase impossível, mas se o outro conseguisse, traria esperança para o que sobrasse.",

        pag44: "Sophie agradeceu Aaron mais uma vez e saiu da caverna, mas antes que ela pudesse voltar para o reino das pixies, o morto-vivo apareceu em seu caminho novamente e tornou a pedir que ela o seguisse. Novamente, ela o fez.",

        pag45: "Eles andaram e andaram, cada vez se aproximando mais da parte sombria da floresta. Não era apenas porque estava escurecendo o dia, mas porque aquela parte era tinha uma vegetação tão densa que impedia a maior parte da luz de entrar lá. Até mesmo os raios que entravam eram ofuscados pela névoa daquele lugar.",

        pag46: "Sophie conhecia a floresta, mas até então não tinha conhecimento dessa parte dela, mesmo assim ela continuou seguindo o cavaleiro, mesmo estando com o coração apertado.",

        pag47: "O morto-vivo a levou para um lugar ainda mais aterrorizante naquelas partes da floresta. Uma estrutura que se assemelhava a um templo antigo, abandonado e parcialmente em ruínas. Mas essa não era a pior parte. O pior era  apresença que tinha dentro daquele lugar.",

        pag48: "Dentro daquele lugar, sentado em um trono de pedra quebrado, estava a presença que contaminava o lugar com sua presença. Parecia um cadáver que teve o processo de decomposição interrompido. Seus olhos eram fundos, e semelhante ao do cavaleiro, eram apenas duas esferas brilhantes. Contudo, diferente do cavaleiro, aquilo não parecia ter alma, não parecia ter nem um rastro de vida, mas mesmo assim ele se movia.",

        pag49: "Era um Lich, uma criatura que havia trocado seu coração por uma meia vida eterna. Lichs eram criaturas poderosas, sábias, mas cruéis por natureza. E o morto-vivo tinha trazido ela para o covil de um.",

        pag50: "O que ela deve fazer?",
    },
    textSophie121: {
        pag1: "Sophie decide não atacar o Lich.",

        pag2: "<p class='speaker'>Lich</p><p>Garota esperta. Não é bom ataquer alguém que você não tem a mínima noção do que é capaz de fazer, como também não é bom atacar alguém sendo guiado pelas emoções.</p>",

        pag3: "<p class='speaker'>Lich</p><p>Se acalme, garota. Guillain não trouxe você aqui para que fosse morta.</p>",

        pag4: "Sophie voltou sua atenção para o cavaleiro.",

        pag5: "< p class= 'speaker' > Sophie</p><p> Você é Guillain?</p>",

        pag6: "<p class='speaker'>Lich</p><p> Ele não vai te responder, ou melhor ele não pode. Sua língua foi cortada antes de morrer e agora ele não possui mais a habilidade de falar. Um destino trágico.</p>",

        pag7: "<p class='speaker'>Lich</p><p> Mas de volta ao motivo pelo qual Guillain a trouxe aqui. Eu proponho um acordo, nós abriremos essa garrafa que você trouxe e conversaremos. Quem sabe eu possa ter alguma informação que te interesse, por exemplo... o que aconteceu com a esfera das trevas, como trazer os mortos de volta a vida, o porque guillain ainda vaga esse mundo, como Feyre está te enganando...</p>",

        pag8: "<p class='speaker'>Sophie</p><p> O que você sabe sobre a rainha das pixies?</p>",

        pag9: "<p class='speaker'>Lich</p><p> Abra a garrafa e você descobrirá.</p>",

        pag10: "Com Um estalar de dados o Lich invocou uma mesa, cadeiras e copos como se os três fossem apenas amigos se juntando para beber.Sophie estava desconfiada, mas Guillain acenou com a cabeça para confortá - la, e a aprendiz decidiu confiar no cavaleiro.",

        pag11: "Eles se sentaram, e Sophie serviu os copos com hidromel.",

        pag12: "< p class='speaker' > Lich</p ><p> Muito bem, por onde começamos. Deixe-me ver. Aaron. Aaron é uma criatura formidável, realmente formidável, mas fadado a cair em ostracismo.</p>",

        pag13: "<p class='speaker'>Lich</p><p> Afinal não teria como ser diferente. Sua mãe era um dragão metamorfo, sobraram poucos desses, e seu pai era um humano. A pobre criatura nasceu sem ser nem um nem outro, mas também sendo os dois.</p>",

        pag14: "<p class='speaker'>Lich</p><p> Fascinante os meio-sangues, não são? Alias, as criaturas que são meio a meio são extremamente interessantes.</p>",

        pag15: "<p class='speaker'>Lich</p><p> Alias, foi por causa de um mestiço que a guerra entre elfos e fadas começou. A rainha dos elfos estava tendo um caso com um fada, e quando o filho deles nasceu.. ah, foi um escândalo. O rei ia condenar ela a morte, mas então ela fugiu para encontrar o seu amado.</p>",

        pag16: "<p class='speaker'>Sophie</p><p> Então o que aconteceu com a rainha? </p>",

        pag17: "<p class='speaker'>Lich</p><p> Ela e a criança desapareceram, e com ela, a coroa dos elfos também. Uma coroa feita com os galhos da árvore mais antiga dessa floresta. Um objeto sagrado. Muito bonito também, mas definitivamente é maior do que um anél.</p>",

        pag18: "<p class='speaker'>Sophie</p><p> Por que você está me contando isso?</p>",

        pag19: "<p class='speaker'>Lich</p><p> Porque a coroa que você procura, não é a coroa que Feyre usa para enfeitar sua cabeça.</p>",

        pag20: "<p class='speaker'>Sophie</p><p> Como você sabia que eu viria e que buscaria a coroa da rainha das pixies?</p>",

        pag21: "<p class='speaker'>Lich</p><p> Pessoas mentem, minha cara, as estrelas não.</p>",

        pag22: "<p class='speaker'>Sophie</p><p> Por que você está me ajudando?</p>",

        pag23: "<p class='speaker'>Lich</p><p> Porque essa guerra é problemática para mim.</p>",

        pag24: "<p class='speaker'>Sophie</p><p> Então foi por isso que mandou Guillain atrás de mim?</p>",

        pag25: "<p class='speaker'>Lich</p><p> Você se engana ao acreditar que eu mandei Guillain até você. Ele foi por conta própria.</p>",

        pag26: "<p class='speaker'>Sophie</p><p> Por que..</p>",

        pag27: "<p class='speaker'>Lich</p><p> Eu temo que nosso tempo já acabou. Quando você trouxer mais uma garrafa dessas eu responderei suas perguntas, mas até lá você deve continuar a sua jornada.</p>",

        pag28: "Sophie e Guillain se levantaram da mesa.Guillain tomou a dianteira e saiu antes.Enquanto isso Sophie agradeceu o Lich pelas informações e se virou para deixar o covil do Lich.</p>",

        pag29: "<p class='speaker'>Lich</p><p> Uma última coisa que você deveria saber: ao levar a coroa para os elfos você ganhará a aceitação que sempre quis, mas se levar a coroa para a fada certa a paz voltará para a floresta, contudo se colocar a coroa em sua cabeça algo interessante irá acontecer.</p>",

        pag30: "Ao sair do covil, Sophie suspirou.Ela ainda precisaria arranjar mais uma garrafa, e ela tinha quase certeza de que Aaron não teria outra para lhe dar.",

        pag31: "Como se os céus tivessem ouvido seu suspiros, eles mandaram Guillain para o seu encontro com uma garrafa escrito Darunium em vermelho.Sophie soltou uma risada, pensando na sua sorte, e abraçou o cavaleiro para demonstrar sua gratidão.",

        pag32: "< p class='speaker' > Sophie</p><p> Quando isso tudo terminar eu gostaria de ouvir a sua história, e ajudar você como você tem me ajudado.</p>",

        pag33: "Guillain acentiu com a cabeça; era difícil ler suas expressões já que a única coisa que era possível ver de seu rosto eram as duas esferas brilhantes que eram seus olhos, mas do mesmo jeito que os musculos faciais mudam a expressão dos olhos, os deles pareceram fazer algo similar.",

        pag34: "Ao retornar para o reino das pixies, Sophie encontra mais uma vez festa e flores.As pequenas fadinhas estavam cada vez mais impressionadas com seu sucesso.O pensamento de que algum dia as pixies colocariam uma recompensa sobre sua cabeça do mesmo jeito que fizeram com Aaron a perturbava, mas o pior de tudo é que essas criaturinhas que pareciam tão inofensivas quase a fizeram matar uma criatura inocênte só por ele ser mestiço.",

        pag35: "Mesmo assim, Sophie respirou fundo e entregou os itens a rainha; o chifre e a garrafa.A rainha parecia mais do que satisfeita, e ordenou as pixies para servirem hidromel para ela e para a convidada.",

        pag36: "Sophie recusou, e observou a tiara da rainha.De acordo com o Lich aquela não era a coroa que ela precisava para completar sua missão, então a coroa certa deveria estar em outro lugar.",

        pag37: "< p class='speaker' > Feyre</p ><p> Muito bem, o seu terceiro desafio será.... um jogo de xadrez comigo. Se você vencer, você fica com a coroa que está em minha cabeça, mas se eu vencer você ficará aqui nessa floresta conosco, o que acha, minha querida?</p>",

        pag38: "<p class='speaker'>Sophie</p><p> Eu aceito jogar com você, mas com a condição que eu possa escolher outro objeto do tesouro real. Afinal, não posso deixar uma rainha sem sua coroa.</p>",

        pag39: "Ouvindo o pedido da aprendiz, a rainha riu, gostou de sua confiança e ordenou que levassem - na para a sala do tesouro real para que a garota escolhesse seu prêmio.",

        pag40: "A sala do tesouro real ficava em uma parte oca de uma árvora, lá tinham os mais diversos objetos, colares, brincos, anéis, moedas, e também uma coroa grande de mais para a cabeça de uma pixie.A coroa distoava dos demais itens lá, pois ela era feita de galhos entalhados em tranças, como se fosse uma coroa de flores, só que de galhos, e no lugar das flores tinham esmeraldas.",

        pag41: "Sophie voltou para iniciar a partida, quando as pixies trouxeram a coroa, a rainha ficou tão suspresa que quase ficou sóbria, quase.",

        pag42: "O jogo começou com o movimento de Sophie, já que seus peões eram os brancos, e a rainha retaliou.Com o passar das partidas a rainha ficava cada vez mais desesperada para acabar com o exército de Sophie, mas de repente algo mudou.Era como se mesmo perdendo, a rainha ainda ia ganhar, e Sophie podia sentir isso.Algo não estava certo.",

        pag43: "No jogo o rei da rainha podia estar cercado, mas na vida real quem estava cercada era Sophie.O seu próximo movimento ia resultar em um xeque - mate, mas ela perderia.",

        pag44: "< p class='speaker' > Sophie</p ><p> Xeque-mate.</p>",

        pag45: "<p class='speaker'>Feyre</p><p> Parabens, minha cara, você ganhou. Contudo, eu temo que não possa deixar você ir. Guardas!</p>",

        pag46: "Ao seu comando, várias pixies convergiram ao redor de Sophie, enquanto outras levavam a coroa para longe.As pixies rodeavam Sophie como uma núvem de insetos, seria difícil se livrar de todas, principalmente porque Sophie era um único alvo grande e fácil para elas, mas elas eram muitas e pequenas.",

        pag47: "< p class='speaker' > Feyre</p > <p> Parece que você perdeu, minha cara. Você achou que poderia me enganar, mas não pode.</p>",

        pag48: "A rainha estava exalando orgulho, olhando a aprendiz com desprezo.Isso é até que forão ouvidos vários gritos na distância.",

        pag49: "Uma pixie veio voando ofegante até a rainha dizendo que intrusos haviam entrado no reino.Quando Sophie virou para trás ela viu Guillain usando uma espada encantada com raios, dando choque nas pequenas fadas como se fossem mosquitos.Quando ela tornou a se virar para rainha, a sala do trono estava em chamas e as pixies voaram para longe.Na correria, elas deixaram a coroa cair, e um par de garras a recuperou, era Aaron.",

        pag50: "Não havia tempo para comemorar ou agradecer, o reino ainda estava pegando fogo, e o fogo estava se espalhando.Então os três correram para fora do reino, e Sophie conjurou um feitiço de proteção para a área da floresta que estava em chamas.Ela isolou completamente aquela área até o momento que as chamas enfraqueceram.Quando ela desfez o feitiço, uma coluna densa de fumaça começou a subir.",

        pag51: "< p class='speaker' > Sophie</p ><p> A floresta vai se recuperar, eu consigo sentir isso. Vocês dois são incríveis mesmo.</p>",

        pag53: "<p class='speaker'>Aaron</p><p> Sinceramente essa é a última vez que eu me meto nas profecias do Gunther. Depois dessa eu vou me mudar para as montanhas, longe de tudo e todos.</p>",

        pag54: "<p class='speaker'>Aaron</p><p> Toma a sua coroa.</p>",

        pag55: "Sophie riu do mau-humor de Aaron e segurou a coroa.No momento que a coroa tocou a sua mão algo brilhou no seu braço esquerdo.Quando a luz verde se dissipou, lá estava a runa da terra emoldurada por diversos símbolos, a prova de que Sophie tinha virado um mago elemental.",

        pag56: "Guillain gesticulou um 'e agora?' para o grupo, e eles se entreolharam.De acordo com o Lich, ou Gunther, haviam três caminhos que Sophie poderia escolher: devolver a tiara para os elfos, encontrar a 'fada certa' ou ela poderia ficar com a coroa.",

        pag57: "O que ela deve fazer?",

    },
    textSophie1211: {
        pag1: "Sophie decide devolver a tiara para os elfos.",

        pag2: "Ao optar por devolver a tiara aos elfos, Aaron se despediu dos dois para retornar à sua gruta. Sophie não poderia culpá-lo, afinal elfos não eram as criaturas mais abertas a aceitar pessoas diferentes. Eles não aceitavam nem a ela que em aparência era exatamente como um deles, mas isso mudaria. Tudo mudaria.",

        pag3: "Sophie e Guillain partiram para o reino dos elfos. Na entrada os guardas não queriam deixar eles entrarem, mas a posição deles mudou quando Sophie mostrou a coroa. A dupla foi levada para o palácio, onde estava a princesa Frida e o príncipe Callon, que tiveram a mesma reação que os guardas a ver a coroa; surpresa, choque e um pingo de alegria. A coroa finalmente tinha retornado.",

        pag4: "Sophie até ganhou um título de nobreza na sociedade élfica. Até então parecia que Guillain não tinha nada para ganhar ao ir até lá junto da maga, mas foi ai que ela percebeu o jeito como seus olhos nunca deixaram a princesa. E a princesa fez o mesmo para com ele quando ouviu seu nome.",

        pag5: "Fim - Reunidos",
    },
    textSophie1212: {
        pag1: "Sophie decide encontrar 'a fada certa'.",

        pag2: "<p class='speaker'>Sophie</p><p> Acho que nós deveríamos tentar encontrar a fada que o Lich mencionou.",

        pag3: "<p class='speaker'>Aaron</p><p> Nós? Não tem nenhum nós, eu só ajudei você porque eu queria ver onde isso ia dar, só isso. Não jurei lealdade a você nem nada.",

        pag4: "Aaron continuou suas reclamações, enquanto Guillain deu uma leve puxada na manga de Sophie, e quando os dois começaram a andar Aaron continuou a seguir a dupla mesmo reclamando durante todo o caminho.",

        pag5: "Era engraçado como Sophie se sentia tão chegada a esses dois, mesmo que ela tenha conhecido eles a pouco tempo. Sim, era engraçado, pois os elfos, mesmo com todo o esforço dela, nunca a aceitaram; já o grupo que ela encontrou por acaso acabou dando-lhe as boas vindas, a fazendo com que ela verdadeiramente se sentisse parte de algo.",

        pag6: "O grupo continuou sua jornada em busca do Lich para conseguir mais informações. A partir daí acredita-se que os três continuaram juntos, em busca da tal fada. O fato é que uma fada devolveu a coroa para os elfos, e a paz retornou à floresta de Jade.",

        pag7: "Fim - Os três mosqueteiros",
    },
    textSophie1213: {
        pag1: "Sophie decide ficar com a tiara.",

        pag2: "Seus companheiros não dizem nada contra, afinal a coroa pertencia à Sophie agora.O destino daquilo estava nas mãos da maga.E talvez fosse melhor que aquela coroa fosse para longe da floresta.",

        pag3: "Ela colocou a coroa em sua cabeça e sentiu como se a floresta estivesse conectada a ela, como se a floresta estivesse disposta a dar a ela toda sua energia caso necessário.Ela nunca tinha se sentido tão viva como naquele momento.Onde ela passava a floresta parecia cantar, como se a estivesse saudando.Onde ela tocava, cresciam flores das mais diversas cores e tamanhos.",

        pag4: "Quando eles chegaram perto da estrada que levaria Sophie de volta ao castelo que era sua escola, os três se despediram e cada um seguiu seu caminho.Sophie iria voltar para a escola e continuar estudando, Aaron voltaria para sua gruta e talvez ele se mudasse para as montanhas, Guillain retornou para a floresta.Guillain ainda estava fadado a assombrar aquele lugar, mas Sophie ainda retornaria para ajudá- lo a seguir em frente se assim ele desejasse.",

        pag5: "A cada passo que Sophie dava para fora da floresta, ela se sentia mais e mais fraca.Era um sentimento estranho, como se agora em vez de lhe dar energia, a floresta estava turando sua energia, mas como isso era possível?",

        pag6: "A coroa estava mantendo ela ligada a floresta, é claro.Quando Sophie percebeu essa conexão ela tentou retirar a coroa, mas ela estava presa e sua cabeça como se tivesse espinhos fincados em sua cabeça.O corpo da maga vai ao chão e desaparece.Em seu lugar aparece a muda de um salgueiro, o qual segurava a coroa em um de seus galhos.",

        pag7: "Fim - Salgueiros chorões.",

    },
    textSophie122: {
        pag1: "Sophie decide atacar o Lich.",

        pag2: "Sophie junta suas forças e lança um feitiço no Lich.",

        pag3: "Uma risada fria enchei a sala, reverberando naquelas colunas antigas. O riso ecoou pela sala, e uma voz ainda mais fria e sádica disse 'menina tola, vamos ver se você aguenta receber seu próprio feitiço.",

        pag4: "Assim foi dito, e assim foi feito. Infelizmente para Sophie, o feitiço que ela lançou contra o Lich pôde não ter sido efetivo contra um morto-vivo, mas certamente seria fatal para um vivo.",

        pag5: "Fim - feitiço volta contra o feiticeiro",
    }
}

var plotScene = {
    textSophie1: {
        pag2: ['floresta-de-jade', ''],
    },
    textSophie11: {
        pag1: ['floresta-de-jade', ''],
        pag12: ['entrada-da-gruta', ''],

    },
    textSophie111: {
        pag1: ['entrada-gruta', ''],
        pag4: ['floresta-de-jade', '']
    },
    textSophie1111: {
        pag1: ['floresta-de-jade', ''],
    },
    textSophie1112: {
        pag1: ['floresta-de-jade', ''],
    },

    textSophie112: {
        pag1: ['entrada-da-gruta', ''],
        pag24: ['floresta-de-jade', ''],
    },
    textSophie1121: {
        pag1: ['floresta-de-jade', ''],
    },
    textSophie1122: {
        pag1: ['floresta-de-jade', ''],
    },

    textSophie12: {
        pag1: ['floresta-de-jade', ''],
        pag17: ['entrada-da-gruta', ''],
        pag45: ['covil-do-lich', ''],
    },
    textSophie121: {
        pag1: ['covil-do-lich', ''],
        pag34: ['floresta-de-jade', '']
    },
    textSophie1211: {
        pag1: ['floresta-de-jade', ''],
    },
    textSophie1212: {
        pag1: ['floresta-de-jade', ''],
    },
    textSophie1213: {
        pag1: ['floresta-de-jade', ''],
    },

    textSophie122: {
        pag1: ['covil-do-lich', ''],
    },
}

var plotSophie1Choices = ["Atacar", "Não atacar"];
var plotSophie11Choices = ["Atacar", "Não atacar"];
var plotSophie111Choices = ["Dizer que as pixies a enviaram", "Dizer que ninguéma enviou"]
var plotSophie1111Choices = [0, 0];
var plotSophie1112Choices = [0, 0];

var plotSophie112Choices = ["Aceitar o chá", "Recusar o chá"];
var plotSophie1121Choices = [0, 0];
var plotSophie1122Choices = [0, 0];


var plotSophie12Choices = ["Não atacar o Lich", "Atacar o Lich"];
var plotSophie121Choices = ["Devolver a tiara aos elfos", "Encontrar a 'fada certa'", "Ficar com a coroa"];
var plotSophie1211Choices = [0, 0];
var plotSophie1212Choices = [0, 0];
var plotSophie1213Choices = [0, 0];

var plotSophie122Choices = [0, 0];

