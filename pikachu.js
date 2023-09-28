// Seleciona a imagem e o parágrafo pelo ID
var imagemPikachu = document.getElementById('personagem-pikachu');
var textoBalaoo = document.getElementById('texto-do-balao');
var somPikachu = document.getElementById('efeito-sonoro-pikachu');

// Define o novo src e texto quando o cursor entra na imagem
imagemPikachu.addEventListener('mouseenter', function () {
    if(totalPokemons !== 60){
    imagemPikachu.src = 'imagens/pikachu/pikachu2.gif'; // Substitua 'imagem2.jpg' pelo novo caminho da imagem
    textoBalaoo.innerHTML  = '<strong>Unlock prizes by <br> completing the <br> Pokédex!</strong>'; // Substitua 'Novo texto' pelo novo texto
    }
});

// Define o src e texto originais quando o cursor sai da imagem
imagemPikachu.addEventListener('mouseleave', function () {
    if(totalPokemons !== 60){
    imagemPikachu.src = 'imagens/pikachu/pikachu1.gif'; // Substitua 'imagem1.jpg' pelo caminho da imagem original
    textoBalaoo.innerHTML  = '<strong>Click on the Pokéballs <br> to unlock more <br> Pokémons!</strong>'; // Substitua 'Texto inicial' pelo texto original
    }
});

imagemPikachu.addEventListener('click', function () {
    if(totalPokemons === 60){
        somPikachu.play();
    }
});

