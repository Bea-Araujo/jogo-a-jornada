
var pagNumber = 2;

function pickTextObject() {
    choiceTreeArray = choiceTree.split("-");
    var textObject = plotAmon[`textAmon${choiceTreeArray[1]}`];
    return textObject
}

function pickScene() {
    hoiceTreeArray = choiceTree.split("-");
    var sceneObject = plotScene[`textAmon${choiceTreeArray[1]}`];
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
        choices.innerHTML =
            `<article>
                <p>A - ${escolhas[0]}</p>
                <p>B - ${escolhas[1]}</p>
            </article>
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
    var escolha = prompt("Qual ser?? sua escolha?");
    while (escolha.toUpperCase() != "A" && escolha.toUpperCase() != "B") {
        var escolha = prompt("Escolha inv??lida.\nQual ser?? sua escolha? (A ou B)");
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

var plotAmon = {
    textAmon1: {
        pag2: "Logo ap??s receber sua miss??o, Amon foi preparar seus itens para levar na viagem, alguns mantimentos, um livro com alguns de seus feiti??os favoritos, um mapa, e um pergaminho ou dois.",
        pag3: "Sua jornada come??ou pela floresta que rodiava a escola. O sol j?? estava quase se pondo quando Amon percebeu que havia uma fogueira acesa nas redondezas, logo viu tamb??m que havia um grupo de aventureiros montando seu acampamento.",
        pag4: "Essa n??o era uma vis??o incomum, muitas pessoas viajavam de ponta a ponta do continente em busca de aventuras, riquesas ou os dois.",
        pag5: "Com a mesma facilidade que Amon percebeu o grupo, eles tamb??m o perceberam.",
        pag6: "O jovem aprendiz n??o era do tipo que se juntaria a um grupo de desconhecidos sem ser convidado, e ainda menos sem haver necessidade, afinal ele estava muito bem preparado para qualquer que fosse o desafio.",
        pag7: "Entretanto, uma das aventuras n??o compartilhava do orgulho de Amon e foi logo o convidar para se juntar a eles.",
        pag8: "<p class='speaker'>Clara</p><p>Ol??. Essas roupas... voc?? ?? um mago, n??o ?? mesmo? Voc?? est?? sozinho, gostaria de se juntar a n??s?</p>",
        pag9: "<p class='speaker'>Clara</p><p>Voc?? est?? indo para o monte Hagan tamb??m n??o est???</p>",
        pag10: "<p class='speaker'>Clara</p><p>Voc?? devia se juntar a n??s. ?? perigoso ir sozinho e n??s estamos precisando de um mago...</p>",
    },
    textAmon11: {
        pag1: "Amon decide continuar sozinho.",
        pag2: "Com isso, Amon continuou sua jornada at?? a montanha de Hagan. Para algumas pessoas pode ser dif??cil, mas n??o para um jovem aprendiz de mago, principalmente um que est?? prestes a se formar. Ele parou algumas vezes, mas nada demorado.",
        pag3: "Com a velocidade que Amon seguiu sua viagem, ele conseguiu chegar no p?? da montanha ao nascer do sol.",
        pag4: "Amon n??o tinha encontrado nenhum inimigo dif??cil no caminho, tudo estava fluindo bem e ao chegar no p?? da montanha, Amon descobriu o porque: havia um grupo de bokoblins acampado na entrada da caverna. Definitivamente eles n??o eram os inimigos mais desafiadores, mas sua vantagem estava nos n??meros.",
        pag5: "O que ele deveria fazer?",

    },
    textAmon111: {
        pag1: "Amon decide lutar contra o grupo de bokoblins.",
        pag2: "A sua vantagem est?? no ataque surpresa, com sorte n??o existem outras criaturas al??m daqueles no grupo. Amon, se aproximou sorrateiramente e conseguiu aniquilir alguns de seus inimigos, contudo sorte n??o estava do seu lado e logo ouviu-se uma trompeta chamando por refor??os.",
        pag3: "Amon, foi cercado por bokoblins, n??o havia sa??da ele teria que utilizar de todas as suas artimanhas que estivessem dispon??veis. Enquanto ele lan??ava feiti??os de ataque os inimigos se aproximavam. Amon estava prestes a terminar a runa para enviar uma lan??a voando nos bokoblins a sua frente, mas ele sentiu uma dor, a qual irradiou do seu ombro at?? sua m??o, for??ando-o a parar no meio do feiti??o.",
        pag4: "Seus olhos arregalaram quando percebeu que a fonte da dor era uma flecha fincada em seu ombro.",
        pag5: "Se as coisas continuassem assim ele seria derrotado. Derrotado por criaturas mediocres como bokoblins.",
        pag6: "N??o, ele pensou.",
        pag7: "Juntando todo resto de suas for??as, Amon conjurou uma barreira incandescente, que se espalhou e espalhou at?? atingir o inimigo mais distantes. Os bokoblins mais pr??ximos sem d??vida foram chamuscados, os mais distantes, contudo, foram apenas postos para correr.",
        pag8: "Com um ??nico movimento, Amon removeu a flecha de seu ombro e recitou algumas palavras de encantamento para curar seu ombro. Ele conseguiu parar o sangramento, contudo a dor persistiu.",
        pag9: "Amon continuou caminhando pela caverna, tendo que realizar pequenos encantamentos de prote????o ?? fogo e calor no caminho. Logo, ouviu-se o barrulho e bolhas estourando na lava. Ele sabia que estava perto de seu objetivo final.",
        pag10: "Finalmente, ele pode ver de longe um ovo, sua parte inferios apresentavam detalhes que se assemelhavam a placas tectonicas em um rio de lava, j?? a parte superior era brilhante como ferro derretido. Sem d??vida era cria de um drag??o vermelho.",
        pag11: "Aninhando o ovo estava a criatura que provavelmente era a m??e, um drag??o vermelho. Suas pupilas estavam contra??das, finas como um fio de cabelo, enquanto o drag??o escaneava seu covil. Cad??veres se encontravam espalhados pelo local, alguns eram restos de comida, outros... provavelmente guerreiros e aventureiros tolos que ousaram enfretar a besta.",
        pag12: "Amon estava escondido atr??s de uma rocha, n??o levaria muito tempo para que o drag??o percebesse sua presen??a.",
        pag13: "O que ele deveria fazer?",
    },
    textAmon1111: {
        pag1: "Amon inicia sua ofensiva contra o drag??o.",
        pag2: "Por mais que n??o seja imposs??vel matar um drag??o, Amon ainda est?? exausto de toda a viagem e do combate contra o grupo de bokoblins. Infelizmente, a criatura consegue facilmente ter a vantagem, e o jovem aprendiz ?? consumido pelas chamas.",
        pag3: "Fim - Descanse em chamas"
    },
    textAmon1112: {
        pag1: "Amon decide enganar o drag??o",
        pag2: "De sua pequena trouxa ele retirou seu livro e pergaminhos. Algo contido dentro daqueles pap??is com certeza lhe seria ??til.",
        pag3: "Sua paz n??o dura muito, uma vez que o drag??o ouve o farfalhar dos papeis. Um rosnado grave come??a a emanar da garganta da besta, dizendo para qualquer criatura que ali estivesse que fosse embora.",
        pag4: "As m??os de Amon come??aram a trabalhar cada vez mais r??pido em busca de algo- qualquer coisa que pudesse ajud??-lo.",
        pag5: "A caverna treme quando a criatura levanta. Amon precisa ser r??pido e preciso.",
        pag6: "A caverna treme novamente. Amon segura firmemente o pergaminho.",
        pag7: "O rosnado cresce. Os dedos de Amon tremem enquanto ele desenha a runa.",
        pag8: "A ponta dos chifres do monstro podiam ser vistas por detras da rocha quando Amon finalizou sua runa, um feiti??o de ilus??o n??o funcionaria por muito tempo, mais uma vez o aprendiz precisaria ser meticuloso em rela????o aos seus proximos passos.",
        pag9: "Apesar de estar oculto em sua ilus??o, o drag??o continuou se aproximando, mas sua cabe??a voltou sua aten????o para a entrada da caverna. De l?? podia ser ouvido um alvoro??o se aproximando.",
        pag10: "Os bokoblins voltaram, Amon pensou.Preciso aproveitar enquanto o drag??o est?? destra??do.",
        pag11: "E assim o fez.Em sua distra????o, a criatura nem notou quando o pequeno humano passou por suas garras e chegou ao ninho.",
        pag12: "Algo teria que ser deixado no lugar do ovo para manter a ilus??o.Amon olhou para sua trouxa, e retirou apenas um ??nico pergaminho de l?? antes de lan??ar mais uma vez o feiti??o.Por um instante parecia que haviam dois ovos exatamente iguais no ninho, mas o aprendiz levou o verdadeiro consigo.",
        pag13: "Um grupo de humanos entrou no covil do drag??o, atra??ndo mais uma vez a aten????o da criatura, e, mais uma vez, Amon utilizou essa chance para escapar pelo mesmo lugar por onde entrou.",
        pag14: "Apenas quando ele chega do lado de fora que percebe um brilho vermelho emanando do seu bra??o esquerdo.Quando o brilho se dissipa, ?? revelada a runa de fogo na cor preta cercada de outros s??mbolos menores indicando sua ativa????o, a marca de que o jovem aprendiz acabar?? de receber o t??tulo de Mago Elemental do Fogo.",
        pag15: "O extase da vit??ria estava estampado em seu rosto na forma de um sorriso que h?? muito tempo n??o tinha visitado o rosto de Amon.Isso ??...at?? o jovem puxar a manga de seu bra??o direito e perceber que sua outra marca n??o havia sido ativada. ",
        pag16: "Em seu bra??o direito havia a runa das trevas.",
        pag17: "Mas o que? Por qu??? Ele se perguntou. Eu fiz tudo certo. E para qu??? Para nada! Ele disse ao segurar firmemente o pergaminho contra seu peito.",
        pag18: "Amon se exaltou, e em seu momento de f??ria, jogou o ovo no ch??o. Apesar da apar??ncia, o ovo ainda era delicado e se rachou no impacto, perdendo tamb??m todo o brilho que ele antes apresentava.",
        pag19: "Mas enquanto o ovo perdia seu brilho, a marca no bra??o direito de Amon ganhava. Semelhante ao que aconteceu com a runa em seu bra??o esquerdo, a runa das trevas tamb??m recebeu uma moldura de outros s??mbolos menores.",
        pag20: "O sorriso voltou ao rosto do mago. Um riso maldoso escapou de sua garganta, e ao cerrar sua m??o esquerda, os restos do ovo viraram chamas. Com um gesto de sua m??o direita, as chamas tomaram uma cor roxa, ganharam uma consist??ncia de plasma e a forma come??ou a mudar.",
        pag21: "Qualquer que fosse a coisa que ele estava tentando criar n??o vingou. A forma, de repente se estilha??ou como vidro, e o sorriso do mago voltou a desaparecer.",
        pag22: "Ele tinha falhado.",
        pag23: "O pergaminho caiu aos seus p??s, e em seguida Amon caiu sobre seus joelhos. Seus olhos estavam arregalados enquanto suas m??os tentavam coletar os peda??os do que for?? seu fracasso. As l??grimas desenharam rios constantes nas bochechas do mago, enquanto ele se encolhia cada vez mais.",
        pag24: "<p class='sepaker'>Amon - Eu falhei. Eu falhei de novo... Me perdoe.</p>",
        pag25: "<p class='sepaker'>Amon - Anyx.</p>",
        pag26: "Fim - Cora????o partido",
    },
    textAmon112: {
        pag1: "Amon decide encontrar outro caminho.",
        pag2: "Afinal uma montanha daquela propor????o sem d??vida teria mais de uma entrada.",
        pag3: "O grupo de bokoblins parecia entretido o suficiente para n??o perceber o aprendiz enquanto ele se esgueirava do grupo. O caminho alternativo se provou mais ??ncreme do que o caminho original, mas Amon cosegue chegar isleso dentro da caverna que leva ??s piscinas de lava.",
        pag4: "Amon continuou caminhando pela caverna, tendo que realizar pequenos encantamentos de prote????o ?? fogo e calor no caminho.Logo, ouviu- se o barrulho e bolhas estourando na lava.Ele sabia que estava perto de seu objetivo final.",
        pag5: "Finalmente, ele pode ver de longe um ovo, sua parte inferios apresentavam detalhes que se assemelhavam a placas tectonicas em um rio de lava, j?? a parte superior era brilhante como ferro derretido.Sem d??vida era cria de um drag??o vermelho.",
        pag6: "Aninhando o ovo estava a criatura que provavelmente era a m??e, um drag??o vermelho.Suas pupilas estavam contra??das, finas como um fio de cabelo, enquanto o drag??o escaneava seu covil.Cad??veres se encontravam espalhados pelo local, alguns eram restos de comida, outros...provavelmente guerreiros e aventureiros tolos que ousaram enfretar a besta.",
        pag7: "Amon estava escondido atr??s de uma rocha, n??o levaria muito tempo para que o drag??o percebesse sua presen??a.",
        pag8: "O que ele faz?",
    },
    textAmon1121: {
        pag1: "Amon decide enganar o drag??o",
        pag2: "De sua pequena trouxa ele retirou seu livro e pergaminhos. Algo contido dentro daqueles pap??is com certeza lhe seria ??til.",
        pag3: "Sua paz n??o dura muito, uma vez que o drag??o ouve o farfalhar dos papeis. Um rosnado grave come??a a emanar da garganta da besta, dizendo para qualquer criatura que ali estivesse que fosse embora.",
        pag4: "As m??os de Amon come??aram a trabalhar cada vez mais r??pido em busca de algo- qualquer coisa que pudesse ajud??-lo.",
        pag5: "A caverna treme quando a criatura levanta. Amon precisa ser r??pido e preciso.",
        pag6: "A caverna treme novamente. Amon segura firmemente o pergaminho.",
        pag7: "O rosnado cresce. Os dedos de Amon tremem enquanto ele desenha a runa.",
        pag8: "A ponta dos chifres do monstro podiam ser vistas por detras da rocha quando Amon finalizou sua runa, um feiti??o de ilus??o n??o funcionaria por muito tempo, mais uma vez o aprendiz precisaria ser meticuloso em rela????o aos seus proximos passos.",
        pag9: "Apesar de estar oculto em sua ilus??o, o drag??o continuou se aproximando, mas sua cabe??a voltou sua aten????o para a entrada da caverna. De l?? podia ser ouvido um alvoro??o se aproximando.",
        pag10: "Os bokoblins voltaram, Amon pensou.Preciso aproveitar enquanto o drag??o est?? destra??do.",
        pag11: "E assim o fez.Em sua distra????o, a criatura nem notou quando o pequeno humano passou por suas garras e chegou ao ninho.",
        pag12: "Algo teria que ser deixado no lugar do ovo para manter a ilus??o.Amon olhou para sua trouxa, e retirou apenas um ??nico pergaminho de l?? antes de lan??ar mais uma vez o feiti??o.Por um instante parecia que haviam dois ovos exatamente iguais no ninho, mas o aprendiz levou o verdadeiro consigo.",
        pag13: "Um grupo de humanos entrou no covil do drag??o, atra??ndo mais uma vez a aten????o da criatura, e, mais uma vez, Amon utilizou essa chance para escapar pelo mesmo lugar por onde entrou.",
        pag14: "Apenas quando ele chega do lado de fora que percebe um brilho vermelho emanando do seu bra??o esquerdo.Quando o brilho se dissipa, ?? revelada a runa de fogo na cor preta cercada de outros s??mbolos menores indicando sua ativa????o, a marca de que o jovem aprendiz acabar?? de receber o t??tulo de Mago Elemental do Fogo.",
        pag15: "O extase da vit??ria estava estampado em seu rosto na forma de um sorriso que h?? muito tempo n??o tinha visitado o rosto de Amon.Isso ??...at?? o jovem puxar a manga de seu bra??o direito e perceber que sua outra marca n??o havia sido ativada. ",
        pag16: "Em seu bra??o direito havia a runa das trevas.",
        pag17: "Mas o que? Por qu??? Ele se perguntou. Eu fiz tudo certo. E para qu??? Para nada! Ele disse ao segurar firmemente o pergaminho contra seu peito.",
        pag18: "Amon se exaltou, e em seu momento de f??ria, jogou o ovo no ch??o. Apesar da apar??ncia, o ovo ainda era delicado e se rachou no impacto, perdendo tamb??m todo o brilho que ele antes apresentava.",
        pag19: "Mas enquanto o ovo perdia seu brilho, a marca no bra??o direito de Amon ganhava. Semelhante ao que aconteceu com a runa em seu bra??o esquerdo, a runa das trevas tamb??m recebeu uma moldura de outros s??mbolos menores.",
        pag20: "O sorriso voltou ao rosto do mago. Um riso maldoso escapou de sua garganta, e ao cerrar sua m??o esquerda, os restos do ovo viraram chamas. Com um gesto de sua m??o direita, as chamas tomaram uma cor roxa, ganharam uma consist??ncia de plasma e a forma come??ou a mudar.",
        pag21: "Qualquer que fosse a coisa que ele estava tentando criar n??o vingou. A forma, de repente se estilha??ou como vidro, e o sorriso do mago voltou a desaparecer.",
        pag22: "Ele tinha falhado.",
        pag23: "O pergaminho caiu aos seus p??s, e em seguida Amon caiu sobre seus joelhos. Seus olhos estavam arregalados enquanto suas m??os tentavam coletar os peda??os do que for?? seu fracasso. As l??grimas desenharam rios constantes nas bochechas do mago, enquanto ele se encolhia cada vez mais.",
        pag24: "<p class='sepaker'>Amon - Eu falhei. Eu falhei de novo... Me perdoe.</p>",
        pag25: "<p class='sepaker'>Amon - Anyx.</p>",
        pag26: "Fim - Cora????o partido",
    },
    textAmon1122: {
        pag1: "Amon decide atacar a fera.",
        pag2: "N??o seria uma tarefa f??cil, mas ele havia treinado anos para conseguir passar por essa prova, e ainda havia algo que ele precisava fazer nesse mundo. Ele n??o podia falhar.",
        pag3: "A fera estava atenta, como qualquer guardi??o que est?? protegendo seu ovo. Ele n??o teria o elemento da surpresa ao seu lado. Sorte tamb??m n??o era sua aliada nesse momento. Afinal como o jovem conseguiria ter exito em matar uma criatura que as escamas formam um escudo protetor em quase todo o seu corpo?",
        pag4: "Para ter qualquer chance de sucesso, Amon precisaria mirar diretamente no cora????o da criatura. Se ele conseguisse que o drag??o lhe mostrasse sua barriga talvez ele tivesse uma, e ??nica chance.",
        pag5: "Antes de bolar uma estrat??gia, as asas da criaturas passaram por sua vis??o perif??rica. Mas ?? claro, ele pensou. Basta apenas imobiliz??-lo.",
        pag6: "Isso ele conseguiria fazer facilmente com suas lancetas m??gicas. Esse feiti??o permitia ao mago materializar quantas lan??as ele quisesse e na propor????o que quisesse- contanto que ele conseguisse se concentrar e que tivesse estamina o sufici??nte.",
        pag7: "Amon come??ou a desenhar no ar o s??mbolo do seu encantamento, seus olhos se fecharam enquanto ele balbuciava as palavras. Nessa altura do campeonato jovens aprendizes j?? n??o precisam mais recitar seus feiti??os em voz alta, mas para atingir a concentra????o que ele necessitava contra o drag??o era algo necess??rio.",
        pag8: "Finalmente, quando o feiti??o foi conlu??do, lan??as enormes ca??ram do topo da caverna e acertaram as asas do drag??o indefeso. Os gunidos de dor da criatura ecoavam pela caverna, fazendo as paredes e as estalactites tremerem, certamente os sons de dor e agonia eram ouvidos por criaturas at?? fora da caverna.",
        pag9: "Amon cambaleou contra a rocha, a energia necess??ria para lan??ar o feiti??o em jun????o com os gritos da criatura fizeram sua cabe??a girar. Mas ele n??o podia parar agora.",
        pag10: "Finalmente, a criatura pode ver quem estava profanando seu lar. Um humano com uma capa vermelha, com olhos mais aterrorizantes do que aqueles dos drag??es negros. O drag??o podia sentir o seu fim chegando, enquanto o sangue de seus ferimentos formavam po??as ao seu redor.",
        pag11: "N??o havia orgulho no olhar do aprendiz, nem alegria, muito menos tristeza.Essa foi a ??ltima coisa que o drag??o viu antes do mago fazer as estalactites j?? enfraquecidas ca??rem sobre sua cabe??a.Foi a ??ltima coisa que a criatura viu e foi um olhar que demonstrava apenas indiferen??a.",
        pag12: "O mago passou pelas po??as de sangue e levantou o ovo do seu ninho.Realmente ovos de drag??es eram coisas belas, n??o era de se surpreender que algo como aquilo valia milh??es no mercado.Mas Amon n??o estava ali naquela caverna em busca de mercadoria.",
        pag13: "N??o, o seu pr??mio veio na forma de uma tatuagem em seu bra??o esquerdo.A runa de fogo, cercada por diversos outros s??mbolos menores.A marca brilhava em um tom vermelho.",
        pag14: "Mas n??o foi a marca em seu bra??o esquerdo que o fez sorrir, foi a marca em seu bra??o direito.Um brilho roxo logo se dissipou e mostrou a runa das trevas tamb??m rodeada de s??mbolos menores.Ele havia conseguido.Agora Amon era o mais novo Mago Elemental do Fogo e das Trevas.",
        pag15: "Amon posicionou o ovo e sua trouxa no ch??o e ent??o, com o cerrar de sua m??o esquerda os restos do drag??o se tornaram chamas; com o cerrar de sua m??o direita as chamas se tornaram plasma em uma tonalidade arrocheada.",
        pag16: "A forma que antes era dos restos mortais do drag??o come??ou a mudar, se comprimindo, e formando cada vez mais uma forma humanoide.Agora no lugar de um drag??o, havia algo de propor????es muito menores.",
        pag17: "O que antes eram asas de drag??o agora eram asas como as de borboletas em diversos tons de azul e verde, longas e delicadas.A criatura que estava diante do mago tinha longos cabelos azuis claros e pele azul como o c??u da noite.",
        pag18: "Seus olhos lilas se voltaram para o mago, e uma doce voz chamou '...Amon?'",
        pag19: "Fim - Unidos novamente",
    },
    textAmon12: {
        pag1: "Amon decide se juntar aos aventureiros.",
        pag2: "Teria sido mais r??pido continuar sozinho, mas caso ele estivesse sozinho, ele estaria em desvantagem, n??o poderia parar para comer ou descansar.Afinal, nunca se sabe que tipo de criaturas est?? escondida nessa floresta.",
        pag3: "Dentre aquele grupo, algumas pessoas se destacavam das demais.Eram eles: Bruce, Robin, Charlie e Clara.",
        pag4: "Bruce parecia ser algo como o l??der daquele grupo, e julgando pelo seu f??sico e pelas cicatrizes, era provavelmente o mais experi??nte tamb??m.Arma de op????o: Machado, e pelas marcas, foi um feito pelos an??es das montanhas ao sul.",
        pag5: "Robin era o bra??o direito de Bruce, ela n??o era de falar muito mas estava sempre por perto do l??der.Alta, de cabelos castanhos e olhos verdes e orelhas pontudas.Arma de op????o: arco e flecha.",
        pag6: "Charlie, longos cabelos loiros e olhos cinza, a estatura baixa e falta de barba o faziam parecer uma crian??a.Ele era, ao ver de Amon, era a crian??a estranha do grupo.Algum tipo de curandeiro, mas com um caldeir??o que fazia ele parecer um mestre de po????es.Talvez ele tenha estudado para ser mago ou algo parecido.",
        pag7: "E Clara, aquela que teve a inicitiativa de chamar Amon para o grupo.Estatura m??dia, cabelos castanhos encaraculados, humana.O ??nico detalhe que chamava mais aten????o nela era a adaga pendurada em seu quadril.A bainha tinha inscri????es em uma l??ngua antiga, o que tamb??m indica que aquele conjunto devia ser t??o antigo quanto, mas estava t??o bem conservado que quase n??o parecia uma rel??quia.",
        pag8: "O grupo fez rondas para dormir, e ao nascer do sol todos j?? estavam de p??.?? incr??vel a disposi????o desses aventureiros, Amon pensou.",
        pag9: "Quando eles finalmente chegaram ao p?? da montanha, avistaram um grupo de bokoblins bloqueando a entrada.",
        pag10: "< p class= 'speaker' > Bruce</p><p>Isso explica porque a floresta est?? t??o vazia.</p>",
        pag11: "<p class='speaker'>Bruce</p><p>Bokoblins. Parasitas, v??o para qualquer lugar e montam seu acampamento. E esses parecem j?? estar aqui h?? um bom tempo. Robin e Amon, vamos precisar de suporte para passar por eles, Charlie fique atento com os feridos, o resto vem comigo.</p>",
        pag12: "<p class='speaker'>Bruce</p><p>Robin, eu preciso que voc?? acerte aquele l?? com a trompeta. Se eles n??o conseguirem chamar refor??os n??s teremos uma boa chance.</p>",
        pag13: "Bruce continuou contando quais eram os planos de ataque para a parte do time que ficaria na linha de frente, enquanto isso Amon s?? pensava em como ele deveria agir em rela????o a eles.",
        pag14: "Talvez o grupo poderia ter alguma uitlidade como escudo, Amon poderia usar eles para cansar o inimo...Ou talvez ele deveria ajud??- los como pudesse, afinal quanto maiores os n??meros, maiores as chances dele conseguir o ovo.",
        pag15: "O que ele deveria fazer?",
    },
    textAmon121: {
        pag1: "Amon decide ajudar ativamente.",
        pag2: "Ap??s o ataque in??cial de Robin, os demais v??o a luta brandando suas armas de prefer??ncia.Enquanto isso Amon e Robin ajudam o grupo pela retaguarda, liquidade qualquer inimigo que tente atacar os demais companheiros por tr??s.",
        pag3: "Amon era muito habilidoso com suas lan??as m??gicas, o que logo fez com que Robin sileciosamente o convidasse para uma competi????o de mira.E como algu??m consegue fazer isso voc?? pergunta? Com o olhar.Cada vez que uma flecha de Robin acertava seu alvo, ela olhava para Amon como se tivesse ganhado um ponto.E, ?? claro, Amon retornou o favor.",
        pag4: "Bem, como Bruce previu, sem os refor??os foi f??cil de derrotar os bokoblins.O grupo se uniu para comemorar, e Charlie come??ou a atender os feridos.",
        pag5: "< p class= 'speaker' > Robin</p> <p>Nada mal para um mago.</p>",
        pag6: "Essas foram as palavras da arqueira para Amon antes dela ir se juntar ao grupo.Amon apenas revirou os olhos, mas n??o conseguiu conter uma pequena o brilho nos seus olhos, orgulhoso com o seu feito.",
        pag7: "O grupo aproveita a fogueira dos bokoblins para preparar uma pequena refei????o antes de entrarem na caverna, essa escolha foi o sufici??nte para deixar Amon mal- humorado.Ao ver do aprendiz isso era uma perda de tempo.",
        pag8: "< p class='speaker' > Clara</p ><p>Amon? Eu queria te agradecer por ter nos ajudado. Vamos precisar do maior n??mero de pessoas que conseguirmos para enfrentar o que tem dentro da caverna.</p>",
        pag9: "<p class='speaker'>Clara</p><p>Voc?? sabe... o drag??o. Essa esp??cie de drag??o vermelho est?? desaparecendo, mas recentemente foi formado um casal e bem, agora a f??mea est?? dentro dessa caverna com o mais novo ovo.</p>",
        pag10: "<p class='speaker'>Amon</p><p>E voc??s pretendem matar o drag??o?</p>",
        pag11: "<p class='speaker'>Clara</p><p>N??o. N??o, claro que n??o! S?? queremos coletar algumas amostras e observar o drag??o- ah, mas se conseguirmos pegar alguns min??rios que tem l?? dentro tamb??m seria ??timo.</p>",
        pag12: "<p class='speaker'>Amon</p><p>Eu n??o me importo com o que voc??s querem fazer l?? dentro, desde que n??o me impe??a de pegar o ovo.</p>",
        pag13: "<p class='speaker'>Clara</p><p>O ovo? Para que voc?? precisa do ovo?</p>",
        pag14: "Clara estava come??ando a ficar desconfiada, mas depois que Amon explicou sobre a prova para virar um mago elemental, a aventureira pareceu estar disposta a ajud?? - lo.Com uma condi????o, ?? claro.Amon deveria devolver o ovo depois de concluir sua prova.Amon concordou.",
        pag15: "Clara compartilhou a hist??ria de Amon com Bruce, e foi decidido que o aprendiz teria o apoio do grupo.",
        pag16: "Com a refei????o finalizada, o grupo partiu para o interior da caverna.Amon forneceu a todos encatamentos contra fogo e calor, Charlie fez algo similar com suas po????es.",
        pag17: "No interior da caverna, rodeado por lagos de lava, estava o drag??o aninhando seu ovo.O drag??o era uma bela criatura, suas escamas eram vermelhas como rubis e seus olhos, dourados como o sol.Entretanto o que drag??es tem de belos tamb??m tem de astutos.",
        pag18: "O drag??o rapidamente percebeu que um grupo se aproximava e um rosnado nasceu no interior de sua garganta.",
        pag19: "< p class='speaker' > Bruce</p > <p>Bom, ?? aqui que nos separamos Amon. Boa sorte com o seu teste.</p>",
        pag20: "Com isso, Bruce liderou o grupo para distrair o drag??o.Por mais que o plano de Bruce tenha soado bom o sufici??nte para imobilizar o drag??o... Amon sentiu sua consci??ncia pesada.Ele se questionava o porque disso, mas enquanto o grupo dava o seu melhor para prender a aten????o do drag??o, Amon teve que fazer uma escolha.",

    },
    textAmon1211: {
        pag1: "Amon decide ajudar o grupo.",
        pag2: "Amon precisa fazer algo, e r??pido, sen??o algu??m pode acabar sendo esmagado pelas garras da criatura. Poderia ser Bruce, Clara, Robin, Anyx, Charlie. Qualquer um. Mas n??o poder ferir a criatura certamente era algo que deixava seu leque de op????es estreito.",
        pag3: "<p class='speaker'>Charlie</p><p>Amon! Voc?? ainda est?? aqui- mas o, o ovo.</p>",
        pag4: "<p class='speaker'>Amon</p><p>Charlie, n??s n??o temos tempo para isso. N??s precisamos imobilizar aquele drag??o de alguma forma.</p>",
        pag5: "<p class='speaker'>Charlie</p><p>Ah! N??s poder??amos fazer ela dormir. Se apenas eu tivesse uma dose grande o sufici??nte para um drag??o... Esquece.</p>",
        pag6: "<p class='speaker'>Amon</p><p>N??o, isso pode funcionar. Talvez n??o com uma po????o, mas um feiti??o.</p>",
        pag7: "Amon retirou o livro de dentro de sua trouxa, alguns pergaminhos cairam no processo, mas o feiti??o que ele precisava estava no livro. Ele entregou o livro para Charlie e apontou para um c??rculo m??gico.",
        pag8: "<p class='speaker'>Amon</p><p>Vou precisar que voc?? desenhe esse c??rculo ao sul e leste do drag??o, eu farei o mesmo ao norte e oeste. N??o temos tempo a perder. R??pido!</p>",
        pag9: "Amon saiu apressado para a dire????o oeste, Charlie pareceu confuso por um breve momento mas ele logo se direcionou para o que seria a dire????o sul do drag??o.",
        pag10: "Amon conseguiu recriar o c??rculo facilmente, Charlie teve um pouco de dificuldade tanto que o aprendiz teve que ganhar tempo para que o pequeno homem conseguisse finalizar a sua tarefa.",
        pag11: "Com os quatro c??rculos desenhados no ch??o, Amon come??ou a recitar o encatamento, fazendo o gestos necess??rios para recriar o s??mbolo no ar. Cada um dos quatro s??mbolos brilhou, e de cada um surgiram caminhos que conectaram os quatro c??rculos em um ??nico c??rculo.",
        pag12: "O feiti??o foi um sucesso, o drag??o logo se sentiu sonolento, e seus olhos se fecharam lentamente.J?? o seu corpo caiu rapidamente no ch??o.Mais uma vez, havia chegado a hora do grupo celebrar.Novamente, Charlie foi atr??s dos feridos, Robin se reuniu com Bruce, e Bruce parabenizou o time antes deles se dispersarem atr??s de min??rios raros e amostras de sangue e escamas de drag??o.",
        pag13: "Enquanto isso Amon tentava se recompor do feiti??o, enfeiti??ar uma criatura da estatura de um drag??o era algo exaustivo que faria a cabe??a de qualquer um girar.Amon se senta no ch??o e p??e sua cabe??a em suas m??os.",
        pag14: "Clara, vendo o aprendiz se sentar, tomou a liberdade de levar o ovo at?? ele.",
        pag15: "< p class= 'speaker' > Clara</p> <p>Ei. Parece que voc?? nos salvou de novo. Foi uma boa id??ia colocar o drag??o para dormir.</p>",
        pag16: "Ela riu suavemente e ofereceu a ele o ovo.",
        pag17: "< p class= 'speaker' > Amon</p> <p>Bobagem. Foi tudo id??ia do Charlie.</p>",
        pag18: "Ele levantou a cabe??a para olh?? - la nos olhos e pegar o ovo, mas sua vis??o estva turva, e, por um momento, ele jurou ter visto algu??m que n??o estava l??.",
        pag19: "< p class='speaker' > Amon</p ><p>Ani... N??o, ele balan??ou a cabe??a. No momento que ele ia pegar o ovo, seus olhos se arregalaram como se houvesse algo muito importante que ele havia esquecido.</p>",
        pag20: "<p class='speaker'>Amon</p><p>Cad??? Ele questionou enquanto retirava freneticamente os itens restantes de sua trouxa. Cad??? N??o est?? aqui, mas onde?</p>",
        pag21: "<p class='speaker'>Amon</p><p>Ah... ?? claro.</p>",
        pag22: "Ele finalmente tomou o ovo em sua m??os.No momento em que ele tocou o ovo, seu bra??o esquerdo brilhou em vermelho, e quando o brilho se dissipou foi revelada a runa do fogo emoldurada por diversos s??mbolos menores.No entanto ele n??o parecia t??o empolgado com isso.",
        pag23: "< p class='speaker' > Clara</p ><p>Amon, o seu bra??o! Voc?? conseguiu, Amon. Voc?? agora ?? um mago de... fogo, certo?</p>",
        pag24: "< p class= 'speaker' > Clara</p><p>Amon, o que foi?</p>",
        pag25: "<p class='speaker'>Amon</p><p>Eu perdi o pergaminho. Caiu na lava quando eu peguei o caderno- Ele suspirou.</p>",
        pag24: "< p class= 'speaker' > Amon</p><p>Era a ??nica coisa que eu tinha para me lembrar... me lembrar dela. J?? que nem isso- ele puxou a manga do seu bra??o direito, revelando a runa das trevas, mas diferente da runa de fogo, a das trevas estava sozinha em um tom desbotado de preto. Nem isso funcionou.</p>",
        pag25: "< p class= 'speaker' > Amon</p><p>N??o se consegue trazer os mortos de volto apenas com fogo. E aquele- Aquele idiota da floresta n??o disse como eu posso ativar a runa das trevas.</p>",
        pag26: "<p class='speaker'>Clara</p><p>Trevas? Eu achei que esse elemento tinha sido... proibido h?? muitas d??cadas.</p>",
        pag27: "<p class='speaker'>Amon</p><p>Sim e n??o. A esfera das trevas foi perdida h?? muito tempo atr??s com o ??ltimo Mago elemental das trevas, mas isso n??o vem ao caso.</p>",
        pag28: "<p class='speaker'>Clara</p><p>Isso n??o ?? da minha conta, mas... quem ?? essa pessoa que voc?? tanto quer trazer de volta?</p>",
        pag29: "< p class= 'speaker' > Amon</p><p>Anyx. Ela ??- era, e sempre foi tudo que falta em mim. Ela morreu em um- em um conflito desnecess??rio. E eu n??o pude salv??-la.</p>",
        pag30: "<p class='speaker'>Amon</p><p>Ani morreu na minha frente, deu seus ??ltimos suspiros em meus bra??os. Se apenas eu fosse mais forte na ??poca.</p>",
        pag31: "A respira????o do garoto estremeceu, como se tivesse usando todas as suas for??as para conter algo em sua garganta.Clara envolveu o mago em seus bra??os, permitindo que o garoto deixasse a sua fraqueza escapar sem mais ningu??m ver.",
        pag32: "Algo em Amon mudou naquele dia.Ele percebeu que Anyx tinha partido, e que ela n??o voltaria, nem se ele troussesse ela de volta.Essa n??o seria a vontade dela.Ent??o, Amon pode finalmente aceitar que ela estava morta.Ele ainda sentia sua falta, e talvez iria continuar sentindo at?? o fim dos tempos, mas agora ele n??o estava mais sozinho.",
        pag33: "Amon se juntou ao grupo.Essa teria sido a vontade de Anyx.",
        pag34: "Fim - novos come??os",
    },
    textAmon1212: {
        pag1: "Amon decide pegar o ovo.",
        pag2: "Ele aproveitou enquanto todos est??o lutando para correr at?? o ninho. Gritos ecoavam para todos os lados, clar??es subitos indicavam que a criatura estava utilizando sua respira????o de fogo para afugentar os invasores, mas Amon tinha apenas um objetivo: pegar o ovo e sair dali.",
        pag3: "Tempos depois o grupo conseguiu imobilizar a criatura, e eles tiveram que agir r??pido, antes que o drag??o pudesse se soltar. Bruce e Robin continuaram dando as ordens enquanto Charlie corria para atender os feridos, infelizmente alguns deles nunca voltariam a ser o que eram antes.",
        pag4: "Com tudo estabelecido, Clara foi atr??s de Amon para recuperar o ovo, mas o que ela viu quando chegou no lado de fora foi uma vis??o aterrorizante. Uma tatugem negra brilhava no bra??o direito de Amon, e o ovo n??o estava em nenhum lugar.",
        pag5: "O rosto dele demonstrava que o mago estava t??o chocado quanto ela.",
        pag6: "<p class='speaker'>Clara</p><p>A-amon, o que voc?? fez? O que voc?? fez? O-o ovo-</p>",
        pag7: "Clara n??o precisava de uma resposta para entender que Amon havia acabado com a vida da pobre criatura. Ao menos ela esperava alguma justificativa, alguma tentativa de se defender, mas n??o obteve nem isso. Amon permaneceu em sil??ncio.",
        pag8: "Com os nervos a flor da pele, Clara, com sua m??o tr??mula, retirou a adaga da bainha e apontou para o mago. Ela iria atacar.",
        pag9: "O que Amon deve fazer?",
    },
    textAmon12121: {
        pag1: "Amon decide n??o revidar.",
        pag2: "Ele permaneceu im??vel enquanto Clara avan??ava em sua dire????o. Sua adaga conseguiu facilmente perfurar o peito do mago. Seu sangue come??ou a jorrar pela ferida ao passo que as l??grimas come??aram a correr pelas suas bochechas, mas em seu olhar n??o havia dor, apenas culpa.",
        pag3: "<p class='speaker'>Amon</p><p>Me perdoe.</p>",
        pag4: "A vida se esvaiu do mago, e Clara ao se recuperar da adrenalina, rapidamente retirou a adaga do corpo de Amon; ao ver o sangue, ela atirou a adaga para longe e caiu em um canto. Mas essa n??o foi a pior parte, porque enquanto suas pernas e bra??os tremian... a runa das trevas apareceu em seu bra??o direito, brilhando em um tom de roxo.",
        pag5: "Fim - A doen??a p??rpura",
    },
    textAmon12122: {
        pag1: "Amon decide revidar.",
        pag2: "Ao observar a postura de Clara, ele consegue ver que ela est?? mirando para deferir um ataque fatal, mas ele n??o fica parado s?? observando. A altera????o de Clara a tornou extremamente previs??vel, e Amon consegue facilmente revidar.",
        pag3: "?? uma vit??ria amarga. Por mais que Clara tenha sobrevivido, Amon estava mais uma vez sozinho. Ele n??o poderia retornar para o grupo, Anyx estava morta, e a vergonha que veio acompanhada de seus atos n??o permitiria que ele retornasse ?? escola. Ent??o sua vida ficou fadada a isso, vagar eternamente sem ningu??m, e muito menos sem sua querida Anyx.",
        pag4: "Fim - Sozinho para sempre",
    },
    textAmon122: {
        pag1: "Amon decide esperar o grupo cansar os inimigos.",
        pag2: "Como Robin estava ao seu lado ele n??o podia simplesmente ficar esperando de bra??os cruzados, ent??o ele interpretou seu papel, apenas ajudando o grupo a lutar quando estavam sobrando apenas poucos inimigos.",
        pag3: "<p class='speaker'>Robin</p><p>Mais sorte na pr??xima vez, mago.</p>",
        pag4: "Robin abaixou seu arco e logo se juntou aos demais, ajudando reunir os feridos em um ??nico lugar para facilitar o trabalho do pequeno Charlie. Mas pelo menos Amon ainda tinha energias o sufici??nte sobrando para aguentar qualquer desafio que viesse.",
        pag5: "Clara vem para agradece-lo, e julgando pelo seu estado, ela tamb??m iria precisar dos cuidados de Charlie. ?? incr??vel como esse povo consegue t??o facilmente confiar suas vidas a um estranho, Amon pensou.",
        pag6: "O caminho dentro da caverna se prova tortuoso, Charlie teve que fornecer o m??ximo de po????es anti-calor para os integrantes do grupo. Para n??o fazer desfeita, Amon tamb??m ajudou os demais fornecendo encatamentos de prote????o contra fogo.",
        pag7: "Finalmente o grupo chegou ao covil do drag??o. O ninho era cerdado por canais de lava, um lugar perfeito para um drag??o vermelho proteger a sua cria.",
        pag8: "Bruce revisou a estrat??gia j?? ensaiada pelo grupo para imobilizar o drag??o, e eles iniciaram seu ataque. Entretanto a exaust??o fez com que eles ficassem em maus len????is. Nesse momento Amon ?? agraciado por duas escolhas: ficar e ajudar ou roubar o ovo.",
        pag9: "O que ele deve fazer?",
    },
    textAmon1221: {
        pag1: "Amon decide ajudar o grupo.",
        pag2: "Claro, o plano original de Amon seria neutralizar a criatura, mas como ele n??o queria uma multid??o furiosa indo atr??s dele, ele fez o que pode para ajudar na estrat??gia de Bruce.",
        pag3: "Seguindo o ritual ap??s a batalha, Charlie correu para socorrer os feridos. Clara provavelmente est?? entre eles para n??o vir at?? aqui me perturbar, Amon pensou mas isso n??o era relevante. O que importava era o ovo que Amon estava levando consigo enquanto os demais membros do grupo se ocupavam com a coleta de amostras e min??rios. Quer dizer, todos menos um.",
        pag4: "Robin tinha achado estranho o comportamento de Amon desde o princ??pio. N??o era poss??vel que algu??m que erasse tantos inimigos come??asse a acertar todos os seus alvos depois que todos j?? estavam feridos. E ent??o, Robin o seguiu para fora da caverna e se escondeu na vegeta????o.",
        pag5: "De l?? ela pode ver claramente o momento que o mago atirou o ovo no ch??o, at?? o momento em que seu bra??o direito come??ou a brilhar. O brilho era roxo. Estranho, ela pensou. Havia apenas um elemento que poderia emitir aquele tipo de brilho.",
        pag6: "Quando Amon moveu seu bra??o, as suspeitas de Robin se confirmaram, o s??mbolo em seu bra??o direito era a runa das trevas. O choque foi sufici??nte para fazer com que ela demorasse alguns segundos antes de sair dos arbustos e apontar uma flecha na dire????o do mago enquanto ela o chamava de covarde, mas j?? era tarde de mais para o pequeno drag??o.",
        pag7: "Os restos do ovo j?? tinham sido insinerados, e ap??s uma transforma????o bizarra em plasma, ele tinha se estilha??ado em v??rios peda??os, igual vidro.",
        pag8: "<p class='speaker'>Amon</p><p>Mas ?? claro, meu feiti??o falhou, mas eu sei como consertar- ele disse para ningu??m em particular.</p>",
        pag9: "Robin n??o entendeu o que ele estava querendo dizer, mas n??o importa o quanto ela exigisse uma explica????o, ele n??o parecia ouvir. Alias, ele parecia completamente fora de si. Sorrindo, mesmo estando na mira do arco.",
        pag10: "Foi ent??o que Robin percebeu, Amon poderia estar na mira de seu arco, mas ela estava na mira das lan??as m??gicas do mago. N??o deu tempo da arqueira se defender, as lan??as atravessaram sua figura sem nenhuma exita????o. Como um ??ltimo ato de protesto, ela conseguiu soltar o seu arco, mas quando a ponta raspou a bochecha do mago, ela j?? n??o estava mais ensse mundo.",
        pag11: "Os restos da guerreira tiveram um destino muito parecido com os restos do ovo, mas ao invez de se quebrar em v??rios peda??os, a forma que o plasma da guerreira tomou era de uma mulher. Uma mulher com longas e belas asas de borboleta, exibindo diversos tons de verde e azul. Seu cabelo era azul claro; sua pele, azul escuro como o c??u a noite; e seus olhos eram prateados como a lua.",
        pag12: "Amon, chamou a doce voz da mo??a, mas antes que ela pudesse se cituar, o mago colocou seus bra??os ao redor dela.",
        pag13: "<p class='speaker'>Amon</p><p>Eu estou aqui, Ani. Nada mais vai nos separar. Nada.</p>",
        pag14: "Fim - At?? que a morte nos separe novamente",
    },
    textAmon1222: {
        pag1: "Amon decice roubar o ovo.",
        pag2: "No meio da confus??o, Amon conseguiu tirar o ovo do ninho. E, acreditando n??o ter sido percebido, ele foge do covil, indo em dire????o a caverna por onde o grupo entrou.",
        pag3: "Sem a ajuda do aprendiz, o grupo eventualmente ?? for??ado a recuar e repensar a sua estrat??gia. Nesse momento, Robin percebe que o mago sumiu, mas ela n??o ?? a ??nica a perceber que algo est?? faltando. O drag??o logo nota a aus??ncia do seu ovo, e da um rosnado t??o alto que faz algumas estalactites da caverna ca??rem. Contudo, seu foco n??o est?? no grupo, e sim no caminho de cheiro que o seu ovo deixou para tr??s.",
        pag4: "O drag??o come??a sua persegui????o, deixando o grupo confuso. Eles n??o entendiam porque a criatura n??o estava amis tentando atac??-los, mas Robin sim.",
        pag5: "A criatura desesperada atr??s de seu ovo sai quebrando partes da caverna e amea??ando cuspir fogo em qualquer coisa que se mova. Amon era astuto, ele estava conseguindo se esconder e esquivar da criatura, entretanto seu desespero estava afetando sua aten????o, tanto que nem percebeu quando Robin apareceu atr??s dele e tomou o ovo.",
        pag6: "Antes que o aprendiz pudesse lan??ar qualquer feiti??o em sua dire????o, ela saltou para uma ??rea aberta, rapidamente atra??ndo a aten????o do drag??o para eles. Amon, vendo a criatura se aproximar, voltou a focar no drag??o, virando as costas para a arqueira. O erro dele foi n??o perceber que ela n??o desperdi??aria essa chance.",
        pag7: "Uma flecha atravessou seu ombro, atrapalhando seu feiti??o. Ao olhar na dire????o da arqueira, foi ai que ele entendeu. Ela n??o estava do seu lado, ela n??o arriscaria machucar o drag??o ou o ovo para sair viva. E foi assim que ele encontrou seu fim nas presas do drag??o.",
        pag8: "Qualquer um que n??o conhecesse a hist??ria de Robin acreditaria que ela sofreria um destino parecido com o de Amon, mas n??o. Quando ela ofereceu o ovo de volta para sua m??e, o drag??o simplesmeste ascenou com a cabe??a como se estivesse agradecido.",
        pag9: "O drag??o partiu logo em seguida para encontrar um novo ninho, e o grupo? Bom, acredita-se que eles sa??ram da caverna e continuaram a acompanhar essa m??e e seu filhote.",
        pag10: "Fim - Palitinho de dente",
    },
}

var plotScene = {
    textAmon1: {
        pag2: ['floresta-noite', ''],
    },
    textAmon11: {
        pag1: ['floresta-dia', ''],
        pag2: ['entrada-caverna', ''],

    },
    textAmon111: {
        pag9: ['covil do drag??o', ''],
    },
    textAmon1111: {
        pag1: ['covil do drag??o', ''],
    },
    textAmon1112: {
        pag1: ['covil do drag??o', ''],
        pag13: ['entrada-caverna', ''],
    },

    textAmon112: {
        pag1: ['entrada-caverna', ''],
        pag3: ['covil do drag??o', ''],
    },
    textAmon1121: {
        pag1: ['covil do drag??o', ''],
        pag13: ['entrada-caverna', ''],
    },
    textAmon1122: {
        pag1: ['covil do drag??o', ''],
    },

    textAmon12: {
        pag2: ['floresta-dia', ''],
        pag9: ['entrada-caverna', ''],
    },
    textAmon121: {
        pag1: ['entrada-caverna', ''],
        pag17: ['covil do drag??o', ''],
    },
    textAmon1211: {
        pag1: ['covil do drag??o', ''],
    },
    textAmon1212: {
        pag1: ['covil do drag??o', ''],
        pag4: ['entrada-caverna', ''],
    },
    textAmon12121: {
        pag1: ['entrada-caverna', ''],
    },
    textAmon12122: {
        pag1: ['entrada-caverna', ''],
    },

    textAmon122: {
        pag1: ['entrada-caverna', ''],
        pag6: ['covil do drag??o', ''],
    },
    textAmon1221: {
        pag1: ['covil do drag??o', ''],
        pag4: ['entrada-caverna', ''],
    },
    textAmon1222: {
        pag1: ['covil do drag??o', ''],
        pag9: ['none', ''],
    },
}

var plotAmon1Choices = ["Continuar sozinho", "Se juntar ao grupo"];
var plotAmon11Choices = ["Lutar", "Encontrar outro caminho"];
var plotAmon111Choices = ["Atacar o drag??o", "Enganar o drag??o"];
var plotAmon1111Choices = [0, 0];
var plotAmon1112Choices = [0, 0];

var plotAmon112Choices = ["Enganar o drag??o", "Atacar o drag??o"];
var plotAmon1121Choices = [0, 0];
var plotAmon1122Choices = [0, 0];


var plotAmon12Choices = ["Lutar ativamente", "Deixar o grupo can??ar o inimigo"];
var plotAmon121Choices = ["Ajudar o grupo", "Pegar o ovo"];
var plotAmon1211Choices = [0, 0];
var plotAmon1212Choices = ["Revidar", "N??o revidar"];
var plotAmon12121Choices = [0, 0];
var plotAmon12122Choices = [0, 0];

var plotAmon122Choices = ["Ajudar o grupo", "Roubar o ovo"];
var plotAmon1221Choices = [0, 0];
var plotAmon1222Choices = [0, 0];

