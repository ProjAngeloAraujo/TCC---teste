 // Inicializar workspace SEM toolbox
 const workspace = Blockly.inject('blocklyDiv', { toolbox: null });

 // Função para criar blocos a partir do footer
 function criarBloco(tipo) {
     const bloco = workspace.newBlock(tipo);
     bloco.initSvg();
     bloco.render();

     // Centralizar no workspace
     const metrics = workspace.getMetrics();
     const centerX = (metrics.viewWidth / 2) - (bloco.getHeightWidth().width / 2);
     const centerY = (metrics.viewHeight / 2) - (bloco.getHeightWidth().height / 2);

     bloco.moveBy(centerX, centerY);
 }

// Mostrar código Python gerado e verificar a fase
function mostrarCodigo() {
    const codigo = Blockly.Python.workspaceToCode(workspace).trim();
    document.getElementById("codigoGerado").textContent = codigo || "// Nenhum código gerado ainda";

    verificarFase(codigo); // já chama a verificação
}

// Verificar se a fase foi concluída
function verificarFase(codigo) {
    // Exemplo: Fase 1 espera o código "print('Olá')"
    const esperado = "0";

    if (codigo === esperado) {
        mostrarMensagem("Parabéns! Você concluiu a fase.", "success");
    } else {
        mostrarMensagem("Ops! Tente novamente.", "error");
    }
}

// Função para mostrar mensagens (usando CSS já existente)
function mostrarMensagem(texto, tipo) {
    // remove mensagens antigas
    document.querySelectorAll(".messages").forEach(m => m.remove());

    const ul = document.createElement("ul");
    ul.className = "messages " + tipo;
    ul.innerHTML = `<li>${texto}</li>`;
    document.body.appendChild(ul);

    // sumir depois de 3s
    setTimeout(() => ul.remove(), 3000);
}

// Pega o ícone e a lista
const menuIcon = document.getElementById("menuIcon");
const menuLista = document.getElementById("menuLista");

// Quando clicar no ícone ☰, alterna mostrar/esconder
menuIcon.addEventListener("click", function() {
    menuLista.style.display = (menuLista.style.display === "flex") ? "none" : "flex";
});

const Jogabilidade = document.getElementById("Jogabilidade");
const JogabilidadeImg = document.getElementById("JogabilidadeImg");

// Clicar no li abre a imagem
Jogabilidade.addEventListener("click", function() {
    JogabilidadeImg.style.display = "block";
});

// Clicar na imagem fecha (sem reabrir)
JogabilidadeImg.addEventListener("click", function(event) {
    event.stopPropagation(); // impede que clique "suba" para o li
    JogabilidadeImg.style.display = "none";
});


const Ul = document.getElementById("Ul");
const Sair = document.getElementById("Sair");
const DivSair = document.getElementById("DivSair");
const NãoSair = document.getElementById("NãoSair");
const Retomar = document.getElementById("Retomar");
// Clicar no li abre a imagem
Sair.addEventListener("click", function() {
    Ul.style.display = "none";
    DivSair.style.display = "flex";
});
NãoSair.addEventListener("click", function() {
    DivSair.style.display = "none";
    Ul.style.display = "flex";
});
Retomar.addEventListener("click", function() {
    menuLista.style.display = (menuLista.style.display === "flex") ? "none" : "flex";
});