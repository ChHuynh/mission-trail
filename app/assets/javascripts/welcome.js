var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'phaser-example', {preload: preload, create: create });

console.log(gon.gametext)


var content = [
    gon.gametext

];

var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 120;
var lineDelay = 400;


function preload(){
    game.load.image('image', gon.gameimage)
}


function create() {

    image = game.add.sprite(350, 50, 'image')
    text = game.add.text(350, 25, '', { font: "20px Berkelium", fill: "white" });

    nextLine();
}

function nextLine() {

    if (lineIndex === content.length)
    {
        return;
    }
    line = content[lineIndex].split(' ');
    wordIndex = 0;
    game.time.events.repeat(wordDelay, line.length, nextWord, this);
    lineIndex++;

}

function nextWord() {

    text.text = text.text.concat(line[wordIndex] + " ");

    wordIndex++;

    if (wordIndex === line.length)
    {

        text.text = text.text.concat("\n");

        game.time.events.add(lineDelay, nextLine, this);
    }

}