document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLateral = document.getElementById('menu-lateral-pokedex');
   
    
    menuToggle.addEventListener('click', function() {
        menuLateral.classList.toggle('open');
    });
});

const pokeballImages = {
    normal: 'imagens/Pokeball Normal.png',
    rara: 'imagens/Great Ball.png',
    epica: 'imagens/Ultra Ball.png',
    lendaria: 'imagens/Master Ball.png',
  };

  function sortearNivelDeRaridade() {
    const raridade = Math.random();
    if (raridade < 0.2) {
      return 'normal';
    } else if (raridade < 0.4) {
      return 'rara';
    } else if (raridade < 0.6) {
      return 'epica';
    } else if (raridade < 0.8) {
      return 'lendaria';
    } else {
      return 'lendaria';
    }
  }
  

 // Função para ler e processar o arquivo de permissões
 function processarPermissoes() {
    fetch('permissoes.txt') // Nome do seu arquivo de permissões
      .then(response => response.text())
      .then(data => {
        const permissoes = data.split(';');
        let totalPokemons = 0;
        let pokemonsVisiveis = 0;
  
        for (const permissao of permissoes) {
          const [pokemonInfo] = permissao.split('$').map(item => item.trim());
          const [imagem, status, raridade] = pokemonInfo.split('=').map(item => item.trim());
  
          // Exemplo de lógica para contar o total de Pokémon
          totalPokemons++;
  
          // Exemplo de lógica para definir a visibilidade da imagem com base no status
          const imagemElement = document.getElementById(imagem);
          if (status === 'true') {
            imagemElement.style.display = 'block';
            pokemonsVisiveis++;
          } else {
            imagemElement.style.display = 'none';
          }
  
          // Exemplo de lógica para tratar o nível de raridade
          switch (raridade) {
            case 'normal':
              // Lógica para Pokémon com raridade "normal"
              break;
            case 'epico':
              // Lógica para Pokémon com raridade "epico"
              break;
            // Adicione mais casos para outros níveis de raridade, se necessário
            default:
              // Lógica padrão, se o nível de raridade não for reconhecido
          }
        }

        // Calcule a porcentagem de Pokémon visíveis
        const porcentagemVisiveis = (pokemonsVisiveis / totalPokemons) * 100;

         const barraDeProgresso = document.getElementById('barra-de-progresso');
        if (barraDeProgresso) {
          barraDeProgresso.style.width = porcentagemVisiveis + '%';

          // Adicione lógica para definir a cor com base em intervalos de porcentagem
          if (porcentagemVisiveis >= 80) {
            barraDeProgresso.style.backgroundColor = 'green'; // Verde para mais de 80%
          } else if (porcentagemVisiveis >= 50) {
            barraDeProgresso.style.backgroundColor = 'yellow'; // Amarelo para mais de 50%
          } else {
            barraDeProgresso.style.backgroundColor = 'red'; // Vermelho para menos de 50%
          }
        }
      })
      .catch(error => {
        console.error('Erro ao carregar permissões:', error);
      });
}

  
  // Chame a função para processar as permissões quando a página carregar
  window.onload = processarPermissoes();
  
