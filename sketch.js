var drops = [];
var dropCount = 500;

function setup(){

    createCanvas(900, 900);

    for(var i = 0; i < dropCount; i++){

        drops[i] = new Raindrop();

    }

}

function draw(){

    background("yellow");

    for(var i = 0; i < drops.length; i++){

        drops[i].display();
        drops[i].Rainfall();

    }

}