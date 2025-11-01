// Dalam function Game.Init(), tambahkan style untuk font RPG
var style = document.createElement('style');
style.innerHTML = `
    body {
        font-family: 'Cinzel', 'Times New Roman', serif;
    }
    .title, .section, .cookieNumber {
        font-family: 'UnifrakturMaguntia', cursive;
    }
    .description, .price, .warning, .option {
        font-family: 'Cinzel', 'Times New Roman', serif;
    }
`;
document.head.appendChild(style);

// Tambahkan link font di header (biasanya dilakukan di HTML, tapi bisa lewat JavaScript)
var link1 = document.createElement('link');
link1.rel = 'stylesheet';
link1.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=UnifrakturMaguntia&display=swap';
document.head.appendChild(link1);
