
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Fighter{
    constructor (name, health, strength, defense){
        this.name = name;
        this.health = 10;
        this.strength = randomNum(5, 10);
        this.defense = randomNum(5, 10);
    }
    attack (enemy) {
       const damage = this.strength - enemy.defense > 0 ? this.strength - enemy.defense : 1;
       console.log(`${this.name} did ${damage} damage to ${enemy.name} who is left with ${enemy.health -= damage} health`)

    }
}
const Fighter1 = new Fighter('Brock the Rock')
const Fighter2 = new Fighter('Don the Bomb')

function battle(player1, player2){
    while (player1.health > 0 && player2.health > 0) {
        if (player2.health > 0){
            player2.attack(player1)
        }
        if (player1.health > 0){
            player1.attack(player2)
        }
    }
    console.log(`Winner is ${player1.health > 0 ? player1.name : player2.name}`)
}

battle(Fighter1, Fighter2)
