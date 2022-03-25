
function cardTransform(character) {
    var obj = {
        tess: {
            element: "light",
            btn_newClas: "showing-tess",
            shine_newClass: "showing-light",
            active_color: "rgba(207, 204, 35, 0.822)",
            inactive_color: "rgba(255, 252, 70, 0.822)",
        },
        sophie: {
            element: "earth",
            btn_newClas: "showing-sophie",
            shine_newClass: "showing-earth",
            active_color: "rgba(103, 165, 3, 0.747)",
            inactive_color: "rgba(152, 240, 11, 0.747)",
        },
        amon: {
            element: "fire",
            btn_newClas: "showing-amon",
            shine_newClass: "showing-fire",
            active_color: "rgba(146, 0, 0, 0.822)",
            inactive_color: "rgba(219, 24, 24, 0.747)",
        },
    }

    var card = document.getElementById(`${character}-char-description`)
    card.style.opacity = "0%";
    card.classList.toggle('hidden');

    var char_btn = document.getElementById(`${character}-char-description-btn`);
    var light = document.getElementById(obj[character]["element"]);
    char_btn.classList.toggle(obj[character]["btn_newClas"]);

    light.classList.toggle(obj[character]["shine_newClass"]);

    fadeIn(card);
    changeBtnColor(card, char_btn, obj, character);

}

function fadeIn(card) {
    if (!card.classList.contains('hidden')) {
        var opacity = 0;
        setInterval(() => {
            if (opacity == 100) {
                return
            } else {
                card.style.opacity = `${opacity}%`
                opacity++
            }
        }, 20)
    }
}

function changeBtnColor(card, char_btn, obj, character) {
    if (!card.classList.contains('hidden')) {
        char_btn.style.backgroundColor = obj[character]["inactive_color"];
    } else {
        char_btn.style.backgroundColor = obj[character]["active_color"];
    }

}

function goToChar(character) {
    location.href = `./${character}/${character}-1.html`
}