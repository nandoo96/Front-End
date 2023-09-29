alert('Boas Vindas ao Jogo do Número Secreto!');
let numeroSecreto = 50;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 100');

// Se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else { 
    alert('Você errou!')
}