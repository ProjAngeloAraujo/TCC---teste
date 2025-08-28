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