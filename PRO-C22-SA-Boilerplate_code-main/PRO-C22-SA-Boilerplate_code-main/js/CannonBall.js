class CannonBall
{
    constructor(x,y)
    {
        var options = {
            isStatic: true
        }
        this.r = 30;
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("./assets/cannonball.png");
        this.trajetoria = []
        World.add(world, this.body);
    }
    
    display()
    {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
        console.log(pos.x);
        if(this.body.velocity.x>0 && pos.x>250)
        {
            var bolaPosicao = [pos.x,pos.y];
            this.trajetoria.push(bolaPosicao);
        }
        for(var i = 0; i < this.trajetoria.length; i++)
        {
            image(this.image, this.trajetoria[i][0], this.trajetoria[i][1], 5, 5)
        }
    }

    atirar()
    {
        var novoAngulo = canhao.angle - 30;
        novoAngulo = novoAngulo * (3.14/180);
        var velocity = p5.Vector.fromAngle(novoAngulo);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)});
    }

}












