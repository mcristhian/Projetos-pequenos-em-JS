let score = [0, 0, 0];

function Move(){

    let one = prompt('Jogador um - informe sua jogada:');
    let two = prompt('Jogador dois - informe sua jogada:');

    if (one == two){
        console.clear();
        score[0]++;

        console.log(`Jogador um: ${one}, jogador dois: ${two}`);
        console.log('Jogo empatado');
        console.log(`Empate, jogador um e jogador dois: ${score[0]}, ${score[1]} e ${score[2]}`);
        
        // return 'Jogo empatado';
    }else if (one == 'pedra' && two == 'tesoura' || one == 'tesoura' && two == 'papel' || one == 'papel' && two == 'pedra'){
        console.clear();
        score[1]++;

        console.log(`Jogador um: ${one}, jogador dois: ${two}`);
        console.log('Jogador um ganhou');
        console.log(`Empate, jogador um e jogador dois: ${score[0]}, ${score[1]} e ${score[2]}`);
        
        // return 'Jogador um ganhou';
    }else if (two == 'pedra' && one == 'tesoura' || two == 'tesoura' && one == 'papel' || two == 'papel' && one == 'pedra'){
        console.clear();
        score[2]++;

        console.log(`Jogador um: ${one}, jogador dois: ${two}`);
        console.log('Jogador dois ganhou');
        console.log(`Empate, jogador um e jogador dois: ${score[0]}, ${score[1]} e ${score[2]}`);
        
        // return 'Jogador dois ganhou';
    };
}

while (true){    
    Move();
}

// do {
//     console.log(Move());
// } while (Move() != false);
