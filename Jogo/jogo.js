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

 // Mostrar código Python gerado
 function mostrarCodigo() {
     const codigo = Blockly.Python.workspaceToCode(workspace);
     document.getElementById("codigoGerado").textContent = codigo || "// Nenhum código gerado ainda";
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