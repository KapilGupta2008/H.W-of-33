class Snow 
{
    constructor(x,y)
    {
        var option ={
            restitution : 0.1,
            friction  : 0.002
    }
    this.body=Bodies.circle(x,y,5,this.option)
    World.add(world,this.body)
    this.image = loadImage("snow5.webp");
    this.radius=5;
    }

    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

    update()
    {
        if(this.body.position.y > 700)
        {
            Matter.Body.setPosition(this.body,{x:random(0,750), y:random(-10,0)});
        }
    }
}