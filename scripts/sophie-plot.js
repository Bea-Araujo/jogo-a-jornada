
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
        var mainElem = document.getElementById("scene");
        mainElem.innerHTML = `<img src='${sceneObject[index][1]}'>`
    }
}

function isLastPage(ultimaPagina, theEnd, escolhas) {
    if (theEnd) {
        var playAgain_btn = document.getElementById("nextText_btn");
        var path = "../../index.html"
        playAgain_btn.innerHTML = `<button><a href=${path}> Jogue de novo </a> </button>`;
    } else if (ultimaPagina) {
        var choices = document.getElementById("choices");
        var nextText_btn = document.getElementById("nextText_btn");
        if (escolhas.length == 2) {
            choices.innerHTML =
                `
                <article>
                <p>A - ${escolhas[0]}</p>
                <p>B - ${escolhas[1]}</p>
                </article>
            `
            nextText_btn.innerHTML = "<button onclick=janelaDeEscolha(2)>Escolher</button>";
        } else if (escolhas.length == 3) {
            choices.innerHTML =
                `
                <article>
                <p>A - ${escolhas[0]}</p>
                <p>B - ${escolhas[1]}</p>
                <p>C - ${escolhas[2]}</p>
                </article>
            `
            nextText_btn.innerHTML = "<button onclick=janelaDeEscolha(3)>Escolher</button>";
        }


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

function janelaDeEscolha(qtdEscolhas) {
    var escolha = prompt("Qual ser?? sua escolha?");
    if (qtdEscolhas == 2) {
        while (escolha.toUpperCase() != "A" && escolha.toUpperCase() != "B") {
            var escolha = prompt("Escolha inv??lida.\nQual ser?? sua escolha? (A ou B)");
        }
    } else if (qtdEscolhas == 3) {
        while (escolha.toUpperCase() != "A" && escolha.toUpperCase() != "B" && escolha.toUpperCase() != "C") {
            var escolha = prompt("Escolha inv??lida.\nQual ser?? sua escolha? (A ou B)");
        }
    }
    var nextChapter_btn = document.getElementById("nextText_btn");
    if (escolha.toUpperCase() == "A") {
        choiceTree = choiceTree + 1;
        var path = `./${choiceTree}.html`
    } else if (escolha.toUpperCase() == "B") {
        choiceTree = choiceTree + 2;
        var path = `./${choiceTree}.html`
    } else if (escolha.toUpperCase() == "C") {
        choiceTree = choiceTree + 3;
        var path = `./${choiceTree}.html`
    }
    nextChapter_btn.innerHTML = `<button><a href=${path}> Prox pag </a> </button>`;
}

var plotSophie = {
    textSophie1: {
        pag2: "Sophie retornou para seu quarto logo ap??s receber o desafio para preparar as suas coisas: uns 2 livros, alguns pergaminhos pergaminhos, um mapa da floresta, caneta e tinteiro, e ?? claro uma b??ssola. Essa viagem definiria seu destino. Talvez ela at?? conseguiria que sua m??e fosse aceita novamente por seu povo. Talvez.",
        pag3: "Com uma respira????o profunda, ela saiu pelo port??o em dire????o ?? floresta de Jade. O caminho n??o foi o problema, haviam estradas que percorriam os arredores da floresta, mas pouquissimas trilhas dentro daquele labirinto verde. Qualquer um poderia se perder ali dentro, mas Sophie n??o era qualquer um. Em suas veias corria o sangue de um dos povos da floresta.",
        pag4: "Ao continuar o seu caminho, Sophie sentiu uma presen??a estranha, obscura. Algo que n??o pertencia ??quele lugar, e deciciu investigar.",
        pag5: "Nas sombrar de um salgueiro, ela viu algu??m em uma armadura desgastada e cheia arranh??es. Quase todo o corpo da criatura era coberto ou por metal ou tecido, era dif??cil distinguir a sua natureza. Isso ?? at?? que Sophie viu os dois olhos que brilhavam dentro do capacete. N??o era humano, ou pelo menos n??o mais. Ele parecia mais com um... morto-vivo.",
        pag6: "O morto-vivo continuou encarando em sua dire????o, e sua espada relusiu a pouca luz que conseguiu adentrar os dendos galhos do sagueiro.",
        pag7: "O que ela deve fazer?",
    },
    textSophie11: {
        pag1: "Sophie decide atacar o morto-vivo.",
        pag2: "Ela lan??ou um feiti??o na dire????o dele e ele foi ao ch??o. Contudo, antes de Sophie poder respirar aliviada, ele se levanta e muda o seu rumo.",
        pag3: "Sophie acreditou ter se livrado do cavaleiro fantasma e suspirou. Apari????es n??o eram coisa boa, definitivamente tamb??m n??o era um bom jeito de iniciar dua miss??o.",
        pag4: "Sophie acreditava que ter visto o fantasma era um mau agouro, mas ela teria que continuar sua miss??o mesmo assim. Ent??o ela continuou sua jornada at?? o cora????o da floresta, onde diziam ser o pequeno reino das pixies de Jade.",
        pag5: "Pixies eram criaturinhas belas como os elfos e as fadas, a natureza delas n??o era nem boa nem m??, mas se tem algo que elas adoravam era pregar pe??as em todo e qualquer forasteiro. Al??m disso elas tinham uma a habilidade de apenas aparecer quando quisessem ser vistas, o que tornaria a miss??o de sophie mais dif??cil.",
        pag6: "Apesar de tudo isso, ela conseguiu encontrar o reino das pequeninas, as quais receberam ela com flores e festa. As coisas pareciam ir bem para o pequeno reino, tanto que todas estavam celebrando a prosperidade e cantando louvores para sua rainha, Feyre, enquanto Sophie era levada at?? a sala do trono.",
        pag7: "A sala do trono foi montada em cima de galhos que permitiam que uma pixia ficasse na altura dos olhos de um humano. L?? a raina estava sentada em seu trono dourado, e em sua cabe??a estava a sua tiara, que para uma pessoa normal seria mais parecido com um an??l.",
        pag8: "<p class='speaker'>Feyre</p><p>O meu reino te da as boas vindas, maga. Como pode ver estamos passando por uma linda ??poca de prosperidade, venha, dan??a e cante conosco.</p>",
        pag9: "<p class='speaker'>Sophie</p><p>Muito obrigada por essa honra vossa alteza, mas eu vim at?? aqui pois tenho uma miss??o a cumprir.</p>",
        pag10: "A rainha pareceu ficar curiosa, e Sophie falou sobre sua miss??o. Como a rainha adorava apostas, ela disse que primeiro, a maga deveria provar o seu valor passando por tr??s tarefas. A primeira seria se livrar do monstro que n??o permitia que elas entrassem na gruta mais ao norte, a segunda seria consseguir uma garrafa de hidromel dos an??es das montanhas de Darunia. A primeira miss??o seria f??cil, mas Sophie ainda n??o tinha nem ideia de como passaria pela segunda.",
        pag11: "Enquanto isso, uma pixie a levava para a gruta.",
        pag12: "<p class='speaker'>Pixie</p><p>Aqui est?? a gruta, senhorita Sophie. N??o esque??a de trazer algo da criatura como prova de que ela for?? eleminada.</p>",
        pag13: "Sophie acentiu com a cabe??a e a pixie partiu. Agora ela teria que descobrir que tipo de criatura ela estava prestes a enfrentar.",
        pag14: "Dentro da gruta a ??nica fonte de luz era uma pequena fogueira, que iluminava perfeitamente uma pilha de pequenos ossos, mas sophie n??o conseguiu identificar o autor de tudo aquilo at?? que uma voz rouca e grave perguntou 'quem est?? ai?'",
        pag15: "<p class='speaker'>???</p><p>Eu perguntei quem est?? ai.</p>",
        pag16: "A criatura se aproximou da fogueira, e finalmente Sophie viu o seu rosto. Era algo an??malo, um rosto cheio de escamas, com um formato como se fosse algo entre drag??o e humano. Os olhos eram de drag??o, os dentes tamb??m, mas o corpo era algo no meio.",
        pag17: "O que ela deve fazer?",

    },
    textSophie111: {
        pag1: "Sophie decide atacar a criatura.",

        pag2: "Ela n??o se orgulhou disso, mas lan??ou um feiti??o na criatura deformada sem nem dar algum tipo de aviso. Apesar das garras e das presas, ela se sentiu como se tivesse atacado algu??m que n??o tinha nem armas para lutar. Sua capa ficou suja de sangue, e figurativamente, suas m??os tamb??m.",

        pag3: "Sophie retirou um dos chifres da criatura para dar ?? rainha das fadas, mas antes de voltar, ela fez um pequeno enterro para essa criatura. Afinal ela n??o poderia deixar seu corpo ali apodrecendo em uma gruta, pelo menos ele tinha o direito de voltar para o solo. Ap??s colocar o monstro para descansar, ela retornou para o reino das Pixies.",

        pag4: "As pequenas fadinhas voltaram a celebrar quando viram o chifre do falecido. A rainha parabenizou Sophie pelo seu ato, ela disse tamb??m que aquela criatura estava atormentando seu povo h?? muito tempo, e separou uma quantia de ouro para dar ?? Sophie como recompensa por um trabalho bem feito.",

        pag5: "A rainha estava de t??o bom humor que at?? deu uma dica para Sophie sobre como conseguir o Hidromel, ela disse que os elfos de Jade tinham algumas garrafas com eles, um pequeno souvenir dos ??ltimos an??es que passaram por ali.",

        pag6: "Mas era estranho elfos terem a posse de bebidas de an??es, e mais estranho ainda que an??es tinham passado por l??. Ambos elfos e an??es eram ra??as extremamente orgulhosas, quando os dois se juntavam nada de bom poderia acontecer. Sophie tentava adivinhar se os an??es viraram prisioneiros ou se finalmente essas duas ra??as estavam se acertando, enquanto uma outra pixie guiava ela at?? os elfos. Esses pensamentos todos apenas para n??o tentar advinhar o que eles fariam com ela, uma mesti??a.",

        pag7: "Sophie foi recebida por olhares g??lidos e sil??ncio. Quando ela pediu para passar, os elfos que guardavam o port??o disseram que aqueles que tinham mesmo que uma gota de sangue humano correndo em suas veias seria preso. Mesmo assim Sophie insistiu que precisava de uma audi??ncia.",

        pag8: "Talvez por sorte do destino ou gra??a de alguma divindade, a princesa Frida estava passando por perto quando viu a como????o na entrada de seu reino e foi averiguar.",

        pag9: "<p class='speaker'>Frida</p><p>O que est?? acontecendo aqui?</p>",

        pag10: "<p class='speaker'>Guarda ??lfico 1</p><p>Uma meia humana deseja entrar em seu reina, vossa alteza.</p>",

        pag11: "<p class='speaker'>Frida</p><p>Pois deixem-na entrar. Metade dela pode ser humana, mas a outra metade ?? nossa irm??.</p>",

        pag12: "Os guardas deram passagem e Sophie foi ao encontro da princesa. Ela era um perfeito exemplo da beleza ??lfica, orelhas pontudas, olhos verdes como esmeraldas, pele branca como a lua, mas bochechas e l??bios corados como rosas; seus cabelos eram loiros quase pareados, arrumados em um conjunto de tran??as complicado, mas delicado. Sua voz era doce, suas palavras eram gentis, e seus gestos eram graciosos. At?? ent??o Sophie achava que princesas assim s?? existiam em contos de fadas, mas ali estava Frida.",

        pag13: "<p class='speaker'>Frida</p><p>Eu n??o sei que prop??sito a trouxe at?? aqui, mas voc?? deveria se apressar. Caso voc?? ainda esteja aqui quando meu irm??o retornar... eu temo pela sua vida.</p>",

        pag14: "<p class='speaker'>Sophie</p><p>Vossa alteza, eu desejo apenas pegar uma garrafa de hidromel de Darunia. Preciso de apenas uma e ent??o me vou.</p>",

        pag15: "A princessa acentiu, e levou para o pal??cio. Ningu??m ousava contrarias a princesa, mas todos olhavam para Sophie como se fosse uma criatura de outro mundo, e tudo por causa de sua descend??ncia. N??o havia nada que ela pudesse fazer a respeito disso. Talvez, quando ela se tornasse uma maga elemental, a?? talvez esses olhares mudariam.",

        pag16: "No pal??cio, Frida pediu para uma de suas servas pegar o hidromel. Enquanto elas esperavam, Fida e Sophie trocaram algumas palavras. Pela primeira vez, Shopie n??o se sentiu desprezado ao falar com um elfo.",

        pag17: "Infelizmente, tudo que ?? bom tem que acabar. E foi isso que aconteceu com o momento de Sophie e Frida quando o pr??ncipe invadiu a sala que as duas estavam, seus passos eram pesados e seus olhos mostravam que ela j?? ouvir?? sobre a convidada mesti??a.",

        pag18: "<p class='speaker'>Callon</p><p>O que significa isso, minha irm??? Uma merti??a aqui e voc?? recebe ela de bra??os abertos enquanto estamos no meio de um conflito com aquelas fadas.</p>",

        pag19: "<p class='speaker'>Frida</p><p>Meu irm??o, n??o ?? o que parece. Sophie quer apenas o hidromel deixado pelos an??es.</p>",

        pag20: "<p class='speaker'>Callon</p><p>Claro, essa ?? uma desculpa muito boa. N??o d?? ouvidos a ela, Frida. Ela est?? apenas tomando vantagem da sua gentileza.</p>",

        pag21: "<p class='speaker'>Callon</p><p>Agora diga a verdade, garota. Quem te enviou at?? aqui?</p>",

        pag22: "O que Sophie deve fazer?",
    },
    textSophie1111: {
        pag1: "Sophie diz que foi enviada pelas pixies.",

        pag2: "Sophie repete sua hist??ria, dessa vez para o irm??o de Frida. Apesar dele n??o confiar nela, Frida lhe faz um apelo para que deixe Sophie ir. J?? que Frida n??o estava ferida, ele cedeu e ordenou que ela fosse embora, e nunca mais voltesse. Antes de Sophie partir, Frida tenta lhe alertar de algo, mas Callon a detem.",

        pag3: "Quando Sophie retornou para o reino das pixies, elas tornaram as festejar e a lhe dar os parabens. Apesar do hambiente alegre ao seu redor, algo que n??o saia de sua cabe??a era o que Callon falou sobre o conflito com as fadas. Era estranho elfos e fadas se desentenderem tanto assim.",

        pag4: "<p class='speaker'>Feyre</p><p>Agora sim podemos celebrar direito! Voc?? foi incr??vel, querida. Vamos, beba conosco.</p>",

        pag5: "Era estranho pixies terem um copo grande o sufici??nte para Sophie, mas elas tinham.Sophie n??o querendo fazer uma desfeita, aceitou e tomou um gole.A bebida era extremamente doce, mas a rainha parecia contente.",

        pag6: "<p class= 'speaker'> Feyre</p><p>Muito bem, agora para o seu terceiro desafio... eu quero que voc?? jogue xadrez comigo.</p>",

        pag7: "<p class='speaker'>Feyre</p><p>Case voc?? ven??a, voc?? leva a minha tiara, mas se voc?? perder... minha flor, voc?? ter?? que passar o resto dos seus dias conosco.</p>",

        pag8: "Sophie aceitou a proposta apesar do risco. O jogo come??ou, a cada rodada vinham duas pixies mover as pe??as da rainha, e mais outras para encher o copo de Sophie. A bebida era doce, doce de mais, parecia ter mais a????car do que ??lcool. Sophie come??ou a se sentir atordoado, mas o jogo continuou, at?? que finalmente a rainha disse:",

        pag9: "Xeque-mate.",

        pag10: "Fim - Doce derrota",
    },
    textSophie1112: {
        pag1: "Sophie diz que ningu??m a enviou.",
        pag2: "Callon olhou desconfiado para Sophie, e tomou a irm?? pelo bra??o, puxando-a para longe da maga. O pr??ncipe chamou pelos guardas, que por sua vez levaram Sophie para o calabou??o. Ela n??o ofereceu resist??ncia, para uns isso era prova de culpa, mas para outros era a prova de que ela n??o deseja ferir seu povo.",
        pag3: "<p class='speaker'>Callon</p><p>Perdoe-me, minha irm??. Mas foi necess??rio. Ningu??m vem at?? uma floresta em territ??rio ??lfico para procurar uma bebida nativa das montanhas dos an??es.</p>",
        pag4: "<p class='speaker'>Callon</p><p>Algum dia voc?? ir?? me agradecer.</p>",
        pag5: "Sophie foi condenada a passar o resto de seus dias na pris??o, condenada por ser espi?? do inimigo, enviada para enfraquecer as defesas ??lficas de dentro para fora.",
        pag6: "Embora essa tenha sido sua senten??a, acredita-se que Frida continuou acreditando em sua inoc??ncia, e tamb??m continuou a visitar a aprendiz. Por mais que tenha sido um destino cruel para Sophie, ela conseguiu conquistar a amizade de Frida, e ser tratada de igual para igual era tudo que a aprendiz sempre quis.",
        pag7: "Fim - Pis??o doce e amarga",
    },
    textSophie112: {
        pag1: "Sophie decide n??o atacar a criatura.",

        pag2: "<p class= 'speaker'> Sophie</p><p>Eu me chamo Sophie, sou aprendiz de mago.</p>",

        pag3: "<p class='speaker'>???</p><p>E o que uma aprendiz de mago faz aqui, Sophie?</p>",

        pag4: "<p class='speaker'>Sophie</p><p>Eu venho em nome da rainha das pixies, Feyre, para...",

        pag5: "<p class='speaker'>Aaron</p><p>Para me matar.</p>",

        pag6: "<p class='speaker'>Sophie</p><p>Sim... De acordo com ela voc?? tem atormentado as pixies.</p>",

        pag7: "<p class='speaker'>???</p><p>Ha! Atormentado elas, elas que me atormentam.</p>",

        pag8: "<p class='speaker'>Sophie</p><p>Eu gostaria de ouvir o seu lado da hit??ria, ... er.</p>",

        pag9: "<p class='speaker'>???</p><p>Voc?? pode me chamar de Aaron.</p>",

        pag10: "<p class='speaker'>Aaron</p><p>Essas mosquinhas s??o t??o ruins quanto qualquer outra criatura nessa floresta. Elfos, fadas, pixies, humanos- s??o todos iguais. N??o podem ver algu??m diferente que o fazem de alvo.</p>",

        pag11: "<p class='speaker'>Sophie</p><p>Eu acho que entendo o que voc?? quer dizer- Sophie sentou-se perto do fogo.</p>",

        pag12: "<p class='speaker'>Aaron</p><p>Claro, elfo com cheiro de humano. Voc?? tamb??m ?? um meio-sangue.</p>",

        pag13: "<p class='speaker'>Sophie</p><p>Sim... ?? por isso que eu preciso da coroa da rainha, eu preciso passar nesse teste, eu preciso virar uma maga elemental. Talvez assim a minha m??e possa voltar para casa e talvez eu possa ser aceita pelos elfos tamb??m.</p>",

        pag14: "AAron suspirou ao olhar para Sophie, seu olhar dizia tudo, ele achava que essa era uma tarefa imposs??vel. Ele n??o acreditava que os elfos a aceitariam mesmo se ela fosse uma maga elemental, nem se ela fosse a maga mais poderosa do mundo, mas ele conseguia entender de onde vinha o sentimento, ent??o, com um grunido, quebrou um de seus chifres e deu a ela.",

        pag15: "<p class='speaker'>Aaron</p><p>Leve isso com voc??. Vai precisar de uma prova que eu morri, n??o?</p>",

        pag16: "Sophie se moveu para dar-lhe um abra??o. Quando os bra??os finos e delicados da aprendiz o envolveram, o corpo de Aaron ficou r??gido como se havia muito que ele n??o recebia um. Mesmo assim ele tentou retribuir, dando um tapinha nas costas dela com o m??nimo de for??a que ele conseguisse colocar em suas garras.",

        pag17: "<p class='speaker'>Sophie</p><p>Muito obrigada Aaron, eu n??o vou me esquecer disso.</p>",

        pag18: "<p class='speaker'>Aaron</p><p>T??, t??. V?? logo. A rainha das pestes deve estar esperando.</p>",

        pag19: "<p class='speaker'>Sophie</p><p>Provavelmente. E eu preciso me preparar para o segundo desafio. A rainha quer que eu consiga uma garrafa de hidromel de Darunia para ela.</p>",

        pag20: "<p class='speaker'>Aaron</p><p>Mas uma viagem at?? Darunia levaria no m??nimo algumas semanas.</p>",

        pag21: "<p class='speaker'>Aaron</p><p>Ah, eu vou me arrepender disso, mas alguns dias atr??s um grupo de an??es passou pela floresta. Com certeza eles s??o mais divertidos que os elfos.</p>",

        pag22: "Aaron entregou para Sophie a garrafa de hidromel daruniano, e novamente ela retribuiu com um abra??o. Os dois podiam ser completamente diferentes em apar??ncia, mas no fundo os dois tinham o mesmo desejo: pertencer a um grupo. Humanos ou elfos, no caso de Sophie. Humanos ou drag??es para Aaron.",

        pag23: "Ambos sabiam que esse era um sonho quase imposs??vel, mas se o outro conseguisse, traria esperan??a para o que sobrasse.",

        pag24: "E com isso, Sophie retornou para o reino das Pixies com o chifre em m??os.",

        pag25: "Quando Sophie chegou, as pixies tornaram a festejar e a lhe dar os parabens. Apesar do hambiente alegre ao seu redor, ela n??o conseguia tirar da cabe??a que as pixies estavam tratando t??o mal Aaron simplesmente por ele ser mesti??o, e ela se perguntava se as fadinhas iriam mandar mat??-la tamb??m.",

        pag26: "<p class='speaker'>Feyre</p><p>Agora sim podemos celebrar direito! Voc?? foi incr??vel, querida. Vamos, beba conosco.</p>",

        pag27: "Era estranho pixies terem um copo grande o sufici??nte para Sophie, mas elas tinham. Sophie n??o querendo fazer uma desfeita, aceitou e tomou um gole. A bebida n??o tinha um teor alcoolico muito forte, e era doce na medida certa. Certemente era algo que agradava seu paladar, mas o medo das pixies terem colocado uma recompensa em sua cabe??a a afastou do copo.",

        pag28: "<p class='speaker'>Feyre</p><p>Muito bem, agora para o seu terceiro desafio... eu quero que voc?? jogue xadrez comigo.</p>",

        pag29: "<p class='speaker'>Feyre</p><p>Case voc?? ven??a, voc?? leva a minha tiara, mas se voc?? perder... minha flor, voc?? ter?? que passar o resto dos seus dias conosco.</p>",

        pag30: "Os riscos eram altos, mas Sophie aceitou. As suas pe??as eram brancas, ent??o ela deu in??cio a partida. Cada turno parecia demorar mais e mais, Sophie estava cada vez mais cuidadosa com seus movimentos, enquanto isso a rainha parecia apenas impaci??nte.",

        pag31: "Vendo que Sophie estava nervosa, uma pixie preparou um ch?? e levou para ela.",

        pag32: "<p class='speaker'>Pixie</p><p>Tome esse ch??, vai te ajudar a se acalmar.</p>",

        pag33: "O que Sophie deve fazer?"
    },
    textSophie1121: {
        pag1: "Sophie decidiu aceitar o ch??.",
        pag2: "J?? no primeiro gole, Sophie se sente mais calma, mais relaxada, mais focada. A pixie sentou em seu ombro e continuou assistindo a partida de l??.",
        pag3: "Aquele ch?? estava fazendo maravilhas, Sophie estava comendo pr??ticamente uma pe??a da rainha por turno, mas tamb??m cada vez mais ela se sentia sonolenta e pesada. Finalmente faltava apenas um movimento para Sophie ganhar, s?? mais um e ela teria a tiara, mas quando ela foi fazer seu movimento, sua vis??o escureceu e seu corpo caiu no ch??o.",
        pag4: "<p class='speaker'>Feyre</p><p>Xeque-mate.</p>",
        pag5: "Fim - Bons sonhos",
    },
    textSophie1122: {
        pag1: "Sophie decidiu recusar o ch??.",

        pag2: "A aprendiz respirou fundo e continuou pensando calmamente nas suas jogadas, a cada turno a rainha ficava mais impaci??nte, at?? que ela deixou o caminho aberto para uma pe??a de Sophie comer o rei. Se isso foi acidente ou n??o, Sophie n??o sabia, mas ela tinha vencido.",

        pag3: "<p class='speaker'>Sophie</p><p>Xeque-mate.</p>",

        pag4: "Sophie sorriu, e a rainha aceitou sua derrota. A pixie removeu sua pequena coroa e colocou-a na m??o de Sophie, no momento que a j??ia tocou a sua m??o, apareceu um brilho verde em seu bra??o esquerdo, ela tinha conseguido, finalmente ela tinha se tornado uma maga elemental.",

        pag5: "<p class='speaker'>Feyre</p><p>Parab??ns, querida. Voc?? venceu. Pode ir agora.</p>",

        pag6: "Sophie estava louca para sair do reino das pixies e ir at?? a gruta contar para Aaron, e depois ir at?? os elfos e mostrar a sua marca. Ela mal conseguia se conter de tanta anima????o enquanto deixava o pequeno reino para tr??s.",

        pag7: "Sophie decidiu olhar novamente para sua marca, s?? para observar, mas n??o havia nada l??. N??o havia mais nenhum brilho verde em seu bra??o, e a runa da terra n??o estava l??.",

        pag8: "N??o, Sophie pensou. Ela tinha que voltar no reino das pixies e dizer para a rainha que n??o tinha funcionado, ela devia ter outra tiara que fosse a certa.",

        pag9: "Mas quando Sophie retornou ao reino, ela n??o encontrou nada. Nenhuma pixie, nenhum canto, nenhuma festa, ela encontrou apenas ??rvores, arbustos e folhas.",

        pag10: "Fim - Ilus??o verde",
    },
    textSophie12: {
        pag1: "Sophie decide n??o atacar o morto-vivo.",

        pag2: "Sophie fica parada encarando o morto-vivo, e ele faz o mesmo com ela. Ap??s perceber que Sophie n??o tinha inten????o de atac??-lo, ele guardou sua espada.",

        pag3: "Sophie se aproximou.",

        pag4: "<p class='speaker'>Sophie</p><p>Ol???</p>",

        pag5: "N??o houve resposta.",

        pag6: "<p class='speaker'>Sophie</p><p>O que voc?? est?? fazendo aqui nessa floresta?</p>",

        pag7: "Mais uma vez n??o houve resposta. Ent??o o cavaleiro fez um gesto para que Sophie o seguisse, e ela o fez. Durante a caminhada, Sophie tentou puxar assunto, perguntar quem ele era, para onde ele a estava levando, mas n??o obteve sucesso em nenhuma de suas tentativas.",

        pag8: "Quando eles pararam, ele apontou para uma passagem entre duas ??rvores, e ent??o gesticulou 'pequenas' e 'asas' para Sophie.",

        pag9: "<p class='speaker'>Sophie</p><p>...Pixies? Se eu seguir por aqui vou encontrar o reino das pixies? Ela pergutnou</p>",

        pag10: "O cavaleiro apenas acentiu com a cabe??a e foi embora, sumindo entre as ??rvores. Era estranho que ele soubesse que ela estava procurando o reino das pixies, mas pelo menos ele tinha ajudado ela a encontrar o caminho.",

        pag11: "Pixies eram criaturinhas belas como os elfos e as fadas, a natureza delas n??o era nem boa nem m??, mas se tem algo que elas adoravam era pregar pe??as em todo e qualquer forasteiro. Al??m disso elas tinham uma a habilidade de apenas aparecer quando quisessem ser vistas, o que tornaria a miss??o de sophie mais dif??cil.",

        pag12: "Ao entrar no reino das pequeninas, elas a receberam com flores e festa. As coisas pareciam ir bem para o pequeno reino, tanto que todas estavam celebrando a prosperidade e cantando louvores para sua rainha, Feyre, enquanto Sophie era levada at?? a sala do trono.",

        pag13: "A sala do trono foi montada em cima de galhos que permitiam que uma pixia ficasse na altura dos olhos de um humano. L?? a raina estava sentada em seu trono dourado, e em sua cabe??a estava a sua tiara, que para uma pessoa normal seria mais parecido com um an??l.",

        pag14: "<p class='speaker'>Feyre</p><p>O meu reino te da as boas vindas, maga. Como pode ver estamos passando por uma linda ??poca de prosperidade, venha, dan??a e cante conosco.</p>",

        pag15: "<p class='speaker'>Sophie</p><p>Muito obrigada por essa honra vossa alteza, mas eu vim at?? aqui pois tenho uma miss??o a cumprir.</p>",

        pag16: "A rainha pareceu ficar curiosa, e Sophie falou sobre sua miss??o. Como a rainha adorava apostas, ela disse que primeiro, a maga deveria provar o seu valor passando por tr??s tarefas. A primeira seria se livrar do monstro que n??o permitia que elas entrassem na gruta mais ao norte, a segunda seria consseguir uma garrafa de hidromel dos an??es das montanhas de Darunia. A primeira miss??o seria f??cil, mas Sophie ainda n??o tinha nem ideia de como passaria pela segunda.",

        pag17: "Enquanto isso, uma pixie a levava para a gruta.",

        pag18: "<p class='speaker'>Pixie</p><p>Aqui est?? a gruta, senhorita Sophie. N??o esque??a de trazer algo da criatura como prova de que ela for?? eleminada.</p>",

        pag19: "Sophie acentiu com a cabe??a e a pixie partiu. Agora ela teria que descobrir que tipo de criatura ela estava prestes a enfrentar.",

        pag20: "Dentro da gruta a ??nica fonte de luz era uma pequena fogueira, que iluminava perfeitamente uma pilha de pequenos ossos, mas sophie n??o conseguiu identificar o autor de tudo aquilo at?? que uma voz rouca e grave perguntou 'quem est?? ai?'",

        pag21: "<p class='speaker'>???</p><p>Eu perguntei quem est?? ai.</p>",

        pag22: "<p class='speaker'>Sophie</p><p>Eu me chamo Sophie, sou aprendiz de mago.</p>",

        pag23: "<p class='speaker'>???</p><p>Mago. Guillain disse que voc?? viria.</p>",

        pag24: "<p class='speaker'>Sophie</p><p>Quem ?? Guillain?</p>",

        pag25: "<p class='speaker'>???</p><p>Algu??m que ?? uma boa amizade para pessoas como n??s.</p>",

        pag26: "<p class='speaker'>Sophie</p><p>Como n??s, o que voc?? quer dizer com isso?</p>",

        pag27: "A criatura se aproximou da fogueira, e finalmente Sophie viu o seu rosto. Era algo an??malo, um rosto cheio de escamas, com um formato como se fosse algo entre drag??o e humano. Os olhos eram de drag??o, os dentes tamb??m, mas o corpo era algo no meio.",

        pag28: "<p class='speaker'>Sophie</p><p>Ah, entendo, voc?? tamb??m ??...</p>",

        pag29: "<p class='speaker'>???</p><p>Mesti??o, sim. Aaron foi o nome que minha m??e me deu.</p>",

        pag30: "<p class='speaker'>Sophie</p><p>Aaron... Eu fui enviada pela rainha Feyre para te matar. Ela disse que voc?? tem atormentado as pixies, mas por qu???</p>",

        pag31: "<p class='speaker'>???</p><p>Ha! Atormentado elas, elas que me atormentam.</p>",

        pag32: "<p class='speaker'>Aaron</p><p>Essas mosquinhas s??o t??o ruins quanto qualquer outra criatura nessa floresta. Elfos, fadas, pixies, humanos- s??o todos iguais. N??o podem ver algu??m diferente que o fazem de alvo.</p>",

        pag33: "<p class='speaker'>Sophie</p><p>Sim... ?? por isso que eu preciso da coroa da rainha, eu preciso passar nesse teste, eu preciso virar uma maga elemental. Talvez assim a minha m??e possa voltar para casa e talvez eu possa ser aceita pelos elfos tamb??m.</p>",

        pag34: "AAron suspirou ao olhar para Sophie, seu olhar dizia tudo, ele achava que essa era uma tarefa imposs??vel. Ele n??o acreditava que os elfos a aceitariam mesmo se ela fosse uma maga elemental, nem se ela fosse a maga mais poderosa do mundo, mas ele conseguia entender de onde vinha o sentimento, ent??o, com um grunido, quebrou um de seus chifres e deu a ela.",

        pag35: "<p class='speaker'>Aaron</p><p>Leve isso com voc??. Vai precisar de uma prova que eu morri, n??o?</p>",

        pag36: "Sophie se moveu para dar-lhe um abra??o. Quando os bra??os finos e delicados da aprendiz o envolveram, o corpo de Aaron ficou r??gido como se havia muito que ele n??o recebia um. Mesmo assim ele tentou retribuir, dando um tapinha nas costas dela com o m??nimo de for??a que ele conseguisse colocar em suas garras.",

        pag37: "<p class='speaker'>Sophie</p><p>Muito obrigada Aaron, eu n??o vou me esquecer disso.</p>",

        pag38: "<p class='speaker'>Aaron</p><p>T??, t??. V?? logo. A rainha das pestes deve estar esperando.</p>",

        pag39: "<p class='speaker'>Sophie</p><p>Provavelmente. E eu preciso me preparar para o segundo desafio. A rainha quer que eu consiga uma garrafa de hidromel de Darunia para ela.</p>",

        pag40: "<p class='speaker'>Aaron</p><p>Mas uma viagem at?? Darunia levaria no m??nimo algumas semanas.</p>",

        pag41: "<p class='speaker'>Aaron</p><p>Ah, eu vou me arrepender disso, mas alguns dias atr??s um grupo de an??es passou pela floresta. Com certeza eles s??o mais divertidos que os elfos.</p>",

        pag42: "Aaron entregou para Sophie a garrafa de hidromel daruniano, e novamente ela retribuiu com um abra??o. Os dois podiam ser completamente diferentes em apar??ncia, mas no fundo os dois tinham o mesmo desejo: pertencer a um grupo. Humanos ou elfos, no caso de Sophie. Humanos ou drag??es para Aaron.",

        pag43: "Ambos sabiam que esse era um sonho quase imposs??vel, mas se o outro conseguisse, traria esperan??a para o que sobrasse.",

        pag44: "Sophie agradeceu Aaron mais uma vez e saiu da caverna, mas antes que ela pudesse voltar para o reino das pixies, o morto-vivo apareceu em seu caminho novamente e tornou a pedir que ela o seguisse. Novamente, ela o fez.",

        pag45: "Eles andaram e andaram, cada vez se aproximando mais da parte sombria da floresta. N??o era apenas porque estava escurecendo o dia, mas porque aquela parte era tinha uma vegeta????o t??o densa que impedia a maior parte da luz de entrar l??. At?? mesmo os raios que entravam eram ofuscados pela n??voa daquele lugar.",

        pag46: "Sophie conhecia a floresta, mas at?? ent??o n??o tinha conhecimento dessa parte dela, mesmo assim ela continuou seguindo o cavaleiro, mesmo estando com o cora????o apertado.",

        pag47: "O morto-vivo a levou para um lugar ainda mais aterrorizante naquelas partes da floresta. Uma estrutura que se assemelhava a um templo antigo, abandonado e parcialmente em ru??nas. Mas essa n??o era a pior parte. O pior era  apresen??a que tinha dentro daquele lugar.",

        pag48: "Dentro daquele lugar, sentado em um trono de pedra quebrado, estava a presen??a que contaminava o lugar com sua presen??a. Parecia um cad??ver que teve o processo de decomposi????o interrompido. Seus olhos eram fundos, e semelhante ao do cavaleiro, eram apenas duas esferas brilhantes. Contudo, diferente do cavaleiro, aquilo n??o parecia ter alma, n??o parecia ter nem um rastro de vida, mas mesmo assim ele se movia.",

        pag49: "Era um Lich, uma criatura que havia trocado seu cora????o por uma meia vida eterna. Lichs eram criaturas poderosas, s??bias, mas cru??is por natureza. E o morto-vivo tinha trazido ela para o covil de um.",

        pag50: "O que ela deve fazer?",
    },
    textSophie121: {
        pag1: "Sophie decide n??o atacar o Lich.",

        pag2: "<p class='speaker'>Lich</p><p>Garota esperta. N??o ?? bom ataquer algu??m que voc?? n??o tem a m??nima no????o do que ?? capaz de fazer, como tamb??m n??o ?? bom atacar algu??m sendo guiado pelas emo????es.</p>",

        pag3: "<p class='speaker'>Lich</p><p>Se acalme, garota. Guillain n??o trouxe voc?? aqui para que fosse morta.</p>",

        pag4: "Sophie voltou sua aten????o para o cavaleiro.",

        pag5: "<p class= 'speaker'> Sophie</p><p> Voc?? ?? Guillain?</p>",

        pag6: "<p class='speaker'>Lich</p><p> Ele n??o vai te responder, ou melhor ele n??o pode. Sua l??ngua foi cortada antes de morrer e agora ele n??o possui mais a habilidade de falar. Um destino tr??gico.</p>",

        pag7: "<p class='speaker'>Lich</p><p> Mas de volta ao motivo pelo qual Guillain a trouxe aqui. Eu proponho um acordo, n??s abriremos essa garrafa que voc?? trouxe e conversaremos. Quem sabe eu possa ter alguma informa????o que te interesse, por exemplo... o que aconteceu com a esfera das trevas, como trazer os mortos de volta a vida, o porque guillain ainda vaga esse mundo, como Feyre est?? te enganando...</p>",

        pag8: "<p class='speaker'>Sophie</p><p> O que voc?? sabe sobre a rainha das pixies?</p>",

        pag9: "<p class='speaker'>Lich</p><p> Abra a garrafa e voc?? descobrir??.</p>",

        pag10: "Com Um estalar de dados o Lich invocou uma mesa, cadeiras e copos como se os tr??s fossem apenas amigos se juntando para beber.Sophie estava desconfiada, mas Guillain acenou com a cabe??a para confort?? - la, e a aprendiz decidiu confiar no cavaleiro.",

        pag11: "Eles se sentaram, e Sophie serviu os copos com hidromel.",

        pag12: "<p class='speaker'> Lich</p><p> Muito bem, por onde come??amos. Deixe-me ver. Aaron. Aaron ?? uma criatura formid??vel, realmente formid??vel, mas fadado a cair em ostracismo.</p>",

        pag13: "<p class='speaker'>Lich</p><p> Afinal n??o teria como ser diferente. Sua m??e era um drag??o metamorfo, sobraram poucos desses, e seu pai era um humano. A pobre criatura nasceu sem ser nem um nem outro, mas tamb??m sendo os dois.</p>",

        pag14: "<p class='speaker'>Lich</p><p> Fascinante os meio-sangues, n??o s??o? Alias, as criaturas que s??o meio a meio s??o extremamente interessantes.</p>",

        pag15: "<p class='speaker'>Lich</p><p> Alias, foi por causa de um mesti??o que a guerra entre elfos e fadas come??ou. A rainha dos elfos estava tendo um caso com um fada, e quando o filho deles nasceu.. ah, foi um esc??ndalo. O rei ia condenar ela a morte, mas ent??o ela fugiu para encontrar o seu amado.</p>",

        pag16: "<p class='speaker'>Sophie</p><p> Ent??o o que aconteceu com a rainha? </p>",

        pag17: "<p class='speaker'>Lich</p><p> Ela e a crian??a desapareceram, e com ela, a coroa dos elfos tamb??m. Uma coroa feita com os galhos da ??rvore mais antiga dessa floresta. Um objeto sagrado. Muito bonito tamb??m, mas definitivamente ?? maior do que um an??l.</p>",

        pag18: "<p class='speaker'>Sophie</p><p> Por que voc?? est?? me contando isso?</p>",

        pag19: "<p class='speaker'>Lich</p><p> Porque a coroa que voc?? procura, n??o ?? a coroa que Feyre usa para enfeitar sua cabe??a.</p>",

        pag20: "<p class='speaker'>Sophie</p><p> Como voc?? sabia que eu viria e que buscaria a coroa da rainha das pixies?</p>",

        pag21: "<p class='speaker'>Lich</p><p> Pessoas mentem, minha cara, as estrelas n??o.</p>",

        pag22: "<p class='speaker'>Sophie</p><p> Por que voc?? est?? me ajudando?</p>",

        pag23: "<p class='speaker'>Lich</p><p> Porque essa guerra ?? problem??tica para mim.</p>",

        pag24: "<p class='speaker'>Sophie</p><p> Ent??o foi por isso que mandou Guillain atr??s de mim?</p>",

        pag25: "<p class='speaker'>Lich</p><p> Voc?? se engana ao acreditar que eu mandei Guillain at?? voc??. Ele foi por conta pr??pria.</p>",

        pag26: "<p class='speaker'>Sophie</p><p> Por que..</p>",

        pag27: "<p class='speaker'>Lich</p><p> Eu temo que nosso tempo j?? acabou. Quando voc?? trouxer mais uma garrafa dessas eu responderei suas perguntas, mas at?? l?? voc?? deve continuar a sua jornada.</p>",

        pag28: "Sophie e Guillain se levantaram da mesa.Guillain tomou a dianteira e saiu antes.Enquanto isso Sophie agradeceu o Lich pelas informa????es e se virou para deixar o covil do Lich.</p>",

        pag29: "<p class='speaker'>Lich</p><p> Uma ??ltima coisa que voc?? deveria saber: ao levar a coroa para os elfos voc?? ganhar?? a aceita????o que sempre quis, mas se levar a coroa para a fada certa a paz voltar?? para a floresta, contudo se colocar a coroa em sua cabe??a algo interessante ir?? acontecer.</p>",

        pag30: "Ao sair do covil, Sophie suspirou.Ela ainda precisaria arranjar mais uma garrafa, e ela tinha quase certeza de que Aaron n??o teria outra para lhe dar.",

        pag31: "Como se os c??us tivessem ouvido seu suspiros, eles mandaram Guillain para o seu encontro com uma garrafa escrito Darunium em vermelho.Sophie soltou uma risada, pensando na sua sorte, e abra??ou o cavaleiro para demonstrar sua gratid??o.",

        pag32: "<p class='speaker'> Sophie</p><p> Quando isso tudo terminar eu gostaria de ouvir a sua hist??ria, e ajudar voc?? como voc?? tem me ajudado.</p>",

        pag33: "Guillain acentiu com a cabe??a; era dif??cil ler suas express??es j?? que a ??nica coisa que era poss??vel ver de seu rosto eram as duas esferas brilhantes que eram seus olhos, mas do mesmo jeito que os musculos faciais mudam a express??o dos olhos, os deles pareceram fazer algo similar.",

        pag34: "Ao retornar para o reino das pixies, Sophie encontra mais uma vez festa e flores.As pequenas fadinhas estavam cada vez mais impressionadas com seu sucesso.O pensamento de que algum dia as pixies colocariam uma recompensa sobre sua cabe??a do mesmo jeito que fizeram com Aaron a perturbava, mas o pior de tudo ?? que essas criaturinhas que pareciam t??o inofensivas quase a fizeram matar uma criatura inoc??nte s?? por ele ser mesti??o.",

        pag35: "Mesmo assim, Sophie respirou fundo e entregou os itens a rainha; o chifre e a garrafa.A rainha parecia mais do que satisfeita, e ordenou as pixies para servirem hidromel para ela e para a convidada.",

        pag36: "Sophie recusou, e observou a tiara da rainha.De acordo com o Lich aquela n??o era a coroa que ela precisava para completar sua miss??o, ent??o a coroa certa deveria estar em outro lugar.",

        pag37: "<p class='speaker'> Feyre</p ><p> Muito bem, o seu terceiro desafio ser??.... um jogo de xadrez comigo. Se voc?? vencer, voc?? fica com a coroa que est?? em minha cabe??a, mas se eu vencer voc?? ficar?? aqui nessa floresta conosco, o que acha, minha querida?</p>",

        pag38: "<p class='speaker'>Sophie</p><p> Eu aceito jogar com voc??, mas com a condi????o que eu possa escolher outro objeto do tesouro real. Afinal, n??o posso deixar uma rainha sem sua coroa.</p>",

        pag39: "Ouvindo o pedido da aprendiz, a rainha riu, gostou de sua confian??a e ordenou que levassem - na para a sala do tesouro real para que a garota escolhesse seu pr??mio.",

        pag40: "A sala do tesouro real ficava em uma parte oca de uma ??rvora, l?? tinham os mais diversos objetos, colares, brincos, an??is, moedas, e tamb??m uma coroa grande de mais para a cabe??a de uma pixie.A coroa distoava dos demais itens l??, pois ela era feita de galhos entalhados em tran??as, como se fosse uma coroa de flores, s?? que de galhos, e no lugar das flores tinham esmeraldas.",

        pag41: "Sophie voltou para iniciar a partida, quando as pixies trouxeram a coroa, a rainha ficou t??o suspresa que quase ficou s??bria, quase.",

        pag42: "O jogo come??ou com o movimento de Sophie, j?? que seus pe??es eram os brancos, e a rainha retaliou.Com o passar das partidas a rainha ficava cada vez mais desesperada para acabar com o ex??rcito de Sophie, mas de repente algo mudou.Era como se mesmo perdendo, a rainha ainda ia ganhar, e Sophie podia sentir isso.Algo n??o estava certo.",

        pag43: "No jogo o rei da rainha podia estar cercado, mas na vida real quem estava cercada era Sophie.O seu pr??ximo movimento ia resultar em um xeque - mate, mas ela perderia.",

        pag44: "<p class='speaker'> Sophie</p><p> Xeque-mate.</p>",

        pag45: "<p class='speaker'>Feyre</p><p> Parabens, minha cara, voc?? ganhou. Contudo, eu temo que n??o possa deixar voc?? ir. Guardas!</p>",

        pag46: "Ao seu comando, v??rias pixies convergiram ao redor de Sophie, enquanto outras levavam a coroa para longe.As pixies rodeavam Sophie como uma n??vem de insetos, seria dif??cil se livrar de todas, principalmente porque Sophie era um ??nico alvo grande e f??cil para elas, mas elas eram muitas e pequenas.",

        pag47: "<p class='speaker'>Feyre</p><p> Parece que voc?? perdeu, minha cara. Voc?? achou que poderia me enganar, mas n??o pode.</p>",

        pag48: "A rainha estava exalando orgulho, olhando a aprendiz com desprezo.Isso ?? at?? que for??o ouvidos v??rios gritos na dist??ncia.",

        pag49: "Uma pixie veio voando ofegante at?? a rainha dizendo que intrusos haviam entrado no reino.Quando Sophie virou para tr??s ela viu Guillain usando uma espada encantada com raios, dando choque nas pequenas fadas como se fossem mosquitos.Quando ela tornou a se virar para rainha, a sala do trono estava em chamas e as pixies voaram para longe.Na correria, elas deixaram a coroa cair, e um par de garras a recuperou, era Aaron.",

        pag50: "N??o havia tempo para comemorar ou agradecer, o reino ainda estava pegando fogo, e o fogo estava se espalhando.Ent??o os tr??s correram para fora do reino, e Sophie conjurou um feiti??o de prote????o para a ??rea da floresta que estava em chamas.Ela isolou completamente aquela ??rea at?? o momento que as chamas enfraqueceram.Quando ela desfez o feiti??o, uma coluna densa de fuma??a come??ou a subir.",

        pag51: "<p class='speaker'>Sophie</p><p> A floresta vai se recuperar, eu consigo sentir isso. Voc??s dois s??o incr??veis mesmo.</p>",

        pag53: "<p class='speaker'>Aaron</p><p> Sinceramente essa ?? a ??ltima vez que eu me meto nas profecias do Gunther. Depois dessa eu vou me mudar para as montanhas, longe de tudo e todos.</p>",

        pag54: "<p class='speaker'>Aaron</p><p> Toma a sua coroa.</p>",

        pag55: "Sophie riu do mau-humor de Aaron e segurou a coroa.No momento que a coroa tocou a sua m??o algo brilhou no seu bra??o esquerdo.Quando a luz verde se dissipou, l?? estava a runa da terra emoldurada por diversos s??mbolos, a prova de que Sophie tinha virado um mago elemental.",

        pag56: "Guillain gesticulou um 'e agora?' para o grupo, e eles se entreolharam.De acordo com o Lich, ou Gunther, haviam tr??s caminhos que Sophie poderia escolher: devolver a tiara para os elfos, encontrar a 'fada certa' ou ela poderia ficar com a coroa.",

        pag57: "O que ela deve fazer?",

    },
    textSophie1211: {
        pag1: "Sophie decide devolver a tiara para os elfos.",

        pag2: "Ao optar por devolver a tiara aos elfos, Aaron se despediu dos dois para retornar ?? sua gruta. Sophie n??o poderia culp??-lo, afinal elfos n??o eram as criaturas mais abertas a aceitar pessoas diferentes. Eles n??o aceitavam nem a ela que em apar??ncia era exatamente como um deles, mas isso mudaria. Tudo mudaria.",

        pag3: "Sophie e Guillain partiram para o reino dos elfos. Na entrada os guardas n??o queriam deixar eles entrarem, mas a posi????o deles mudou quando Sophie mostrou a coroa. A dupla foi levada para o pal??cio, onde estava a princesa Frida e o pr??ncipe Callon, que tiveram a mesma rea????o que os guardas a ver a coroa; surpresa, choque e um pingo de alegria. A coroa finalmente tinha retornado.",

        pag4: "Sophie at?? ganhou um t??tulo de nobreza na sociedade ??lfica. At?? ent??o parecia que Guillain n??o tinha nada para ganhar ao ir at?? l?? junto da maga, mas foi ai que ela percebeu o jeito como seus olhos nunca deixaram a princesa. E a princesa fez o mesmo para com ele quando ouviu seu nome.",

        pag5: "Fim - Reunidos",
    },
    textSophie1212: {
        pag1: "Sophie decide encontrar 'a fada certa'.",

        pag2: "<p class='speaker'>Sophie</p><p> Acho que n??s dever??amos tentar encontrar a fada que o Lich mencionou.",

        pag3: "<p class='speaker'>Aaron</p><p> N??s? N??o tem nenhum n??s, eu s?? ajudei voc?? porque eu queria ver onde isso ia dar, s?? isso. N??o jurei lealdade a voc?? nem nada.",

        pag4: "Aaron continuou suas reclama????es, enquanto Guillain deu uma leve puxada na manga de Sophie, e quando os dois come??aram a andar Aaron continuou a seguir a dupla mesmo reclamando durante todo o caminho.",

        pag5: "Era engra??ado como Sophie se sentia t??o chegada a esses dois, mesmo que ela tenha conhecido eles a pouco tempo. Sim, era engra??ado, pois os elfos, mesmo com todo o esfor??o dela, nunca a aceitaram; j?? o grupo que ela encontrou por acaso acabou dando-lhe as boas vindas, a fazendo com que ela verdadeiramente se sentisse parte de algo.",

        pag6: "O grupo continuou sua jornada em busca do Lich para conseguir mais informa????es. A partir da?? acredita-se que os tr??s continuaram juntos, em busca da tal fada. O fato ?? que uma fada devolveu a coroa para os elfos, e a paz retornou ?? floresta de Jade.",

        pag7: "Fim - Os tr??s mosqueteiros",
    },
    textSophie1213: {
        pag1: "Sophie decide ficar com a tiara.",

        pag2: "Seus companheiros n??o dizem nada contra, afinal a coroa pertencia ?? Sophie agora.O destino daquilo estava nas m??os da maga.E talvez fosse melhor que aquela coroa fosse para longe da floresta.",

        pag3: "Ela colocou a coroa em sua cabe??a e sentiu como se a floresta estivesse conectada a ela, como se a floresta estivesse disposta a dar a ela toda sua energia caso necess??rio.Ela nunca tinha se sentido t??o viva como naquele momento.Onde ela passava a floresta parecia cantar, como se a estivesse saudando.Onde ela tocava, cresciam flores das mais diversas cores e tamanhos.",

        pag4: "Quando eles chegaram perto da estrada que levaria Sophie de volta ao castelo que era sua escola, os tr??s se despediram e cada um seguiu seu caminho.Sophie iria voltar para a escola e continuar estudando, Aaron voltaria para sua gruta e talvez ele se mudasse para as montanhas, Guillain retornou para a floresta.Guillain ainda estava fadado a assombrar aquele lugar, mas Sophie ainda retornaria para ajud??- lo a seguir em frente se assim ele desejasse.",

        pag5: "A cada passo que Sophie dava para fora da floresta, ela se sentia mais e mais fraca.Era um sentimento estranho, como se agora em vez de lhe dar energia, a floresta estava turando sua energia, mas como isso era poss??vel?",

        pag6: "A coroa estava mantendo ela ligada a floresta, ?? claro.Quando Sophie percebeu essa conex??o ela tentou retirar a coroa, mas ela estava presa e sua cabe??a como se tivesse espinhos fincados em sua cabe??a.O corpo da maga vai ao ch??o e desaparece.Em seu lugar aparece a muda de um salgueiro, o qual segurava a coroa em um de seus galhos.",

        pag7: "Fim - Salgueiros chor??es.",

    },
    textSophie122: {
        pag1: "Sophie decide atacar o Lich.",

        pag2: "Sophie junta suas for??as e lan??a um feiti??o no Lich.",

        pag3: "Uma risada fria enchei a sala, reverberando naquelas colunas antigas. O riso ecoou pela sala, e uma voz ainda mais fria e s??dica disse 'menina tola, vamos ver se voc?? aguenta receber seu pr??prio feiti??o.",

        pag4: "Assim foi dito, e assim foi feito. Infelizmente para Sophie, o feiti??o que ela lan??ou contra o Lich p??de n??o ter sido efetivo contra um morto-vivo, mas certamente seria fatal para um vivo.",

        pag5: "Fim - feiti??o volta contra o feiticeiro",
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

var plotSophie1Choices = ["Atacar", "N??o atacar"];
var plotSophie11Choices = ["Atacar", "N??o atacar"];
var plotSophie111Choices = ["Dizer que as pixies a enviaram", "Dizer que ningu??ma enviou"]
var plotSophie1111Choices = [0, 0];
var plotSophie1112Choices = [0, 0];

var plotSophie112Choices = ["Aceitar o ch??", "Recusar o ch??"];
var plotSophie1121Choices = [0, 0];
var plotSophie1122Choices = [0, 0];


var plotSophie12Choices = ["N??o atacar o Lich", "Atacar o Lich"];
var plotSophie121Choices = ["Devolver a tiara aos elfos", "Encontrar a 'fada certa'", "Ficar com a coroa"];
var plotSophie1211Choices = [0, 0];
var plotSophie1212Choices = [0, 0];
var plotSophie1213Choices = [0, 0];

var plotSophie122Choices = [0, 0];

