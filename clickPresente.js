
// Obtém a referência para a imagem pelo ID
var minhaImagemPresente = document.getElementById('icone-presente');

// Define o fator de escala de pressionamento (por exemplo, 0.9 para 90% do tamanho original)
var fatorEscalaPressionado = 0.9;

// Adiciona um ouvinte de eventos para o evento 'mousedown' na imagem
minhaImagemPresente.addEventListener('mousedown', function () {
  // Diminui temporariamente o tamanho da imagem
  minhaImagemPresente.style.transform = 'scale(' + fatorEscalaPressionado + ')';
});

// Adiciona um ouvinte de eventos para o evento 'mouseup' na imagem
minhaImagemPresente.addEventListener('mouseup', function () {
  // Restaura o tamanho original da imagem
  minhaImagemPresente.style.transform = 'scale(1)';
});
