
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

        // document.querySelector('#scene').classList.toggle('fade');
        var mainElem = document.getElementById("scene");
        mainElem.innerHTML = `<img src='${sceneObject[index][1]}'>`
        // mainElem.src = sceneObject[index][1];

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

var plotAmon = {
    textAmon1: {
        pag2: "Logo após receber sua missão, Amon foi preparar seus itens para levar na viagem, alguns mantimentos, um livro com alguns de seus feitiços favoritos, um mapa, e um pergaminho ou dois.",
        pag3: "Sua jornada começou pela floresta que rodiava a escola. O sol já estava quase se pondo quando Amon percebeu que havia uma fogueira acesa nas redondezas, logo viu também que havia um grupo de aventureiros montando seu acampamento.",
        pag4: "Essa não era uma visão incomum, muitas pessoas viajavam de ponta a ponta do continente em busca de aventuras, riquesas ou os dois.",
        pag5: "Com a mesma facilidade que Amon percebeu o grupo, eles também o perceberam.",
        pag6: "O jovem aprendiz não era do tipo que se juntaria a um grupo de desconhecidos sem ser convidado, e ainda menos sem haver necessidade, afinal ele estava muito bem preparado para qualquer que fosse o desafio.",
        pag7: "Entretanto, uma das aventuras não compartilhava do orgulho de Amon e foi logo o convidar para se juntar a eles.",
        pag8: "<p class='speaker'>Clara</p><p>Olá. Essas roupas... você é um mago, não é mesmo? Você está sozinho, gostaria de se juntar a nós?</p>",
        pag9: "<p class='speaker'>Clara</p><p>Você está indo para o monte Hagan também não está?</p>",
        pag10: "<p class='speaker'>Clara</p><p>Você devia se juntar a nós. É perigoso ir sozinho e nós estamos precisando de um mago...</p>",
    },
    textAmon11: {
        pag1: "Amon decide continuar sozinho.",
        pag2: "Com isso, Amon continuou sua jornada até a montanha de Hagan. Para algumas pessoas pode ser difícil, mas não para um jovem aprendiz de mago, principalmente um que está prestes a se formar. Ele parou algumas vezes, mas nada demorado.",
        pag3: "Com a velocidade que Amon seguiu sua viagem, ele conseguiu chegar no pé da montanha ao nascer do sol.",
        pag4: "Amon não tinha encontrado nenhum inimigo difícil no caminho, tudo estava fluindo bem e ao chegar no pé da montanha, Amon descobriu o porque: havia um grupo de bokoblins acampado na entrada da caverna. Definitivamente eles não eram os inimigos mais desafiadores, mas sua vantagem estava nos números.",
        pag5: "O que ele deveria fazer?",

    },
    textAmon111: {
        pag1: "Amon decide lutar contra o grupo de bokoblins.",
        pag2: "A sua vantagem está no ataque surpresa, com sorte não existem outras criaturas além daqueles no grupo. Amon, se aproximou sorrateiramente e conseguiu aniquilir alguns de seus inimigos, contudo sorte não estava do seu lado e logo ouviu-se uma trompeta chamando por reforços.",
        pag3: "Amon, foi cercado por bokoblins, não havia saída ele teria que utilizar de todas as suas artimanhas que estivessem disponíveis. Enquanto ele lançava feitiços de ataque os inimigos se aproximavam. Amon estava prestes a terminar a runa para enviar uma lança voando nos bokoblins a sua frente, mas ele sentiu uma dor, a qual irradiou do seu ombro até sua mão, forçando-o a parar no meio do feitiço.",
        pag4: "Seus olhos arregalaram quando percebeu que a fonte da dor era uma flecha fincada em seu ombro.",
        pag5: "Se as coisas continuassem assim ele seria derrotado. Derrotado por criaturas mediocres como bokoblins.",
        pag6: "Não, ele pensou.",
        pag7: "Juntando todo resto de suas forças, Amon conjurou uma barreira incandescente, que se espalhou e espalhou até atingir o inimigo mais distantes. Os bokoblins mais próximos sem dúvida foram chamuscados, os mais distantes, contudo, foram apenas postos para correr.",
        pag8: "Com um único movimento, Amon removeu a flecha de seu ombro e recitou algumas palavras de encantamento para curar seu ombro. Ele conseguiu parar o sangramento, contudo a dor persistiu.",
        pag9: "Amon continuou caminhando pela caverna, tendo que realizar pequenos encantamentos de proteção à fogo e calor no caminho. Logo, ouviu-se o barrulho e bolhas estourando na lava. Ele sabia que estava perto de seu objetivo final.",
        pag10: "Finalmente, ele pode ver de longe um ovo, sua parte inferios apresentavam detalhes que se assemelhavam a placas tectonicas em um rio de lava, já a parte superior era brilhante como ferro derretido. Sem dúvida era cria de um dragão vermelho.",
        pag11: "Aninhando o ovo estava a criatura que provavelmente era a mãe, um dragão vermelho. Suas pupilas estavam contraídas, finas como um fio de cabelo, enquanto o dragão escaneava seu covil. Cadáveres se encontravam espalhados pelo local, alguns eram restos de comida, outros... provavelmente guerreiros e aventureiros tolos que ousaram enfretar a besta.",
        pag12: "Amon estava escondido atrás de uma rocha, não levaria muito tempo para que o dragão percebesse sua presença.",
        pag13: "O que ele deveria fazer?",
    },
    textAmon1111: {
        pag1: "Amon inicia sua ofensiva contra o dragão.",
        pag2: "Por mais que não seja impossível matar um dragão, Amon ainda está exausto de toda a viagem e do combate contra o grupo de bokoblins. Infelizmente, a criatura consegue facilmente ter a vantagem, e o jovem aprendiz é consumido pelas chamas.",
        pag3: "Fim - Descanse em chamas"
    },
    textAmon1112: {
        pag1: "Amon decide enganar o dragão",
        pag2: "De sua pequena trouxa ele retirou seu livro e pergaminhos. Algo contido dentro daqueles papéis com certeza lhe seria útil.",
        pag3: "Sua paz não dura muito, uma vez que o dragão ouve o farfalhar dos papeis. Um rosnado grave começa a emanar da garganta da besta, dizendo para qualquer criatura que ali estivesse que fosse embora.",
        pag4: "As mãos de Amon começaram a trabalhar cada vez mais rápido em busca de algo- qualquer coisa que pudesse ajudá-lo.",
        pag5: "A caverna treme quando a criatura levanta. Amon precisa ser rápido e preciso.",
        pag6: "A caverna treme novamente. Amon segura firmemente o pergaminho.",
        pag7: "O rosnado cresce. Os dedos de Amon tremem enquanto ele desenha a runa.",
        pag8: "A ponta dos chifres do monstro podiam ser vistas por detras da rocha quando Amon finalizou sua runa, um feitiço de ilusão não funcionaria por muito tempo, mais uma vez o aprendiz precisaria ser meticuloso em relação aos seus proximos passos.",
        pag9: "Apesar de estar oculto em sua ilusão, o dragão continuou se aproximando, mas sua cabeça voltou sua atenção para a entrada da caverna. De lá podia ser ouvido um alvoroço se aproximando.",
        pag10: "Os bokoblins voltaram, Amon pensou.Preciso aproveitar enquanto o dragão está destraído.",
        pag11: "E assim o fez.Em sua distração, a criatura nem notou quando o pequeno humano passou por suas garras e chegou ao ninho.",
        pag12: "Algo teria que ser deixado no lugar do ovo para manter a ilusão.Amon olhou para sua trouxa, e retirou apenas um único pergaminho de lá antes de lançar mais uma vez o feitiço.Por um instante parecia que haviam dois ovos exatamente iguais no ninho, mas o aprendiz levou o verdadeiro consigo.",
        pag13: "Um grupo de humanos entrou no covil do dragão, atraíndo mais uma vez a atenção da criatura, e, mais uma vez, Amon utilizou essa chance para escapar pelo mesmo lugar por onde entrou.",
        pag14: "Apenas quando ele chega do lado de fora que percebe um brilho vermelho emanando do seu braço esquerdo.Quando o brilho se dissipa, é revelada a runa de fogo na cor preta cercada de outros símbolos menores indicando sua ativação, a marca de que o jovem aprendiz acabará de receber o título de Mago Elemental do Fogo.",
        pag15: "O extase da vitória estava estampado em seu rosto na forma de um sorriso que hà muito tempo não tinha visitado o rosto de Amon.Isso é...até o jovem puxar a manga de seu braço direito e perceber que sua outra marca não havia sido ativada. ",
        pag16: "Em seu braço direito havia a runa das trevas.",
        pag17: "Mas o que? Por quê? Ele se perguntou. Eu fiz tudo certo. E para quê? Para nada! Ele disse ao segurar firmemente o pergaminho contra seu peito.",
        pag18: "Amon se exaltou, e em seu momento de fúria, jogou o ovo no chão. Apesar da aparência, o ovo ainda era delicado e se rachou no impacto, perdendo também todo o brilho que ele antes apresentava.",
        pag19: "Mas enquanto o ovo perdia seu brilho, a marca no braço direito de Amon ganhava. Semelhante ao que aconteceu com a runa em seu braço esquerdo, a runa das trevas também recebeu uma moldura de outros símbolos menores.",
        pag20: "O sorriso voltou ao rosto do mago. Um riso maldoso escapou de sua garganta, e ao cerrar sua mão esquerda, os restos do ovo viraram chamas. Com um gesto de sua mão direita, as chamas tomaram uma cor roxa, ganharam uma consistência de plasma e a forma começou a mudar.",
        pag21: "Qualquer que fosse a coisa que ele estava tentando criar não vingou. A forma, de repente se estilhaçou como vidro, e o sorriso do mago voltou a desaparecer.",
        pag22: "Ele tinha falhado.",
        pag23: "O pergaminho caiu aos seus pés, e em seguida Amon caiu sobre seus joelhos. Seus olhos estavam arregalados enquanto suas mãos tentavam coletar os pedaços do que forá seu fracasso. As lágrimas desenharam rios constantes nas bochechas do mago, enquanto ele se encolhia cada vez mais.",
        pag24: "<p class='sepaker'>Amon - Eu falhei. Eu falhei de novo... Me perdoe.</p>",
        pag25: "<p class='sepaker'>Amon - Anyx.</p>",
        pag26: "Fim - Coração partido",
    },
    textAmon112: {
        pag1: "Amon decide encontrar outro caminho.",
        pag2: "Afinal uma montanha daquela proporção sem dúvida teria mais de uma entrada.",
        pag3: "O grupo de bokoblins parecia entretido o suficiente para não perceber o aprendiz enquanto ele se esgueirava do grupo. O caminho alternativo se provou mais íncreme do que o caminho original, mas Amon cosegue chegar isleso dentro da caverna que leva às piscinas de lava.",
        pag4: "Amon continuou caminhando pela caverna, tendo que realizar pequenos encantamentos de proteção à fogo e calor no caminho.Logo, ouviu- se o barrulho e bolhas estourando na lava.Ele sabia que estava perto de seu objetivo final.",
        pag5: "Finalmente, ele pode ver de longe um ovo, sua parte inferios apresentavam detalhes que se assemelhavam a placas tectonicas em um rio de lava, já a parte superior era brilhante como ferro derretido.Sem dúvida era cria de um dragão vermelho.",
        pag6: "Aninhando o ovo estava a criatura que provavelmente era a mãe, um dragão vermelho.Suas pupilas estavam contraídas, finas como um fio de cabelo, enquanto o dragão escaneava seu covil.Cadáveres se encontravam espalhados pelo local, alguns eram restos de comida, outros...provavelmente guerreiros e aventureiros tolos que ousaram enfretar a besta.",
        pag7: "Amon estava escondido atrás de uma rocha, não levaria muito tempo para que o dragão percebesse sua presença.",
        pag8: "O que ele faz?",
    },
    textAmon1121: {
        pag1: "Amon decide enganar o dragão",
        pag2: "De sua pequena trouxa ele retirou seu livro e pergaminhos. Algo contido dentro daqueles papéis com certeza lhe seria útil.",
        pag3: "Sua paz não dura muito, uma vez que o dragão ouve o farfalhar dos papeis. Um rosnado grave começa a emanar da garganta da besta, dizendo para qualquer criatura que ali estivesse que fosse embora.",
        pag4: "As mãos de Amon começaram a trabalhar cada vez mais rápido em busca de algo- qualquer coisa que pudesse ajudá-lo.",
        pag5: "A caverna treme quando a criatura levanta. Amon precisa ser rápido e preciso.",
        pag6: "A caverna treme novamente. Amon segura firmemente o pergaminho.",
        pag7: "O rosnado cresce. Os dedos de Amon tremem enquanto ele desenha a runa.",
        pag8: "A ponta dos chifres do monstro podiam ser vistas por detras da rocha quando Amon finalizou sua runa, um feitiço de ilusão não funcionaria por muito tempo, mais uma vez o aprendiz precisaria ser meticuloso em relação aos seus proximos passos.",
        pag9: "Apesar de estar oculto em sua ilusão, o dragão continuou se aproximando, mas sua cabeça voltou sua atenção para a entrada da caverna. De lá podia ser ouvido um alvoroço se aproximando.",
        pag10: "Os bokoblins voltaram, Amon pensou.Preciso aproveitar enquanto o dragão está destraído.",
        pag11: "E assim o fez.Em sua distração, a criatura nem notou quando o pequeno humano passou por suas garras e chegou ao ninho.",
        pag12: "Algo teria que ser deixado no lugar do ovo para manter a ilusão.Amon olhou para sua trouxa, e retirou apenas um único pergaminho de lá antes de lançar mais uma vez o feitiço.Por um instante parecia que haviam dois ovos exatamente iguais no ninho, mas o aprendiz levou o verdadeiro consigo.",
        pag13: "Um grupo de humanos entrou no covil do dragão, atraíndo mais uma vez a atenção da criatura, e, mais uma vez, Amon utilizou essa chance para escapar pelo mesmo lugar por onde entrou.",
        pag14: "Apenas quando ele chega do lado de fora que percebe um brilho vermelho emanando do seu braço esquerdo.Quando o brilho se dissipa, é revelada a runa de fogo na cor preta cercada de outros símbolos menores indicando sua ativação, a marca de que o jovem aprendiz acabará de receber o título de Mago Elemental do Fogo.",
        pag15: "O extase da vitória estava estampado em seu rosto na forma de um sorriso que hà muito tempo não tinha visitado o rosto de Amon.Isso é...até o jovem puxar a manga de seu braço direito e perceber que sua outra marca não havia sido ativada. ",
        pag16: "Em seu braço direito havia a runa das trevas.",
        pag17: "Mas o que? Por quê? Ele se perguntou. Eu fiz tudo certo. E para quê? Para nada! Ele disse ao segurar firmemente o pergaminho contra seu peito.",
        pag18: "Amon se exaltou, e em seu momento de fúria, jogou o ovo no chão. Apesar da aparência, o ovo ainda era delicado e se rachou no impacto, perdendo também todo o brilho que ele antes apresentava.",
        pag19: "Mas enquanto o ovo perdia seu brilho, a marca no braço direito de Amon ganhava. Semelhante ao que aconteceu com a runa em seu braço esquerdo, a runa das trevas também recebeu uma moldura de outros símbolos menores.",
        pag20: "O sorriso voltou ao rosto do mago. Um riso maldoso escapou de sua garganta, e ao cerrar sua mão esquerda, os restos do ovo viraram chamas. Com um gesto de sua mão direita, as chamas tomaram uma cor roxa, ganharam uma consistência de plasma e a forma começou a mudar.",
        pag21: "Qualquer que fosse a coisa que ele estava tentando criar não vingou. A forma, de repente se estilhaçou como vidro, e o sorriso do mago voltou a desaparecer.",
        pag22: "Ele tinha falhado.",
        pag23: "O pergaminho caiu aos seus pés, e em seguida Amon caiu sobre seus joelhos. Seus olhos estavam arregalados enquanto suas mãos tentavam coletar os pedaços do que forá seu fracasso. As lágrimas desenharam rios constantes nas bochechas do mago, enquanto ele se encolhia cada vez mais.",
        pag24: "<p class='sepaker'>Amon - Eu falhei. Eu falhei de novo... Me perdoe.</p>",
        pag25: "<p class='sepaker'>Amon - Anyx.</p>",
        pag26: "Fim - Coração partido",
    },
    textAmon1122: {
        pag1: "Amon decide atacar a fera.",
        pag2: "Não seria uma tarefa fácil, mas ele havia treinado anos para conseguir passar por essa prova, e ainda havia algo que ele precisava fazer nesse mundo. Ele não podia falhar.",
        pag3: "A fera estava atenta, como qualquer guardião que está protegendo seu ovo. Ele não teria o elemento da surpresa ao seu lado. Sorte também não era sua aliada nesse momento. Afinal como o jovem conseguiria ter exito em matar uma criatura que as escamas formam um escudo protetor em quase todo o seu corpo?",
        pag4: "Para ter qualquer chance de sucesso, Amon precisaria mirar diretamente no coração da criatura. Se ele conseguisse que o dragão lhe mostrasse sua barriga talvez ele tivesse uma, e única chance.",
        pag5: "Antes de bolar uma estratégia, as asas da criaturas passaram por sua visão periférica. Mas é claro, ele pensou. Basta apenas imobilizá-lo.",
        pag6: "Isso ele conseguiria fazer facilmente com suas lancetas mágicas. Esse feitiço permitia ao mago materializar quantas lanças ele quisesse e na proporção que quisesse- contanto que ele conseguisse se concentrar e que tivesse estamina o suficiênte.",
        pag7: "Amon começou a desenhar no ar o símbolo do seu encantamento, seus olhos se fecharam enquanto ele balbuciava as palavras. Nessa altura do campeonato jovens aprendizes já não precisam mais recitar seus feitiços em voz alta, mas para atingir a concentração que ele necessitava contra o dragão era algo necessário.",
        pag8: "Finalmente, quando o feitiço foi conluído, lanças enormes caíram do topo da caverna e acertaram as asas do dragão indefeso. Os gunidos de dor da criatura ecoavam pela caverna, fazendo as paredes e as estalactites tremerem, certamente os sons de dor e agonia eram ouvidos por criaturas até fora da caverna.",
        pag9: "Amon cambaleou contra a rocha, a energia necessária para lançar o feitiço em junção com os gritos da criatura fizeram sua cabeça girar. Mas ele não podia parar agora.",
        pag10: "Finalmente, a criatura pode ver quem estava profanando seu lar. Um humano com uma capa vermelha, com olhos mais aterrorizantes do que aqueles dos dragões negros. O dragão podia sentir o seu fim chegando, enquanto o sangue de seus ferimentos formavam poças ao seu redor.",
        pag11: "Não havia orgulho no olhar do aprendiz, nem alegria, muito menos tristeza.Essa foi a última coisa que o dragão viu antes do mago fazer as estalactites já enfraquecidas caírem sobre sua cabeça.Foi a última coisa que a criatura viu e foi um olhar que demonstrava apenas indiferença.",
        pag12: "O mago passou pelas poças de sangue e levantou o ovo do seu ninho.Realmente ovos de dragões eram coisas belas, não era de se surpreender que algo como aquilo valia milhões no mercado.Mas Amon não estava ali naquela caverna em busca de mercadoria.",
        pag13: "Não, o seu prêmio veio na forma de uma tatuagem em seu braço esquerdo.A runa de fogo, cercada por diversos outros símbolos menores.A marca brilhava em um tom vermelho.",
        pag14: "Mas não foi a marca em seu braço esquerdo que o fez sorrir, foi a marca em seu braço direito.Um brilho roxo logo se dissipou e mostrou a runa das trevas também rodeada de símbolos menores.Ele havia conseguido.Agora Amon era o mais novo Mago Elemental do Fogo e das Trevas.",
        pag15: "Amon posicionou o ovo e sua trouxa no chão e então, com o cerrar de sua mão esquerda os restos do dragão se tornaram chamas; com o cerrar de sua mão direita as chamas se tornaram plasma em uma tonalidade arrocheada.",
        pag16: "A forma que antes era dos restos mortais do dragão começou a mudar, se comprimindo, e formando cada vez mais uma forma humanoide.Agora no lugar de um dragão, havia algo de proporções muito menores.",
        pag17: "O que antes eram asas de dragão agora eram asas como as de borboletas em diversos tons de azul e verde, longas e delicadas.A criatura que estava diante do mago tinha longos cabelos azuis claros e pele azul como o céu da noite.",
        pag18: "Seus olhos lilas se voltaram para o mago, e uma doce voz chamou '...Amon?'",
        pag19: "Fim - Unidos novamente",
    },
    textAmon12: {
        pag1: "Amon decide se juntar aos aventureiros.",
        pag2: "Teria sido mais rápido continuar sozinho, mas caso ele estivesse sozinho, ele estaria em desvantagem, não poderia parar para comer ou descansar.Afinal, nunca se sabe que tipo de criaturas está escondida nessa floresta.",
        pag3: "Dentre aquele grupo, algumas pessoas se destacavam das demais.Eram eles: Bruce, Robin, Charlie e Clara.",
        pag4: "Bruce parecia ser algo como o líder daquele grupo, e julgando pelo seu físico e pelas cicatrizes, era provavelmente o mais experiênte também.Arma de opção: Machado, e pelas marcas, foi um feito pelos anões das montanhas ao sul.",
        pag5: "Robin era o braço direito de Bruce, ela não era de falar muito mas estava sempre por perto do líder.Alta, de cabelos castanhos e olhos verdes e orelhas pontudas.Arma de opção: arco e flecha.",
        pag6: "Charlie, longos cabelos loiros e olhos cinza, a estatura baixa e falta de barba o faziam parecer uma criança.Ele era, ao ver de Amon, era a criança estranha do grupo.Algum tipo de curandeiro, mas com um caldeirão que fazia ele parecer um mestre de poções.Talvez ele tenha estudado para ser mago ou algo parecido.",
        pag7: "E Clara, aquela que teve a inicitiativa de chamar Amon para o grupo.Estatura média, cabelos castanhos encaraculados, humana.O único detalhe que chamava mais atenção nela era a adaga pendurada em seu quadril.A bainha tinha inscrições em uma língua antiga, o que também indica que aquele conjunto devia ser tão antigo quanto, mas estava tão bem conservado que quase não parecia uma relíquia.",
        pag8: "O grupo fez rondas para dormir, e ao nascer do sol todos já estavam de pé.É incrível a disposição desses aventureiros, Amon pensou.",
        pag9: "Quando eles finalmente chegaram ao pé da montanha, avistaram um grupo de bokoblins bloqueando a entrada.",
        pag10: "< p class= 'speaker' > Bruce</p><p>Isso explica porque a floresta está tão vazia.</p>",
        pag11: "<p class='speaker'>Bruce</p><p>Bokoblins. Parasitas, vão para qualquer lugar e montam seu acampamento. E esses parecem já estar aqui há um bom tempo. Robin e Amon, vamos precisar de suporte para passar por eles, Charlie fique atento com os feridos, o resto vem comigo.</p>",
        pag12: "<p class='speaker'>Bruce</p><p>Robin, eu preciso que você acerte aquele lá com a trompeta. Se eles não conseguirem chamar reforços nós teremos uma boa chance.</p>",
        pag13: "Bruce continuou contando quais eram os planos de ataque para a parte do time que ficaria na linha de frente, enquanto isso Amon só pensava em como ele deveria agir em relação a eles.",
        pag14: "Talvez o grupo poderia ter alguma uitlidade como escudo, Amon poderia usar eles para cansar o inimo...Ou talvez ele deveria ajudá- los como pudesse, afinal quanto maiores os números, maiores as chances dele conseguir o ovo.",
        pag15: "O que ele deveria fazer?",
    },
    textAmon121: {
        pag1: "Amon decide ajudar ativamente.",
        pag2: "Após o ataque inícial de Robin, os demais vão a luta brandando suas armas de preferência.Enquanto isso Amon e Robin ajudam o grupo pela retaguarda, liquidade qualquer inimigo que tente atacar os demais companheiros por trás.",
        pag3: "Amon era muito habilidoso com suas lanças mágicas, o que logo fez com que Robin sileciosamente o convidasse para uma competição de mira.E como alguém consegue fazer isso você pergunta? Com o olhar.Cada vez que uma flecha de Robin acertava seu alvo, ela olhava para Amon como se tivesse ganhado um ponto.E, é claro, Amon retornou o favor.",
        pag4: "Bem, como Bruce previu, sem os reforços foi fácil de derrotar os bokoblins.O grupo se uniu para comemorar, e Charlie começou a atender os feridos.",
        pag5: "< p class= 'speaker' > Robin</p> <p>Nada mal para um mago.</p>",
        pag6: "Essas foram as palavras da arqueira para Amon antes dela ir se juntar ao grupo.Amon apenas revirou os olhos, mas não conseguiu conter uma pequena o brilho nos seus olhos, orgulhoso com o seu feito.",
        pag7: "O grupo aproveita a fogueira dos bokoblins para preparar uma pequena refeição antes de entrarem na caverna, essa escolha foi o suficiênte para deixar Amon mal- humorado.Ao ver do aprendiz isso era uma perda de tempo.",
        pag8: "< p class='speaker' > Clara</p ><p>Amon? Eu queria te agradecer por ter nos ajudado. Vamos precisar do maior número de pessoas que conseguirmos para enfrentar o que tem dentro da caverna.</p>",
        pag9: "<p class='speaker'>Clara</p><p>Você sabe... o dragão. Essa espécie de dragão vermelho está desaparecendo, mas recentemente foi formado um casal e bem, agora a fêmea está dentro dessa caverna com o mais novo ovo.</p>",
        pag10: "<p class='speaker'>Amon</p><p>E vocês pretendem matar o dragão?</p>",
        pag11: "<p class='speaker'>Clara</p><p>Não. Não, claro que não! Só queremos coletar algumas amostras e observar o dragão- ah, mas se conseguirmos pegar alguns minérios que tem lá dentro também seria ótimo.</p>",
        pag12: "<p class='speaker'>Amon</p><p>Eu não me importo com o que vocês querem fazer lá dentro, desde que não me impeça de pegar o ovo.</p>",
        pag13: "<p class='speaker'>Clara</p><p>O ovo? Para que você precisa do ovo?</p>",
        pag14: "Clara estava começando a ficar desconfiada, mas depois que Amon explicou sobre a prova para virar um mago elemental, a aventureira pareceu estar disposta a ajudá - lo.Com uma condição, é claro.Amon deveria devolver o ovo depois de concluir sua prova.Amon concordou.",
        pag15: "Clara compartilhou a história de Amon com Bruce, e foi decidido que o aprendiz teria o apoio do grupo.",
        pag16: "Com a refeição finalizada, o grupo partiu para o interior da caverna.Amon forneceu a todos encatamentos contra fogo e calor, Charlie fez algo similar com suas poções.",
        pag17: "No interior da caverna, rodeado por lagos de lava, estava o dragão aninhando seu ovo.O dragão era uma bela criatura, suas escamas eram vermelhas como rubis e seus olhos, dourados como o sol.Entretanto o que dragões tem de belos também tem de astutos.",
        pag18: "O dragão rapidamente percebeu que um grupo se aproximava e um rosnado nasceu no interior de sua garganta.",
        pag19: "< p class='speaker' > Bruce</p > <p>Bom, é aqui que nos separamos Amon. Boa sorte com o seu teste.</p>",
        pag20: "Com isso, Bruce liderou o grupo para distrair o dragão.Por mais que o plano de Bruce tenha soado bom o suficiênte para imobilizar o dragão... Amon sentiu sua consciência pesada.Ele se questionava o porque disso, mas enquanto o grupo dava o seu melhor para prender a atenção do dragão, Amon teve que fazer uma escolha.",

    },
    textAmon1211: {
        pag1: "Amon decide ajudar o grupo.",
        pag2: "Amon precisa fazer algo, e rápido, senão alguém pode acabar sendo esmagado pelas garras da criatura. Poderia ser Bruce, Clara, Robin, Anyx, Charlie. Qualquer um. Mas não poder ferir a criatura certamente era algo que deixava seu leque de opções estreito.",
        pag3: "<p class='speaker'>Charlie</p><p>Amon! Você ainda está aqui- mas o, o ovo.</p>",
        pag4: "<p class='speaker'>Amon</p><p>Charlie, nós não temos tempo para isso. Nós precisamos imobilizar aquele dragão de alguma forma.</p>",
        pag5: "<p class='speaker'>Charlie</p><p>Ah! Nós poderíamos fazer ela dormir. Se apenas eu tivesse uma dose grande o suficiênte para um dragão... Esquece.</p>",
        pag6: "<p class='speaker'>Amon</p><p>Não, isso pode funcionar. Talvez não com uma poção, mas um feitiço.</p>",
        pag7: "Amon retirou o livro de dentro de sua trouxa, alguns pergaminhos cairam no processo, mas o feitiço que ele precisava estava no livro. Ele entregou o livro para Charlie e apontou para um círculo mágico.",
        pag8: "<p class='speaker'>Amon</p><p>Vou precisar que você desenhe esse círculo ao sul e leste do dragão, eu farei o mesmo ao norte e oeste. Não temos tempo a perder. Rápido!</p>",
        pag9: "Amon saiu apressado para a direção oeste, Charlie pareceu confuso por um breve momento mas ele logo se direcionou para o que seria a direção sul do dragão.",
        pag10: "Amon conseguiu recriar o círculo facilmente, Charlie teve um pouco de dificuldade tanto que o aprendiz teve que ganhar tempo para que o pequeno homem conseguisse finalizar a sua tarefa.",
        pag11: "Com os quatro círculos desenhados no chão, Amon começou a recitar o encatamento, fazendo o gestos necessários para recriar o símbolo no ar. Cada um dos quatro símbolos brilhou, e de cada um surgiram caminhos que conectaram os quatro círculos em um único círculo.",
        pag12: "O feitiço foi um sucesso, o dragão logo se sentiu sonolento, e seus olhos se fecharam lentamente.Já o seu corpo caiu rapidamente no chão.Mais uma vez, havia chegado a hora do grupo celebrar.Novamente, Charlie foi atrás dos feridos, Robin se reuniu com Bruce, e Bruce parabenizou o time antes deles se dispersarem atrás de minérios raros e amostras de sangue e escamas de dragão.",
        pag13: "Enquanto isso Amon tentava se recompor do feitiço, enfeitiçar uma criatura da estatura de um dragão era algo exaustivo que faria a cabeça de qualquer um girar.Amon se senta no chão e põe sua cabeça em suas mãos.",
        pag14: "Clara, vendo o aprendiz se sentar, tomou a liberdade de levar o ovo até ele.",
        pag15: "< p class= 'speaker' > Clara</p> <p>Ei. Parece que você nos salvou de novo. Foi uma boa idéia colocar o dragão para dormir.</p>",
        pag16: "Ela riu suavemente e ofereceu a ele o ovo.",
        pag17: "< p class= 'speaker' > Amon</p> <p>Bobagem. Foi tudo idéia do Charlie.</p>",
        pag18: "Ele levantou a cabeça para olhá - la nos olhos e pegar o ovo, mas sua visão estva turva, e, por um momento, ele jurou ter visto alguém que não estava lá.",
        pag19: "< p class='speaker' > Amon</p ><p>Ani... Não, ele balançou a cabeça. No momento que ele ia pegar o ovo, seus olhos se arregalaram como se houvesse algo muito importante que ele havia esquecido.</p>",
        pag20: "<p class='speaker'>Amon</p><p>Cadê? Ele questionou enquanto retirava freneticamente os itens restantes de sua trouxa. Cadê? Não está aqui, mas onde?</p>",
        pag21: "<p class='speaker'>Amon</p><p>Ah... é claro.</p>",
        pag22: "Ele finalmente tomou o ovo em sua mãos.No momento em que ele tocou o ovo, seu braço esquerdo brilhou em vermelho, e quando o brilho se dissipou foi revelada a runa do fogo emoldurada por diversos símbolos menores.No entanto ele não parecia tão empolgado com isso.",
        pag23: "< p class='speaker' > Clara</p ><p>Amon, o seu braço! Você conseguiu, Amon. Você agora é um mago de... fogo, certo?</p>",
        pag24: "< p class= 'speaker' > Clara</p><p>Amon, o que foi?</p>",
        pag25: "<p class='speaker'>Amon</p><p>Eu perdi o pergaminho. Caiu na lava quando eu peguei o caderno- Ele suspirou.</p>",
        pag24: "< p class= 'speaker' > Amon</p><p>Era a única coisa que eu tinha para me lembrar... me lembrar dela. Já que nem isso- ele puxou a manga do seu braço direito, revelando a runa das trevas, mas diferente da runa de fogo, a das trevas estava sozinha em um tom desbotado de preto. Nem isso funcionou.</p>",
        pag25: "< p class= 'speaker' > Amon</p><p>Não se consegue trazer os mortos de volto apenas com fogo. E aquele- Aquele idiota da floresta não disse como eu posso ativar a runa das trevas.</p>",
        pag26: "<p class='speaker'>Clara</p><p>Trevas? Eu achei que esse elemento tinha sido... proibido há muitas décadas.</p>",
        pag27: "<p class='speaker'>Amon</p><p>Sim e não. A esfera das trevas foi perdida há muito tempo atrás com o último Mago elemental das trevas, mas isso não vem ao caso.</p>",
        pag28: "<p class='speaker'>Clara</p><p>Isso não é da minha conta, mas... quem é essa pessoa que você tanto quer trazer de volta?</p>",
        pag29: "< p class= 'speaker' > Amon</p><p>Anyx. Ela é- era, e sempre foi tudo que falta em mim. Ela morreu em um- em um conflito desnecessário. E eu não pude salvá-la.</p>",
        pag30: "<p class='speaker'>Amon</p><p>Ani morreu na minha frente, deu seus últimos suspiros em meus braços. Se apenas eu fosse mais forte na época.</p>",
        pag31: "A respiração do garoto estremeceu, como se tivesse usando todas as suas forças para conter algo em sua garganta.Clara envolveu o mago em seus braços, permitindo que o garoto deixasse a sua fraqueza escapar sem mais ninguém ver.",
        pag32: "Algo em Amon mudou naquele dia.Ele percebeu que Anyx tinha partido, e que ela não voltaria, nem se ele troussesse ela de volta.Essa não seria a vontade dela.Então, Amon pode finalmente aceitar que ela estava morta.Ele ainda sentia sua falta, e talvez iria continuar sentindo até o fim dos tempos, mas agora ele não estava mais sozinho.",
        pag33: "Amon se juntou ao grupo.Essa teria sido a vontade de Anyx.",
        pag34: "Fim - novos começos",
    },
    textAmon1212: {
        pag1: "Amon decide pegar o ovo.",
        pag2: "Ele aproveitou enquanto todos estão lutando para correr até o ninho. Gritos ecoavam para todos os lados, clarões subitos indicavam que a criatura estava utilizando sua respiração de fogo para afugentar os invasores, mas Amon tinha apenas um objetivo: pegar o ovo e sair dali.",
        pag3: "Tempos depois o grupo conseguiu imobilizar a criatura, e eles tiveram que agir rápido, antes que o dragão pudesse se soltar. Bruce e Robin continuaram dando as ordens enquanto Charlie corria para atender os feridos, infelizmente alguns deles nunca voltariam a ser o que eram antes.",
        pag4: "Com tudo estabelecido, Clara foi atrás de Amon para recuperar o ovo, mas o que ela viu quando chegou no lado de fora foi uma visão aterrorizante. Uma tatugem negra brilhava no braço direito de Amon, e o ovo não estava em nenhum lugar.",
        pag5: "O rosto dele demonstrava que o mago estava tão chocado quanto ela.",
        pag6: "<p class='speaker'>Clara</p><p>A-amon, o que você fez? O que você fez? O-o ovo-</p>",
        pag7: "Clara não precisava de uma resposta para entender que Amon havia acabado com a vida da pobre criatura. Ao menos ela esperava alguma justificativa, alguma tentativa de se defender, mas não obteve nem isso. Amon permaneceu em silêncio.",
        pag8: "Com os nervos a flor da pele, Clara, com sua mão trêmula, retirou a adaga da bainha e apontou para o mago. Ela iria atacar.",
        pag9: "O que Amon deve fazer?",
    },
    textAmon12121: {
        pag1: "Amon decide não revidar.",
        pag2: "Ele permaneceu imóvel enquanto Clara avançava em sua direção. Sua adaga conseguiu facilmente perfurar o peito do mago. Seu sangue começou a jorrar pela ferida ao passo que as lágrimas começaram a correr pelas suas bochechas, mas em seu olhar não havia dor, apenas culpa.",
        pag3: "<p class='speaker'>Amon</p><p>Me perdoe.</p>",
        pag4: "A vida se esvaiu do mago, e Clara ao se recuperar da adrenalina, rapidamente retirou a adaga do corpo de Amon; ao ver o sangue, ela atirou a adaga para longe e caiu em um canto. Mas essa não foi a pior parte, porque enquanto suas pernas e braços tremian... a runa das trevas apareceu em seu braço direito, brilhando em um tom de roxo.",
        pag5: "Fim - A doença púrpura",
    },
    textAmon12122: {
        pag1: "Amon decide revidar.",
        pag2: "Ao observar a postura de Clara, ele consegue ver que ela está mirando para deferir um ataque fatal, mas ele não fica parado só observando. A alteração de Clara a tornou extremamente previsível, e Amon consegue facilmente revidar.",
        pag3: "É uma vitória amarga. Por mais que Clara tenha sobrevivido, Amon estava mais uma vez sozinho. Ele não poderia retornar para o grupo, Anyx estava morta, e a vergonha que veio acompanhada de seus atos não permitiria que ele retornasse à escola. Então sua vida ficou fadada a isso, vagar eternamente sem ninguém, e muito menos sem sua querida Anyx.",
        pag4: "Fim - Sozinho para sempre",
    },
    textAmon122: {
        pag1: "Amon decide esperar o grupo cansar os inimigos.",
        pag2: "Como Robin estava ao seu lado ele não podia simplesmente ficar esperando de braços cruzados, então ele interpretou seu papel, apenas ajudando o grupo a lutar quando estavam sobrando apenas poucos inimigos.",
        pag3: "<p class='speaker'>Robin</p><p>Mais sorte na próxima vez, mago.</p>",
        pag4: "Robin abaixou seu arco e logo se juntou aos demais, ajudando reunir os feridos em um único lugar para facilitar o trabalho do pequeno Charlie. Mas pelo menos Amon ainda tinha energias o suficiênte sobrando para aguentar qualquer desafio que viesse.",
        pag5: "Clara vem para agradece-lo, e julgando pelo seu estado, ela também iria precisar dos cuidados de Charlie. É incrível como esse povo consegue tão facilmente confiar suas vidas a um estranho, Amon pensou.",
        pag6: "O caminho dentro da caverna se prova tortuoso, Charlie teve que fornecer o máximo de poções anti-calor para os integrantes do grupo. Para não fazer desfeita, Amon também ajudou os demais fornecendo encatamentos de proteção contra fogo.",
        pag7: "Finalmente o grupo chegou ao covil do dragão. O ninho era cerdado por canais de lava, um lugar perfeito para um dragão vermelho proteger a sua cria.",
        pag8: "Bruce revisou a estratégia já ensaiada pelo grupo para imobilizar o dragão, e eles iniciaram seu ataque. Entretanto a exaustão fez com que eles ficassem em maus lençóis. Nesse momento Amon é agraciado por duas escolhas: ficar e ajudar ou roubar o ovo.",
        pag9: "O que ele deve fazer?",
    },
    textAmon1221: {
        pag1: "Amon decide ajudar o grupo.",
        pag2: "Claro, o plano original de Amon seria neutralizar a criatura, mas como ele não queria uma multidão furiosa indo atrás dele, ele fez o que pode para ajudar na estratégia de Bruce.",
        pag3: "Seguindo o ritual após a batalha, Charlie correu para socorrer os feridos. Clara provavelmente está entre eles para não vir até aqui me perturbar, Amon pensou mas isso não era relevante. O que importava era o ovo que Amon estava levando consigo enquanto os demais membros do grupo se ocupavam com a coleta de amostras e minérios. Quer dizer, todos menos um.",
        pag4: "Robin tinha achado estranho o comportamento de Amon desde o princípio. Não era possível que alguém que erasse tantos inimigos começasse a acertar todos os seus alvos depois que todos já estavam feridos. E então, Robin o seguiu para fora da caverna e se escondeu na vegetação.",
        pag5: "De lá ela pode ver claramente o momento que o mago atirou o ovo no chão, até o momento em que seu braço direito começou a brilhar. O brilho era roxo. Estranho, ela pensou. Havia apenas um elemento que poderia emitir aquele tipo de brilho.",
        pag6: "Quando Amon moveu seu braço, as suspeitas de Robin se confirmaram, o símbolo em seu braço direito era a runa das trevas. O choque foi suficiênte para fazer com que ela demorasse alguns segundos antes de sair dos arbustos e apontar uma flecha na direção do mago enquanto ela o chamava de covarde, mas já era tarde de mais para o pequeno dragão.",
        pag7: "Os restos do ovo já tinham sido insinerados, e após uma transformação bizarra em plasma, ele tinha se estilhaçado em vários pedaços, igual vidro.",
        pag8: "<p class='speaker'>Amon</p><p>Mas é claro, meu feitiço falhou, mas eu sei como consertar- ele disse para ninguém em particular.</p>",
        pag9: "Robin não entendeu o que ele estava querendo dizer, mas não importa o quanto ela exigisse uma explicação, ele não parecia ouvir. Alias, ele parecia completamente fora de si. Sorrindo, mesmo estando na mira do arco.",
        pag10: "Foi então que Robin percebeu, Amon poderia estar na mira de seu arco, mas ela estava na mira das lanças mágicas do mago. Não deu tempo da arqueira se defender, as lanças atravessaram sua figura sem nenhuma exitação. Como um último ato de protesto, ela conseguiu soltar o seu arco, mas quando a ponta raspou a bochecha do mago, ela já não estava mais ensse mundo.",
        pag11: "Os restos da guerreira tiveram um destino muito parecido com os restos do ovo, mas ao invez de se quebrar em vários pedaços, a forma que o plasma da guerreira tomou era de uma mulher. Uma mulher com longas e belas asas de borboleta, exibindo diversos tons de verde e azul. Seu cabelo era azul claro; sua pele, azul escuro como o céu a noite; e seus olhos eram prateados como a lua.",
        pag12: "Amon, chamou a doce voz da moça, mas antes que ela pudesse se cituar, o mago colocou seus braços ao redor dela.",
        pag13: "<p class='speaker'>Amon</p><p>Eu estou aqui, Ani. Nada mais vai nos separar. Nada.</p>",
        pag14: "Fim - Até que a morte nos separe novamente",
    },
    textAmon1222: {
        pag1: "Amon decice roubar o ovo.",
        pag2: "No meio da confusão, Amon conseguiu tirar o ovo do ninho. E, acreditando não ter sido percebido, ele foge do covil, indo em direção a caverna por onde o grupo entrou.",
        pag3: "Sem a ajuda do aprendiz, o grupo eventualmente é forçado a recuar e repensar a sua estratégia. Nesse momento, Robin percebe que o mago sumiu, mas ela não é a única a perceber que algo está faltando. O dragão logo nota a ausência do seu ovo, e da um rosnado tão alto que faz algumas estalactites da caverna caírem. Contudo, seu foco não está no grupo, e sim no caminho de cheiro que o seu ovo deixou para trás.",
        pag4: "O dragão começa sua perseguição, deixando o grupo confuso. Eles não entendiam porque a criatura não estava amis tentando atacá-los, mas Robin sim.",
        pag5: "A criatura desesperada atrás de seu ovo sai quebrando partes da caverna e ameaçando cuspir fogo em qualquer coisa que se mova. Amon era astuto, ele estava conseguindo se esconder e esquivar da criatura, entretanto seu desespero estava afetando sua atenção, tanto que nem percebeu quando Robin apareceu atrás dele e tomou o ovo.",
        pag6: "Antes que o aprendiz pudesse lançar qualquer feitiço em sua direção, ela saltou para uma área aberta, rapidamente atraíndo a atenção do dragão para eles. Amon, vendo a criatura se aproximar, voltou a focar no dragão, virando as costas para a arqueira. O erro dele foi não perceber que ela não desperdiçaria essa chance.",
        pag7: "Uma flecha atravessou seu ombro, atrapalhando seu feitiço. Ao olhar na direção da arqueira, foi ai que ele entendeu. Ela não estava do seu lado, ela não arriscaria machucar o dragão ou o ovo para sair viva. E foi assim que ele encontrou seu fim nas presas do dragão.",
        pag8: "Qualquer um que não conhecesse a história de Robin acreditaria que ela sofreria um destino parecido com o de Amon, mas não. Quando ela ofereceu o ovo de volta para sua mãe, o dragão simplesmeste ascenou com a cabeça como se estivesse agradecido.",
        pag9: "O dragão partiu logo em seguida para encontrar um novo ninho, e o grupo? Bom, acredita-se que eles saíram da caverna e continuaram a acompanhar essa mãe e seu filhote.",
        pag10: "Fim - Palitinho de dente",
    },
}

