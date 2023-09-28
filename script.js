document.addEventListener('DOMContentLoaded', function() {
  var efeitoSonoroPokedex = document.getElementById('pokedex-botao');
    const iconePokedex = document.getElementById('icone-pokedex');
    const menuLateral = document.getElementById('menu-lateral-pokedex');
   
    
    iconePokedex.addEventListener('click', function() {
        menuLateral.classList.toggle('open');
        efeitoSonoroPokedex.play();
    });
});


  // Lista de IDs de Pokémon normais (exemplo)
  var pokemonsNormais = [5, 6, 8, 9, 10, 13, 15, 16, 17, 18, 19, 22, 23, 30, 35, 37, 38, 40, 42, 50, 51];

  // Lista de IDs de Pokémon raros (exemplo)
  var pokemonsRaros = [1, 2, 4, 11, 12, 20, 21, 29, 31, 32, 33, 34, 36, 39, 43, 44, 47, 48, 49, 52, 53];
  
  // Lista de IDs de Pokémon épicos (exemplo)
  var pokemonsEpicos = [3, 24, 25, 26, 27, 28, 41, 45, 46, 54, 55];
  
  // Lista de IDs de Pokémon lendários (exemplo)
  var pokemonsLendarios = [7, 14, 56, 57, 58, 59, 60];

const pokeballImages = {
    normal: 'imagens/Pokeball Normal.png',
    rara: 'imagens/Great Ball.png',
    epica: 'imagens/Ultra Ball.png',
    lendaria: 'imagens/Master Ball.png',
  };

  
  var sorteio = {
    numerosDisponiveis: Array.from({ length: 60 }, (_, i) => i + 1),
    numerosSorteados: [],
    
    // Função para sortear um número de forma única
    sortearNumeroUnico: function() {
  
      var indiceSorteado = Math.floor(Math.random() * this.numerosDisponiveis.length);
      var numeroSorteado = this.numerosDisponiveis.splice(indiceSorteado, 1)[0];
      this.numerosSorteados.push(numeroSorteado);
  
      return numeroSorteado;
    }
  };
  
  function verificarRaridade(numero) {
  
    // Verifica se o número está em alguma das listas de raridade
    if (pokemonsNormais.includes(numero)) {
      return 'normal';
    } else if (pokemonsRaros.includes(numero)) {
      return 'rara';
    } else if (pokemonsEpicos.includes(numero)) {
      return 'epica';
    } else if (pokemonsLendarios.includes(numero)) {
      return 'lendaria';
    } else {
      return 'Não encontrado em nenhuma lista de raridade';
    }
  }
// Função para mostrar uma imagem com base no ID
function mostrarImagem(id) {
    // Obtém a referência para a imagem com o ID especificado
    var imagemAserAtivada = document.getElementById(id);
  
    // Verifica se a imagem foi encontrada
    if (imagemAserAtivada) {
      // Define o estilo 'display' para 'block' para tornar a imagem visível
      imagemAserAtivada.style.display = 'block';
    } else {
      // Se a imagem não for encontrada, exibe uma mensagem de erro
      console.log('Imagem com ID ' + id + ' não encontrada.');
    }
  }

  // Obtém a referência para o elemento de áudio
var efeitoSonoroConfeti = document.getElementById('efeito-sonoro-confetti');

// Obtém a referência para a imagem que dispara o som
var imagemClick = document.getElementById('click-logo'); // Substitua 'sua-imagem' pelo ID da sua imagem

// Adiciona um ouvinte de eventos para o clique na imagem
imagemClick.addEventListener('click', function () {
  // Reproduz o efeito sonoro
  efeitoSonoroConfeti.play();
});



