// Variável para rastrear o progresso atual
var progressoAtual = 0;

// Função para aumentar o progresso
function aumentarProgresso() {
  var barraDeProgresso = document.getElementById('barra-de-progresso');
  
  // Define o valor máximo de progresso como 60 (total de imagens)
  var progressoMaximo = 60;

  // Incrementa o progresso atual em +1
  progressoAtual += 1;

  // Calcula a largura da barra de progresso com base no progresso atual
  var larguraBarra = (progressoAtual / progressoMaximo) * 100;

  // Define a largura da barra de progresso com limite de 100%
  if (larguraBarra <= 100) {
    barraDeProgresso.style.width = larguraBarra + '%';
  }
}
