var database, gameState=0, playerCount;
var form, player, game, allPlayers, car1, car2, car3, car4, cars;

function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database()
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount===4){
        gameState=1;
        game.update(1);
    }

    if(gameState===1){

        game.play();
    }
}
