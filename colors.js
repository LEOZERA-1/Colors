function generateHexCode() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}

function getTextColor(hex) {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);

    const luminancia = (0.299 * r + 0.587 * g + 0.114 * b);
    return luminancia > 186 ? "#000" : "#fff";
}

const quadros = document.querySelectorAll(".quadro");

function gerarCores() {
    quadros.forEach((quadro) => {
        const cor = generateHexCode();

        quadro.style.backgroundColor = cor;
        quadro.style.color = getTextColor(cor);
        quadro.textContent = cor;
    });
}

gerarCores();
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        event.preventDefault(); 
        gerarCores();
    }
});