
// Obtém a referência para a imagem pelo ID
var minhaImagem = document.getElementById('pokeball');

// Define o fator de escala de pressionamento (por exemplo, 0.9 para 90% do tamanho original)
var fatorEscalaPressionado = 0.9;

// Adiciona um ouvinte de eventos para o evento 'mousedown' na imagem
minhaImagem.addEventListener('mousedown', function () {
  // Diminui temporariamente o tamanho da imagem
  minhaImagem.style.transform = 'scale(' + fatorEscalaPressionado + ')';
});

// Adiciona um ouvinte de eventos para o evento 'mouseup' na imagem
minhaImagem.addEventListener('mouseup', function () {
  // Restaura o tamanho original da imagem
  minhaImagem.style.transform = 'scale(1)';
});
