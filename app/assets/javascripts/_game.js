var game = new Phaser.Game(1000, 600, Phaser.CANVAS, 'phaser-example', {preload: preload, create: create });

console.log(gon.gametext)

// gon.gametext
// gon.gameimage
// gon.fomo
// gon.battery
// gon.time
// gon.money
// gon.option1
// gon.option2
// gon.option3
// gon.option4


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

    couple = game.add.sprite(300, 0, 'image')

    fomo = game.add.text(0, 20, "FOMO:" + gon.fomo, { font: "15px Arial", fill: "#19de65" })

    battery = game.add.text(0, 40, "Battery life:" + gon.battery, { font: "15px Arial", fill: "#19de65" })

    time = game.add.text(0, 60, "Time:" + gon.time, { font: "15px Arial", fill: "#19de65" })

    money = game.add.text(0, 80, "Money:" + gon.money, { font: "15px Arial", fill: "#19de65" })

    text = game.add.text(30, 450, '', { font: "15px Arial", fill: "#19de65" });

    nextLine();


}

function nextLine() {

    if (lineIndex === content.length)
    {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = content[lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    game.time.events.repeat(wordDelay, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

}

function nextWord() {

    //  Add the next word onto the text string, followed by a space
    text.text = text.text.concat(line[wordIndex] + " ");

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex === line.length)
    {
        //  Add a carriage return
        text.text = text.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.events.add(lineDelay, nextLine, this);
    }

}