const text = "Este é o texto que será digitado.";
const typing = document.querySelector('.typing span');
let textIndex = 0;

function type() {
    typing.textContent += text.charAt(textIndex);
    textIndex++;
    if (textIndex === text.length) {
    }
}

setInterval(type, 100); /