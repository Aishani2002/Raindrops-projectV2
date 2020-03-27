class Raindrop{

    constructor(){

        this.x = random(width);
        this.y = random(-500, 500);
        this.z = random(0, 20);
        this.len = map(this.z, 0, 20, 10, 20);
        this.yspeed = map(this.z, 0, 20, 1, 20);

    }

    Rainfall(){

        this.y = this.y + this.yspeed;
        this.grav = map(this.z, 0, 20, 0, 0.2);
        this.yspeed = this.yspeed + this.grav;

        if(this.y > height){

            this.y = random(-200, -100);
            this.yspeed = map(this.z, 0, 20, 4, 10);   
    
        }
    
    }

    display(){

        var thickRain = map(this.z, 0, 20, 1, 3);
        strokeWeight(thickRain);
        stroke("purple");
        line(this.x, this.y, this.x, this.y + 10);

    }
   
}