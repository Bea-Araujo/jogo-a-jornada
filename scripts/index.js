
var text = {
    pag1: "Haviam 5 pilares na sala, entretanto apenas 4 eram plataformas para esferas, já o quinto estava vazio, abandonado, mas jamais esquecido. As 4 esferas na sala representavam os elementos: Luz, Água, Terra, Fogo e Ar.",
    pag2: "A esfera de fogo foi a primeira a brilhar e escolher o seu favorito, o jovem Amon, o astuto. A segunda foi a esfera da terra, e sua escolhida foi Sophie, a gentil. Ar e água vieram logo em seguida, escolhendo o excêntrico Charlie e a teimosa Alex respectivamente. Por fim, a esfera da Luz escolheu Teresa, a sábia.",
    pag3: "Diante de cada escolhido, um desafio foi revelado. Cada um tinha um determinado artefato para resgatar em localidades distintas, mas a jornada não seria fácil para nenhum deles",
    pag4: "E aqui é onde seus caminhos se dividiram...",
}

var pathCharacterSelection = "./pages/character-selection.html";
var pagNumber = 1;

function nextText(path) {
    var index = "pag" + pagNumber;
    var pagina = document.getElementById("text")
    pagina.innerHTML = "<p>" + text[index] + "</p>";
    pagNumber++
    var ultimaPagina = (text["pag" + pagNumber] == undefined);
    if (ultimaPagina) {
        var nextText_btn = document.getElementById("nextText_btn");
        nextText_btn.innerHTML = "<button><a href=" + path + ">Prox pag</a></button>";
    }

}
