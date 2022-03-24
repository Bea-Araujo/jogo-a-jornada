
var pagNumber = 2;

function pickTextObject() {
    choiceTreeArray = choiceTree.split("-");
    var textObject = plotTess[`textTess${choiceTreeArray[1]}`];
    return textObject
}

function pickScene() {
    hoiceTreeArray = choiceTree.split("-");
    var sceneObject = plotScene[`textTess${choiceTreeArray[1]}`];
    return sceneObject
}

function nextText(escolhas) {
    var textObject = pickTextObject();
    var sceneObject = pickScene();
    console.log(sceneObject)
    var index = "pag" + pagNumber;
    var pagina = document.getElementById("text")

    if (textObject[index][0] == "<") {
        pagina.innerHTML = textObject[index];
    } else {
        pagina.innerHTML = `<p>${textObject[index]}</p>`;
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
        var path = "../index.html"
        playAgain_btn.innerHTML = `<button><a href=${path}> Jogue de novo </a> </button>`;
    } else if (ultimaPagina) {
        var choices = document.getElementById("choices");
        choices.innerHTML =
            `
                <p>A - ${escolhas[0]}</p>
                <p>B - ${escolhas[1]}</p>
            `
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

var plotTess = {
    textTess1: {
        pag1: "Diferente de seus colegas que receberam seus desafios e partiram em busca de seus desafios, Teresa ficou para trás. Era um sentimento extremamente frustrante ser a única que teve que ir até a biblioteca para tentar ao menos entender o que ela tinha que procurar.",

        pag2: "Afinal Luz da Vida, o que é a luz da vida? Seria uma luz qualquer? Seria uma metáfora para conhecimento? Teresa não sabia, não sabia e essa falha em seu conhecimento a irritava profundamente.",

        pag3: "Não importava quantos livros sobre o elemento da luz ela lesse, ela não encontrava nada sobre a luz da vida. Nenhuma dica e nenhuma pista. Nada. Ela estava em um beco sem saída, não havia para onde ir. Não havia nenhum mestre que ela poderia consultar.",

        pag4: "O relógio da biblioteca bateu meia-noite, e Teresa ainda estava la, enterrada em uma pilha de livros ainda sem ter nenhuma resposta. Já estava na hora da turma lunar estar realizando suas atividades, enquanto os alunos solares estavam dormindo, todos menos Teresa.",

        pag5: "A biblioteca estava vazia, com exceção de Teresa e o goblin que travalhava como bibliotecário. Ao sexto badalar uma nova presença entrou na biblioteca, era Ayla, uma das estudantes da turma lunar.",

        pag6: "<p class='speaker'>Ayla</p><p> Tess, o que você ainda está fazendo acordada. E o que ainda está fazendo aqui? Eu ouvi que você tinha sido escolhida pela Luz para ir em uma missão épica, ou qualquer coisa parecida.</p>",

        pag7: "<p class='speaker'>Teresa</p><p> Não enche, Ayla. O dia não está fácil para mim, eu preciso achar uma resposta e com você aqui eu não vou conseguir.</p>",

        pag8: "<p class='speaker'>Ayla</p><p> Bom, as vezes as respostas que nós precisamos não está escrita nos livros, você sabia.</p>",

        pag9: "<p class='speaker'>Ayla</p><p> Se você quiser eu posso ler a sua sorte.</p>",

        pag10: "<p class='speaker'>Teresa</p><p> Lá vem você com essa. Por que todos vocês alunos da noite têm essa mania de recorrer a divinação?</p>",

        pag11: "<p class='speaker'>Ayla</p><p> Eu diria que é porque é a melhor matéria, você deita e lê as estrelas. É bom relaxar, Tess. Você devia tentar de vez em quando.</p>",

        pag12: "<p class='speaker'>Ayla</p><p> Mas e aí? Você quer que eu leia a sua sorte ou não?</p>",

        pag13: "O que ela deve fazer?",
    },
    textTess11: {
        pag1: "Teresa decidiu recusar a leitura.",

        pag2: "<p class='speaker'>Teresa</p><p> Não, eu vou descobrir isso sozinha.</p>",

        pag3: "Ayla estava relutante em deixar Teresa sozinha com os livros, ela sabia como a amiga ficava quando tinha que estudar para algo, principalmente quando era algo que ela não entendia. Foi assim que elas se conheram, Teresa havia ficado na biblioteca estudando até tarde quando Ayla foi estudar.",

        pag4: "<p class='speaker'>Ayla</p><p> Tá bom. Estou vendo que você continua a mesma.</p>",

        pag5: "Com isso, Ayla pegou seu livro e foi estudar em outro lugar.",

        pag6: "O tempo passou e Ayla deixou a biblioteca, mas Teresa ainda estava lá. Sua cabeça estava pesada, ela não conseguia se consentrar, mas também não podia dormir. Entretanto o corpo tem seus limites e ela acabou desabando em cima dos seus livros.",

        pag7: "Em seu sonho, ela teve uma visão estranha. No sonho, um dragão alado com corpo de serpente a levava para longe, e sobrevoava um campo verdejande. Apenas quando a serpente desceu que Teresa viu vários estudantes com capas amarelas, todos se dirigindo para o que parecia um templo, mas quando ela tentou entrar um dos professores barrou sua entrada. O dragão entrou e disse 'venha', mas o professor continuou em seu caminho.",

        pag8: "O dragão continuou chamando, mas quanto mais ele chamava, mais o campo ver de desfazia atrás dela. O chão começou a rachar e se abrir até que ela estava caíndo em um abismo sem fim. Caíndo, caíndo, caíndo- Até que ela acordou.",

        pag9: "O sol já tinha raiado, a biblioteca ainda estava vazia. Mas agora ela tinha uma direção, ela tinha que ir atrás do templo da luz, o qual diferente do seu sonho agora devia estar em ruínas e abandonado, afinal de contas já se fazia muito tempo que os estudantes de magia elemental não tinham que ir até os templos para começar seus estudos.",

        pag10: "Então, Teresa vai até seu dormitório e prepara sua trouxa. Nela ela coloca poções de cura, alguns suprimentos, e é claro suas anotações. A viagem seria longa, o templo ficava em um vale, mas como ninguém mais ia lá seria difícil encontrar uma rota.",

        pag11: "O melhor caminho seria por ar, mas como a vida não tinha lhe dado asas, ela teve que optar por ir por terra. Apenas a viagem em si demorou alguns dias, Teresa teve que parar em alguma pousada aqui e ali. Algumas eram mais movimentadas do que outras, mas independente da quantidade de gente, o fato era que Teresa estava sozinha.",

        pag12: "Algumas pessoas dizem que o que mais importa é o caminho, mas o caminho para Teresa estava bem cansativo e entediante. Ainda para piorar, quando ela finalmente chegou no vale, ela se deparou por uma névoa densa o suficiente para que uma pessoa não conseguisse enxergar mais de meio metro a sua frente.",

        pag13: "Eu mereço, ela murmurou e continuou caminhando. Teresa encontrou uma árvore, o seu tronco era levemente aroxeado, e sua folhas eram azuladas, já os frutos dela eram um roxo vinho. Com certeza era uma árvore estranha, mas Teresa passou reto.",

        pag14: "Ao continuar andando, Teresa se deparou com uma parede invisível. Ela tateou e tateou para ver se encontrava o fim da parada, mas cada vez que ela encontrava o fim de uma, dava de cara com outra. Foi então que ela percebeu que estava dentro de um labirinto encantado.",

        pag15: "Ela tomou uma rota, e voltou para a árvore; tomou outra rota, e voltou para a árvore; e de novo, e de novo, e de novo. Todos os caminhos parecem trazer ela de volta para essa árvore. Será que ela deveria continuar tentando?",

        pag16: "O que ela deve fazer?",
    },
    textTess111: {
        pag1: "Teresa decidiu continuar tentando.",

        pag2: "Teresa continuou tentando, até acreditar ter feito todas as combinações possíveis. Ela parou para descansar e percebeu que faziam horas que não tinha comido nada, mas estava tudo bem porque logo ela iria encontrar o caminho certo e iria sair dali.",

        pag3: "Teresa se levantou e começou sua jornada novamente. Direita, direita, esquerda- Direita, esquerda, direita; esquerda, esquerda- Nenhuma combinação funcionava. Teresa pegou um pergaminho de sua trouxa e pos-se a desenhar um mapa, mas parecia que ela estava andando em círculos.",

        pag4: "Seu estômago roncou, e ela encontrou a bendita árvore novamente. Agora pegar um daqueles frutos estava parecendo uma ótima opção- por outro lado, era arriscado pegar um fruto sem saber nada sobre aquela espécie de planta.",

        pag5: "O que ela deveria fazer?",
    },
    textTess1111: {
        pag1: "Teresa deciciu não comer os frutos.",

        pag2: "Teresa continuou repetindo que encontraria o caminho para fora daquele labirinto, mas a cada tentativa sua fome aumentava. Ainda pior é que a neblina não permitia saber quanto tempo já havia se passado ali dentro.",

        pag3: "Onde o sol estava? Teresa não sabia. Era tudo nebuloso ali dentro. Nada de comida e nem água.",

        pag4: "Eventualmente o corpo de Teresa chegou ao seu limite novamente e ela se recostou em uma das paredes invisíveis, deixando seu corpo deslizar até chegar ao chão. Ela não tinha mais energias para continuar.",

        pag5: "Eu só preciso dar um cochilo, ela pensou, só um cochilo.",

        pag6: "Fim - Para sempre no labirinto",
    },
    textTess1112: {
        pag1: "Teresa decidiu comer os frutos.",

        pag2: "Ao ingerir os frutos, Teresa se sente saciada, e não apenas isso, mas quanto mais ela comia, mais ela recebia visões do cominho dentro daquele labirinto. Cada visão mostrava caminhos levementes diferentes, mas a cada visão ela conseguia criar um mapa mental de onde ir.",

        pag3: "Finalmente ela tomou um de seus pergaminhos e anotou esse novo caminho recém-descoberto e adentrou o labirinto mais uma vez. Seu coração batia forte, animado, esperançoso. Ela estava quase lá, quase lá.",

        pag4: "E então, ela encontrou: a saída. Fora do labirinto a luz retornou, já era noite. O céu estava lindo, sem uma núvem, a lua estava cheia, e a galxia estava particularmente colorida naquela noite. Teresa sentia seu coração tranquilo.",

        pag5: "Mais adiante haviam escadas levando para o templo que ela viu em seu sonho, só que mais destruído. Com certeza o tempo não tinha sido amigável com aquela estrutura. Mesmo assim ele ainda estava la.",

        pag6: "Teresa abriu as portas e olhou ao seu redor, mas o lugar parecia deserto.",

        pag7: "<p class='speaker'>Teresa</p><p> Olá? Tem alguém aí?</p>",

        pag8: "Silêncio.",

        pag9: "Teresa suspirou, mas antes que ela pudesse dizer que a viagem tinha sido em vão, uma voz falou 'Teresa, você chegou.' As tochas do lugar se acenderam e teresa viu, no meio da sala, enrolado e deitado sobre seu próprio corpo estava o dragão alado com corpo de serpente.",

        pag10: "<p class='speaker'>Aruna</p><p> Meu nome é Aruna, eu sou o guardião deste lugar.</p>",

        pag11: "<p class='speaker'>Aruna</p><p> Diga-me, Teresa, sua jornada até aqui não foi fácil, a missão que lhe foi dada era muito abstrata e difícil de decifrar, então diga-me como foi que você chegou até aqui?</p>",

        pag12: "Teresa então contou à criatura como foi a sua aventura, que ela havia procurado incansavelmente em livros, e que ela tentou arduamente solucionar o mistério do labirinto, e tudo isso sozinha. Ela contou isso com o maior orgulho, por ter passado por tarefas extremamente difíceis, e tudo sozinha.",

        pag13: "O dragão, porém, balançou sua cabeça.",

        pag14: "<p class='speaker'>Aruna</p><p> Isso não está certo. A verdadeira sabedoria não vem de caminhos que trilhamos sozinhos, Teresa.</p>",

        pag15: "<p class='speaker'>Teresa</p><p> O quê? Como assim? Você está me dizendo que eu vim até aqui para nada? Que você não vai me dar a resposta, e que eu fiz tudo errado, é isso?</p>",

        pag16: "Teresa se exauta, e em sua raiva lança um feitiço contra o dragão. O mais forte que ela conseguisse lançar. Mas o dragão não era tolo, e conjurou uma proteção sobre si que fez com que o feitiço de Teresa ricocheteasse e atingisse a aprendiz.",

        pag17: "Fim - O troco na mesma moeda",
    },
    textTess112: {
        pag1: "Teresa decidiu inspecionar a árvore.",

        pag2: "A primeira vista a árvore parece não ter nada de especial, até que Teresa percebeu inscrições que foram gravadas em seu tronco. Elas estavam em uma língua antiga, mas Teresa estava segura que conseguiria decifrá-las.",

        pag3: "Horas se passaram até que Teresa conseguiu chegar em algumas opções de tradução que fizessem sentido, não era nada muito concreto, mas ela deveria tentar solucionar os novos enigmas, e caso nada desse certo, ela poderia retornar a árvore e começar o precesso de tradução tudo de novo.",

        pag4: "Teresa virou suas costas para a árvore, porém quando estava prestes a seguir o seu caminho uma voz disse: 'se seguir as incrições você encontrará a saída, mas aqueles que vieram antes ficarão perdidos neste labirinto para sempre.'",

        pag5: "Uma pequena fada então saiu de seu esconderijo, e voou para perto de Teresa.",

        pag6: "<p class='speaker'>Misty</p><p> Eu me chamo Misty, tenho vivido nessa árvore a anos e vi muitas pessoas como você se perderem neste labirinto.</p>",

        pag7: "<p class='speaker'>Teresa</p><p> Eu não posso fazer nada pelas pessoas que não estão aqui.</p>",

        pag8: "<p class='speaker'>Misty</p><p> E se eu te dissesse que pode?</p>",

        pag9: "<p class='speaker'>Misty</p><p> Está vendo essa árvore? Ela tem prendido o espírito de todos que se perderam aqui por muito tempo. E continuará fazendo-o até que as escrituras de seu tronco sumam.</p>",

        pag10: "<p class='speaker'>Misty</p><p> E então, você ajudará a árvore, ou ajudará a si mesma?</p>",

        pag11: "A idéia de retirar as inscrições da árvore não era impossível, mas ao fazê-lo Teresa iria perder aquelas inscrições para sempre, sem nenhuma garantia de que ela conseguiria sair daquele labirinto.",

        pag12: "O que ela deve fazer?",
    },
    textTess1121: {
        pag1: "Teresa decidiu ajudar a árvore e tirar as inscrições.",

        pag2: "Terese teria apenas que realizar alguns feitiços simples que foram vistos nas aulas de herbologia. Se isso não bastasse, ela tinha poçoes de cura, poderia tirar o casco e despejá-las na árvore. Mesmo assim não era certo de que ela conseguiria remover o escrito.",

        pag3: "Ela suspirou, e forneceu sua mão para que a pixie pudesse sentar nela.",

        pag4: "<p class='speaker'>Teresa</p><p> Vou ver o que eu posso fazer.</p>",

        pag5: "Teresa não tinha trazido uma pena ou tinteiro, nem pergaminhos limpos para que pudesse gravar o código, então sua memória seria a única coisa que poderia tirá-la de lá caso isso desse certo. Porém, sua memória não era perfeita e estava fadada a lembrar incorretamente.",

        pag6: "Muito bem, ela pensou ao colocar suas mãos na árvore. Nesse ponto, Misty já estava sentada em seu ombro, e Teresa começou a murmurar os encantamentos. Um após o outro pareciam apagar as inscrições, até que elas desapareceram completamente.",

        pag7: "É isso, ela pensou, ficarei presa nesse lugar para sempre.",

        pag8: "Os frutos e as flores começaram a cair da árvore como se estivessem maduros. Ao encostar no chão, cada um deles se estilhaçou como vidro, e de cada um saiu um espírito, cada quanl fez uma reverência para Teresa antes de seguir para o próximo plano.",

        pag9: "Teresa estava certa de que ela estava condenada a permanecer naquele lugar para sempre, mas então a fadinha riu e pediu para que ela a seguisse. Conforme elas atravessavam o labirinto, a névoa ficava cada vez menos densa, até que ela sumiu completamente, e quando a névoa sumiu, as paredes, que antes eram invisíveis, agora tinham cor.",

        pag10: "E então, elas encontraram: a saída. Fora do labirinto a luz retornou, o sol estava se pondo. O céu estava lindo, sem uma núvem. Teresa sentia seu coração tranquilo.",

        pag11: "<p class='speaker'>Misty</p><p> Você conseguiu, pequena maga. Os espíritos te acgradecem, e eu também.</p>",

        pag12: "<p class='speaker'>Teresa</p><p> Mas você poderia ter deixado aquele lugar a hora que quisesse, então por que..</p>",

        pag13: "<p class='speaker'>Misty</p><p> Por que eu continuei lá? Bom, eu não podia deixar aqueles espiritos lá sozinhos. Mas agora eles estão livres, e eu também.</p>",

        pag14: "<p class='speaker'>Misty</p><p> Boa sorte, maga. Mais a frente está o templo da luz. Muitos acreditam estar abandonado, mas Aruna ainda protege esse lugar. Vá em frente.</p>",

        pag15: "A pixie, então se foi, voando para longe, para onde seu coração mandasse. Teresa prosseguiu.",

        pag16: "Mais adiante haviam escadas levando para o templo que ela viu em seu sonho, só que mais destruído. Com certeza o tempo não tinha sido amigável com aquela estrutura. Mesmo assim ele ainda estava lá.",

        pag17: "Teresa abriu as portas e olhou ao seu redor. O lugar parecia deserto, mas a criatura Aruna devia estar por ali.",

        pag18: "<p class='speaker'>Teresa</p><p> Olá? Aruna?</p>",

        pag19: "Uma voz respondeu 'Teresa, você chegou.' As tochas do lugar se acenderam e teresa viu, no meio da sala, enrolado e deitado sobre seu próprio corpo estava o dragão alado com corpo de serpente.",

        pag20: "<p class='speaker'>Aruna</p><p> Meu nome é Aruna, eu sou o guardião deste lugar.</p>",

        pag21: "<p class='speaker'>Aruna</p><p> Diga-me, Teresa, sua jornada até aqui não foi fácil, a missão que lhe foi dada era muito abstrata e difícil de decifrar, então diga-me como foi que você chegou até aqui?</p>",

        pag22: "Teresa então contou à criatura como foi a sua aventura, que ela havia procurado incansavelmente em livros, e que ela tentou arduamente solucionar o mistério do labirinto, mas que decidiu ajudar a pequena Misty a libertar os espíritos, e então elas conseguiram deixar o labirinto.",

        pag23: "O dragão, balançou sua cabeça acertivamente.",

        pag24: "<p class='speaker'>Aruna</p><p> Bom, bom. Isso já é meio caminho andado, mas sabedoria não é apenas saber ajudar. A verdadeira sabedoria vem quando deixamos que outros nos ajudem. Digamos quando um amigo nos oferece uma mão.</p>",

        pag25: "<p class='speaker'>Teresa</p><p> ... Entendo.</p>",

        pag26: "<p class='speaker'>Aruna</p><p> Mas já que você chegou até aqui, eu vou deixar que veja a Luz da vida, mas saiba que terá um custo muito alto. Mesmo assim, você deseja prosseguir?</p>",

        pag27: "<p class='speaker'>Teresa</p><p> Sim.</p>",

        pag28: "<p class='speaker'>Aruna</p><p> Pois bem. Descanse essa noite, amanhã quando o sol raiar eu levarei você.</p>",

        pag29: "Quando o dia amanheceu, o dragão vez como prometido e levou Teressa para vez a luz da vida, contudo ele levou ela para uma sala com um espelho d'água circular. Ele instruiu para que Teresa encostasse a mão na água, e ela o fez.",

        pag30: "Quando ela encostou no espelho, ela viu a luz do sol refletida nele e seu braço esquerdo brilhou. Quando a luz desapareceu, lá estava a runa da luz emoldurada por outros símbolos. Teresa havia passado. Contudo, a luz refletida no espelho era muito forte, e seus olhos não resistiram. A luz que entrou por suas pupilas foi demais, e acabou cegando a maga.",

        pag31: "<p class='speaker'>Aruna</p><p> Eu lhe avisei que o custo seria alto. Sua nova vida será repleta de novos desafios, mas isso não é permanente. A luz é justa, mas também é benevolente. Quando você aprender sobre como receber auxílio, me procure novamente.</p>",

        pag32: "<p class='speaker'>Teresa</p><p> Está tudo bem, Aruna. Me esforçar é uma das coisas que eu faço de melhor. E, bom, eu tneho uma amiga que vai poder me ajudar com isso.</p>",

        pag33: "<p class='speaker'>Aruna</p><p> Pois muito bem.</p>",

        pag34: "<p class='speaker'>Aruna</p><p> Parabéns, Teresa. Você é agora a mais nova Maga Elemental da Luz.</p>",

        pag35: "Fim - A justiça é cega.",
    },
    textTess1122: {
        pag1: "Teresa decidiu seguir o código.",

        pag2: "Teresa não tinha trazido uma pena ou tinteiro, nem pergaminhos limpos para que pudesse gravar o código, então sua memória seria a única coisa que poderia tirá-la de lá caso isso desse certo. Porém, sua memória não era perfeita e estava fadada a lembrar incorretamente.",

        pag3: "Com medo de ficar presa também naquele labirinto, ela trnou a dar as costas para a árvore e seguiu em frente. Dentro do labirinto ela se bateu algumas vezes para encontrar o caminho certo, mas ao por do sol, ela finalmente encontrou a saída.",

        pag4: "O céu estava lindo, sem uma núvem, apenas uma tela pintada de vermelho. Apesar de tudo isso, Teresa sentia seu coração pesado.",

        pag5: "Mais adiante haviam escadas levando para o templo que ela viu em seu sonho, só que mais destruído. Com certeza o tempo não tinha sido amigável com aquela estrutura. Mesmo assim ele ainda estava lá.",

        pag6: "Teresa abriu as portas e olhou ao seu redor, mas o lugar parecia deserto.",

        pag7: "<p class='speaker'>Teresa</p><p> Olá? Tem alguém aí?</p>",

        pag8: "Silêncio.",

        pag9: "Teresa suspirou, mas antes que ela pudesse dizer que a viagem tinha sido em vão, uma voz falou 'Teresa, você chegou.' As tochas do lugar se acenderam e teresa viu, no meio da sala, enrolado e deitado sobre seu próprio corpo estava o dragão alado com corpo de serpente.",

        pag10: "<p class='speaker'>Aruna</p><p> Meu nome é Aruna, eu sou o guardião deste lugar.</p>",

        pag11: "<p class='speaker'>Aruna</p><p> Diga-me, Teresa, sua jornada até aqui não foi fácil, a missão que lhe foi dada era muito abstrata e difícil de decifrar, então diga-me como foi que você chegou até aqui?</p>",

        pag12: "Teresa então contou à criatura como foi a sua aventura, que ela havia procurado incansavelmente em livros, e que ela tentou arduamente solucionar o mistério do labirinto, e tudo isso sozinha. Por mais que tenham sido drandes feitos, ela parecia estar envergonhada pelo que dizia.",

        pag13: "<p class='speaker'>Aruna</p><p> Teresa, seu coração parece estar em conflito com suas ações.</p>",

        pag14: "<p class='speaker'>Aruna</p><p> Minha cara, isso é sinal de crescimento, sinal de que você está aprendendo com suas ações, e esse é o caminho para a verdadeira sabedoria que nós usuários da luz valorizamos.</p>",

        pag15: "<p class='speaker'>Aruna</p><p> Venha, descanse, pois amanhã sua viagem começará novamente.</p>",

        pag16: "Teresa foi ao encontro do dragão e se reposou em suas escamas. A criatura cobriu-a com suas asas e permitiu que a jovem passasse a noite ali. Afinal, no dia seguinte os dois iniciariam uma nova jornada.",

        pag17: "Fim - Penas e escamas",

    },
    textTess12: {
        pag1: "Teresa decidiu aceitar a leitura.",

        pag2: "Ayla sorriu e levou Teresa para a torre de astronomia, o qual era o lugar com o melhor telescópio da escola, isso serviria como uma maneria mais precisa de ler as estrelas, e ver aquilo que estava oculto.",

        pag3: "<p class='speaker'>Teresa</p><p> Eu não sabia que o professor de astronomia deixavam os alunos usarem o telescópio daqui para astrologia.</p>",

        pag4: "<p class='speaker'>Ayla</p><p> Ninguém disse que deixa. O que eu estou fazendo por você é especial.</p>",

        pag5: "Ayla murmurou algumas palavras, e a sala inteira foi tomada pela escuridão como se fosse o seu noturno, com diversos pontos que eram as estrelas do céu. Ayla pediu para que teresa escolhese uma, e ela o fez. A partir dali Ayla começou a traçar caminhos entre as estrelas sem dirigir a palavra a Teresa, então ela tornou sua atenção para o telescópio.",

        pag6: "Teresa sentou-se no chão, aguardando o laudo final de Ayla.",

        pag7: "<p class='speaker'>Ayla</p><p> Você encontrará seu destino no vale de Aegle, onde está o templo abandonado da luz. Mas, não é só isso, terão alguns obtáculos no seu caminho, o templo está no fim de um labirinto traiçoeiro coberto por névoa.</p>",

        pag8: "<p class='speaker'>Ayla</p><p> Se você conseguir passar por isso, você ainda terá seu coração pesado pelo guardião do templo.</p>",

        pag9: "<p class='speaker'>Ayla</p><p> é isso que eu vejo no seu futuro.</p>",

        pag10: "<p class='speaker'>Teresa</p><p> Bom, você me deu mais detalhes do que eu achei que você daria.</p>",

        pag11: "<p class='speaker'>Ayla</p><p> Eu falei que seria um serviço especial.</p>",

        pag12: "<p class='speaker'>Teresa</p><p> Muito obrigada, Ayla. Eu vou me preparar para a viagem. Me deseje sorte.</p>",

        pag13: "<p class='speaker'>Ayla</p><p> Boa sorte...</p>",

        pag14: "Teresa foi até seu dormitório e preparou uma pequena trouxa com poções, alguns mantimentos e pergaminhos com suas anotações. Com isso ela estava pronta para ir.",

        pag15: "Chegando no portão ela encontrou Ayla mais uma vez, mas antes que ela pudesse lhe dirigir qualquer tipo de questionamento Ayla disse 'vamos?'. Honestamente, Teresa estava feliz de não ter que ir sozinha nessa viagem.",

        pag16: "Apenas a viagem em si demorou alguns dias, a dupla teve que parar em alguma pousada aqui e ali. Algumas eram mais movimentadas do que outras, mas independente da quantidade de gente, o fato era que Teresa nunca se sentiu sozinha no caminho.",

        pag17: "Quando elas finalmente chegou no vale, elas se depararam com uma névoa densa o suficiente para que uma pessoa não conseguisse enxergar mais de meio metro a sua frente. Era bem como Ayla havia previsto.",

        pag18: "A única coisa que Ayla não havia mencionado era sobre a árvore que elas encontraram. Seu tronco era levemente aroxeado, e sua folhas eram azuladas, já os frutos dela eram um roxo vinho. Com certeza era uma árvore estranha, mas elas não deram atenção a ela.",

        pag19: "Ao continuar andando, Teresa se deparou com uma parede invisível. Ela tateou e tateou para ver se encontrava o fim da parada, mas cada vez que ela encontrava o fim de uma, dava de cara com outra.",

        pag20: "<p class='speaker'>Teresa</p><p> Acho que isso significa que encontramos o labirinto.</p>",

        pag21: "<p class='speaker'>Ayla</p><p> É... eu acho que sim. Tess, eu estou com um mau pressentimento sobre isso.</p>",

        pag22: "<p class='speaker'>Teresa</p><p> Está tudo bem. Nós conseguiremos encontrar facilmente o caminho para fora daqui.</p>",

        pag23: "Mas Teresa estava errada, elas tomaram uma rota, e voltaram para a árvore; tomaram outra rota, e voltaram para a árvore; e de novo, e de novo, e de novo. Todos os caminhos parecem trazer elas de volta para essa árvore. Infelizmente com a névoa daquele jeito, Ayla não conseguirira consultar as estrelas novamente. Será que elas deveriam continuar tentando?",

        pag24: "<p class='speaker'>Ayla</p><p> Tess, olhe- Ayla disse, apontando para dois novos brotos na árvore.</p>",

        pag25: "<p class='speaker'>Ayla</p><p> Aqueles brotos não estavam lá quando nós chegamos.</p>",

        pag26: "<p class='speaker'>Teresa</p><p> Bobagem, é apenas uma árvore.</p>",

        pag27: "<p class='speaker'>Ayla</p><p> Tess, me escute. Eu estou com um mal pressentimento sobre esse lugar. Vamos sair daqui e voltar quando eu conseguir fazer uma leitura melhor sobre esse lugar.</p>",

        pag28: "O que ela deve fazer?",
    },
    textTess121: {
        pag1: "Teresa decide sair daquele lugar com Ayla.",

        pag2: "As duas retornaram para a cidade mais próxima, e Ayla tentou ler as estrelas novamente.COntudo não ouve resposta.Não importava quantas vezes ela tentasse, não havia mais nenhum detalhe no céu sobre aquele lugar e aquela árvore.",

        pag3: "Alguns dias se passaram e Teresa ficou impaciente.Se eu ainda estivesse lá já teria terminado esse teste, ela pensou quando Ayla fracassou novamente.Ayla se sentia culpada por não conseguir ajudar mais, ela sabia que Teresa estava frustrada, mas não havia nada que ela pudesse fazer.",

        pag4: "Ayla decidiu voltar para a escola e usar o telescópio novamente, esperando que isso trouxesse uma nova resposta.Teresa não voltou com ela, ela disse que esperaria Ayla voltou, mas foi uma mentira.Na noite que Ayla partiu, Teresa voltou para o vale e entrou no labirinto novamente.",

        pag5: "Pouco se sabe sobre o que aconteceu com ela depois disso, mas o fato é que quando Ayla voltou e não encontrou Teresa na pousada, ela viu um novo fruto na árvore misteriosa.",

        pag6: "Fim - O fruto da impaciência",

    },
    textTess122: {
        pag1: "Teresa decidiu ficar e investigar.",

        pag2: "Ayla disse que ficaria com Teresa, e as duas se puseram a investigar a árvore misteriosa.",

        pag3: "A primeira vista a árvore parece não ter nada de especial, até que Teresa percebeu inscrições que foram gravadas em seu tronco. Elas estavam em uma língua antiga, mas Teresa estava segura que elas conseguiriam decifrá-las.",

        pag4: "Horas se passaram até que a dupla conseguiu chegar em algumas opções de tradução que fizessem sentido, não era nada muito concreto, mas elas deveriam tentar solucionar os novos enigmas, e caso nada desse certo, elas poderiam retornar a árvore e começar o precesso de tradução tudo de novo.",

        pag5: "As meninas viraram suas costas para a árvore, porém quando estava prestes a seguir o seu caminho uma voz disse: 'se seguir as incrições vocês encontrararão a saída, mas aqueles que vieram antes ficarão perdidos neste labirinto para sempre.'",

        pag6: "Uma pequena fada então saiu de seu esconderijo, e voou para perto da dupla.",

        pag7: "<p class='speaker'>Misty</p><p> Eu me chamo Misty, tenho vivido nessa árvore a anos e vi muitas pessoas como você se perderem neste labirinto.</p>",

        pag8: "<p class='speaker'>Teresa</p><p> Eu não posso fazer nada pelas pessoas que não estão aqui.</p>",

        pag9: "<p class='speaker'>Misty</p><p> E se eu te dissesse que pode?</p>",

        pag10: "<p class='speaker'>Ayla</p><p> Tess, vamos ouvi-lá.</p>",

        pag11: "<p class='speaker'>Misty</p><p> Estão vendo essa árvore? Ela tem prendido o espírito de todos que se perderam aqui por muito tempo. E continuará fazendo-o até que as escrituras de seu tronco sumam.</p>",

        pag12: "<p class='speaker'>Misty</p><p> E então, vocês ajudarão a árvore, ou ajudarão a si mesmas?</p>",

        pag13: "A idéia de retirar as inscrições da árvore não era impossível, mas ao fazê-lo Teresa iria perder aquelas inscrições para sempre, sem nenhuma garantia de que ela conseguiria sair daquele labirinto.",

        pag14: "O que ela deve fazer?",
    },
    textTess1221: {
        pag1: "Teresa decide tirar as inscrições da árvore.",

        pag2: "<p class='speaker'>Ayla</p><p> Nós vamos ajudar, é claro. Não vamos, Tess?</p>",

        pag3: "Terese teria apenas que realizar alguns feitiços simples que foram vistos nas aulas de herbologia. Se isso não bastasse, ela tinha poçoes de cura, poderia tirar o casco e despejá-las na árvore. Mesmo assim não era certo de que ela conseguiria remover o escrito.",

        pag4: "Ela suspirou, e forneceu sua mão para que a pixie pudesse sentar nela.",

        pag5: "<p class='speaker'>Teresa</p><p> Vou ver o que eu posso fazer.</p>",

        pag6: "Teresa não tinha trazido uma pena ou tinteiro, nem pergaminhos limpos para que pudesse gravar o código, então sua memória seria a única coisa que poderia tirá-la de lá caso isso desse certo. Porém, sua memória não era perfeita e estava fadada a lembrar incorretamente.",

        pag7: "Muito bem, ela pensou ao colocar suas mãos na árvore. Ayla seguiu seus passos, e também colocou suas mãos na árvore, direcionando um sorriso para Teresa, afim de tranquilizá-la. Nesse ponto, Misty já estava sentada em seu ombro, e Teresa e Ayla começaram a murmurar os encantamentos em sincronia. Um após o outro pareciam apagar as inscrições, até que elas desapareceram completamente.",

        pag8: "É isso, ela pensou, ficarei presa nesse lugar para sempre, e eu arrastei Ayla nisso tudo também.",

        pag9: "Os frutos e as flores começaram a cair da árvore como se estivessem maduros. Ao encostar no chão, cada um deles se estilhaçou como vidro, e de cada um saiu um espírito, cada quanl fez uma reverência para as três antes de seguir para o próximo plano.",

        pag10: "Teresa estava certa de que ela estava condenada a permanecer naquele lugar para sempre, mas então a fadinha riu e pediu para que as duas a seguissem a seguisse. Conforme elas atravessavam o labirinto, a névoa ficava cada vez menos densa, até que ela sumiu completamente, e quando a névoa sumiu, as paredes, que antes eram invisíveis, ganharam cor.",

        pag11: "E então, elas encontraram: a saída. Fora do labirinto a luz retornou, o sol estava se pondo. O céu estava lindo, sem uma núvem. Teresa sentia seu coração tranquilo.",

        pag12: "<p class='speaker'>Misty</p><p> Vocês conseguiram, pequenas magas. Os espíritos vos agradecem, e eu também.</p>",

        pag13: "<p class='speaker'>Teresa</p><p> Mas você poderia ter deixado aquele lugar a hora que quisesse, então por que..</p>",

        pag14: "<p class='speaker'>Misty</p><p> Por que eu continuei lá? Bom, eu não podia deixar aqueles espiritos lá sozinhos. Mas agora eles estão livres, e eu também.</p>",

        pag15: "<p class='speaker'>Misty</p><p> Boa sorte, magas. Mais a frente está o templo da luz. Muitos acreditam estar abandonado, mas Aruna ainda protege esse lugar. Vão em frente.</p>",

        pag16: "A pixie, então se foi, voando para longe, para onde seu coração mandasse. Teresa e Ayla prosseguiram.",

        pag17: "Mais adiante haviam escadas levando para o templo que Ayla havia mencionado Com certeza o tempo não tinha sido amigável com aquela estrutura. Mesmo assim ele ainda estava lá, de pé.",

        pag18: "Teresa abriu as portas e olhou ao seu redor. O lugar parecia deserto, mas a criatura Aruna devia estar por ali.",

        pag19: "<p class='speaker'>Teresa</p><p> Olá? Aruna?</p>",

        pag20: "Uma voz respondeu 'Teresa, você chegou.' As tochas do lugar se acenderam e teresa viu, no meio da sala, enrolado e deitado sobre seu próprio corpo estava o dragão alado com corpo de serpente.",

        pag21: "<p class='speaker'>Aruna</p><p> Você chegou, e vejo que trouxe companhia.</p>",

        pag22: "<p class='speaker'>Ayla</p><p> Prazer, Aruna, eu sou Ayla. Amiga de Teresa.</p>",

        pag23: "Ayla fez uma reverência para Aruna, e Aruna retribuiu fazendo o mesmo.</p>",

        pag24: "<p class='speaker'>Aruna</p><p> Eu sei quem você é, criança. A luz me contou tudo a seu respeito. Eu sou o guardião deste lugar, fui incubido de proteger esse templo pelo elemento da Luz, assim como meu pai, e o pai dele, e assim tem sido por gerações.</p>",

        pag25: "<p class='speaker'>Aruna</p><p> Agora, diga-me, Teresa, sua jornada até aqui não foi fácil, a missão que lhe foi dada era muito abstrata e difícil de decifrar, então diga-me como foi que você chegou até aqui?</p>",

        pag26: "Teresa então contou à criatura como foi a sua aventura, que ela havia procurado incansavelmente em livros, mas que teve que recorrer a Ayla para receber uma direção, e que elas tentaram arduamente solucionar o mistério do labirinto, mas que decidiram ajudar a pequena Misty a libertar os espíritos, e então elas conseguiram deixar o labirinto.",

        pag27: "O dragão, balançou sua cabeça acertivamente.",

        pag28: "<p class='speaker'>Aruna</p><p> Bom, bom. Eu vejo muito potencial em você. Por mais que eu soubesse que você estava destinada a luz eu não sabia quais caminhos você escolheria. Mas agora eu vejo que você está no caminho certo.</p>",

        pag29: "<p class='speaker'>Aruna</p><p> Descansem essa noite, amanhã quando o sol raiar eu mostrarei a Teresa a luz da vida.</p>",

        pag30: "As duas acenaram com a cabeça, e o dragão ofereceu que elas se deitassem na plumagem de suas asas. Quando o dia amanheceu, o dragão vez como havia prometido e levou Teressa para vez a luz da vida, contudo ele levou ela para uma sala com um espelho d'água circular. Ele instruiu para que Teresa encostasse a mão na água, e ela o fez.",

        pag31: "Quando ela encostou no espelho, ela viu a luz do sol refletida nele e seu braço esquerdo brilhou. Quando a luz desapareceu, lá estava a runa da luz emoldurada por outros símbolos. Teresa havia passado.",

        pag32: "<p class='speaker'>Aruna</p><p> Parabéns, Teresa. Você é agora a mais nova Maga Elemental da Luz.</p>",

        pag33: "<p class='speaker'>Aruna</p><p> Durante o seu teste você aceitou as mãos que lhe foram estendidas, e também estendeu a mão para aqueles que precisavam, tudo isso com humildade e sem esperar nada em troca. É isso que nós usuários da luz buscamos.</p>",

        pag34: "<p class='speaker'>Aruna</p><p> Aqui é onde eu e muitos outros magos da luz vem quando querem descançar e estudar.</p>",

        pag35: "<p class='speaker'>Teresa</p><p> Aqui? Mas esse lugar está completamente abandonado.</p>",

        pag36: "<p class='speaker'>Aruna</p><p> As aparências enganam, minha criança.</p>",

        pag37: "<p class='speaker'>Aruna</p><p> Vá, retorne a sua escola, continue seus estudos. Continue crescendo, e quando voltar, eu irei lhe apresentar aos outros.</p>",

        pag38: "<p class='speaker'>Teresa</p><p> Pois muito bem.</p>",

        pag39: "Teresa foi até a porta para retornar a sala que eles haviam deixado Ayla, mas antes de abrir a porta, Aruna chamou.",

        pag40: "<p class='speaker'>Aruna</p><p> Teresa?</p>",

        pag41: "<p class='speaker'>Teresa</p><p> Sim?</p>",

        pag42: "<p class='speaker'>Aruna</p><p> Chama-me nos teus sonhos, e eu irei até você.</p>",

        pag43: "Teresa não compreendeu o que Aruna quis dizer com aquilo, principalmente porque ela não conseguia constrolar os próprio sonhos, mesmo assim concordou com a cabeça e entçao voltou para Ayla.",

        pag44: "Ela mostrou sua marca para a amiga e as duas festejaram a aprovação de Teresa quando foram se hospedar em uma pousada perto do vale. Naquela noite quando Teresa foi dormir, ela sonhou, e em seu sonho ela chamou 'Aruna'.",

        pag45: "<p class='speaker'>Aruna</p><p> Olá novamente, Teresa, maga da luz.</p>",

        pag46: "Fim - Te vejo nos seus sonhos",
    },
    textTess1222: {
        pag1: "Teresa decide seguir o código.",

        pag2: "Teresa não tinha trazido uma pena ou tinteiro, nem pergaminhos limpos para que pudesse gravar o código, então sua memória seria a única coisa que poderia tirá-la de lá caso isso desse certo. Porém, sua memória não era perfeita e estava fadada a lembrar incorretamente.",

        pag3: "<p class='speaker'>Ayla</p><p> Nós vamos ajudar, é claro. Não vamos, Tess?</p>",

        pag4: "<p class='speaker'>Ayla</p><p> Tess? Ayla chamou quando viu que Teresa não estava respondendo.</p>",

        pag5: "<p class='speaker'>Teresa</p><p> Me perdoe, Ayla.</p>",

        pag6: "Com medo de ficar presa também naquele labirinto, ela tornou a dar as costas para a árvore e seguiu em frente. Dentro do labirinto ela se bateu algumas vezes para encontrar o caminho certo, mas ao por do sol, ela finalmente encontrou a saída.",

        pag7: "O céu estava lindo, sem uma núvem, apenas uma tela pintada de vermelho. Apesar de tudo isso, Teresa sentia seu coração pesado.",

        pag8: "Mais adiante haviam escadas levando para o templo que Ayla havia mencionado. Com certeza o tempo não tinha sido amigável com aquela estrutura. Mesmo assim ele ainda estava lá.",

        pag9: "Teresa abriu as portas e olhou ao seu redor, mas o lugar parecia deserto.",

        pag10: "<p class='speaker'>Teresa</p><p> Olá? Tem alguém aí?</p>",

        pag11: "Silêncio.",

        pag12: "Teresa suspirou, mas antes que ela pudesse dizer que a viagem tinha sido em vão, uma voz falou 'Teresa, você chegou.' As tochas do lugar se acenderam e teresa viu, no meio da sala, enrolado e deitado sobre seu próprio corpo estava o dragão alado com corpo de serpente.",

        pag13: "<p class='speaker'>Aruna</p><p> Meu nome é Aruna, eu sou o guardião deste lugar.</p>",

        pag14: "<p class='speaker'>Aruna</p><p> Diga-me, Teresa, sua jornada até aqui não foi fácil, a missão que lhe foi dada era muito abstrata e difícil de decifrar, então diga-me como foi que você chegou até aqui?</p>",

        pag15: "Teresa então contou à criatura como foi a sua aventura, que ela havia procurado incansavelmente em livros, mas precisou de ajuda para encontrar uma direção, e que ela tentou arduamente solucionar o mistério do labirinto, mas acabou deixando sua amiga para trás sem nenhuma certeza de que ela conseguiria sair de lá.",

        pag16: "<p class='speaker'>Teresa</p><p> Desculpe, Aruna, mas eu tenho que voltar.</p>",

        pag17: "Com isso, Teresa saiu em disparada de novo para o labirinto. Ela tinha certeza que lembraria o caminho, ela tinha que lembrar, caso contrário ela estaria condenando as duas a ficarem presas naquele lugar para sempre.",

        pag18: "Seu coração estava apertado, enquanto seguia por aquelas paredes invisíveis. De repente a névoa começou a se dissipar, e as paredes ganharam cor. Ela ficou tão distraída com os eventos a sua volta que acabou tombando de cara com Ayla.",

        pag19: "O reencontro delas foi algo que marcou Teresa. Ela ficou aos prantos quando viu que sua amiga estava bem. Um peso enorme tinha sido retirado das suas costas, e seu coração estava muito mais tranquilo. Apesar de tudo, Ayla perdoou a amiga, e então a pixie as levou para fora do labirinto.",

        pag20: "Naquele dia Teresa disse para Aruna que ela não era digna de se tornar uma maga da luz. Ainda não. O dragão parecia contente com sua decisão, e disse que ela ainda teria o direito de se tornar um se algum dia ela desejasse retornar.",

        pag21: "As duas passaram aquela noite no templo e dormiram nas asas plumadas da criatura. No dia seguinte, Aruna levou-as em segurança para a escola.",

        pag22: "Acredita-se que levaram anos, mas que Teresa se tornou uma maga da luz. Ela desaparecia e aparecia novamente de vez enquando, nunca ficava no mesmo lugar por muito tempo. Mas sempre que Ayla parava na frente da árvore misteriosa no vale de Aegle, Teresa vinha ao seu encontro.",

        pag23: "Fim - Arrependimento e redimição",
    },
}

var plotScene = {
    textTess1: {
        pag2: ['', ''],
    },
    textTess11: {
        pag1: ['', ''],
    },
    textTess111: {
        pag1: ['', ''],
    },
    textTess1111: {
        pag1: ['', ''],
    },
    textTess1112: {
        pag1: ['', ''],
    },

    textTess112: {
        pag1: ['', ''],
    },
    textTess1121: {
        pag1: ['', ''],
    },
    textTess1122: {
        pag1: ['', ''],
    },

    textTess12: {
        pag1: ['', ''],
    },
    textTess121: {
        pag1: ['', ''],
    },
    textTess1211: {
        pag1: ['', ''],
    },
    textTess1212: {
        pag1: ['', ''],
    },
    textTess12121: {
        pag1: ['', ''],
    },
    textTess12122: {
        pag1: ['', ''],
    },

    textTess122: {
        pag1: ['', ''],
    },
    textTess1221: {
        pag1: ['', ''],
    },
    textTess1222: {
        pag1: ['', ''],
    },
}

var plotTess1Choices = ['Recusar', 'Aceitar'];
var plotTess11Choices = ['Continuar tentando', 'Inspecionar a árvore'];
var plotTess111Choices = ['Não comer', 'Comer os frutos'];
var plotTess1111Choices = [0, 0];
var plotTess1112Choices = [0, 0];

var plotTess112Choices = ['Tirar as inscrições da árvore', 'Seguir o código'];
var plotTess1121Choices = [0, 0];
var plotTess1122Choices = [0, 0];


var plotTess12Choices = ['Sair daquele Lugar com Ayla', 'Ficar e investigar'];
var plotTess121Choices = [0, 0];

var plotTess122Choices = ['Tirar as inscrições da árvore', 'Seguir o código'];
var plotTess1221Choices = [0, 0];
var plotTess1222Choices = [0, 0];

