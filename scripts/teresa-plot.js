
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

var plotTess = {
    textTess1: {
    },
    textTess11: {
    },
    textTess111: {
    },
    textTess1111: {
    },
    textTess1112: {
    },
    textTess112: {
    },
    textTess1121: {
    },
    textTess1122: {
    },
    textTess12: {
    },
    textTess121: {
    },
    textTess1211: {
    },
    textTess1212: {
    },
    textTess12121: {
    },
    textTess12122: {
    },
    textTess122: {
    },
    textTess1221: {
    },
    textTess1222: {
    },
}

var plotScene = {
    textTess1: {
        pag2: ['floresta-noite', '../images/pictures/forest1-nighttime.png'],
    },
    textTess11: {
        pag1: ['floresta-dia', '../images/pictures/forest1-daytime.png'],
        pag2: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],

    },
    textTess111: {
        pag9: ['covil do dragão', ''],
    },
    textTess1111: {
        pag1: ['covil do dragão', ''],
    },
    textTess1112: {
        pag1: ['covil do dragão', ''],
        pag13: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },

    textTess112: {
        pag1: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
        pag3: ['covil do dragão', ''],
    },
    textTess1121: {
        pag1: ['covil do dragão', ''],
        pag13: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },
    textTess1122: {
        pag1: ['covil do dragão', ''],
    },

    textTess12: {
        pag2: ['floresta-dia', '../images/pictures/forest1-daytime.png'],
        pag9: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },
    textTess121: {
        pag1: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
        pag17: ['covil do dragão', ''],
    },
    textTess1211: {
        pag1: ['covil do dragão', ''],
    },
    textTess1212: {
        pag1: ['covil do dragão', ''],
        pag4: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },
    textTess12121: {
        pag1: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },
    textTess12122: {
        pag1: ['entrada-caverna', '../images/pictures/mountain-entrance-ref.jpg'],
    },

    textTess122: {
        pag1: ['entrada-caverna', ''],
        pag6: ['covil do dragão', ''],
    },
    textTess1221: {
        pag1: ['covil do dragão', ''],
        pag4: ['entrada-caverna', ''],
    },
    textTess1222: {
        pag1: ['covil do dragão', ''],
        pag9: ['none', ''],
    },
}

var plotTess1Choices = ["Continuar sozinho", "Se juntar ao grupo"];
var plotTess11Choices = ["Lutar", "Encontrar outro caminho"];
var plotTess111Choices = ["Atacar o dragão", "Enganar o dragão"];
var plotTess1111Choices = [0, 0];
var plotTess1112Choices = [0, 0];

var plotTess112Choices = ["Enganar o dragão", "Atacar o dragão"];
var plotTess1121Choices = [0, 0];
var plotTess1122Choices = [0, 0];


var plotTess12Choices = ["Lutar ativamente", "Deixar o grupo cançar o inimigo"];
var plotTess121Choices = ["Ajudar o grupo", "Pegar o ovo"];
var plotTess1211Choices = [0, 0];
var plotTess1212Choices = ["Revidar", "Não revidar"];
var plotTess12121Choices = [0, 0];
var plotTess12122Choices = [0, 0];

var plotTess122Choices = ["Ajudar o grupo", "Roubar o ovo"];
var plotTess1221Choices = [0, 0];
var plotTess1222Choices = [0, 0];