var plotScene = {
    textAmon1: {
        pag2: ['floresta-noite', '../images/pictures/forest1-nighttime.png'],
    },
    textAmon11: {
        pag1: ['floresta-dia', '../images/pictures/forest1-daytime.png'],
        pag2: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],

    },
    textAmon111: {
        pag9: ['covil do dragão', ''],
    },
    textAmon1111: {
        pag1: ['covil do dragão', ''],
    },
    textAmon1112: {
        pag1: ['covil do dragão', ''],
        pag13: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },

    textAmon112: {
        pag1: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
        pag3: ['covil do dragão', ''],
    },
    textAmon1121: {
        pag1: ['covil do dragão', ''],
        pag13: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },
    textAmon1122: {
        pag1: ['covil do dragão', ''],
    },

    textAmon12: {
        pag2: ['floresta-dia', '../images/pictures/forest1-daytime.png'],
        pag9: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },
    textAmon121: {
        pag1: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
        pag17: ['covil do dragão', ''],
    },
    textAmon1211: {
        pag1: ['covil do dragão', ''],
    },
    textAmon1212: {
        pag1: ['covil do dragão', ''],
        pag4: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },
    textAmon12121: {
        pag1: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },
    textAmon12122: {
        pag1: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },

    textAmon122: {
        pag1: ['entrada-caverna', ''],
        pag6: ['covil do dragão', ''],
    },
    textAmon1221: {
        pag1: ['covil do dragão', ''],
        pag4: ['entrada-caverna', ''],
    },
    textAmon1222: {
        pag1: ['covil do dragão', ''],
        pag9: ['none', ''],
    },
}

var plotAmon1Choices = ["Continuar sozinho", "Se juntar ao grupo"];
var plotAmon11Choices = ["Lutar", "Encontrar outro caminho"];
var plotAmon111Choices = ["Atacar o dragão", "Enganar o dragão"];
var plotAmon1111Choices = [0, 0];
var plotAmon1112Choices = [0, 0];

var plotAmon112Choices = ["Enganar o dragão", "Atacar o dragão"];
var plotAmon1121Choices = [0, 0];
var plotAmon1122Choices = [0, 0];


var plotAmon12Choices = ["Lutar ativamente", "Deixar o grupo cançar o inimigo"];
var plotAmon121Choices = ["Ajudar o grupo", "Pegar o ovo"];
var plotAmon1211Choices = [0, 0];
var plotAmon1212Choices = ["Revidar", "Não revidar"];
var plotAmon12121Choices = [0, 0];
var plotAmon12122Choices = [0, 0];

var plotAmon122Choices = ["Ajudar o grupo", "Roubar o ovo"];
var plotAmon1221Choices = [0, 0];
var plotAmon1222Choices = [0, 0];

