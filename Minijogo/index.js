import chalk from 'chalk'

let dice = [1, 2, 3, 4, 5, 6];
let player_life = 10;
let dragon_life = 15;
let round = 0;

//console.log(`Rodada ${round}: Jogador (${player_life}), Dragão (${dragon_life})`);
console.log('Rodada ' + round + ': Jogador: (' + player_life + '), Dragão: (' + dragon_life + ')');
while(player_life > 0 && dragon_life > 0){
    round++;
    if(dice[Math.floor(Math.random() * dice.length)] >= 4){
        dragon_life -= 2;
        //console.log(`Rodada ${round}: Jogador (${player_life}), Dragão (${dragon_life})`);
        console.log('Rodada ' + round + ': Jogador: (' + player_life + '), Dragão: (' + chalk.red(dragon_life) + ')');
    } else {
        player_life -= 2;
        //console.log(`Rodada ${round}: Jogador (${player_life}), Dragão (${dragon_life})`);
        console.log('Rodada ' + round + ': Jogador: (' + chalk.red(player_life) + '), Dragão: (' + dragon_life + ')');
    }
}
